import React from "react";
import Quiz from "./quiz";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "./AdminLogin";
import AdminBackend from "./AdminBackend";

/**
 * App: Main application for the College Degree Helper website
 *
 * We use React Routes to handle the transporting the user to different pages.
 *
 * The pages we have are quiz, adminlogin, and adminbackend.
 *
 * The Route path states that for the root path "/" we redirect the user to the Quiz component, and "/admin/login" for the admin login component
 * and "/admin/backend" component for the backend, to which the admin can change the questions, answer options, and reallocate points for users
 * on the local network.
 *
 * @returns {React.Element} The rendered component
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
