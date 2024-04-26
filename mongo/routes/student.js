const express = require('express');
const router = express.Router();
const { getStudents, createStudent, modifyStudent, getStudent, deleteStudent } = require('../controllers/student.js');

// Отримання всіх студентів
router.get('/students', getStudents);

// Створення нового студента
router.post('/students', createStudent);

// Редагування, або створення нового студента
router.put('/students', modifyStudent);

// Отримання одного студента за ідентифікатором
router.get('/students/:id', getStudent);

// Видалення одного студента
router.delete('/students/:id', deleteStudent);

module.exports = router;
