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


5. 📄 Generate a professional **cover letter** using the cover letter template given to you, aligned with the job description. You have my resume and my cover letter template with you, just update my cover letter tempalte given to you.

6. ✉️ Generate a personalized **cold email** to reach out to a recruiter, based on the cold email template and resume. make sure to update the cold email template with the job. make sure to include the missing values in the cold email template.
7.With the above poits updated for latex,  Give me the Final latex code for the resume.

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
  "coverLetter": "Plain text cover letter.",
  "coldEmail": "Plain text cold email.",
  "FinalResumeLatex": "Final LaTeX code for the resume , and output latex with escaped text like \\\\documentclass{resume} and \\\\end{document}..."
}
\`\`\`
===========================
💼 JOB DESCRIPTION:
===========================
${jobDescription}
  `.trim();
}

export const resumeTemplate = {
  full: `
\\documentclass{article}
\\usepackage[a4paper,margin=0.3in]{geometry}
\\usepackage{enumitem}
\\usepackage[hidelinks]{hyperref}
\\usepackage{titlesec}
\\usepackage{parskip}
\\usepackage{xcolor}
\\pagenumbering{gobble}
\\titleformat{\\section}{\\large\\bfseries}{}{0em}{}[\\titlerule]
\\usepackage{tabularx}
\\begin{document}

\\begin{center}
    {\\LARGE \\textbf{Sahithi Vogeti}} \\\\
    Irving, Texas \\textbar\\ \\href{mailto:sahithivogeti838@gmail.com}{sahithivogeti838@gmail.com} \\textbar\\ +1(314) 299-4332 \\textbar\\ \\href{https://www.linkedin.com/in/Sahithi-Vogeti}{linkedin.com/in/Sahithi-Vogeti}
\\end{center}

\\section*{PROFESSIONAL SUMMARY}
Insight-driven Data Analyst with expertise in architecting PostgreSQL databases, automating ETL pipelines, and scaling data infrastructure for high-performance analytics. Engineered end-to-end workflow automation, accelerating reporting efficiency by 30\\% while ensuring 99.99\\% data accuracy. Leveraged SQL, Python, Tableau, and Power BI to generate insights that enhanced marketing ROI, reduced operational bottlenecks, and supported strategic initiatives across cross-functional teams. Proven ability to apply Agile methodologies to optimize workflows and enhance collaboration across teams.

\\vspace{-1.5em}
\\section*{SKILLS}
\\begin{tabularx}{\\textwidth}{@{} >{\\bfseries}l X @{}}
Quality Assurance \\& Testing:     & A/B testing, dashboard validation, performance optimization \\\\
Languages \\& Databases:           & Python, SQL, PostgreSQL, AWS Redshift \\\\
Methodologies \\& Tools:           & Agile (Scrum), JIRA, SharePoint, Microsoft Power Suite, ETL, Data Governance \\\\
Visualization \\& Analytics:       & Power BI (DAX), Tableau, Adobe Analytics, Google Analytics \\\\
Cloud \\& Other Tools:             & AWS Athena, Git, Hadoop, PySpark, Regression Analysis \\\\
\\end{tabularx}

\\vspace{-1em}
\\section*{Professional Experience}

\\noindent\\textbf{LOCAL GROWN SALADS} \\textbar{} \\textbf{Data Architect Intern} \\textit{(Revenue Team)} \\textbar{} \\textbf{Remote, USA} \\hfill \\textbf{FEB, 2025–Present} \\\\
Directed data modeling for sustainable vertical farming systems, focusing on optimizing environmental inputs and crop growth metrics.
\\begin{itemize}[leftmargin=*, itemsep=-0.3em, topsep=0em]
    \\item Designed a scalable PostgreSQL database, accelerating query processing by \\textbf{40\\%} and improving data integrity.
    \\item Developed automated SQL pipelines reducing manual reporting by \\textbf{50\\%} and cutting pipeline latency by \\textbf{25\\%}.
    \\item Created analytics dashboards using Power BI and Tableau, enhancing data-driven decision-making efficiency by \\textbf{20\\%}.
    \\item Led environmental data collection across 10+ scenarios, optimizing predictive modeling accuracy by \\textbf{35\\%}.
    \\item Applied Agile principles to streamline iterative development cycles, improving team adaptability and project velocity by \\textbf{30\\%}.
    \\item Implemented AI-powered data reconciliation techniques, reducing inconsistencies in environmental input tracking by \\textbf{30\\%}.
\\end{itemize}

\\noindent\\textbf{EXCELERATE} \\textbar{} \\textbf{Data Visualization Intern} \\textbar{} \\textbf{Saint Louis, MO} \\hfill \\textbf{AUG, 2023–OCT, 2023} \\\\
Led a team in analyzing marketing performance and internal operations to support strategic campaign decisions.
\\begin{itemize}[leftmargin=*, itemsep=-0.3em, topsep=0em]
    \\item Managed super campaign data analysis for 10+ brands, increasing conversion metrics by \\textbf{18\\%}.
    \\item Built Power BI dashboards improving tracking speed and reducing reporting turnaround by \\textbf{50\\%}.
    \\item Presented weekly insights to executives, driving \\textbf{two} critical marketing strategy shifts.
    \\item Adopted Agile methodologies to prioritize tasks dynamically, reducing bottlenecks and accelerating reporting timelines by \\textbf{25\\%}.
\\end{itemize}

\\noindent\\textbf{COGNIZANT TECHNOLOGY SOLUTIONS} \\textbar{} \\textbf{Program Analyst} \\textbar{} \\textbf{Chennai, IND} \\hfill \\textbf{DEC, 2020–DEC, 2022} \\\\
Liaised digital marketing optimization and web analytics through Adobe tools and analytics. Crafted custom dashboards, enabled tracking, and reported business KPIs for client websites.
\\begin{itemize}[leftmargin=*, itemsep=-0.3em, topsep=0em]
    \\item Implemented advanced Adobe Analytics solutions, increasing data capture precision by \\textbf{30\\%}.
    \\item Developed \\textbf{10+} interactive dashboards using Power BI and Tableau, streamlining cross-team reporting.
    \\item Enhanced campaign ROI by \\textbf{20\\%} through targeted segmentation in Adobe Analytics and Google Ads.
    \\item Led A/B testing and Adobe Target integration, improving user engagement by \\textbf{22\\%}.
    \\item Processed over 1M records using Hive and PySpark, reducing data retrieval time by \\textbf{35\\%}.
    \\item Leveraged Agile frameworks to iterate on marketing analytics projects, optimizing workflows and increasing cross-team collaboration by \\textbf{28\\%}.
\\end{itemize}

\\vspace{-0.5em}
\\section*{Education}
\\textbf{Master of Science in Information Systems}, Saint Louis University \\hfill \\textit{Saint Louis, MO} \\\\
\\textbf{Bachelor of Science in Information Technology}, JNTU \\hfill \\textit{Andhra Pradesh, India}

\\vspace{-0.5em}
\\section*{Additional Information}
\\textbf{Certifications:} CBDA (Certification in Business Data Analytics), SQL Optimization Strategies, Power BI for Financial Analytics \\\\
\\textbf{Projects:} Assessment Banking Transaction Analytics, Financial Forecasting Models, SQL-Based Risk Assessment \\\\

\\end{document}
`,
};

