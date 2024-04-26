const express = require('express');
const app = express();
const limiter = require('express-rate-limit');
const authRoutes = require('./routes/auth');
const carsRoutes = require('./routes/cars');
const { authenticateToken } = require('./middleware/auth');

// Використання маршрутів автентифікації
app.use('/', authRoutes);

// Маршрути для автомобілів, автентифікація потрібна
app.use('/api', authenticateToken, carsRoutes);

// Додатковий код та маршрути для вашого додатку...
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
