import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import WhyUsPage from './pages/WhyUsPage';
import ProgramDetailsPage from './pages/ProgramDetailsPage';
import LoginPage from './pages/LoginPage';
import QuestionPage from './pages/QuestionPage';
import ClubPage from './pages/ClubPage';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';

export default function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/why-us" element={<WhyUsPage />} />
          <Route path="/program-details" element={<ProgramDetailsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/question" element={<QuestionPage />} />
          <Route path="/club" element={<ClubPage />} />
        </Routes>
        <Newsletter />
        <Footer />
      </div>
    </Router>
  );
}