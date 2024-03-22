import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ClientsPage from './pages/ClientPage';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import './App.css'

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/clients" element={<ClientsPage />} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;