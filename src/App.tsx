import React from "react";
import "./App.css";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Projects from "./pages/Projects";
import Quote from "./pages/Quote";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="projects" element={<Projects />} />
          <Route path="quote" element={<Quote />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
