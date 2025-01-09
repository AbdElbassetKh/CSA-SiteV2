import { Cpu, Code2, GraduationCap, Briefcase, Users, Globe } from 'lucide-react';

function WhyUs() {
  const reasons = [
    {
      icon: <Code2 className="w-6 h-6 text-blue-500" />,
      title: "Dual Expertise",
      description: "Unique combination of computer science and automation engineering, preparing you for the future of technology."
    },
    {
      icon: <Cpu className="w-6 h-6 text-blue-500" />,
      title: "Cutting-edge Curriculum",
      description: "Stay ahead with courses in AI, robotics, IoT, and advanced programming, aligned with industry demands."
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-blue-500" />,
      title: "Double Diplomation",
      description: "Earn two valuable degrees, maximizing your career opportunities and expertise."
    },
    {
      icon: <Users className="w-6 h-6 text-blue-500" />,
      title: "Expert Faculty",
      description: "Learn from industry professionals and experienced academics who bring real-world knowledge."
    },
    {
      icon: <Briefcase className="w-6 h-6 text-blue-500" />,
      title: "Career Opportunities",
      description: "High demand for graduates in automation, software development, robotics, and AI sectors."
    },
    {
      icon: <Globe className="w-6 h-6 text-blue-500" />,
      title: "Industry Connections",
      description: "Strong partnerships with leading technology companies for internships and job placements."
    }
  ];

  return (
    <div className="bg-black min-h-screen pt-32 pb-16">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Why Choose <span className="text-gradient">CSA?</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover what makes our program unique and how it prepares you for success in the digital age
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="card group">
              <div className="p-3 bg-blue-500/10 rounded-lg w-fit mb-4">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
              <p className="text-gray-400 mb-4">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="btn-primary">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;