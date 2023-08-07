import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/**
 * Entry Point for the React Application - Initializes and renders the main App component.
 *
 * This file serves as the entry point for the React application. It imports the main App component
 * and renders it inside a root element obtained from the DOM. The application is rendered using
 * React's Concurrent Mode, which enables more responsive rendering.
 *
 * Additionally, this file includes a call to the `reportWebVitals` function, which can be used to
 * measure and report on various web vital statistics related to the performance of the application.
 *
 * Main Functionalities:
 * - Obtains the root DOM element where the React application will be mounted.
 * - Creates a root React render container using `ReactDOM.createRoot`.
 * - Renders the App component inside the root element, wrapped in a `React.StrictMode` container.
 * - Optionally logs or reports web vital statistics using the `reportWebVitals` function.
 *
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
