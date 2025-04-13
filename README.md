
# Project Title

# 📈 Stock Portfolio Manager

A full-stack web application that allows users to **view and manage live stock prices** in their personal portfolio. This project uses **Angular** for the frontend, **Spring Boot** for the backend, and **MongoDB** as the database.

---

## 🚀 Features

- 🔐 User Authentication (Login/Logout)
- 📈 Display live stock prices
- ➕ Add/Remove stocks to/from your portfolio
- 🧲 Store user data and stock history in MongoDB
- 🔄 Real-time updates for portfolio value
- 📁 Environment variables securely managed using `.env`
- 🎯 Clean folder structure with modular code

---

## 📂 Folder Structure

```
springBootStocks/
│
├── backend/                         # Spring Boot backend
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/yourapp/
│   │   │   │   ├── controller/
│   │   │   │   ├── model/
│   │   │   │   ├── repository/
│   │   │   │   ├── service/
│   │   │   │   └── Application.java
│   │   └── resources/
│   │       ├── application.properties
│   │       └── static/
│
├── frontend/                        # Angular frontend
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   ├── services/
│   │   │   └── app.module.ts
│   │   └── environments/
│   └── angular.json
│
├── .gitignore
├── README.md
└── .env                             # Contains sensitive env variables (excluded via .gitignore)
```

---

## 🛠️ Technologies Used

### Frontend
- Angular 16+
- TypeScript
- RxJS
- SCSS/CSS

### Backend
- Spring Boot 3+
- Java 17
- Spring Web
- Spring Data MongoDB
- JWT (if used)

### Database
- MongoDB (local or cloud)

---

## 🔧 Setup Instructions

### Prerequisites
- Node.js and npm
- Java 17+
- MongoDB (installed or Atlas)
- Angular CLI (`npm install -g @angular/cli`)

### Clone the Repo
```bash
git clone https://github.com/yourusername/springBootStocks.git
cd springBootStocks
```

### Setup Backend
```bash
cd backend
./mvnw spring-boot:run
```

> Make sure MongoDB is running before starting Spring Boot.

### Setup Frontend
```bash
cd frontend
npm install
ng serve
```

Navigate to `http://localhost:4200` to view the app.

---

## 📄 Sample MongoDB Test Data

```json
{
  "username": "demoUser",
  "stocks": [
    {
      "symbol": "AAPL",
      "quantity": 5,
      "price": 180
    },
    {
      "symbol": "GOOGL",
      "quantity": 2,
      "price": 2750
    }
  ]
}
```

Insert this manually via MongoDB Compass or your seeder logic.

---

## 🐞 Common Errors & Fixes

### ❌ `MongoClientImpl.getStreamFactory` method not found?
✔️ **Solution**: Downgrade or upgrade your MongoDB Java driver to match the Spring Data MongoDB compatibility.

---

## 🥪 Testing

- Use Postman to test API endpoints
- Login flow can be verified from Angular UI
- Add and remove stock operations can be tested via Angular and MongoDB Compass

---

## ✅ Future Plans

- ✅ Pagination and filtering of stock history
- ✅ Integration with external APIs for real-time market data
- 📋 Chart visualizations using Chart.js or ApexCharts
- 🚜 Email alerts for stock performance
- 📱 Mobile responsive UI

---

## 👨‍💼 Developer

**Rajan Sapkota**  
📧 [Your email or portfolio link]  
🐙 GitHub: [yourusername](https://github.com/yourusername)

---

## 📜 License

MIT License. See `LICENSE` file for details.
