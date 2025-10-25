# 🛍️ Backend E-Commerce Platform

A **backend E-commerce platform** demonstrating **REST API functionality** built with **Node.js**, **Express**, and **MongoDB**.

---

## 🚀 Features

* User registration and login (JWT authentication)
* Product management (CRUD operations)
* Order creation and tracking
* Secure password hashing (bcrypt)
* RESTful API structure

---

## 🛠️ Tech Stack

* **Node.js**
* **Express.js**
* **MongoDB**
* **Mongoose**
* **JWT**
* **bcrypt**
* **dotenv**

---

## ⚙️ Setup Instructions

1. **Clone the repo**

   ```bash
   git clone https://github.com/yourusername/ecommerce-backend.git
   cd ecommerce-backend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create a `.env` file**

   ```
   PORT=5555
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```

4. **Start the server**

   ```bash
   npm run dev
   ```

   Server runs at: **[http://localhost:5000](http://localhost:5555)**

---

## 📦 API Endpoints

| Method | Endpoint             | Description      |
| ------ | -------------------- | ---------------- |
| POST   | `/api/auth/register` | Register user    |
| POST   | `/api/auth/login`    | Login user       |
| GET    | `/api/products`      | Get all products |
| POST   | `/api/products`      | Add product      |
| PUT    | `/api/products/:id`  | Update product   |
| DELETE | `/api/products/:id`  | Delete product   |

---
Contributions are welcome... Send me PR i will review and merge it.
