const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors package

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(bodyParser.json());
let students = [
  { name: "John", studentId: 1, surname: "Doe", group: "DA-11", course: 3 },
  { name: "Jane", studentId: 2, surname: "Smith", group: "DA-12", course: 2 },
  { name: "Alice", studentId: 3, surname: "Johnson", group: "DA-11", course: 4 },
  { name: "Bob", studentId: 4, surname: "Williams", group: "DA-13", course: 1 },
  { name: "Emily", studentId: 5, surname: "Brown", group: "DA-12", course: 3 },
  { name: "Michael", studentId: 6, surname: "Jones", group: "DA-11", course: 2 },
  { name: "Samantha", studentId: 7, surname: "Taylor", group: "DA-13", course: 4 },
  { name: "DavstudentId", studentId: 8, surname: "Martinez", group: "DA-12", course: 1 },
  { name: "Olivia", studentId: 9, surname: "Garcia", group: "DA-11", course: 3 },
  { name: "William", studentId: 10, surname: "Hernandez", group: "DA-13", course: 2 }
];

app.get('/students', (req, res) => {
  res.json(students);
});

app.post('/students', (req, res) => {
  const newStudent = req.body;
  students.push(newStudent);
  res.status(201).json(newStudent);
});

app.get('/students/:id', (req, res) => {
  const studentId = +req.params.studentId;
  const student = students.find(student => student.studentId === studentId);
  if (!student) {
    res.status(404).send('Студент не знайдений');
  } else {
    res.json(student);
  }
});

// Оновити інформацію про студента за його ідентифікатором
app.put('/students/:id', (req, res) => {
  const studentId = +req.params.studentId;
  const updatedStudent = req.body;
  const index = students.findIndex(student => student.studentId === studentId);
  if (index === -1) {
    res.status(404).send('Студент не знайдений');
  } else {
    students[index] = updatedStudent;
    res.json(updatedStudent);
  }
});

// Видалити студента за його ідентифікатором
app.delete('/students/:id', (req, res) => {
  const studentId = +req.params.studentId;
  students = students.filter(student => student.studentId !== studentId);
  res.status(204).send();
});

// Фільтрація за групою
app.get('/students/filter/group/:group', (req, res) => {
  const group = req.params.group;
  const filteredStudents = students.filter(student => student.group === group);
  res.json(filteredStudents);
});

// Фільтрація за курсом
app.get('/students/filter/course/:course', (req, res) => {
  const course = +req.params.course;
  const filteredStudents = students.filter(student => student.course === course);
  res.json(filteredStudents);
});

// Фільтрація за прізвищем
app.get('/students/filter/surname/:surname', (req, res) => {
  const surname = req.params.surname;
  const filteredStudents = students.filter(student => student.surname === surname);
  res.json(filteredStudents);
});

app.listen(3001, () => {
  console.log('Сервер працює на порті 3001');
});
