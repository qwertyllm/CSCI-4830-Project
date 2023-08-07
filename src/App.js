import React from "react";
import Quiz from "./quiz";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "./AdminLogin";
import AdminBackend from "./AdminBackend";

/**
 * App Component - Main application component for the College Degree Helper.
 *
 * The App component is responsible for defining the main structure of the application
 * and setting up the routing using React Router. The routing is essential for navigating
 * between different parts of the application and providing a seamless user experience.
 *
 * Routes:
 * 1. "/" - The root path directs users to the main Quiz component, where they can participate
 *    in a quiz to determine suitable college degrees.
 * 2. "/admin/login" - This path leads to the AdminLogin component, where administrators can
 *    log in to access backend functionalities.
 * 3. "/admin/backend" - This path leads to the AdminBackend component, accessible only to
 *    administrators, where they can manage various backend operations.
 *
 * The use of React Router allows for dynamic navigation without the need for page reloads,
 * enhancing the overall responsiveness and user experience of the application.
 * @returns {React.Element} The rendered component, including the Router and defined Routes.
 */
function App() {
  return (
    <Router>
      <h1>College Degree Helper</h1>
      <Routes>
        <Route path="/" element={<Quiz />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/backend" element={<AdminBackend />} />
      </Routes>
    </Router>
  );
}

export default App;
