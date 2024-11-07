import { Calendar, MapPin, Users, Award, ArrowRight, BookOpen, Cpu } from 'lucide-react';

function About() {
  return (
    <div className="bg-black py-20" id="about">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            About <span className="text-gradient">CSA</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Pioneering the future of technology education at Badji Mokhtar University
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-xl" />
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800&h=600"
                alt="Modern workspace with computers"
                className="relative z-10 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600/20 rounded-full blur-2xl" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-600/20 rounded-full blur-2xl" />
            </div>
          </div>

          <div className="space-y-6">
            <div className="card border-gray-800/30 hover:border-gray-700/50">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Location</h3>
                  <p className="text-gray-400">
                    Faculty of Technology, Electronics Department<br />
                    Badji Mokhtar University, Sidi Amar<br />
                    Annaba, Algeria
                  </p>
                </div>
              </div>
            </div>

            <div className="card border-gray-800/30 hover:border-gray-700/50">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-lg">
                  <Calendar className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Established</h3>
                  <p className="text-gray-400">
                    Launched in 2023, CSA represents the newest frontier in technology education,
                    combining computer science and automation engineering.
                  </p>
                </div>
              </div>
            </div>

            <div className="card border-gray-800/30 hover:border-gray-700/50">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-lg">
                  <Award className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Exclusive Program</h3>
                  <p className="text-gray-400">
                    The only program of its kind at Badji Mokhtar University,
                    offering a unique blend of computer science and automation expertise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card hover:border-gray-700/50">
            <div className="p-3 bg-blue-500/10 rounded-lg w-fit mb-4">
              <BookOpen className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Comprehensive Curriculum</h3>
            <p className="text-gray-400 mb-4">
              Cutting-edge coursework combining theoretical knowledge with hands-on practical experience
              in both computer science and automation systems.
            </p>
            <button className="text-blue-500 hover:text-blue-400 flex items-center gap-2 group">
              Learn more
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="card hover:border-gray-700/50">
            <div className="p-3 bg-blue-500/10 rounded-lg w-fit mb-4">
              <Cpu className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Modern Facilities</h3>
            <p className="text-gray-400 mb-4">
              State-of-the-art laboratories and equipment for practical training in
              automation, robotics, and computer systems.
            </p>
            <button className="text-blue-500 hover:text-blue-400 flex items-center gap-2 group">
              Explore facilities
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="card hover:border-gray-700/50">
            <div className="p-3 bg-blue-500/10 rounded-lg w-fit mb-4">
              <Users className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Expert Faculty</h3>
            <p className="text-gray-400 mb-4">
              Learn from experienced professors and industry professionals who are
              leaders in their respective fields.
            </p>
            <button className="text-blue-500 hover:text-blue-400 flex items-center gap-2 group">
              Meet the team
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;