const Student = require('../models/student.js')

// Отримання всіх студентів
async function getStudents(req, res) {
	try {
		const students = await Student.find()
		return res.status(200).json(students)
	} catch (error) {
		return res.status(500).json({ error: 'Internal Server Error' })
	}
}

// Створення нового студента
async function createStudent(req, res) {
	const { studentId, name, surname, group, course } = req.body
	try {
		const student = new Student({ studentId, name, surname, group, course })
		const newStudent = await student.save()
		return res.status(201).json(newStudent)
	} catch (error) {
		return res.status(400).json({ error: 'Incorrect fields found' })
	}
}

// Редагування, або створення нового студента
async function modifyStudent(req, res) {
	const { id, name, surname, group, course } = req.body
	try {
		const updatedStudent = await Student.findByIdAndUpdate(
			id,
			{ name, surname, group, course },
			{ new: true }
		)
		if (!updatedStudent) {
			return res.status(404).json({ error: 'Student not found' })
		}
		return res.status(200).json(updatedStudent)
	} catch (error) {
		return res.status(400).json({ error: 'Incorrect fields found' })
	}
}

// Видалення одного студента
async function deleteStudent(req, res) {
	const studentId = req.params.id
	try {
		const deletedStudent = await Student.findOneAndDelete(studentId)
		if (!deletedStudent) {
			return res.status(404).json({ error: 'Student not found' })
		}
		return res.status(200).json(deletedStudent)
	} catch (error) {
		return res.status(500).json({ error: 'Internal Server Error' })
	}
}

// Отримання одного студента
async function getStudent(req, res) {
	const studentId = req.params.id
	try {
		const student = await Student.findById(studentId)
		if (!student) {
			return res.status(404).json({ error: 'Student not found' })
		}
		return res.status(200).json(student)
	} catch (error) {
		return res.status(500).json({ error: 'Internal Server Error' })
	}
}

module.exports = {
	getStudents,
	createStudent,
	modifyStudent,
	getStudent,
	deleteStudent,
}
