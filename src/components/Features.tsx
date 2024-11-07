import { Code2, Cpu, BookOpen, ArrowRight } from 'lucide-react';
import { AnimatedCard } from './AnimatedCard';
import { motion } from 'framer-motion';

interface FeaturesProps {
  onNavigate: (page: string) => void;
}

function Features({ onNavigate }: FeaturesProps) {
  const features = [
    {
      title: "Computer Science, Automation?",
      icon: <Code2 className="w-6 h-6 text-blue-500" />,
      description: "Learn the fundamentals of computer science and automation engineering.",
      action: "about"
    },
    {
      title: "What subjects are taught?",
      icon: <BookOpen className="w-6 h-6 text-blue-500" />,
      description: "Comprehensive curriculum covering programming, AI, robotics, and more.",
      action: "program-details"
    },
    {
      title: "Why CSA is the best?",
      icon: <Cpu className="w-6 h-6 text-blue-500" />,
      description: "Industry-aligned curriculum with hands-on practical experience.",
      action: "why-us"
    }
  ];

  return (
    <div className="bg-black/95 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedCard key={index} delay={index * 0.2}>
              <motion.div 
                className="card group cursor-pointer backdrop-blur-none"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onNavigate(feature.action)}
              >
                <div className="mb-4 p-3 bg-blue-500/10 w-fit rounded-lg">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{feature.description}</p>
                <div className="text-blue-500 hover:text-blue-400 flex items-center gap-2 group">
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;