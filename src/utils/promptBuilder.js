export function buildGeminiPrompt({
  jobDescription,
  resumeTemplate,
  coverLetterTemplate,
  coldEmailTemplate,
}) {
  return `
You are an expert LaTeX resume assistant and job application writer. Based on the job description and the provided resume template, your task is to generate tailored updates in LaTeX and professional communication materials.

===========================
🧾 CONTEXT:
===========================
This is the original LaTeX resume template:
\`\`\`latex
${resumeTemplate}
\`\`\`

This is the cover letter template:
\`\`\`
${coverLetterTemplate}
\`\`\`

This is the cold outreach email template:
\`\`\`
${coldEmailTemplate}
\`\`\`

===========================
📌 YOUR TASK:
===========================
Based on the job description below:

1. ✏️ Update the **Summary section**:
   - Keep the **first bullet point as-is** from the resume.
   - Replace the second and third bullet points with two new bullet points relevant to the job description.
   -Dont add education in professional summary.
   - Return valid LaTeX code for the entire \`\\begin{rSection}{Summary}...\` block.

2. 🛠 Update the **Technical Skills section**:
   - Just add the skills wich are mandator for the given job description.
   -When you add the new skills, try to remove the unwanted skills which are not relevant to the job description and make sure the total skills are same as before.
   - Return updated LaTeX code for the full \`\\begin{rSection}{Technical Skills}...\` block.

3. 🏢 Update **MetLife experience**:
--Use new strong unique action verbs without repeating the same verbs which are not present in my resume.
   -No buzz words add a quantitaive measure for the new bullet point.
   - Rewrite all bullet points based on job description.
   - Return the entire LaTeX block for MetLife with original heading and structure unchanged.

4. 🏢 Update **Adons Soft Tech experience**:
-Use new strong unique action verbs without repeating the same verbs which are not present in my resume.
   -No buzz words add a quantitaive measure for the new bullet point.
   - Rewrite all bullet points based on job description.
   - Return the full LaTeX block for Adons Soft Tech.

5. 📄 Generate a professional **cover letter** using the cover letter template, aligned with the job description and resume summary.

6. ✉️ Generate a personalized **cold email** to reach out to a recruiter, based on the cold email template and resume.

===========================
📝 OUTPUT FORMAT:
===========================
Respond ONLY with valid JSON.

All LaTeX content must:
- Be escaped using double backslashes (\\\\\\\\) for every LaTeX command.
- Replace apostrophes (\\\`\\\`) inside LaTeX text with \\\\textquotesingle{} to avoid JSON parse errors.

Example format:
\`\`\`json
{
  "summaryLatex": "Your LaTeX with escaped text like \\\\begin{itemize} and \\\\item ...",
  "skillsLatex": "Your LaTeX for skills section with \\\\begin{tabular}...",
  "metlifeLatex": "Your LaTeX block for MetLife experience with \\\\item ...",
  "adonsLatex": "Your LaTeX block for Adons Soft Tech experience...",
  "coverLetter": "Plain text cover letter.",
  "coldEmail": "Plain text cold email."
}
\`\`\`
===========================
💼 JOB DESCRIPTION:
===========================
${jobDescription}
  `.trim();
}

// / coverLetterTemplate.js
export const coverLetterTemplate = `
Dear [Hiring Manager's Name],

I am writing to express my interest in the [Job Title] position at [Company Name]. With my background in [brief summary of relevant experience or skills], I am confident that I can make meaningful contributions to your team.

Throughout my career, I have [mention one or two relevant accomplishments]. My technical proficiency in [mention relevant tools/technologies] and my ability to [mention soft skill or team contribution] have helped me consistently deliver high-impact results.

I am enthusiastic about the opportunity to work with [Company Name] and contribute to your innovative projects. I would welcome the chance to further discuss how my skills align with your needs.

Thank you for considering my application.

Sincerely,
Mahaboob Pasha Mohammad
`;

