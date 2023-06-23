// this file contains core backend functionality


import React from 'react';
import questions from './questions';

function Quiz() {
    const [currentQuestion, setCurrentQuestion] = React.useState(0);
    const [showScore, setShowScore] = React.useState(false);
    // constants for 'points' of different college
    const [scores, setScores] = React.useState({
        collegeARTSCI: 0,
        collegeBA: 0,
        collegeEDU: 0,
        collegeCOM: 0,
        collegeSCITECH: 0,
        collegePUBLIC: 0,
    });

    // reads button presses and updates scores as needed.
    const handleAnswerButtonClick = (scores) => {
        setScores((prevScores) => ({

            collegeARTSCI: prevScores.collegeARTSCI + scores.collegeARTSCI,
            collegeBA: prevScores.collegeBA + scores.collegeBA,
            collegeEDU: prevScores.collegeEDU + scores.collegeEDU,
            collegeCOM: prevScores.collegeCOM + scores.collegeCOM,
            collegeSCITECH: prevScores.collegeSCITECH + scores.collegeSCITECH,
            collegePUBLIC: prevScores.collegePUBLIC + scores.collegePUBLIC,


        }));
        // advances the question if there are more questions in question.js to go through
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        // otherwise goes to the end screen, showScore    
        } else {
            setShowScore(true);
        }
    };

    // finds the colleges that have the max value and returns them
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

    // the final screen shows all points accumulated for testing purposes.
    return (
        <div className="question-container">

            {showScore ? (
                
                <div className="final-result-container">
                    <h2>Quiz Results</h2>
                    <h3>Best Fits: {[bestFits(scores)]}</h3>
                    <br></br>
                </div>

            ) : (
                // handles displaying buttons and the current question. 
                // pulls questions from questions.js
                <div className="question-card">
                    <h2><div className="question-number">Question {currentQuestion + 1} of  {questions.length}</div></h2>
                    <h2>{questions[currentQuestion].questionText}</h2>
                    <div className="answer-container">
                    {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                        <button
                            key={index}
                            onClick={() => handleAnswerButtonClick(answerOption.scores)}
                        >
                            {answerOption.answerText}
                        </button>
                    ))}
                    </div>
                </div>
            )}

        </div>
    );
}

export default Quiz;