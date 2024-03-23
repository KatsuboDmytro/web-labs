import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './header.scss';

export const Header = () => {
  return (
    <header className='header container'>
      <Link to="/" className="header__logo"></Link> {/* Use Link instead of <a> */}
      <ul className='header__ul'>
        <li className="header__list">
          <Link to="/" className="header__link">Про нас</Link> {/* Use Link instead of <a> */}
        </li>
        <li className="header__list">
          <Link to="/abiture" className="header__link">Для абітурієнта</Link> {/* Use Link instead of <a> */}
        </li>
        <li className="header__list">
          <Link to="/student" className="header__link">Для студента</Link> {/* Use Link instead of <a> */}
        </li>
        <li className="header__list">
          <Link to="/isic" className="header__link">ISIC</Link> {/* Use Link instead of <a> */}
        </li>
        <li className="header__list">
          <Link to="/shop" className="header__link">analyst shop</Link> {/* Use Link instead of <a> */}
        </li>
        <li className="header__list">
          <Link to="/contacts" className="header__link">Контакти</Link> {/* Use Link instead of <a> */}
        </li>
      </ul>
    </header>
  );
};
