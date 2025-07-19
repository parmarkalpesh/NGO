
# 🌍 NGOConnect


**NGOConnect** is a full‑stack web platform built to connect people with a purpose — enabling donations, volunteering, and support for **poor people and underprivileged children**.  
This project bridges the gap between **donors**, **NGOs**, and **those in need**, helping create a more compassionate and connected world.

---

## ✨ Features

- 🔗 **Easy Donation** – Contribute food, clothes, books, and money to verified NGOs.
- 📅 **Event Listings** – View and participate in local charity events and campaigns.
- 🧒 **Child Support** – Sponsor education and health for children in need.
- 📍 **Location-Based Services** – Discover nearby NGOs and donation drives.
- ✉️ **Contact System** – Reach out to support teams or NGOs directly.
- 🌐 **Responsive Design** – Works seamlessly on mobile, tablet, and desktop.
- 🗄️ **Database Connectivity** – All donation details, events, and user data are stored in a MongoDB database through a Node.js/Express backend.

---

## 🛠️ Tech Stack

### Frontend
- ⚛️ **React JS** – User interface
- 🎨 **Tailwind CSS** – Styling
- 🌐 **React Router DOM** – Navigation
- 📁 **Public Assets** – Images & Media

### Backend
- 🟢 **Node.js** with **Express.js** – Server & API
- 📦 **Mongoose** – MongoDB object modeling
- 🛢️ **MongoDB Atlas** (or local MongoDB) – Database for storing donations, users, and NGO information

---

## 📸 Screenshots

Here are some screenshots of the project in action:

### ✅ Home Page
<img width="1900" height="2525" alt="Home Page Screenshot" src="https://github.com/user-attachments/assets/9b793603-23fd-4f93-84aa-a088c9f60403" />

---

## 🚀 Getting Started

### ✅ Prerequisites
Before running this project locally, make sure you have:
- Node.js (v16 or above recommended)
- npm or yarn installed
- MongoDB Atlas account **or** local MongoDB server running

---

### 🔧 Installation & Setup

#### 1️⃣ Clone the repository
```bash
git clone https://github.com/parmarkalpesh/NGO.git
cd ngoconnect
````

#### 2️⃣ Install frontend dependencies

```bash
cd client
npm install
```

#### 3️⃣ Install backend dependencies

```bash
cd ../server
npm install
```

#### 4️⃣ Set up environment variables

Create a `.env` file in the `server` folder with the following:

```
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/<databaseName>
```

#### 5️⃣ Run the backend

```bash
cd server
npm start
```

#### 6️⃣ Run the frontend

Open a new terminal:

```bash
cd client
npm start
```

✅ **Frontend** will run on: `http://localhost:5173` (or your configured port)
✅ **Backend API** will run on: `http://localhost:5000`

---

## 🗄️ Example Database Structure

| Collection    | Fields                                          |
| ------------- | ----------------------------------------------- |
| **users**     | name, email, phone, password, role              |
| **donations** | donorName, phone, date, location, items, amount |
| **events**    | eventName, description, date, location          |

> You can modify or expand these schemas inside `server/models`.

---

## 🤝 Contact

📬 **For collaboration, support, or questions, reach out to:**

**Kalpesh Parmar**
📧 Email: [kalpeshparmar1586@gmail.com](mailto:kalpeshparmar1586@gmail.com)
🌐 Website: [kalpeshparmar.me](https://www.kalpeshparmar.me/)

---

⭐ **If you like this project, please star the repository on GitHub to show your support!**

---

If you want, I can also:
✅ Provide sample `server.js` and MongoDB model code,  
✅ Help with backend routes (`/donations`, `/events`, etc.),  
✅ Or add more screenshots sections.  

Just let me know! 🚀
