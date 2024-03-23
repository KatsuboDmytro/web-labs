import './mate.scss';

export const Mate = ({ ...person }) => {
  const am = [{
    name: 'Ihor',
    surname: 'Sikorsky',
    course: '3',
    group: 'KA-12',
    habari: '5000$',
}];

  return (
    <article className='person'>
      <h3 className="person__fullname"></h3>
      <span className="person__edu"></span>
      <span className="person__habari"></span>
    </article>
  )
}
