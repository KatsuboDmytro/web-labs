import './header.scss'

export const Header = () => {
  return (
    <header className='header container'>
      <a href="#" className="header__logo"></a>
      <ul className='header__ul'>
        <li className="header__list">
          <a href="#" className="header__link">Про нас</a>
        </li>
        <li className="header__list">
          <a href="#" className="header__link">Для абітурієнта</a>
        </li>
        <li className="header__list">
          <a href="#" className="header__link">Для студента</a>
        </li>
        <li className="header__list">
          <a href="#" className="header__link">ISIC</a>
        </li>
        <li className="header__list">
          <a href="#" className="header__link">analyst shop</a>
        </li>
        <li className="header__list">
          <a href="#" className="header__link">Контакти</a>
        </li>
      </ul>
    </header>
  )
}
