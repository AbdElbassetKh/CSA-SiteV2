import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onNavigate: (page: string) => void;
}

function Hero({ onNavigate }: HeroProps) {
  return (
    <div className="relative bg-black min-h-screen pt-16">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <motion.span
                className="text-gradient inline-block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Computer Science
              </motion.span>
              <br />
              <motion.span
                className="inline-block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                & Automation
              </motion.span>
            </h1>
            <motion.p
              className="text-gray-400 text-xl mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Hybrid Double Diplomation in Faculty of Technology in
              <span className="block font-semibold text-gray-300">
                Badji Mokhtar Annaba University
              </span>
            </motion.p>
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.button
                onClick={() => onNavigate('program-details')}
                className="btn-primary flex items-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                onClick={() => onNavigate('about')}
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative z-10 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-xl" />
              <motion.img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600&h=400"
                alt="Programming interface"
                className="relative z-10 rounded-2xl shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600/20 rounded-full blur-2xl" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-600/20 rounded-full blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;