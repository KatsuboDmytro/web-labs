import './footer.scss'

export const Footer = () => {
  return (
    <footer className="footer container">
      <div className="footer__box">
        <a href="#" className="footer__logo"></a>
        <ul className='footer__ul'>
          <li className="footer__list">
            <a href="#" className="footer__link">Про нас</a>
          </li>
          <li className="footer__list">
            <a href="#" className="footer__link">Для абітурієнта</a>
          </li>
          <li className="footer__list">
            <a href="#" className="footer__link">Для студента</a>
          </li>
          <li className="footer__list">
            <a href="#" className="footer__link">ISIC</a>
          </li>
          <li className="footer__list">
            <a href="#" className="footer__link">analyst shop</a>
          </li>
          <li className="footer__list">
            <a href="#" className="footer__link">Контакти</a>
          </li>
        </ul>
        <div className="footer__social">
          <a href="#" className="footer__insta"></a>
          <a href="#" className="footer__telega"></a>
          <a href="#" className="footer__face"></a>
        </div>
      </div>
      <span className="footer__rights">© IASA Student Council. All Rights Reserved.</span>
    </footer>
  )
}
