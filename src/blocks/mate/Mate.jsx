import './mate.scss';
import sleepers from '../../images/sleep.jpg';

export const Mate = ({ person }) => {

  return (
    <article className='person'>
      <img src={sleepers} alt="sleepers" className='person__image' />
      <h3 className="person__fullname">{person.name} {person.surname} </h3>
      <span className="person__edu">Course: {person.course}, group: {person.group}</span>
      <p className="person__habari">Habari for all time: {person.habari}$</p>
    </article>
  )
}
