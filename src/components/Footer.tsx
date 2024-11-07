import { Github, Twitter, Instagram, Linkedin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="text-white font-bold mb-4">About CSA</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => onNavigate('why-us')} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Why us?
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('about')} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('program-details')} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Program details
                </button>
              </li>
              <li>
                <button 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  CSA Club
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Learn</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => onNavigate('login')} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Sign in
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('question')} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Questions
                </button>
              </li>
              <li>
                <button 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
            <p className="text-gray-400 mt-4">
              © 2024 CSA. All rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;