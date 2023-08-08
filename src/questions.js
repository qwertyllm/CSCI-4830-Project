/**
 * Questions Module - Stores questions from questions.json into an array, then exports this array to server.js, for the server to be able to manipulate
 *
 * @module questions
 * @type {Array<Object>} An array of question objects for the quiz.
 */
import data from "./questions.json";

const questions = [...data];

export default questions;