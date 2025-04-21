import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./screens/Menu/Menu";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Menu />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
