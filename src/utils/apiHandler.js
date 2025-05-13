import axios from "axios";

const GEMINI_API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";

export async function callGeminiAPI(prompt) {
  const apiKey = process.env.REACT_APP_GEMINI_API_KEY;

  try {
    console.log("🛠️ Prompt Sent to Gemini:\n", prompt); // 🔍 log the prompt

    const response = await axios.post(
      `${GEMINI_API_URL}?key=${apiKey}`,
      {
        contents: [
          {
            role: "user",
            parts: [{ text: prompt }],
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const raw = response.data.candidates?.[0]?.content?.parts?.[0]?.text || "";
    console.log("📩 Raw Gemini Response:\n", raw); // 🔍 log the raw response

    // 🧹 Clean and parse JSON safely
    const cleaned = raw.replace(/```json|```/g, "").trim();

    let parsed = {};
    try {
      parsed = JSON.parse(cleaned);
    } catch (err) {
      console.error("❌ JSON Parse Error:", err);
      console.error("❓ Problematic Response:\n", cleaned); // 🧪 help spot what's wrong
      throw new Error("Failed to parse Gemini JSON response");
    }

    return {
      summaryLatex: parsed.summaryLatex || "",
      skillsLatex: parsed.skillsLatex || "",
      metlifeLatex: parsed.metlifeLatex || "",
      adonsLatex: parsed.adonsLatex || "",
      coverLetter: parsed.coverLetter || "",
      coldEmail: parsed.coldEmail || "",
    };
  } catch (error) {
    console.error("Gemini API Error:", error.response?.data || error.message);
    alert(
      "Gemini API Error: " +
        JSON.stringify(error.response?.data || error.message)
    );
    return {
      summaryLatex: "",
      skillsLatex: "",
      metlifeLatex: "",
      adonsLatex: "",
      coverLetter: "",
      coldEmail: "",
    };
  }
}
