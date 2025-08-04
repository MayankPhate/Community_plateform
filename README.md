
✅  community-plateform
✅ Screenshots: Uploaded and shared — they clearly show registration, login, profile access, and the empty post feed.



🛠️ Stack Used
Frontend: React.js (Vite-based)

Backend: Node.js with Express

Database: MongoDB (via Mongoose)



Hosting: Vercel (frontend), Render (or your deployment choice for backend)

🚀 Live Demo
👉 Open Live Demo https://community-plateform-fronte-git-3da413-mayanks-projects-0783a271.vercel.app

📂 Setup Instructions
Clone the repository:

bash
Copy
Edit
git clone https://github.com/MayankPhate/Community_plateform.git
cd Community_plateform
Install frontend dependencies:

bash
Copy
Edit
cd frontend
npm install
Install backend dependencies:

bash
Copy
Edit
cd ../backend
npm install
Setup environment variables:

In backend/.env, set:

ini
Copy
Edit
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
In frontend, configure API base URL if needed.

Run backend:

bash
Copy
Edit
npm run dev
Run frontend:

bash
Copy
Edit
cd ../frontend
npm run dev
Visit http://localhost:5173 in your browser.

🔑 Admin/Demo User Logins
(Replace with real demo accounts or leave empty if not set up yet.)

Example:

makefile
Copy
Edit
Email: demo@example.com
Password: demopassword
✅ Features
User registration & login with JWT auth

Public post feed (view posts from community members)

User profile pages with name, email, bio, and personal posts

Protected profile routes (redirect if not logged in)

🌟 Extra Features
Dark mode toggle (UI component in navbar)

Timestamps on posts

Responsive design
