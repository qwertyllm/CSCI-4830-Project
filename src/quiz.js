import React, { useEffect, useState } from 'react';
import axios from 'axios';

/**
 * Quiz: The main component that renders the quiz interface.
 *
 * The Quiz component fetches a set of questions from the server, using the axios ibrary, and presents them to the user one by one.
 * 
 * Users can answer a quuestionnaire that leads them to the results page that contains 
 * the recommended college/major and a link to to read up on the college and major info, at the University of Nebraska at Omaha's website.
 * 
 * A decision tree is used to record answers.
 *
 * We have a simple handleAnswerButtonClick and bestFits function that handle what happens an answer option is clicked and what is displayed at the results page.
 * 
 * @returns {React.Element} The rendered quiz interface, questions, answer options, and final results.
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

    const collegeLinks = {
        collegeARTSCI: 'https://www.unomaha.edu/college-of-arts-and-sciences/index.php',
        collegeBA: 'https://www.unomaha.edu/college-of-business-administration/index.php';
        collegeEDU: 'https://www.unomaha.edu/college-of-education-health-and-human-sciences/index.php',
        collegeCOM: 'https://www.unomaha.edu/college-of-communication-fine-arts-and-media/communication/index.php',
        collegeSCITECH: 'https://www.unomaha.edu/college-of-information-science-and-technology/index.php',
        collegePUBLIC: 'https://www.unomaha.edu/college-of-public-affairs-and-community-service/index.php',
    }

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
            const newScores = { ...prevScores }; // Updating the scores when an answer option is clicked
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
                bestFits.push({ category: key, link: collegeLinks[key] });            }
        }
        return bestFits;
    }

    return (
        <div className="question-container">
            {showScore ? (
                <div className="final-result-container">
                    <h2>Quiz Results</h2>
                    <h3>Best Fits: {[bestFits(scores)]}</h3>
                    {bestFits(scores).map((fit, index) => (
                        <p key={index}><a href={fit.link} target="_blank">{fit.category}</a></p>
                    ))}
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