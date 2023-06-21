import React from 'react';
import questions from './questions';



// this file contains core backend functionality


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

    // the final screen shows all points accumulated for testing purposes.
    // please change it to only show top college point totals or something
    return (
        <div>
            {showScore ? (
                <div>
                    <h2>Quiz Results</h2>
                    <h3>collegeARTSCI   : {scores.collegeARTSCI}</h3>
                    <h3>collegeBA       : {scores.collegeBA}</h3>
                    <h3>collegeEDU      : {scores.collegeEDU}</h3>
                    <h4>collegeCOM      : {scores.collegeCOM}</h4>
                    <h5>collegeSCITECH  : {scores.collegeSCITECH}</h5>
                    <h6>collegePUBLIC   : {scores.collegePUBLIC}</h6>
                </div>
            ) : (
                // handles displaying buttons and the current question. 
                // pulls questions from questions.js
                <div>
                    <h2>{questions[currentQuestion].questionText}</h2>
                    {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                        <button
                            key={index}
                            onClick={() => handleAnswerButtonClick(answerOption.scores)}
                        >
                            {answerOption.answerText}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Quiz;