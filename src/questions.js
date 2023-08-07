/**
 * Questions Module - Exports an array of questions for the quiz.
 *
 * This module imports questions from a JSON file (questions.json) and exports them as an array.
 * The questions are structured according to the requirements of the quiz, and they can be used
 * by other components, such as the Quiz component, to render the quiz interface.
 *
 * The questions.json file should contain a valid JSON array of question objects, each with the
 * necessary properties for the quiz (e.g., questionText, answerOptions, scores, etc.).
 *
 * @module questions
 * @type {Array<Object>} An array of question objects for the quiz.
 */
import data from "./questions.json";

const questions = [...data];

export default questions;