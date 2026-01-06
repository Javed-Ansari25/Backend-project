# 🎥 VideoTube – Backend API

VideoTube is a **scalable backend project** inspired by platforms like YouTube. It is built using **Node.js, Express.js, MongoDB**, and modern backend best practices such as **JWT authentication, Cloudinary file uploads, and secure user management**.

This project was developed as a **learning + production‑style backend**, focusing on clean architecture, reusable utilities, and interview‑ready concepts.

---

## 🚀 Features

### 👤 User Management

* User registration & login
* JWT based authentication (Access Token + Refresh Token)
* Secure password hashing using **bcrypt**
* Change password functionality
* Get current logged‑in user details
* Update user profile (name, email, etc.)

### 🖼️ Media Upload

* Avatar upload
* Cover image upload
* File handling using **Multer**
* Cloud storage using **Cloudinary**
* Automatic local file cleanup after upload

### 📺 Channel & Profile

* Get user channel profile by username
* Protected routes using JWT middleware

### 🔐 Security

* HTTP‑only cookies for tokens
* Middleware‑based route protection
* Environment variable based configuration

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Mongoose)
* **Authentication:** JWT (Access & Refresh Tokens)
* **File Upload:** Multer
* **Cloud Storage:** Cloudinary
* **Security:** bcrypt, cookie‑parser
* **Dev Tools:** Nodemon, dotenv

---

## 📂 Project Structure

```
VideoTube-Backend/
│
├── src/
│   ├── controllers/      # Business logic
│   ├── models/           # Mongoose schemas
│   ├── routes/           # API routes
│   ├── middlewares/      # Auth, multer, etc.
│   ├── utils/            # Helper functions
│   ├── config/           # DB & Cloudinary config
│   └── app.js            # Express app setup
│
├── .env.example
├── package.json
└── README.md
```

---

## 🔑 Authentication Flow (High Level)

1. User logs in with email & password
2. Server verifies credentials
3. **Access Token** (short‑lived) is issued
4. **Refresh Token** (long‑lived) is stored securely
5. Tokens are sent via **HTTP‑only cookies**
6. Protected routes are accessed using JWT middleware

---

## 📡 API Routes (Overview)

### Auth & User

* `POST /api/v1/users/register`
* `POST /api/v1/users/login`
* `POST /api/v1/users/logout`
* `POST /api/v1/users/change-password`
* `GET  /api/v1/users/current-user`
* `PATCH /api/v1/users/update-account`

### Media

* `PATCH /api/v1/users/avatar`
* `PATCH /api/v1/users/coverImage`

### Channel

* `GET /api/v1/users/c/:username`

> 🔒 Most routes are **JWT protected**

---

## ⚙️ Environment Variables

Create a `.env` file using this reference:

```
PORT=8000
MONGODB_URI=your_mongodb_connection
JWT_ACCESS_SECRET=your_access_secret
JWT_REFRESH_SECRET=your_refresh_secret
JWT_ACCESS_EXPIRE=15m
JWT_REFRESH_EXPIRE=7d

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

## ▶️ How to Run Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Server will run on:

```
http://localhost:8000
```

---

## 🧠 Learning Outcomes

* Real‑world authentication using JWT
* Secure password & token handling
* File upload & cloud storage integration
* REST API design (PATCH vs POST vs GET)
* Clean backend folder structure
* Error handling & middleware usage

---

## 📌 Future Improvements

* Video upload & streaming
* Like, comment & subscribe system
* Watch history & recommendations
* Role‑based access control
* API rate limiting

---

## 🙌 Conclusion

**VideoTube Backend** is a complete, interview‑ready backend project demonstrating modern backend development practices. It is suitable for **learning, portfolio showcase, and further extension into a full‑stack application**.

---

⭐ If you like this project, feel free to extend it and make it production‑ready!
