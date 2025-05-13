// JDInput.js
import React, { useState } from "react";
import {
  buildGeminiPrompt,
  resumeTemplate,
  coverLetterTemplate,
  coldEmailTemplate,
} from "../utils/promptBuilder";
import { callGeminiAPI } from "../utils/apiHandler";
import "../CSS/JDInput.css";

function JDInput({ onJDUpdate }) {
  const [jobDesc, setJobDesc] = useState("");
  const [loading, setLoading] = useState(false);
  const [summaryLatex, setSummaryLatex] = useState("");
  const [skillsLatex, setSkillsLatex] = useState("");
  const [metlifeLatex, setMetlifeLatex] = useState("");
  const [adonsLatex, setAdonsLatex] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [coldEmail, setColdEmail] = useState("");

  const handleGenerate = async () => {
    if (!jobDesc.trim()) return;
    setLoading(true);
    if (onJDUpdate) onJDUpdate(jobDesc);

    const prompt = buildGeminiPrompt({
      jobDescription: jobDesc,
      resumeTemplate: resumeTemplate.full,
      coverLetterTemplate,
      coldEmailTemplate,
    });

    const result = await callGeminiAPI(prompt);

    setSummaryLatex(result.summaryLatex || "");
    setSkillsLatex(result.skillsLatex || "");
    setMetlifeLatex(result.metlifeLatex || "");
    setAdonsLatex(result.adonsLatex || "");
    setCoverLetter(result.coverLetter || "");
    setColdEmail(result.coldEmail || "");

    setLoading(false);
  };

  const renderBox = (title, content) => (
    <div className="content-box">
      <h3>{title}</h3>
      <textarea rows="8" value={content} readOnly className="textarea" />
      <button
        className="copy-btn"
        onClick={() => {
          navigator.clipboard.writeText(content);
        }}
      >
        Copy the text
      </button>
    </div>
  );

  return (
    <div className="jd-wrapper">
      <header className="header">
        <h1>ResuMe</h1>
        <p>
          <strong>Resume Update | Cover Letter | Cold Mail</strong>
        </p>
      </header>

      <div className="main">
        <div className="left-panel">
          <h2>Job Description</h2>
          <textarea
            className="textarea jd-input"
            rows="6"
            placeholder="Paste job description here..."
            value={jobDesc}
            onChange={(e) => setJobDesc(e.target.value)}
          />

          <button
            className="generate-btn"
            onClick={handleGenerate}
            disabled={loading}
          >
            {loading ? "Generating..." : "Generate Tailored Content"}
          </button>

          <div className="mini-grid">
            {renderBox("Summary", summaryLatex)}
            {renderBox("Tech Skills", skillsLatex)}
            {renderBox("Work Exp", `${metlifeLatex}\n\n${adonsLatex}`)}
          </div>
        </div>

        <div className="right-panel">
          {renderBox("CoverLetter For Given Job", coverLetter)}
          {renderBox("ColdMail For Given Job", coldEmail)}
        </div>
      </div>
    </div>
  );
}

export default JDInput;
