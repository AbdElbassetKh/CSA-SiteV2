import { ArrowRight } from 'lucide-react';

function Hero() {
  return (
    <div className="relative bg-black min-h-screen pt-16">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Computer Science</span><br />
              & Automation
            </h1>
            <p className="text-gray-400 text-xl mb-8 leading-relaxed">
              Hybrid Double Diplomation in Faculty of Technology in
              <span className="block font-semibold text-gray-300">
                Badji Mokhtar Annaba University
              </span>
            </p>
            <div className="flex gap-4">
              <button className="btn-primary flex items-center gap-2 group">
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-secondary">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="relative animate-slide-up">
            <div className="relative z-10 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-xl" />
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600&h=400"
                alt="Programming interface"
                className="relative z-10 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600/20 rounded-full blur-2xl" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-600/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;