# Task Management API

A secure and scalable REST API built using **Node.js**, **Express.js**, **MySQL**, and **Sequelize ORM**. The project implements **JWT Authentication**, **Role-Based Access Control (RBAC)**, and complete **CRUD operations** for task management. A simple React frontend can be used to interact with the APIs.

---

## 🚀 Features

* User Registration
* User Login
* Password Hashing using bcrypt
* JWT Authentication
* Role-Based Access Control (Admin/User)
* Task CRUD Operations
* Input Validation
* Global Error Handling
* RESTful API Design
* API Versioning (`/api/v1`)
* Swagger API Documentation
* Postman Collection
* Scalable Layered Architecture

---

## 🛠 Tech Stack

### Backend

* Node.js
* Express.js
* MySQL
* Sequelize ORM

### Authentication & Security

* JWT (jsonwebtoken)
* bcrypt
* Helmet
* CORS
* express-validator

### Documentation

* Swagger UI
* Postman

### Frontend

* React.js (Vite)

---

## 📁 Project Structure

```text
task-management-api
│
├── src
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── repositories
│   ├── routes
│   ├── services
│   ├── validations
│   ├── docs
│   └── utils
│
├── server.js
├── package.json
├── package-lock.json
├── .env.example
├── .gitignore
└── README.md
```

---

## 🗄 Database Schema

### User

| Field    | Type               |
| -------- | ------------------ |
| id       | Integer            |
| name     | String             |
| email    | String (Unique)    |
| password | String (Hashed)    |
| role     | ENUM (user, admin) |

### Task

| Field       | Type                |
| ----------- | ------------------- |
| id          | Integer             |
| title       | String              |
| description | Text                |
| status      | Pending / Completed |
| userId      | Foreign Key         |

---

## 🔐 Authentication

The API uses **JWT Authentication**.

After login, a JWT token is returned.

Include it in every protected request:

```http
Authorization: Bearer YOUR_JWT_TOKEN
```

---

## 📌 API Endpoints

### Authentication

| Method | Endpoint                | Description   |
| ------ | ----------------------- | ------------- |
| POST   | `/api/v1/auth/register` | Register User |
| POST   | `/api/v1/auth/login`    | Login User    |

### Tasks

| Method | Endpoint            | Description     |
| ------ | ------------------- | --------------- |
| POST   | `/api/v1/tasks`     | Create Task     |
| GET    | `/api/v1/tasks`     | Get All Tasks   |
| GET    | `/api/v1/tasks/:id` | Get Single Task |
| PUT    | `/api/v1/tasks/:id` | Update Task     |
| DELETE | `/api/v1/tasks/:id` | Delete Task     |

---

## ⚙ Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/task-management-api.git
```

Move into the project folder:

```bash
cd task-management-api
```

Install dependencies:

```bash
npm install
```

Create a `.env` file using `.env.example`.

Run the server:

```bash
npm run dev
```

---

## 🌍 Environment Variables

```env
PORT=3000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=task_management

JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=1d
```

---

## 📖 API Documentation

Swagger documentation is available at:

```text
http://localhost:3000/api-docs
```

---

## 🧪 Testing

The APIs can be tested using:

* Postman
* Swagger UI

---

## 🔒 Security Features

* Password Hashing (bcrypt)
* JWT Authentication
* Role-Based Authorization
* Input Validation
* Secure HTTP Headers (Helmet)
* CORS Protection
* Environment Variables

---

## 📈 Scalability

This project follows a layered architecture:

```
Client
   │
Routes
   │
Controllers
   │
Services
   │
Repositories
   │
Database
```

This design makes the application easy to maintain, test, and extend.

Future improvements:

* Redis Caching
* Docker Deployment
* Load Balancer
* Microservices
* CI/CD Pipeline
* Centralized Logging
* Unit & Integration Testing

---

## 👨‍💻 Author

**Mritunjai Upadhyay**

* B.Tech Computer Science & Engineering
* Backend Developer (Node.js | Express.js | MySQL | Sequelize)
* Passionate about Backend Development, REST APIs, and Scalable Systems.