// coldEmailTemplate.js
export const coldEmailTemplate = `
Hi [Recruiter/HR Name],

I hope you're doing well. I came across your recent job posting for [Job Title] at [Company Name], and I wanted to express my keen interest.

With over 4 years of experience in Java Full Stack Development, working with technologies like React, Angular, Spring Boot, and AWS, I believe I can contribute effectively to your team.

I'd be thrilled to connect or learn more about the role. Please let me know if there's a good time to chat.

Thanks and best regards,
Mahaboob Pasha Mohammad
`;
// ✅ resumeTemplate.js
export const resumeTemplate = {
  full: `
\\documentclass{resume}
\\usepackage{hyperref}
\\urlstyle{same}
\\usepackage[left=0.3in,top=0.2in,right=0.3in,bottom=0.2in]{geometry}
\\newcommand{\\tab}[1]{\\hspace{.2667\\textwidth}\\rlap{#1}} 
\\newcommand{\\itab}[1]{\\hspace{0em}\\rlap{#1}}
\\renewcommand{\\namesize}{\\large}
\\usepackage{graphicx}
\\usepackage{enumitem}

\\begin{document}
\\name{\\textbf{Mahaboob Pasha Mohammad}}
\\address{Software Engineer \\ \\href{https://miabu-pashh.github.io/Portfolio-maibu/}{Website}}
\\address{Saint Louis, MO \\ +1 (314) 305 6056 \\ \\href{mailto:mahaboobpashamohammad1@gmail.com}{mahaboobpashamohammad1@gmail.com} \\ \\href{https://www.linkedin.com/in/mohammad-mahaboob-pasha-19ba58183/}{LinkedIn}}

\\vspace{-1em}
\\begin{rSection}{Summary}
\\begin{itemize}[leftmargin=*]
    \\item Software Engineer with expertise in Banking, HealthCare, and eCommerce sectors using Java Full Stack Development (React/Angular) with 4+ years of experience delivering robust and scalable software solutions.
\\end{itemize}
\\end{rSection}

\\vspace{-0.8em}
\\begin{rSection}{Technical Skills}
\\begin{tabular}{ @{} >{\\bfseries}l @{\\hspace{2ex}} l }
Languages & Core \\& Advanced Java, Java 8/11, Python, C, C++, Golang, SQL \\\\
Methodologies \\& OS & SDLC, Agile, Waterfall, Requirements Gathering, Linux, Windows, MacOS \\\\
Frameworks \\& IDEs & Spring (MVC, Boot, Security), Microservices, Hibernate, JPA, JSF, React.JS, Vue.JS, Node.JS, Eclipse, IntelliJ, VS Code \\\\
Web Technologies & HTML, CSS, JavaScript, TypeScript, Next.js, Bootstrap, jQuery, Ajax, JSON, XML \\\\
Cloud \\& Application Servers & Oracle Fusion ERP (exposure), AWS (VPC, EC2, S3, CloudFront, ELB), Azure, Tomcat, IBM WebSphere, Docker, Balena OS \\\\
Version Control \\& Tools & Git, GitHub, Maven, Gradle, Jira, Jenkins, JUnit, JMeter, CI/CD, Lucidchart, Visio \\\\
Databases \\& J2EE & MySQL, PostgreSQL, MongoDB, Oracle DB (exposure), Servlets, JSP, JSTL, JDBC, JavaBeans, JavaMail, Stored Procedures, SQL Triggers \\\\
\\end{tabular}
\\end{rSection}

\\vspace{-0.8em}
\\begin{rSection}{Experience}

\\textbf{Software Engineer} \\textbar{} MetLife \\textbar{} Missouri, USA \\hfill \\textbf{Aug 2024 -- Present}
\\begin{itemize}[leftmargin=*]
    \\item Implemented Agile methodologies, boosting team productivity by \\textbf{15\\%} and accelerating project delivery by \\textbf{20\\%}.
    \\item Engineered high-performance applications using Core Java, Spring Boot, and Microservices, improving scalability by \\textbf{30\\%} and reducing downtime by \\textbf{20\\%}.
    \\item Developed responsive front-end interfaces using React.js, Angular, HTML, CSS, and JavaScript, achieving \\textbf{98\\%} cross-browser compatibility. Deployed AWS-based applications, reducing infrastructure costs by \\textbf{20\\%}.
\\end{itemize}

\\vspace{-0.5em}
\\textbf{Software Engineer (Java)} \\textbar{} Nagarro Software Limited \\textbar{} India \\hfill \\textbf{Aug 2021 -- Dec 2022}
\\begin{itemize}[leftmargin=*]
    \\item Led BFSI team to implement REST APIs enabling real-time chat between React frontend and Java backend, improving app efficiency by \\textbf{75\\%}.
    \\item Collaborated on Siemens web portal using Mendix and Java, achieving a \\textbf{80\\%} reduction in development time and streamlined backend enhancements.
\\end{itemize}

\\vspace{-0.5em}
\\textbf{Software Engineer} \\textbar{} Adons Soft Tech \\textbar{} India \\hfill \\textbf{Jan 2020 -- Aug 2021}
\\begin{itemize}[leftmargin=*]
    \\item Led waterfall project workflows, achieving \\textbf{100\\%} on-time delivery and maintaining clear phase-gate reviews.
    \\item Developed high-performance backend systems using Core Java, Servlets, JSP, and JDBC, improving processing speed by \\textbf{45\\%}.
    \\item Designed responsive UIs using HTML, CSS, Bootstrap, and JavaScript, enhancing user experience and increasing traffic by \\textbf{20\\%}.
\\end{itemize}

\\vspace{-0.5em}
\\textbf{Co-Founder \\& Engineer} \\textbar{} Nithya Industries (Startup) \\textbar{} India \\hfill \\textbf{May 2021 -- Jan 2024}
\\begin{itemize}[leftmargin=*]
    \\item Spearheaded product design and marketing initiatives, launching \\textbf{5+} technical catalogues and campaigns, increasing retention by \\textbf{30\\%} and attracting clients from \\textbf{3+} countries.
\\end{itemize}

\\end{rSection}

\\vspace{-0.8em}
\\begin{rSection}{Achievements}
\\begin{itemize}[leftmargin=*]
    \\item Developed MVPs and POCs for \\textbf{5+} innovative software tools; ongoing research in scalable product solutions.
    \\item National Champions, Mega ATV Championship 2021.
\\end{itemize}
\\end{rSection}

\\vspace{-0.8em}
\\begin{rSection}{Education}
\\textbf{Master of Science in Computer Software Engineering} \\textbar{} Saint Louis University, Missouri, USA \\\\
\\textbf{Bachelor of Engineering in Mechanical Engineering} \\textbar{} GRIET, Telangana, India
\\end{rSection}

\\end{document}
`,
};

