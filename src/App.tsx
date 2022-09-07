import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Dashboard/Home/Home";
import Login from "./components/Login/Login";

import Dashboard from "./components/Dashboard/Dashboard";
import Preferences from "./components/Dashboard/Preferences/Preferences";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
