/**
 * Server Module - Express server for handling quiz-related API requests.
 *
 * This module sets up an Express server that provides endpoints for fetching and updating quiz questions.
 * It uses CORS middleware to enable cross-origin requests, allowing the frontend to communicate with the server.
 *
 * Endpoints:
 * 1. GET "/api/questions" - Fetches all the questions from the questions.json file and returns them as a JSON array.
 * 2. PUT "/api/questions/:index" - Updates a specific question by index. Requires the questionText, answerOptions, and scores in the request body.
 *    Returns a 400 error if any required fields are missing, and a 404 error if the question index is not found.
 *
 * The server listens on port 3001 and logs a message to the console when it's running.
 *
 * @module server
 * @requires express
 * @requires cors
 */
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

let questions = require('./questions.json');

app.get('/api/questions', (req, res) => {
  res.json(questions);
});

app.put('/api/questions/:index', (req, res) => {
  const { index } = req.params;
  const { questionText, answerOptions, scores } = req.body;

  if(!questionText || !answerOptions || !scores) {
    return res.status(400).json({ error: 'Question, answer options and scores are required.' });
  }

  if(index >= 0 && index < questions.length) {
    questions[index].questionText = questionText;
    questions[index].answerOptions = answerOptions;
    questions[index].scores = scores;
    return res.json(questions[index]);
  } else {
    return res.status(404).json({ error: 'Question not found.' });
  }
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});