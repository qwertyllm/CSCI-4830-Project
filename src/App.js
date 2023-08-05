import React from "react";
import Quiz from "./quiz";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "./AdminLogin";
import AdminBackend from "./AdminBackend";

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
