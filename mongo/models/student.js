const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    studentId: { type: Number},
    name: { type: String, required: true },
    surname: { type: String, required: true },
    course: { type: String, required: true },
    group: { type: String, required: true }
});
const Student = mongoose.model('Student', studentSchema);

module.exports = Student;