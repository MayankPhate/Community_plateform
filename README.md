
✅  community-plateform




🛠️ Stack Used
Frontend: React.js (Vite-based)

Backend: Node.js with Express

Database: MongoDB (via Mongoose)



Hosting: Vercel (frontend), Render (or your deployment choice for backend)

🚀 Live Demo
👉 Open Live Demo https://community-plateform-fronte-git-3da413-mayanks-projects-0783a271.vercel.app

📂 Setup Instructions
1.Clone the repository:

git clone https://github.com/MayankPhate/Community_plateform.git
cd Community_plateform

2. Install frontend dependencies:

cd frontend
npm install

3.Install backend dependencies:

cd ../backend
npm install

4.Setup environment variables:

In backend/.env, set:
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000

In frontend, configure API base URL if needed.

5.Run backend:

npm run dev

6.Run frontend:

cd ../frontend
npm run dev

7.Visit http://localhost:5173 in your browser.

🔑 Admin/Demo User Logins
(Replace with real demo accounts or leave empty if not set up yet.)

Example:

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
