import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onNavigate: (page: string) => void;
}

function Hero({ onNavigate }: HeroProps) {
  return (
    <div className="relative bg-black min-h-[calc(100vh-4rem)] flex items-center">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
      
      <div className="relative w-full max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Added pt-16 for mobile to ensure content doesn't overlap with navbar */}
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center pt-16 sm:pt-20 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl lg:max-w-none mx-auto lg:mx-0 space-y-6 sm:space-y-8"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight sm:leading-tight md:leading-tight lg:leading-tight">
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
              className="text-base sm:text-lg md:text-xl text-gray-400 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Hybrid Double Diplomation in Faculty of Technology in
              <span className="block font-semibold text-gray-300 mt-2">
                Badji Mokhtar Annaba University
              </span>
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4 pt-2 sm:pt-4"
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
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
            className="relative max-w-2xl lg:max-w-none mx-auto lg:ml-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-xl" />
              <motion.img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200&h=900"
                alt="Programming interface"
                className="relative z-10 w-full h-full object-cover rounded-2xl shadow-2xl"
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
