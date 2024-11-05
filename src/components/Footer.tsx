import { Github, Twitter, Instagram, Linkedin } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="text-white font-bold mb-4">About CSA</h4>
            <ul className="space-y-2">
              <li><a href="#why" className="text-gray-400 hover:text-white">Why us?</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
              <li><button onClick={() => window.location.hash = '#program'} className="text-gray-400 hover:text-white">Program details</button></li>
              <li><a href="#club" className="text-gray-400 hover:text-white">CSA Club</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Learn</h4>
            <ul className="space-y-2">
              <li><a href="#signin" className="text-gray-400 hover:text-white">Sign in</a></li>
              <li><a href="#questions" className="text-gray-400 hover:text-white">Questions</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contact Us</a></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
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