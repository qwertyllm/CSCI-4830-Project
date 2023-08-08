/**
 * Server: A simple express server for fetching question data and updating the questionnaire.
 *
 * GET "/api/questions": Fetches all the questions from questions.json.
 * PUT "/api/questions/:index": Updates the questions by obtaining the index of their array element ":index" and creating an object that stores
 * const { questionText, answerOptions, scores } = req.body; to be updated.
 *
 * The server listens on port 3001.
 *
 * @module server
 * @requires express
 * @requires cors
 */
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

let questions = require("./questions.json");

app.get("/api/questions", (req, res) => {
  res.json(questions);
});

app.put("/api/questions/:index", (req, res) => {
  const { index } = req.params;
  const { questionText, answerOptions, scores } = req.body;

  if (!questionText || !answerOptions || !scores) {
    return res
      .status(400)
      .json({ error: "Question, answer options and scores are required." });
  }

  if (index >= 0 && index < questions.length) {
    questions[index].questionText = questionText;
    questions[index].answerOptions = answerOptions;
    questions[index].scores = scores;
    return res.json(questions[index]);
  } else {
    return res.status(404).json({ error: "Question not found." });
  }
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
