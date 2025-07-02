# 📊 GrowthProAI-Full-Stack-Intern-Assignment

A mini dashboard to simulate how small businesses view their SEO content and Google Business data.

Built with **React**, **Node.js**, **Zustand**, and styled with **custom CSS**.

---

## 📸 Screenshots

### 🏠 Dashboard Form

![Screenshot (544)](https://github.com/user-attachments/assets/43dc95e6-3b1e-4e8f-ad0a-95a9bf8742ec)
![Screenshot (548)](https://github.com/user-attachments/assets/a2ef6ec3-57c9-4eea-abe9-f01bf0612687)
![Screenshot (549)](https://github.com/user-attachments/assets/a53b917e-f19f-469d-afdc-b2d846e50c9a)


### ✅ Result Card with Rating & Headline

![Screenshot (545)](https://github.com/user-attachments/assets/bc39e8a9-37d9-438b-8e6a-8e67eb594526)
![Screenshot (547)](https://github.com/user-attachments/assets/d655def4-d834-422d-9577-c1f1e9e931cd)

---

## ⚙️ Installation Instructions

### 🧩 Prerequisites

- Node.js v16+
- npm v7+

---

### 📁 Project Structure

```

GrowthProAI/
│
├── client/       → React Frontend
├── server/       → Node.js + Express Backend
└── README.md     → Project Info

````

---

### Setup Instructions

#### 1. Clone the Repository

```bash
git clone https://github.com/umeshyadav7988/growthpro-dashboard.git
cd growthpro-dashboard
````

#### 2. Start Backend

```bash
cd server
npm install
node index.js
```

Runs at: `http://localhost:5000`

---

#### 3. Start Frontend

```bash
cd ../client
npm install
npm start
```

Runs at: `http://localhost:3000`

---

## Testing the Application

### Manual Test Scenarios

| Test           | Input                       | Expected Output                   |
| -------------- | --------------------------- | --------------------------------- |
| ❌ Empty Fields | `""` / `""`                 | Error message                     |
| ❌ Invalid Name | `Cake123`                   | Validation error                  |
| ✅ Valid Input  | `Cake & Co` + `Gurgaon`     | Rating, reviews, and SEO headline |
| 🔁 Regenerate  | Click "Regenerate Headline" | New headline displayed            |

---

## Features

* ✅ Form validation
* ✅ Zustand state management
* ✅ Random SEO headline generation
* ✅ Spinner during loading
* ✅ Mobile-responsive layout

---

## Tech Stack

| Layer     | Tech                |
| --------- | ------------------- |
| Frontend  | React, Zustand, CSS |
| Backend   | Node.js, Express    |
| Styling   | Vanilla CSS         |
| Dev Tools | VSCode, Postman     |

---

## Folder Overview

```
client/
  ├── App.jsx
  ├── App.css
  ├── store.js        ← Zustand global state
  └── index.js

server/
  └── index.js        ← Express backend with 2 endpoints
```

---

##  Author

* **Umesh**
* GitHub: [@umeshyadav7988](https://github.com/umeshyadav7988)
* Email: [umeshyadav7988@gmail.com](mailto:umeshyadav7988@gmail.com)

---

##  Notes

* All data is simulated (no database).
* SEO headlines are randomly generated from a static list.



