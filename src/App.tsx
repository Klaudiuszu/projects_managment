import React, { useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomeContainer from "./components/Dashboard/Home/HomeContainer";
import LoginFormContainer from "./components/Login/components/LoginFormContainer";



function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginFormContainer />} />
        <Route path="/Home" element={<HomeContainer />} />
      </Routes>
    </Router>
  );
}

export default App;
