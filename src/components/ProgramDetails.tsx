import { BookOpen, Calendar, GraduationCap, Clock } from 'lucide-react';

export default function ProgramDetails() {
  return (
    <div className="bg-black py-20" id="program">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Program <span className="text-gradient">Structure</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our comprehensive three-year program is designed to give you both theoretical knowledge and practical skills in computer science and automation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Year Cards */}
          {years.map((year, index) => (
            <div key={index} className="card">
              <div className="mb-4 p-3 bg-blue-500/10 w-fit rounded-lg">
                <Calendar className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{year.title}</h3>
              <p className="text-gray-400 mb-4">{year.description}</p>
              <div className="space-y-2">
                {year.subjects.map((subject, idx) => (
                  <div key={idx} className="flex items-center text-gray-300">
                    <BookOpen className="w-4 h-4 mr-2 text-blue-500" />
                    <span>{subject}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold">Duration</h3>
                <p className="text-gray-400">Total Program Length</p>
              </div>
              <Clock className="w-8 h-8 text-blue-500" />
            </div>
            <p className="text-2xl font-bold text-gradient">3 Years</p>
          </div>

          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold">Degree</h3>
                <p className="text-gray-400">Upon Completion</p>
              </div>
              <GraduationCap className="w-8 h-8 text-blue-500" />
            </div>
            <p className="text-2xl font-bold text-gradient">Bachelor's Degree</p>
          </div>

          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold">Specializations</h3>
                <p className="text-gray-400">Focus Areas</p>
              </div>
              <BookOpen className="w-8 h-8 text-blue-500" />
            </div>
            <p className="text-2xl font-bold text-gradient">2 Tracks</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const years = [
  {
    title: "First Year",
    description: "Foundation in mathematics, programming fundamentals, and basic engineering principles.",
    subjects: [
      "Mathematics & Statistics",
      "Programming Fundamentals",
      "Digital Logic",
      "Computer Architecture",
      "Basic Electronics"
    ]
  },
  {
    title: "Second Year",
    description: "Advanced programming concepts and introduction to automation systems.",
    subjects: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Database Systems",
      "Control Systems",
      "Automation Fundamentals"
    ]
  },
  {
    title: "Third Year",
    description: "Specialized courses in computer science and automation engineering.",
    subjects: [
      "Artificial Intelligence",
      "Machine Learning",
      "Robotics",
      "Industrial Automation",
      "Project Management"
    ]
  }
];