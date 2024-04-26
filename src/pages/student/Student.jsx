import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Mate } from '../../blocks/mate/Mate';
import './student.scss';

export const Student = () => {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({
    studentId: null,
    name: '',
    surname: '',
    group: '',
    course: ''
  });

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get('http://localhost:3001/students');
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newStudent = {
        studentId: + new Date(),
        name: formData.name,
        surname: formData.surname,
        group: formData.group,
        course: formData.course
      };
  
      await axios.post('http://localhost:3001/students', newStudent);
      setFormData({
        studentId: + new Date(),
        name: '',
        surname: '',
        group: '',
        course: 0
      });
      fetchStudents();
    } catch (error) {
      console.error('Error creating student:', error);
    }
  };

  return (
    <section className='student container'>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Name" required />
        <input type="text" name="surname" value={formData.surname} onChange={handleInputChange} placeholder="Surname" required />
        <input type="text" name="group" value={formData.group} onChange={handleInputChange} placeholder="Group" required />
        <input type="text" name="course" value={formData.course} onChange={handleInputChange} placeholder="Course" required />
        <button type="submit">Add Student</button>
      </form>
      {students.filter((mate) => mate.studentId !== undefined).map(person => (
        <Mate key={person.studentId} person={person} fetchStudents={fetchStudents} />
      ))}
    </section>
  )
}
