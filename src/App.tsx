import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import FAQ from './components/FAQ';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Login from './components/Login';
import QuestionForm from './components/QuestionForm';
import ProgramDetails from './components/ProgramDetails';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="bg-black min-h-screen">
      <Navbar onNavigate={setCurrentPage} />
      {currentPage === 'login' ? (
        <Login />
      ) : currentPage === 'question' ? (
        <QuestionForm />
      ) : (
        <>
          <Hero />
          <Features />
          <FAQ onNavigate={setCurrentPage} />
          <Newsletter />
          <Footer />
        </>
      )}
    </div>
  );
}