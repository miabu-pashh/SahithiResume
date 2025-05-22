// Updated App.js with diff viewer for resume changes
import React, { useState } from "react";
import JDInput from "./components/JDInput";
import ResumeDiffViewer from "./components/ResumeDiffViewer";
import "./App.css";
import ATSAnalysis from "./components/ATSAnalysis";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [activeTab, setActiveTab] = useState("resume");
  const [jobDescription, setJobDescription] = useState("");
  const [originalResume, setOriginalResume] = useState("");
  const [updatedResume, setUpdatedResume] = useState("");
  const [originalLatex, setOriginalLatex] = useState("");
  const [updatedLatex, setUpdatedLatex] = useState("");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<JDInput onJDUpdate={setJobDescription} />} />
        <Route
          path="/ats-analysis"
          element={<ATSAnalysis jobDesc={jobDescription} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
