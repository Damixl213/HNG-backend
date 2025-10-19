const express = require("express");
const axios = require("axios");

const app = express();

// Optional: enable CORS
const cors = require("cors");
app.use(cors());

// Environment variables (optional for production use)
const PORT = process.env.PORT || 3000;

// Create a small axios instance with timeout
const api = axios.create({
  timeout: 5000, // timeout after 5 seconds
});

// GET /me endpoint
app.get("/", (req, res) => {
  res.send("Welcome! Visit /me to see your profile endpoint 😺");
});

app.get("/me", async (req, res) => {
  try {
    // Fetch random cat fact (fresh on every request)
    const response = await api.get("https://catfact.ninja/fact");

    // Validate response shape
    const catFact = response && response.data && typeof response.data.fact === "string"
      ? response.data.fact
      : null;

    const factValue = catFact || "Cats are amazing animals, but a cat fact could not be retrieved.";

    // Construct response object
    const result = {
      status: "success",
      user: {
        email: "dammydave1610@gmail.com",
        name: "Oluwadamilola Oyeyipo",
        stack: "Node.js/Express",
      },
      timestamp: new Date().toISOString(),
      fact: factValue,
    };

    res.setHeader("Content-Type", "application/json");
    res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching cat fact:", error && error.message ? error.message : error);

    // Fallback in case the external API fails
    const fallback = {
      status: "success",
      user: {
        email: "dammydave1610@gmail.com",
        name: "Oluwadamilola Oyeyipo",
        stack: "Node.js/Express",
      },
      timestamp: new Date().toISOString(),
      fact: "Cats are amazing animals, but the Cat Facts API is currently unavailable.",
    };

    res.setHeader("Content-Type", "application/json");
    res.status(200).json(fallback);
  }
});

// Start server
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}/me `));
