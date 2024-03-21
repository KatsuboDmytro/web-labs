import './contacts.scss'

export const Contacts = () => {
  return (
    <section className="contacts container">
      <h1 className="contacts__title">Контакти</h1>

      <div className="contacts__info">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1270.2773246480988!2d30.463242530822765!3d50.44939550153036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce831a5f0a9f%3A0x2638f51383c63258!2z0IbQvdGB0YLQuNGC0YPRgiDQv9GA0LjQutC70LDQtNC90L7Qs9C-INGB0LjRgdGC0LXQvNC90L7Qs9C-INCw0L3QsNC7adC30YM!5e0!3m2!1suk!2sua!4v1711058213703!5m2!1suk!2sua"
          width="645"
          height="450"
          style={{ border: '0', borderRadius: '30px' }}
          allowFullScreen=""
          loading="lazy"
          className='contacts__map'
          title='iasa-35'
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <aside className="contacts__contacts">
          <div className="contacts__adresses">
            <a href="mail:studrada@gmail.com" className="contacts__link">studrada@gmail.com</a>
            <a href="tel:+38 (044) 599-52-67" className="contacts__link">Тел.:  +38 (044) 599-52-67</a>
            <a href="tel:+38 (044) 406-84-07" className="contacts__link">Тел./факс: +38 (044) 406-84-07</a>
          </div>
          <div className="contacts__social">
            <a href="#" className="contacts__insta"></a>
            <a href="#" className="contacts__face"></a>
            <a href="#" className="contacts__youtube"></a>
          </div>
        </aside>
      </div>
    </section>
  )
}
