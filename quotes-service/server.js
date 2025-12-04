const express = require("express");
const { getCurrentTime, getRandomThree } = require("../node-utils");
const app = express();

const PORT = process.env.PORT || 3001;

const quotes = [
  "💻 Code is like humor — when you have to explain it, it’s bad.",
  "🧑‍💻 First, solve the problem. Then, write the code.",
  "⚙️ Make it work. Make it right. Make it fast.",
  "🐛 Debugging: Being the detective in a crime movie where you are also the murderer.",
  "🧠 The best error message is the one that never shows up.",
  "🚀 The best code is no code at all.",
  "⌨️ Talk is cheap. Show me the code.",
  "🛠️ Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "🚀 Success is not final, failure is not fatal — it is the courage to continue that counts.",
  "🔥 Consistency beats motivation every single time.",
  "💡 The best way to predict the future is to create it.",
  "🏁 Small steps every day lead to big results.",
  "🙌 Do something today that your future self will thank you for.",
  "🌟 You don’t have to be great to start, but you have to start to be great.",
  "💪 Don’t limit your challenges. Challenge your limits.",
  "🎯 Focus is a superpower. Protect it.",
  "⏳ It’s not about having time. It’s about making time.",
  "🗂️ What gets scheduled gets done.",
  "📈 A little progress each day adds up to big results.",
  "💼 Work smarter, not harder.",
  "🔋 Rest is not a reward. It’s part of the process.",
  "🧩 If it takes less than 2 minutes — do it now.",
  "🧠 Your mind is your greatest asset — upgrade it daily.",
  "🌱 A growth mindset turns obstacles into opportunities.",
  "💭 Thoughts become actions; actions become habits.",
  "🧩 Problems are opportunities in disguise.",
  "⚖️ You can’t control everything, but you can control your reaction.",
  "🌄 Every day is a chance to become a better version of yourself.",
  "🧘 The calmer you are, the clearer your mind becomes.",
  "🧩 Every complex problem has a solution that is simple, elegant, and wrong.",
  "🔍 A problem well stated is a problem half solved.",
  "🛠️ The important thing is not to stop questioning.",
  "🧰 The best solutions are often the simplest ones.",
  "🔧 Fix the cause, not the symptom.",
  "⚙️ When in doubt, break the problem into smaller parts.",
  "🎛️ The real problem is not the problem — the problem is your attitude about the problem.",
];

app.get("/quotes", (req, res) => {
  const topThree = getRandomThree(quotes);

  res.json({
    message: "🌟 Top 3 thoughts of the request",
    quotes: topThree,
    time: getCurrentTime(),
  });
});

app.get("/health", (req, res) => {
  res.json({ status: "ok", service: "quotes-service" });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Quotes service running on port ${PORT}`);
});