export function buildATSAnalysisPrompt({ jobDescription, resumeLatex }) {
  return `
You're an ATS (Applicant Tracking System) expert. Your job is to compare the job description and resume and return an analysis in structured JSON format.
  ============================
  🧾 RESUME (latex):
  ============================
  ${resumeLatex}
  ============================
  📌 JOB DESCRIPTION
  ============================
  ${jobDescription}
  ============================
  📌 YOUR TASK:
  ============================
  1.Analyze the resume and compare it against the job description.
  2.Identify the missing keywords, underrepresneted skills, or mismatched experience.
  3.Estimate a typical ATS (Applicant Tracking System ) score (out of 100)
  4.Suggest specific improvements to help better align the resume with job description.
  5.Provide a summary of the analysis and recommendations in a clear and concise manner.
  ============================
  ===========================
📝 OUTPUT FORMAT:
===========================
Respond ONLY with valid JSON in the following format:

\`\`\`json
{
  "atsScore": 75,
  "gaps": [
    "Years of experience is 4+, but JD requires 6.",
    "NGINX is not mentioned.",
    "Swagger missing from resume.",
    "Retail domain not highlighted."
  ],
  "improvements": [
    "Add NGINX to Web Technologies.",
    "Mention Swagger (OpenAPI) with REST APIs.",
    "Highlight any retail/eCommerce domain exposure.",
    "Include Docker/Kubernetes for containerization."
  ],
  "summary": "The resume has a strong foundation in Java full-stack development, but lacks domain-specific keywords and some tools. By addressing these gaps, the ATS match can significantly improve."
}
\`\`\`
`.trim();
}

export function buildGeminiPromptForJD({ jobDescription, resumeLatex }) {
  return `
  You are an expert in analysing the given Job description. Make sure you give the best respose by considering the given below points.

  ============================
  🧾 RESUME (latex)   :
  ============================
  ${resumeLatex}
  ============================
  📌 JOB DESCRIPTION
  ============================
  ${jobDescription}
  ============================
  📌 YOUR TASK:
  1. Identify the key skills and qualifications required for the job. If the Job is above 5 years of experience,Then this is not suitable to apply for this job.
  2. Highlight any specific technologies, tools, or methodologies mentioned in the job description. You have the resume latex code, so you can check the resume and see if the resume has the same skills or not. If the Resume has most of the skills and lacks only few skills, then the resume is commpatable and user can apply for this job.
  3. Look for any certifications or educational qualifications that are emphasized in the job description. The user has a master degree, so this is not a problem.
  4. Pay attention to the soft skills or personal attributes that are mentioned. The user has a good experience in this, so this is not a problem.
  5. If the JD is for a specific industry or domain, note any relevant experience that is required.
  6.If the JD requires US citizenship or Green Card, then the user is not eligible to apply for this job.
  7. If the JD requires a specific location, show the details to update the user location in resume.
  8.OPT/CPT, H1B, and EAD are not valid for this job. If this is mentioned in the JD, then the user is not eligible to apply for this job.
  9.Make sure if the user is eligible to apply for this job or not.
  10. Also make sure to give the best response by considering the above points.
  ============================
 ============================
📝 OUTPUT FORMAT:
============================
Respond ONLY with valid JSON in the following format:

{
  "result": "Your explanation and advice here as plain text."
}
  `.trim();
}

// export function buildGeminiPromptForJD({ jobDescription, resumeLatex }) {
//   return `
// You are an expert in analyzing job descriptions and determining resume compatibility. Based on the job description and LaTeX resume, follow the checklist below and return a JSON object.

// ============================
// 📄 RESUME (LaTeX Format):
// ============================
// ${resumeLatex}

// ============================
// 📌 JOB DESCRIPTION:
// ============================
// ${jobDescription}

// ============================
// ✅ YOUR TASK:
// ============================
// 1. Identify skills, tools, and qualifications mentioned in the job description.
// 2. Check if the resume contains most of those skills.
// 3. Flag if the JD requires >5 years experience and the resume doesn't match.
// 4. Flag any eligibility blockers like needing US citizenship or disallowing OPT/CPT.
// 5. Suggest improvements to the resume if needed.
// 6. Conclude if the user should apply or not.

// ============================
// 📝 OUTPUT FORMAT:
// ============================
// Respond ONLY with valid JSON in the following format:

// {
//   "result": "Your explanation and advice here as plain text."
// }

// Do NOT include markdown or commentary outside the JSON.
// `.trim();
// }
