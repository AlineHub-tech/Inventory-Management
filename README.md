 Inventory Management System

A Full-Stack Inventory Management System built using Node.js, Express, MongoDB, and React.js.
It helps store owners manage product categories, products, and stock levels efficiently through a secure, modern web dashboard.
 Features
✅ Authentication & Authorization

JWT-based authentication (Admin & Normal User roles)

Passwords hashed using bcryptjs

Admin can add, edit, and delete data

Normal users can only view

✅ Products & Categories Management

CRUD operations for products and categories

Each product linked to a category

Automatic updates for price and quantity


✅ Search & Pagination

Filter products by name or category

Paginated results for better performance


✅ Low Stock Alerts

Highlights products with quantity below 5


✅ Error Handling & Validation

Centralized error handler for clean responses

Validation using express-validator


✅ Professional Dashboard UI

React-based frontend with sidebar navigation

Product table with search, pagination, and action buttons

Modern CSS design and responsive layout

 Tech Stack

Backend

Node.js — JavaScript runtime

Express.js — Web framework for APIs

MongoDB Atlas — Cloud database

Mongoose — ODM for MongoDB

bcryptjs — Password hashing

jsonwebtoken (JWT) — Authentication

dotenv — Environment variables

cors — Cross-origin resource sharing

express-validator — Request validation


Frontend

React.js — User interface

Axios — HTTP requests to backend

React Router DOM — Routing between pages

CSS3 — Styling and responsive design
 Project Structure
Inventory-Management-System/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── errorMiddleware.js
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── App.css
│   ├── public/
│   ├── package.json
│
└── README.md
 How It Works

1. Admin logs in using credentials → receives a JWT token.


2. Token is sent in headers for all protected routes.


3. Admin can manage:

Categories (add, edit, delete)

Products (add, edit, delete, view, search)



4. Normal users can only view products and categories.


5. All actions return clean JSON responses for API testing in Postman.


6. Data is stored on MongoDB Atlas for online persistence.
 API Testing

 Setup Instructions
 Backend Setup

cd backend
npm install
npm run dev

Add a .env file:

MONGO_URI=mongodb+srv://username:password@cluster0.mongodb.net/yourDB?retryWrites=true&w=majority
JWT_SECRET=aline_inventory_secret
PORT=5000

 Frontend Setup
 
cd frontend
npm install
npm start

Frontend runs on http://localhost:5003
Backend runs on http://localhost:5000



---

Waba ushaka ko nkugirira README nk’iyi kandi kuri Course Registration System nayo, ku buryo zombi ziba professional kuri GitHub?
