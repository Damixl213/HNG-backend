**</h1>Backend — Stage 0 Task</h1>
🚀 Overview**

This project was created as part of the HNG Internship (Stage 0 – Backend Track).
It’s a simple yet dynamic RESTful API that provides developer profile details along with a random cat fact fetched from an external API.

<h2>**⚙️ Tech Stack**</h2>

🟢 Node.js — JavaScript runtime environment

⚡ Express.js — Fast, unopinionated web framework for Node.js

🌍 CORS — Enables secure cross-origin resource sharing

🧠 Axios — Makes HTTP requests to fetch external data

🧠 Features

✨ /me Endpoint
Returns a JSON object containing:

Developer’s name, email, and stack

A dynamic cat fact from an external API

A UTC timestamp in ISO 8601 format

🧩 Dynamic Data

Fetches a new cat fact every time the endpoint is requested

💪 Error Handling

Responds gracefully to any API or server errors

🕒 ISO Timestamp

Always includes a valid UTC timestamp in ISO format

📦 Example Response
{
  "email": "oluwadamilola@example.com",
  "current_datetime": "2025-10-22T21:37:12.341Z",
  "github_url": "https://github.com/your-username/Backend-Wizards-Stage-0-Task",
  "cat_fact": "Cats have five toes on their front paws, but only four on the back ones."
}

🧱 Installation & Setup

Clone this repository:

git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>


Install dependencies:

npm install


Start the development server:

npm start


Visit the endpoint:

http://localhost:3000/me

🌐 Deployment

This API is deployed on Railway
 🚄

Live API Endpoint:
👉 https://backend-wizards-stage0.up.railway.app/me
 (replace with your actual link)

💡 Lessons Learned

While working on this project, I learned how to:

Create and manage an Express.js server

Fetch and display external API data using Axios

Implement proper JSON response structure

Handle API errors cleanly

Deploy Node.js apps successfully on Railway

👨‍💻 Author

Name: Oluwadamilola Oyeyipo
Email: dammydave1610@gmail.com

Stack: Node.js | Express.js | JavaScript
GitHub: Damixl213

📜 License

This project is licensed under the MIT License — you’re free to use, modify, and share it.
