import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Mate } from '../../blocks/mate/Mate';
import './student.scss';

export const Student = () => {
  const [student, setStudent] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/students')
    .then(response => {
      setStudent(response.data);
    })
    .catch(error => {
      console.error('Помилка отримання даних з API:', error);
    });
  }, []);

  return (
    <section className='student container'>
      {student.map(person => (
        <Mate person={person} />
      ))}
    </section>
  )
}
