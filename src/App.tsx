import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhyUs from './components/WhyUs';
import Features from './components/Features';
import FAQ from './components/FAQ';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Login from './components/Login';
import QuestionForm from './components/QuestionForm';
import ProgramDetails from './components/ProgramDetails';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <Login />;
      case 'question':
        return <QuestionForm />;
      case 'program-details':
        return (
          <>
            <ProgramDetails />
            <Newsletter />
            <Footer onNavigate={handleNavigation} />
          </>
        );
      case 'about':
        return (
          <>
            <About />
            <Newsletter />
            <Footer onNavigate={handleNavigation} />
          </>
        );
      case 'why-us':
        return (
          <>
            <WhyUs />
            <Newsletter />
            <Footer onNavigate={handleNavigation} />
          </>
        );
      default:
        return (
          <>
            <Hero onNavigate={handleNavigation} />
            <Features onNavigate={handleNavigation} />
            <FAQ onNavigate={handleNavigation} />
            <Newsletter />
            <Footer onNavigate={handleNavigation} />
          </>
        );
    }
  };

  return (
    <div className="bg-black min-h-screen">
      <Navbar onNavigate={handleNavigation} currentPage={currentPage} />
      {renderPage()}
    </div>
  );
}