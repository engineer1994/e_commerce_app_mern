
# e_commerce MERN Stack App

This is an e_commerce full-stack MERN application with a React frontend and Node.js/Express backend. MongoDB Atlas is used for the database, and the app is structured as a monorepo.  This app is for learning purpose.

---

## 📁 Project Structure

```

e_commerce_app/
├── e_commerce_app_client/       # React frontend
├── e_commerce_app_backend/       # Express + Node.js backend
├── .gitignore
├── README.md     # (this file)

````

Each folder (`client` and `backend`) contains its own README and `package.json`.

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/engineer1994/e_commerce_app_mern/
cd e_commerce_app_mern
````

### 2. Install Dependencies

Install server and client dependencies:

```bash
cd e_commerce_app_backend
npm install

cd ../e_commerce_app_client
npm install
```

---

## 🌐 Environment Variables

You'll need to create the following `.env` files (not included in the repo):

### 🔐 `e_commerce_app_backend/.env`

```
JWT_SECRET=JWT_KEY
MONGODB_URI=your_mongodb_connection_string
PORT=8080
```

### 🔐 `e_commerce_app_client/.env`

```
REACT_APP_BACKEND_IP=ip_backend:8080 - Point to backend server
```

> ⚠️ `.env` files are git-ignored and must be set up manually.

---

## 🧪 Running the App Locally

In one terminal, start the backend:

```bash
cd server
npm run dev
```

In another terminal, start the frontend:

```bash
cd client
npm start
```

By default:

* Client runs on [http://localhost:3000](http://localhost:3000)
* Backend runs on [http://localhost:8080](http://localhost:8080)

---

## 🛠️ Scripts Overview

| Location | Command       | Description                |
| -------- | ------------- | -------------------------- |
| client/  | `npm start`   | Starts React app           |
| server/  | `npm run dev` | Starts server with nodemon |

---

## 📦 Deployment (Optional)

You can deploy the app to platforms like:

* **Frontend**: AWS Amplify, Netlify, or Vercel
* **Backend**: Render, Railway, or Heroku
* **Database**: MongoDB Atlas

Deployment instructions will depend on the platform.

---

## 🙌 Contributions

Feel free to fork this repo, submit PRs, or use it as a boilerplate for your own MERN projects!

---

## 📄 License

[MIT](LICENSE)

```

---