// / coverLetterTemplate.js
export const coverLetterTemplate = `
Mahaboob Pasha Mohammad  
mahaboobpashamohammad1@gmail.com | +(314)-305-6056 | 3615 Olive Street, Apt 1405  

[Today’s Date]  
Hiring Manager  
[Company Address]  

Dear Hiring Manager,

I am writing to express my enthusiasm for the [Position] opportunity at [Company Name], as advertised. With over four years of hands-on experience in full-stack software development and a Master’s degree in Software Engineering from Saint Louis University, I am eager to contribute to your team and bring in innovative solutions that enhance system performance and user satisfaction.

I believe the organization's mission and type of work are closely aligned with my professional interests. Your organization’s focus on [type of work the company does] resonates with my passion for delivering scalable, efficient, and user-friendly applications.

In my current role at MetLife, I have led multiple Agile teams to develop high-availability backend systems using Core Java, Spring Boot, and Microservices, achieving a 30% improvement in scalability. My front-end development skills in React.js and Angular, coupled with efficient AWS deployments, resulted in a 20% reduction in operational costs.

My previous roles at Nagarro and Adons Soft Tech further strengthened my capabilities in building robust web applications and optimizing system performance. At Nagarro, I implemented real-time chat systems in the BFSI domain and developed rapid low-code applications using Mendix. At Adons, I accelerated backend processing by 45% through Java-based solutions and improved user experience with responsive UI design.

With a Master’s degree in Software Engineering and extensive experience gained throughout my career, I am now equipped to innovate and solve real-world problems by developing software applications powered by machine learning and intelligent backend agents. Several of these innovative projects are showcased on my website for reference.

I am particularly drawn to [Company Name]’s values around innovation and collaboration, and I am confident that my background and skills will allow me to meaningfully contribute to your projects from day one.

Thank you for considering my application. I’ve attached my resume for your review and would welcome the opportunity to further discuss how I can support your team. I can be reached at +1 (314)-305-6056 or via email at mahaboobpashamohammad1@gmail.com.

Warm regards,  
Mahaboob Pasha Mohammad  
LinkedIn: https://www.linkedin.com/in/mohammad-mahaboob-pasha-19ba58183/  
Portfolio: https://miabu-pashh.github.io/Portfolio-maibu/  
GitHub: https://github.com/miabu-pashh
`;

