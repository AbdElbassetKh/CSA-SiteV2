import { motion } from 'framer-motion';
import { Code2, Users, Rocket, Calendar, Award, ArrowRight, Github, Laptop, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ClubPage() {
  const activities = [
    {
      icon: <Code2 className="w-6 h-6 text-blue-500" />,
      title: "Coding Workshops",
      description: "Weekly hands-on sessions covering modern programming languages and frameworks."
    },
    {
      icon: <Brain className="w-6 h-6 text-blue-500" />,
      title: "AI & Robotics Lab",
      description: "Practical experience with machine learning models and robotics projects."
    },
    {
      icon: <Users className="w-6 h-6 text-blue-500" />,
      title: "Networking Events",
      description: "Connect with industry professionals and alumni in tech and automation."
    },
    {
      icon: <Rocket className="w-6 h-6 text-blue-500" />,
      title: "Hackathons",
      description: "Regular hackathons to build innovative solutions for real-world problems."
    },
    {
      icon: <Laptop className="w-6 h-6 text-blue-500" />,
      title: "Tech Talks",
      description: "Monthly sessions featuring guest speakers from leading tech companies."
    },
    {
      icon: <Github className="w-6 h-6 text-blue-500" />,
      title: "Open Source",
      description: "Contribute to open-source projects and build your portfolio."
    }
  ];

  const upcomingEvents = [
    {
      date: "March 15, 2024",
      title: "Web3 Development Workshop",
      location: "Lab 204, CS Building"
    },
    {
      date: "March 20, 2024",
      title: "Industry Talk: Future of Automation",
      location: "Main Auditorium"
    },
    {
      date: "April 1, 2024",
      title: "Spring Hackathon 2024",
      location: "Innovation Hub"
    }
  ];

  return (
    <div className="bg-black min-h-screen pt-32 pb-16">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Welcome to <span className="text-gradient">CSA Club</span>
          </motion.h1>
          <motion.p 
            className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join a community of passionate students exploring the frontiers of computer science and automation technology
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button className="btn-primary flex items-center gap-2 group">
              Join the Club
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <Link to="/question" className="btn-secondary">
              Contact Us
            </Link>
          </motion.div>
        </div>

        {/* Club Activities */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Club <span className="text-gradient">Activities</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                className="card group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-3 bg-blue-500/10 rounded-lg w-fit mb-4">
                  {activity.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{activity.title}</h3>
                <p className="text-gray-400">{activity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Upcoming <span className="text-gradient">Events</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                className="card group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg">
                    <Calendar className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-blue-500 text-sm mb-1">{event.date}</p>
                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                    <p className="text-gray-400 text-sm">{event.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="card backdrop-blur-xl border-gray-800/50 text-center p-12">
          <Award className="w-12 h-12 text-blue-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6">
            Why Join <span className="text-gradient">CSA Club?</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left mt-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Skill Development</h3>
              <p className="text-gray-400">Enhance your technical skills through practical workshops and projects</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Networking</h3>
              <p className="text-gray-400">Connect with industry professionals and like-minded students</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Career Opportunities</h3>
              <p className="text-gray-400">Access exclusive internship and job opportunities</p>
            </div>
          </div>
          <button className="btn-primary mt-8">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
}