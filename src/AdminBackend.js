import React, { useEffect, useState } from "react";
import axios from "axios";

function AdminBackend() {
  const [questions, setQuestions] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingQuestion, setEditingQuestion] = useState({
    questionText: "",
    answerOptions: [],
    scores: []
  });

  useEffect(() => {
    if (localStorage.getItem("isAdmin") !== "true") {
      window.location.href = "/admin/login";
    } else {
      axios
        .get("http://localhost:3001/api/questions")
        .then((response) => setQuestions(response.data))
        .catch((error) => console.log(error));
    }
  }, []);

  const handleEditClick = (index) => {
    setEditingIndex(index);
    setEditingQuestion({ ...questions[index] });
  };

  const handleQuestionChange = (event) => {
    setEditingQuestion(prev => ({ ...prev, questionText: event.target.value }));
  };

  const handleOptionChange = (idx) => (event) => {
    const options = [...editingQuestion.answerOptions];
    options[idx] = event.target.value;
    setEditingQuestion(prev => ({ ...prev, answerOptions: options }));
  };

  const handleScoreChange = (idx) => (event) => {
    const scores = [...editingQuestion.scores];
    scores[idx] = Number(event.target.value);
    setEditingQuestion(prev => ({ ...prev, scores }));
  };

  const handleSaveClick = () => {
    axios
      .put(`http://localhost:3001/api/questions/${editingIndex}`, editingQuestion)
      .then((response) => {
        const updatedQuestions = [...questions];
        updatedQuestions[editingIndex] = editingQuestion;
        setQuestions(updatedQuestions);
        setEditingIndex(null);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1>Admin Backend</h1>
      {questions.map((question, index) => (
        <div key={index}>
          {editingIndex === index ? (
            <>
              <input
                type="text"
                value={editingQuestion.questionText}
                onChange={handleQuestionChange}
              />
              {editingQuestion.answerOptions.map((option, idx) => (
                <input
                  type="text"
                  value={option}
                  onChange={handleOptionChange(idx)}
                  key={idx}
                />
              ))}
              {editingQuestion.scores.map((score, idx) => (
                <input
                  type="number"
                  value={score}
                  onChange={handleScoreChange(idx)}
                  key={idx}
                />
              ))}
              <button onClick={handleSaveClick}>Save</button>
            </>
          ) : (
            <>
              <p>{question.questionText}</p>
              {question.answerOptions.join(", ")}
              <br/>
              {question.scores.join(", ")}
              <button onClick={() => handleEditClick(index)}>Edit</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default AdminBackend;