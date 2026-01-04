# Invoice Management System

A full-stack Invoice Management System built using React for the frontend and Node.js with Express and SQLite for the backend.  
The application allows users to create, view, and delete invoices with a clean and user-friendly interface.

---

## 📌 Project Overview

This project demonstrates a simple yet complete full-stack application.  
Users can manage invoices efficiently by adding new invoices, viewing existing invoices, and deleting them when required.  
It showcases REST API integration, frontend–backend communication, and clean code structure.

---

## 🛠️ Tech Stack

### Frontend
- React
- React Router DOM
- HTML5
- CSS3

### Backend
- Node.js
- Express.js
- SQLite3

### Tools
- Git & GitHub
- VS Code
- npm

---

## ✨ Features

- Login & Signup UI
- Add new invoices
- View all invoices
- Delete invoices
- RESTful API integration
- Clean and responsive UI
- Backend CRUD operations

---

## 📂 Project Structure

invoice-management-system
├── backend
│ ├── server.js
│ ├── package.json
│ └── database.db
│
├── invoice-app
│ ├── src
│ ├── public
│ └── package.json
│
└── README.md


▶️ How to Run the Project Locally

1️⃣ Clone the Repository
```bash
git clone https://github.com/Ganesh062/invoice-management-system.git
cd invoice-management-system

2️⃣ Start the Backend Server
cd backend
npm install
node server.js

Backend runs on:
http://localhost:5000

3️⃣ Start the Frontend Application
          Open a new terminal:
                cd invoice-app
                npm install
                npm start
Frontend runs on:
http://localhost:3000

🔗 API Endpoints
Method	  Endpoint	              Description
GET	     /invoices      	      Fetch all invoices
POST	   /invoices	           Create a new invoice
DELETE	 /invoices/:id	       Delete an invoice








