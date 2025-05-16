// JDInput.js
import React, { useState } from "react";
import {
  buildGeminiPrompt,
  resumeTemplate,
  coverLetterTemplate,
  coldEmailTemplate,
} from "../utils/promptBuilder";
import { buildGeminiPromptForJD } from "../utils/promptBuilder";

import { callGeminiAPIforJD } from "../utils/apiHandler";
import { callGeminiAPI } from "../utils/apiHandler";
import "../CSS/JDInput.css";

import { useNavigate } from "react-router-dom";

function JDInput({ onJDUpdate }) {
  const [jobDesc, setJobDesc] = useState("");
  const [loading, setLoading] = useState(false);
  const [summaryLatex, setSummaryLatex] = useState("");
  const [skillsLatex, setSkillsLatex] = useState("");
  const [metlifeLatex, setMetlifeLatex] = useState("");
  const [adonsLatex, setAdonsLatex] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [coldEmail, setColdEmail] = useState("");
  const [FinalResumeLatex, setFinalResumeLatex] = useState("");

  const [showModal, setShowModal] = useState(false); // Controls popup visibility
  const [latexResume, setLatexResume] = useState(""); // Stores pasted LaTeX resume

  const navigate = useNavigate();

  const [jobResult, setJobResult] = useState("");
  const [showJobModal, setShowJobModal] = useState(false);

  const handleJD = async () => {
    if (!jobDesc.trim()) return;
    setLoading(true);
    if (onJDUpdate) onJDUpdate(jobDesc);

    const prompt = buildGeminiPromptForJD({
      jobDescription: jobDesc,
      resumeTemplate: resumeTemplate.full,
    });

    const result = await callGeminiAPIforJD(prompt);

    setJobResult(result.result || "");
    setLoading(false);
    setShowJobModal(true);
    // setJobModal(true);
  };

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
    setFinalResumeLatex(result.FinalResumeLatex || "");
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
            onClick={handleJD}
            disabled={loading}
          >
            {loading ? "Checking Job..." : "Job Matching/Unmatching"}
          </button>
          {jobResult && (
            <div className="overlay">
              <div className="modal job-analysis-modal">
                <button className="close-btn" onClick={() => setJobResult("")}>
                  ×
                </button>
                <h2>🧠 Job Compatibility Analysis</h2>
                <div className="modal-content">
                  {jobResult.split(/\*\*(.*?)\*\*/g).map((chunk, index) =>
                    index % 2 === 1 ? (
                      <h4 key={index} className="highlight-heading">
                        {chunk}
                      </h4>
                    ) : (
                      <p key={index}>{chunk}</p>
                    )
                  )}
                </div>
              </div>
            </div>
          )}

          <button
            className="generate-btn"
            onClick={handleGenerate}
            disabled={loading}
          >
            {loading ? "Generating..." : "Generate Tailored Content"}
          </button>
          <button
            style={{
              marginTop: "1rem",
              backgroundColor: "#004aad",
              color: "white",
              padding: "0.5rem 1rem",
              border: "none",
              borderRadius: "4px",
            }}
            onClick={() => navigate("/ats-analysis")}
          >
            🔍 Compare Resume with JD (ATS Score)
          </button>

          <div className="mini-grid">
            {renderBox("Final Resume", FinalResumeLatex)}
            {renderBox("Summary", summaryLatex)}
            {renderBox("Tech Skills", skillsLatex)}
            {renderBox("Met Life Work Exp", `${metlifeLatex}`)}
            {/* {renderBox("Work Exp", `${metlifeLatex}\n\n${adonsLatex}`)} */}
            {renderBox("Adons Work Exp", `${adonsLatex}`)}
          </div>
        </div>

        <div className="right-panel">
          {renderBox("CoverLetter For Given Job", coverLetter)}
          {renderBox("ColdMail For Given Job", coldEmail)}
        </div>
      </div>

      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              background: "white",
              padding: "2rem",
              borderRadius: "10px",
              width: "80%",
              maxWidth: "700px",
            }}
          >
            <h2>📄 Paste Your Full LaTeX Resume</h2>
            <textarea
              rows="12"
              value={latexResume}
              onChange={(e) => setLatexResume(e.target.value)}
              placeholder="Paste your full LaTeX resume code here..."
              style={{
                width: "90%",
                padding: "1rem",
                marginTop: "1rem",
                background: "#f1f1f1",
                border: "1px solid #ccc",
                borderRadius: "6px",
                fontFamily: "monospace",
              }}
            />
            <div style={{ marginTop: "1rem", textAlign: "right" }}>
              <button
                onClick={() => setShowModal(false)}
                style={{
                  marginRight: "1rem",
                  background: "#ccc",
                  padding: "0.5rem 1rem",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  // 🚀 Trigger API call in next step
                  console.log("Submitted Resume:", latexResume);
                  setShowModal(false);
                }}
                style={{
                  background: "#0077cc",
                  color: "white",
                  padding: "0.5rem 1.2rem",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Submit for Comparison
              </button>
            </div>
          </div>
        </div>
      )}
      {showJobModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1100,
          }}
        >
          <div
            style={{
              background: "white",
              padding: "2rem",
              borderRadius: "10px",
              width: "90%",
              maxWidth: "800px",
              maxHeight: "80vh",
              overflowY: "auto",
            }}
          >
            <h2>📋 Job Compatibility Analysis</h2>
            <div
              style={{
                whiteSpace: "pre-wrap",
                background: "#f5f5f5",
                padding: "1rem",
                borderRadius: "8px",
                fontFamily: "monospace",
                marginTop: "1rem",
              }}
            >
              {jobResult}
            </div>
            <div style={{ marginTop: "1rem", textAlign: "right" }}>
              <button
                onClick={() => setShowJobModal(false)}
                style={{
                  background: "#0077cc",
                  color: "white",
                  padding: "0.5rem 1rem",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default JDInput;
