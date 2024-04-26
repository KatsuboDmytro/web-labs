import axios from 'axios';
import './mate.scss';

export const Mate = ({ person, fetchStudents }) => {
  const fullname = `${person.name} ${person.surname}`;

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3001/students/${person.studentId}`);
    } catch (error) {
      console.error('Error deleting student:', error);
    }
    fetchStudents();
  };

  return (
    <article className='person'>
      <div className="person-info">
        <h3 className="person__fullname">{fullname}</h3>
        <span className="person__edu">Course: {person.course}, Group: {person.group}</span>
      </div>
      <span className="delete-button" onClick={handleDelete}>x</span>
    </article>
  )
}
