# Personnel Management System API

![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![Express](https://img.shields.io/badge/Express.js-4.x-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-green)
![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)
![Status](https://img.shields.io/badge/status-in%20development-yellow)


This is a RESTful API for managing departments and personnel within an organization. Built with **Node.js**, **Express**, and **MongoDB**, it provides endpoints to create, read, update, and delete departments and personnel, including features like department leads and user permission middleware.

---

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)
- [Author](#author)
- [License](#license)

---

## Features

- **RESTful API Design** – Clean and modular structure using `Express Router`.
- **MongoDB Integration** – Managed with `Mongoose`, providing schema validation and easy CRUD.
- **Environment Configuration** – Using `dotenv` for secure environment variable management.
- **Custom Middlewares**:
  - `queryHandler`: Simplifies filtering, pagination, sorting.
  - `authentication`: Adds user info to the request based on session data.
  - `logger`: Logs each request with method and path.
  - `errorHandler`: Handles errors gracefully with centralized logic.
- **Session Management** – Cookies are managed using `cookie-session`.
- **Authentication & Authorization** – Includes login with role-based access (admin, lead, etc.).
- **Swagger and Redoc Documentation** – Interactive API documentation available at:
  - [Swagger UI](http://localhost:8000/documents/swagger)
  - [Redoc UI](http://localhost:8000/documents/redoc)
- **Personnel & Department Management** – Create, update, delete, list both entities and associate them.
- **Token System** – Includes token-based authentication system.
- **Async Error Handling** – Simplified async error management with `express-async-errors`.

---

## Technologies Used

| Package               | Purpose                                 |
|----------------------|-----------------------------------------|
| express              | HTTP server & routing                   |
| mongoose             | MongoDB ODM                             |
| dotenv               | Environment variable management         |
| cookie-session       | Session management                      |
| express-async-errors | Catch async errors in middleware        |
| morgan               | Logging HTTP requests                   |
| swagger-ui-express   | Swagger documentation                   |
| redoc-express        | Redoc documentation                     |
| swagger-autogen      | Automatic Swagger JSON generation       |
| nodemon              | Auto-reloads during development         |

---

## 🔐 Authentication & Authorization

- Session-based login system using `cookie-session`.
- Middleware-controlled access:
  - `isLogin` – Ensures user is logged in.
  - `isAdmin` – Allows only admins.
  - `isAdminOrLead` – Allows either admin or team lead.

---

## 📄 API Endpoints

### Auth
- `POST /auth/login`
- `GET /auth/logout`
- `GET /auth/me`

### Departments
- `GET /departments/`
- `POST /departments/`
- `GET /departments/:id`
- `PUT/PATCH /departments/:id`
- `DELETE /departments/:id`
- `GET /departments/:id/personnels`

### Personnels
- `GET /personnels/`
- `POST /personnels/`
- `GET /personnels/:id`
- `PUT/PATCH /personnels/:id`
- `DELETE /personnels/:id`

### Tokens
- `GET /tokens/`
- `POST /tokens/`
- `GET /tokens/:id`
- `PUT/PATCH /tokens/:id`
- `DELETE /tokens/:id`

---

## 📄 API Documentation

- **Swagger UI**: [http://localhost:8000/documents/swagger](http://localhost:8000/documents/swagger)
- **Redoc UI**: [http://localhost:8000/documents/redoc](http://localhost:8000/documents/redoc)

---

## 🛠️ Setup Instructions

1. **Clone the repository**
    ```bash
    git clone https://github.com/recep-demir/personnel-api-exp-mongo.git
    cd personnel-api-exp-mongo
    npm install
    ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create a `.env` file**
   ```
   PORT=8000
   MONGO_URL=mongodb://localhost:27017/personnelDB
   SECRET_KEY=yourSecretKey
   ```

4. **Run the server**
   ```bash
   npm start
   ```

---

## 📬 Contact

**Recep Demir**  
📧 demir.rp@gmail.com

---

## 📄 License

This project is licensed under the [ISC License](LICENSE).