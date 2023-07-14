// this file contains core backend functionality
import React from 'react';
import questions from './questions';

function Quiz() {
    const [currentQuestion, setCurrentQuestion] = React.useState(0);
    const [showScore, setShowScore] = React.useState(false);
    // constants for 'points' of different college
    const [scores, updateScores] = React.useState({
        collegeARTSCI: 0,
        collegeBA: 0,
        collegeEDU: 0,
        collegeCOM: 0,
        collegeSCITECH: 0,
        collegePUBLIC: 0
    })

    // reads button presses and updates scores as needed.
    const handleAnswerButtonClick = (scores, index) => {
        if (index === 0) {
            updateScores((prevScores) => ({
                collegeARTSCI: prevScores.collegeARTSCI + scores[0],
                collegeBA: prevScores.collegeBA,
                collegeEDU: prevScores.collegeEDU,
                collegeCOM: prevScores.collegeCOM,
                collegeSCITECH: prevScores.collegeSCITECH,
                collegePUBLIC: prevScores.collegePUBLIC
            }));
        } else if (index === 1) {
            updateScores((prevScores) => ({
                collegeARTSCI: prevScores.collegeARTSCI,
                collegeBA: prevScores.collegeBA  + scores[1],
                collegeEDU: prevScores.collegeEDU,
                collegeCOM: prevScores.collegeCOM,
                collegeSCITECH: prevScores.collegeSCITECH,
                collegePUBLIC: prevScores.collegePUBLIC
            }));
        } else if (index === 2) {
            updateScores((prevScores) => ({
                collegeARTSCI: prevScores.collegeARTSCI,
                collegeBA: prevScores.collegeBA,
                collegeEDU: prevScores.collegeEDU + scores[2],
                collegeCOM: prevScores.collegeCOM,
                collegeSCITECH: prevScores.collegeSCITECH,
                collegePUBLIC: prevScores.collegePUBLIC
            }));
        } else if (index === 3) {
            updateScores((prevScores) => ({
                collegeARTSCI: prevScores.collegeARTSCI,
                collegeBA: prevScores.collegeBA,
                collegeEDU: prevScores.collegeEDU,
                collegeCOM: prevScores.collegeCOM + scores[3],
                collegeSCITECH: prevScores.collegeSCITECH,
                collegePUBLIC: prevScores.collegePUBLIC
            }));
        } else if (index === 4) {
            updateScores((prevScores) => ({
                collegeARTSCI: prevScores.collegeARTSCI,
                collegeBA: prevScores.collegeBA,
                collegeEDU: prevScores.collegeEDU,
                collegeCOM: prevScores.collegeCOM,
                collegeSCITECH: prevScores.collegeSCITECH + scores[4],
                collegePUBLIC: prevScores.collegePUBLIC
            }));
        } else if (index === 5) {
            updateScores((prevScores) => ({
                collegeARTSCI: prevScores.collegeARTSCI,
                collegeBA: prevScores.collegeBA,
                collegeEDU: prevScores.collegeEDU,
                collegeCOM: prevScores.collegeCOM,
                collegeSCITECH: prevScores.collegeSCITECH,
                collegePUBLIC: prevScores.collegePUBLIC  + scores[5]
            }));
        }



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
                    <h2><div className="question-number">Question {currentQuestion + 1} of {questions.length}</div></h2>
                    <h2>{questions[currentQuestion].questionText}</h2>
                    <div className="answer-container">
                        {questions[currentQuestion].answerOptions?.map((answerOption, index) => (
                            <button
                                key={index}
                                onClick={() => handleAnswerButtonClick(questions[currentQuestion].scores, index)}
                            >
                                {answerOption}
                            </button>
                        ))}
                    </div>
                </div>
            )}

        </div>
    );
}

export default Quiz;