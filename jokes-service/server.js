const express = require("express");
const { getCurrentTime, getRandomThree } = require("../node-utils");
const app = express();

const PORT = process.env.PORT || 3002;

const jokes = [
  "💻 Why do programmers prefer dark mode? Because light attracts bugs.",
  "🖥️ I told my computer I needed a break… it said, 'No problem, I’ll go to sleep.'",
  "🔢 There are only 10 kinds of people: those who understand binary, and those who don't.",
  "🐞 Debugging: Removing the needles from the haystack.",
  "☕ A programmer’s favorite place to hang out? The Foo Bar.",
  "🧠 I would tell you a UDP joke, but you might not get it.",
  "📦 Why did the developer go broke? Because he used up all his cache.",
  "🌐 I asked my HTML file if it needed anything. It said, 'I have enough tags, thanks!'",
  "🔁 A programmer walks into a bar… and orders 1 drink, then 10 drinks, then 100 drinks…",
  "🔓 Why do Java developers wear glasses? Because they don’t see sharp.",
  "🤖 My AI friend told me it feels useless. I said, 'Don't worry, you’re still in training data.'",
];

app.get("/jokes", (req, res) => {
  const topThreeJokes = getRandomThree(jokes);

  res.json({
    message: "😂 Top 3 jokes of the request",
    jokes: topThreeJokes,
    time: getCurrentTime(),
  });
});

app.get("/health", (req, res) => {
  res.json({ status: "ok", service: "jokes-service" });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Jokes service running on port ${PORT}`);
});
