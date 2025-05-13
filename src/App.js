// Updated App.js with diff viewer for resume changes
import React, { useState } from "react";
import JDInput from "./components/JDInput";
import CoverLetter from "./components/CoverLetter";
import ColdEmail from "./components/ColdEmail";
import ResumeDiffViewer from "./components/ResumeDiffViewer";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("resume");
  const [jobDescription, setJobDescription] = useState("");
  const [originalResume, setOriginalResume] = useState("");
  const [updatedResume, setUpdatedResume] = useState("");
  const [originalLatex, setOriginalLatex] = useState("");
  const [updatedLatex, setUpdatedLatex] = useState("");

  return (
    <div className="app-container">
      <JDInput />
    </div>
  );
}

export default App;
