// /api/chat.js
export default async function handler(req, res) {
  // Ambil API Key dari "brankas" Vercel yang sudah kamu set tadi
  const apiKey = process.env.GEMINI_API_KEY;

  const { message } = req.body;

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: message }] }],
      }),
    },
  );

  const data = await response.json();
  res.status(200).json(data);
}
