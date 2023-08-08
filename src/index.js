import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/**
 * Root: Initializes and renders the main App component.
 * 
 * It imports the main App component and renders its using ReactDOM.
 * 
 * reportWebVitals() provides performance information
 *
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
