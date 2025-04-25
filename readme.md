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

- Department & personnel CRUD operations.
- Only one lead per department is allowed.
- Middleware permission checks (`isAdmin`, `isLogin`, `isAdminOrLead`).
- Error handling via `express-async-errors`.
- MongoDB integration with Mongoose.
- Swagger + Redoc documentation.

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

## Installation

```bash
git clone https://github.com/recep-demir/personnel-api-exp-mongo.git
cd personnel-api-exp-mongo
npm install
```

---

## 🌱 Environment Variables

Create a `.env` file in the root folder based on this example:

### 📄 .env.example

```
PORT=8000
MONGODB_URI=mongodb://localhost:27017/personnel-db
SESSION_SECRET=your_session_secret_key
```

---

## 📜 Scripts

| Script  | Command             | Description                  |
|---------|---------------------|------------------------------|
| start   | `npm start`         | Starts server with nodemon   |
| test    | `npm test`          | Placeholder test script      |

---

## 📂 Project Structure

```
├── index.js
├── .env
├── package.json
├── /src
│   ├── /logs
│   ├── /configs
│   │   ├── dbConnection.js
│   │   └── swagger.json
│   ├── /controllers
│   │   ├── auth.js
│   │   ├── department.js
│   │   ├── token.js
│   │   └── personnel.js
│   ├── /helpers
│   │   └── passwordEncrypt.js
│   │   └── sync.js
│   ├── /middlewares
│   │   ├── authentication.js
│   │   ├── errorHandler.js
│   │   ├── logger.js
│   │   ├── queryHandler.js
│   │   └── permission.js
│   ├── /models
│   │   ├── department.js
│   │   ├── token.js
│   │   └── personnel.js
│   ├── /routes
│   │   ├── auth.js
│   │   ├── department.js
│   │   ├── token.js
│   │   └── personnel.js
│   └── /swagger
│       ├── swagger-output.json
│       └── swagger.js
```

---

## 📘 API Documentation

After starting the project, you can visit the following documentation:

- **Swagger UI:** `http://localhost:8000/doc`
- **Redoc UI:** `http://localhost:8000/redoc`

### 📄 Swagger Starter (`src/swagger/swagger.js`)

```js
const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Personnel API',
    description: 'Personnel Management System API Service v1',
    contact: {
      name: 'Recep Demir',
      email: 'demir.rp@gmail.com'
    }
  },
  host: 'localhost:8000',
  schemes: ['http']
};

const outputFile = './src/swagger/swagger-output.json';
const endpointsFiles = ['./index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
```

To generate docs run:
```bash
node ./src/swagger/swagger.js
```

---

## 🧑‍💻 Author

**Recep Demir**  
📧 [demir.rp@gmail.com](mailto:demir.rp@gmail.com)  
🔗 Git
