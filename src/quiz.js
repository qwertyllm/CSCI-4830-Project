import React, { useEffect, useState } from 'react';
import axios from 'axios';

/**
 * Quiz Component - Renders a quiz interface for users to participate in.
 *
 * The Quiz component fetches a set of questions from the server and presents them to the user one by one.
 * Users can select answers, and their selections are scored according to predefined criteria. The scores
 * are accumulated for different categories (e.g., collegeARTSCI, collegeBA, etc.), and the best-fitting
 * categories are presented to the user at the end of the quiz.
 *
 * Main Functionalities:
 * - Fetches questions from the server using Axios and stores them in the state.
 * - Manages the current question index and the user's scores across different categories.
 * - Handles user's answer selections and updates the scores accordingly.
 * - Determines the best-fitting categories based on the final scores and displays the results.
 *
 * State Variables:
 * - questions: An array of questions fetched from the server.
 * - currentQuestion: The index of the current question being displayed.
 * - showScore: A boolean flag to control whether to show the quiz questions or the final results.
 * - scores: An object containing the accumulated scores for different categories.
 *
 * @returns {React.Element} The rendered quiz interface, including the questions, answer options, and final results.
 */
function Quiz() {
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const [scores, updateScores] = useState({
        collegeARTSCI: 0,
        collegeBA: 0,
        collegeEDU: 0,
        collegeCOM: 0,
        collegeSCITECH: 0,
        collegePUBLIC: 0
    });

    useEffect(() => {
        axios.get('http://localhost:3001/api/questions')
            .then(response => {
                setQuestions(response.data);
            })
            .catch(error => {
                console.error('Something went wrong!', error);
            });
    }, []);

    const handleAnswerButtonClick = (index) => {
        const scoreKeys = Object.keys(scores); // ["collegeARTSCI", "collegeBA", ...]
    
        updateScores(prevScores => {
            const newScores = { ...prevScores };
            newScores[scoreKeys[index]] += questions[currentQuestion].scores[index];
            return newScores;
        });
    
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    const bestFits = (scores) => {
        let maxValue = 0;
        for (const [key, value] of Object.entries(scores)) {
            maxValue = Math.max(maxValue, value)
        }
        let bestFits = [];
        for (const [key, value] of Object.entries(scores)) {
            if (maxValue == value) {
                bestFits.push(key);
            }
        }
        return bestFits.join(' and ');
    }

    return (
        <div className="question-container">
            {showScore ? (
                <div className="final-result-container">
                    <h2>Quiz Results</h2>
                    <h3>Best Fits: {[bestFits(scores)]}</h3>
                </div>
            ) : (
                <div className="question-card">
                    {questions.length > 0 ? (
                        <>
                            <h2><div className="question-number">Question {currentQuestion + 1} of {questions.length}</div></h2>
                            <h2>{questions[currentQuestion].questionText}</h2>
                            <div className="answer-container">
                                {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                                    <button
                                    key={index}
                                    onClick={() => handleAnswerButtonClick(index)}
                                >
                                    {answerOption}
                                </button>
                                ))}
                            </div>
                        </>
                    ) : (
                        <p>Loading questions...</p>
                    )}
                </div>
            )}
        </div>
    );
}

export default Quiz;