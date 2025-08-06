
# 🍔 Food Delivery App (Full Stack)

A full-stack food delivery platform built with React, Node.js, Express, and MongoDB. This application allows users to browse meals, place orders, track their orders, and manage cart items. Admins can manage menu items and view orders.

---

## 🚀 Live Demo

👉 Coming Soon (or add your deployed URL here)

---

## 🧑‍💻 Developed By

**Hailemariam Eyayu**  
📞 0938169557  
📧 hailemariameyayu2012@gmail.com

---

## 🛠️ Tech Stack

### Frontend
- **React.js**
- **React Router**
- **Axios**
- **Vite**
- **CSS Modules**

### Backend
- **Node.js**
- **Express**
- **MongoDB**
- **Mongoose**
- **JWT Authentication**
- **Stripe API (for payments)**

---

## 📁 Project Structure

```
food-del/
├── backend/
│   ├── Admin/ (React Admin Panel)
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── .env
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   └── App.jsx
│   ├── .env
│   └── vite.config.js
├── vercel.json
└── README.md
```

---

## ⚙️ Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/EdenMelkie/food-del.git
cd food-del
```

---

### 2. Setup Backend

```bash
cd backend
npm install
```

- Create `.env` file in `backend/`:
```env
PORT=5000
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
FRONTEND_URL=http://localhost:5173
```

- Start the backend:
```bash
npm start or npm run server
```

---

### 3. Setup Frontend

```bash
cd ../frontend
npm install
```

- Create `.env` in `frontend/`:
```env
VITE_REACT_APP_BACKEND_BASEURL=http://localhost:5000
```

- Start frontend:
```bash
npm run dev
```

---

## 📦 Deployment

This project is configured for **Vercel** deployment. Make sure to set the correct environment variables in your Vercel dashboard.

- `VITE_REACT_APP_BACKEND_BASEURL`
- `JWT_SECRET`
- `STRIPE_SECRET_KEY`

If deploying both frontend and backend to Vercel, update the `vercel.json` to handle redirects.

---

## 📸 Screenshots

Coming soon...

---

## 📄 License

This project is for educational/demo purposes and not licensed for production use without modification.

---

Happy Coding! ✨
