import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

interface NavbarProps {
  onNavigate: (page: string) => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 top-0 transition-all duration-200 ${
      isScrolled ? 'bg-black/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span 
              className="text-2xl font-bold text-gradient cursor-pointer" 
              onClick={() => onNavigate('home')}
            >
              CSA
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#why" className="text-gray-300 hover:text-white transition-colors">Why us?</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
              <button 
                onClick={() => onNavigate('program-details')}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Program details
              </button>
              <button 
                onClick={() => onNavigate('login')} 
                className="btn-primary"
              >
                Sign in
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden absolute w-full bg-black/95 backdrop-blur-md animate-fade-in">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <a href="#why" className="block text-gray-300 hover:text-white px-3 py-2 rounded-md">Why us?</a>
            <a href="#about" className="block text-gray-300 hover:text-white px-3 py-2 rounded-md">About</a>
            <button 
              onClick={() => {
                onNavigate('program-details');
                setIsOpen(false);
              }}
              className="block text-gray-300 hover:text-white px-3 py-2 rounded-md w-full text-left"
            >
              Program details
            </button>
            <button 
              onClick={() => {
                onNavigate('login');
                setIsOpen(false);
              }} 
              className="btn-primary w-full mt-2"
            >
              Sign in
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}