import React, { useEffect, useState } from "react";
import axios from "axios";

/**
 * AdminBackend: Interface for administrators to change quiz questions, answer options, and update the decision tree.
 * 
 * Specifically, the admin can perform the actions of viewing, editing, saving, and updating content that the user interacts with. 
 *
 * We use axios to perform get and put requests. We obtain the question array, the index of questions, and the question to be edited.
 * 
 * @returns {React.Element} The rendered component.
 */
function AdminBackend() {
  const [questions, setQuestions] = useState([]); //questions array
  const [editingIndex, setEditingIndex] = useState(null);//index of questions
  const [editingQuestion, setEditingQuestion] = useState({//question to be edited
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
        .catch((error) => console.log(error));//if successful admin login, ability to change questions, access granted
    }
  }, []);

  const handleEditClick = (index) => {
    setEditingIndex(index);
    setEditingQuestion({ ...questions[index] });
  };

  const handleQuestionChange = (event) => {
    setEditingQuestion(prev => ({ ...prev, questionText: event.target.value }));
  };

  const handleAnswerChange = (idx) => (event) => {
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
                  onChange={handleAnswerChange(idx)}
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