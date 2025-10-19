const express = require("express");
const axios = require("axios");

const app = express();

// Optional: enable CORS
const cors = require("cors");
app.use(cors());

// Environment variables (ensure Railway-provided port is used dynamically)
const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

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

// Start server (use actual server.address() so log reflects Railway runtime port)
const server = app.listen(PORT, () => {
  const addr = server.address() || { address: "0.0.0.0", port: PORT };
  const hostDisplay = addr.address === "0.0.0.0" || addr.address === "::" ? "0.0.0.0" : addr.address;
  console.log(`Server running on ${hostDisplay}:${addr.port} (env PORT=${process.env.PORT || 'unset'})`);
});

// Graceful shutdown handlers remain unchanged
process.on("SIGTERM", () => {
  console.log("SIGTERM received, closing server...");
  server.close(() => {
    console.log("Server closed");
    process.exit(0);
  });
});

process.on("SIGINT", () => {
  console.log("SIGINT received, closing server...");
  server.close(() => {
    console.log("Server closed");
    process.exit(0);
  });
});