// coldEmailTemplate.js
export const coldEmailTemplate = `
Subject: Experienced Java Full-Stack Engineer – Open to Opportunities

Hi [Hiring Manager’s Name],

I hope you're doing well. My name is Mahaboob Pasha Mohammad, and I’m a Software Engineer with over 4 years of experience in Java Full Stack Development, currently working at MetLife. I recently completed my Master’s in Software Engineering at Saint Louis University and have built scalable backend systems and responsive frontend apps across BFSI, Healthcare, and eCommerce domains.

I’m reaching out to explore any potential opportunities at [Company Name] where my background in Core Java, Spring Boot, Microservices, and React/Angular could add value. I’ve attached my resume and cover letter for your reference and would welcome a brief chat if you're open to connecting.

Thank you for your time and consideration.

Best regards,  
Mahaboob Pasha Mohammad  
mahaboobpashamohammad1@gmail.com | (314) 305-6056  
LinkedIn: https://www.linkedin.com/in/mohammad-mahaboob-pasha-19ba58183/  
Portfolio: https://miabu-pashh.github.io/Portfolio-maibu/  
GitHub: https://github.com/miabu-pashh
`;

export const referralEmailTemplate = `
Subject: Quick Referral Request for [Job Title] Role at [Company Name]

Hi [Referral's Name],

I hope you're doing well! I came across the [Job Title] opening at [Company Name] and noticed you're connected with the team. I’m currently seeking full-time roles where I can leverage my experience in Java Full Stack development, Spring Boot, React, and AWS to build high-impact applications.

Would you be open to referring me or pointing me in the right direction? I’ve attached my resume for your reference, and I’d be happy to provide a tailored message if needed.

Thanks so much for your time and support!

Warm regards,  
Mahaboob Pasha Mohammad  
mahaboobpashamohammad1@gmail.com | (314) 305-6056  
LinkedIn: https://www.linkedin.com/in/mohammad-mahaboob-pasha-19ba58183/  
Portfolio: https://miabu-pashh.github.io/Portfolio-maibu/
`;

export const jobApplicationEmailTemplate = `
Subject: Application for [Job Title] – Mahaboob Pasha Mohammad

Dear [Hiring Manager's Name],

I am excited to apply for the [Job Title] position at [Company Name]. With over 4 years of experience as a Software Engineer specializing in Java Full Stack development, along with a Master’s degree from Saint Louis University, I am confident in my ability to contribute effectively to your team.

Please find my resume and cover letter attached for your review. I would welcome the opportunity to speak further about how my experience aligns with your current needs.

Thank you for your time and consideration.

Best regards,  
Mahaboob Pasha Mohammad  
mahaboobpashamohammad1@gmail.com | (314) 305-6056  
LinkedIn: https://www.linkedin.com/in/mohammad-mahaboob-pasha-19ba58183/  
Portfolio: https://miabu-pashh.github.io/Portfolio-maibu/  
GitHub: https://github.com/miabu-pashh
`;

export function buildATSAnalysisPrompt({ jobDescription, resumeTemplate }) {
  return `
You're an ATS (Applicant Tracking System) expert. Your job is to compare the job description and resume and return an analysis in structured JSON format.
  
 ============================
  🧾 RESUME (latex):
  ============================
  ${resumeTemplate}
  ============================
  📌 JOB DESCRIPTION
  ============================
  ${jobDescription}
  ============================
  ============================
  📌 YOUR TASK:
  ============================
  Based on the job description below:
  1.Analyze the resume given to you here in the latex form,  and compare it against the job description.
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

export function buildGeminiPromptForJD({ jobDescription, resumeTemplate }) {
  return `
You are an expert in analyzing job descriptions and determining resume compatibility. Based on the job description and LaTeX resume, follow the checklist below and return a JSON object.

============================
📄 RESUME (LaTeX Format):
============================
${resumeTemplate}

============================
📌 JOB DESCRIPTION:
============================
${jobDescription}

============================
✅ YOUR TASK:
============================
1. Identify skills, tools, and qualifications mentioned in the job description.
2. Check if the resume contains most of those skills.
3. Flag if the JD requires >5 years experience and the resume doesn't match.
4. Flag any eligibility blockers like needing US citizenship or disallowing OPT/CPT.
5. Suggest improvements to the resume if needed.
6. Conclude if the user should apply or not.

============================
📝 OUTPUT FORMAT:
============================
Respond ONLY with valid JSON in the following format:

{
  "result": "Your explanation and advice here as plain text."
}

Do NOT include markdown or commentary outside the JSON.
`.trim();
}
