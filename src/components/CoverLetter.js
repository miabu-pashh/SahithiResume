// // CoverLetter.js
// import React, { useState, useEffect } from "react";
// import { callGeminiAPI } from "../utils/apiHandler";
// import { buildCoverLetterPrompt } from "../utils/promptBuilder";

// const DEFAULT_SUMMARY = `Software Engineer with 4+ years of experience in Java Full Stack Development (Spring Boot, React/Angular), cloud deployment (AWS), and building scalable enterprise systems across BFSI, Healthcare, and eCommerce sectors.`;

// function CoverLetter({ jobDescription }) {
//   const [coverLetter, setCoverLetter] = useState("");
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (!jobDescription.trim()) return;
//     setLoading(true);
//     const prompt = buildCoverLetterPrompt({
//       jobDescription,
//       resumeSummary: DEFAULT_SUMMARY,
//     });
//     callGeminiAPI(prompt).then((result) => {
//       setCoverLetter(result);
//       setLoading(false);
//     });
//   }, [jobDescription]);

//   const handleCopy = () => {
//     navigator.clipboard.writeText(coverLetter);
//     alert("Cover letter copied to clipboard!");
//   };

//   const handleDownload = () => {
//     const blob = new Blob([coverLetter], { type: "text/plain" });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = "cover_letter.txt";
//     a.click();
//     URL.revokeObjectURL(url);
//   };

//   return (
//     <div className="card">
//       <h2>Generated Cover Letter</h2>
//       {loading ? (
//         <p>Generating cover letter...</p>
//       ) : (
//         <>
//           <textarea rows="18" value={coverLetter} readOnly />
//           <div className="button-row">
//             <button onClick={handleCopy}>Copy</button>
//             <button onClick={handleDownload}>Download</button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default CoverLetter;
