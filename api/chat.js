// Isi file /api/chat.js
export default async function handler(req, res) {
  const { message } = req.body;
  const apiKey = process.env.GEMINI_API_KEY; // Vercel otomatis mengambil dari "brankas" tadi

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: [{ parts: [{ text: message }] }] }),
    },
  );

  const data = await response.json();
  res.status(200).json(data);
}
