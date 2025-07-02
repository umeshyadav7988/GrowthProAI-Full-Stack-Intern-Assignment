const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const headlines = [
  "Why {name} is {location}'s Sweetest Spot in 2025",
  "Discover {name}: The Gem of {location}'s Local Scene",
  "{name} is Taking {location} by Storm in 2025!",
  "What Makes {name} a Must-Visit in {location}?",
  "Your Guide to {location}'s Best-Kept Secret: {name}"
];

app.post('/api/business-data', (req, res) => {
  const { name, location } = req.body;

  if (!name || !location) {
    return res.status(400).json({ error: "Name and location are required" });
  }

  const rating = (Math.random() * (5 - 3.5) + 3.5).toFixed(1);
  const reviews = Math.floor(Math.random() * 300) + 50;
  const headlineTemplate = headlines[Math.floor(Math.random() * headlines.length)];
  const headline = headlineTemplate.replace('{name}', name).replace('{location}', location);

  res.json({ rating, reviews, headline });
});

app.get('/api/regenerate-headline', (req, res) => {
  const { name, location } = req.query;

  if (!name || !location) {
    return res.status(400).json({ error: "Name and location are required" });
  }

  const headlineTemplate = headlines[Math.floor(Math.random() * headlines.length)];
  const headline = headlineTemplate.replace('{name}', name).replace('{location}', location);

  res.json({ headline });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
