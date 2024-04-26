const express = require('express');
const app = express();
const cors = require('cors');
// const limiter = require('../src/middleware/requestLimit.js')
// const logs = require('../src/middleware/requestResponseLogs.js')

// Підключення до бази даних
require('./db');
app.use(express.json());

// middleware для логування з таймстампами
// app.use(logs);

// // middleware для створення rate limit
// app.use(limiter);

// Додавання CORS middleware
app.use(cors());

// Використання маршрутів
const postsRouter = require('./routes/student.js');
app.use(postsRouter);

// Запуск сервера
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));