import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export default function Navbar({ onNavigate, currentPage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setIsOpen(false);
  };

  const navItems = [
    { id: 'why-us', label: 'Why Us?' },
    { id: 'about', label: 'About' },
    { id: 'program-details', label: 'Program Details' }
  ];

  return (
    <>
      <motion.nav
        className={`fixed w-full z-50 top-0 transition-all duration-300 nav-height ${
          isScrolled 
            ? 'bg-black/30 backdrop-blur-md backdrop-saturate-150 border-b border-white/10 shadow-lg'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button 
                className="text-xl sm:text-2xl font-bold text-gradient cursor-pointer z-50 relative" 
                onClick={() => handleNavigate('home')}
              >
                CSA
              </button>
            </motion.div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-6 lg:space-x-8">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => handleNavigate(item.id)}
                    className={`transition-colors text-sm lg:text-base ${
                      currentPage === item.id
                        ? 'text-white font-semibold'
                        : 'text-gray-300 hover:text-white'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
                <motion.button
                  onClick={() => handleNavigate('login')}
                  className="btn-primary text-sm lg:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  Sign in
                </motion.button>
              </div>
            </div>
            
            <div className="md:hidden">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white transition-colors p-2 z-50 relative"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop blur layer */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-xl backdrop-saturate-150" />
            
            {/* Content */}
            <motion.div
              className="relative h-full flex flex-col pt-24 px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="space-y-3">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => handleNavigate(item.id)}
                    className={`block w-full px-4 py-3 rounded-lg text-left transition-colors ${
                      currentPage === item.id
                        ? 'text-white font-semibold bg-white/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
              
              <motion.div
                className="mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <button
                  onClick={() => handleNavigate('login')}
                  className="btn-primary w-full"
                >
                  Sign in
                </button>
              </motion.div>

              <div className="mt-auto pb-8">
                <motion.div
                  className="text-center text-gray-400 text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  © 2024 CSA. All rights reserved.
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
