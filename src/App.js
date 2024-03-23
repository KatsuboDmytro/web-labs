import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './blocks/header/Header';
import { Footer } from './blocks/footer/Footer';
import { Contacts } from './pages/contacts/Contacts';
import { Abiture } from './pages/abiture/Abiture';
import { About } from './pages/about/About';
import { ISIC } from './pages/isic/ISIC';
import { Shop } from './pages/shop/Shop';
import { Student } from './pages/student/Student';

export const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/abiture" element={<Abiture />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/isic" element={<ISIC />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/student" element={<Student />} />
      </Routes>
      <Footer />
    </Router>
  )
}
