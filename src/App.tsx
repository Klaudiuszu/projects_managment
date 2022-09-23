import React, { useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Dashboard/Home/Home";
import LoginFormContainer from "./components/Login/components/LoginFormContainer";



function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginFormContainer />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
