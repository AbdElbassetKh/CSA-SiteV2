import { BookOpen, Calendar, GraduationCap, Clock, ChevronDown, ChevronUp, Calculator, FlaskConical } from "lucide-react";
import { useState } from "react";
import { Card } from "../components/ui/card";

interface Course {
  name: string;
  coefficient: number;
  credits: number;
  continuous: number;
  exam: number;
  isPrerequisite?: boolean;
}

interface Semester {
  name: string;
  courses: Course[];
}

interface YearData {
  title: string;
  description: string;
  semesters: Semester[];
}

export default function ProgramDetails() {
  const [expandedYear, setExpandedYear] = useState<number | null>(null);

  const yearData: YearData[] = [
    {
      title: "First Year",
      description: "Foundation in mathematics, programming fundamentals, and basic engineering principles.",
      semesters: [
        {
          name: "Semester 01",
          courses: [
            { name: "Analysis 1", coefficient: 4, credits: 7, continuous: 50, exam: 50, isPrerequisite: true },
            { name: "Algebra 1", coefficient: 4, credits: 7, continuous: 50, exam: 50, isPrerequisite: true },
            { name: "Algorithmique et structure de données 1", coefficient: 4, credits: 7, continuous: 50, exam: 50, isPrerequisite: true },
            { name: "Structure machine 1", coefficient: 4, credits: 7, continuous: 50, exam: 50, isPrerequisite: true },
            { name: "Physics 1", coefficient: 4, credits: 7, continuous: 50, exam: 50, isPrerequisite: true },
            { name: "Chemistry 1", coefficient: 4, credits: 7, continuous: 50, exam: 50, isPrerequisite: true },
            { name: "Management de projet 1", coefficient: 1, credits: 2, continuous: 100, exam: 0 },
            { name: "Technical English 1", coefficient: 1, credits: 2, continuous: 100, exam: 0 }
          ]
        },
        {
          name: "Semester 02",
          courses: [
            { name: "Analysis 2", coefficient: 4, credits: 6, continuous: 50, exam: 50, isPrerequisite: true },
            { name: "Algebra 2", coefficient: 3, credits: 6, continuous: 50, exam: 50, isPrerequisite: true },
            { name: "Algorithmique et structure de données 2", coefficient: 4, credits: 6, continuous: 50, exam: 50, isPrerequisite: true },
            { name: "Structure machine 2", coefficient: 2, credits: 4, continuous: 25, exam: 75, isPrerequisite: true },
            { name: "Probabilité et statistique", coefficient: 3, credits: 6, continuous: 50, exam: 50 },
            { name: "Programmation 2", coefficient: 4, credits: 6, continuous: 50, exam: 50, isPrerequisite: true }
          ]
        }
      ]
    },
    {
      title: "Second Year",
      description: "Advanced programming concepts, systems design, and specialization tracks.",
      semesters: [
        {
          name: "Semester 03",
          courses: [
            { name: "Fichiers et structure de données", coefficient: 4, credits: 6, continuous: 50, exam: 50 },
            { name: "Algorithmique et structure de données 3", coefficient: 3, credits: 6, continuous: 50, exam: 50 },
            { name: "Systèmes d'information", coefficient: 4, credits: 6, continuous: 50, exam: 50 },
            { name: "Théorie des graphes", coefficient: 2, credits: 4, continuous: 25, exam: 75 },
            { name: "Théorie du Signal", coefficient: 3, credits: 6, continuous: 50, exam: 50 },
            { name: "Electricité 1", coefficient: 3, credits: 6, continuous: 50, exam: 50 }
          ]
        },
        {
          name: "Semester 04",
          courses: [
            { name: "Réseaux et télécommunications", coefficient: 2, credits: 4, continuous: 50, exam: 50 },
            { name: "Système d'exploitation", coefficient: 2, credits: 4, continuous: 50, exam: 50 },
            { name: "Bases de données", coefficient: 2, credits: 4, continuous: 50, exam: 50 },
            { name: "Systèmes Asservis 1", coefficient: 2, credits: 4, continuous: 50, exam: 50 },
            { name: "Traitement du Signal", coefficient: 2, credits: 4, continuous: 50, exam: 50 },
            { name: "Programmation orienté objet", coefficient: 2, credits: 4, continuous: 50, exam: 50 }
          ]
        }
      ]
    },
    {
      title: "Third Year",
      description: "Professional specialization, advanced topics, and final year project.",
      semesters: [
        {
          name: "Semester 05",
          courses: [
            { name: "Analyse de données", coefficient: 4, credits: 6, continuous: 50, exam: 50 },
            { name: "Système d'aide à la décision", coefficient: 2, credits: 4, continuous: 50, exam: 50 },
            { name: "Méthodes de développement DevOps", coefficient: 4, credits: 6, continuous: 50, exam: 50 },
            { name: "Systèmes Asservis 2", coefficient: 2, credits: 4, continuous: 50, exam: 50 },
            { name: "Électronique de Puissance", coefficient: 2, credits: 5, continuous: 50, exam: 50 },
            { name: "Programmation Mobile et IoT", coefficient: 2, credits: 4, continuous: 50, exam: 50 }
          ]
        },
        {
          name: "Semester 06",
          courses: [
            { name: "Apprentissage Automatique", coefficient: 3, credits: 5, continuous: 50, exam: 50 },
            { name: "Cloud Computing et visualisation", coefficient: 3, credits: 5, continuous: 50, exam: 50 },
            { name: "Gestion de projet informatique", coefficient: 3, credits: 5, continuous: 50, exam: 50 },
            { name: "Techniques de l'IA", coefficient: 3, credits: 5, continuous: 50, exam: 50 },
            { name: "Projet de Fin de Cycle", coefficient: 3, credits: 6, continuous: 100, exam: 0 }
          ]
        }
      ]
    }
  ];

  return (
    <div className="bg-black py-20" id="program">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Program <span className="text-gradient">Structure</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our comprehensive three-year program combines theoretical knowledge with practical skills in computer science and automation engineering.
          </p>
        </div>

        <div className="space-y-8">
          {yearData.map((year, index) => (
            <div 
              key={index} 
              className="rounded-lg border border-gray-800 hover:border-blue-500/50 transition-colors duration-300 bg-gray-900/30"
            >
              <div 
                className="flex justify-between items-center cursor-pointer p-6"
                onClick={() => setExpandedYear(expandedYear === index ? null : index)}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg">
                    <Calendar className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{year.title}</h3>
                    <p className="text-gray-400 mt-1">{year.description}</p>
                  </div>
                </div>
                {expandedYear === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </div>

              {expandedYear === index && (
                <div className="border-t border-gray-800 p-6">
                  {year.semesters.map((semester, semIndex) => (
                    <div key={semIndex} className="mb-8 last:mb-0">
                      <h4 className="text-lg font-semibold mb-4 text-white">{semester.name}</h4>
                      <div className="space-y-4">
                        {semester.courses.map((course, courseIndex) => (
                          <div 
                            key={courseIndex}
                            className="bg-gray-900/50 p-4 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:bg-gray-900/70 transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <BookOpen className="w-4 h-4 text-blue-500 shrink-0" />
                              <span className={`text-white ${course.isPrerequisite ? "font-medium" : ""}`}>
                                {course.name}
                                {course.isPrerequisite && (
                                  <span className="ml-2 text-xs text-blue-400">(Prerequisite)</span>
                                )}
                              </span>
                            </div>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                              <div className="flex items-center gap-2">
                                <Calculator className="w-4 h-4" />
                                <span>Coef: {course.coefficient}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <BookOpen className="w-4 h-4" />
                                <span>Credits: {course.credits}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <FlaskConical className="w-4 h-4" />
                                <span>Continuous: {course.continuous}%</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>Exam: {course.exam}%</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <Card className="p-6 bg-gray-900/30 border-gray-800">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-white">Duration</h3>
                <p className="text-gray-400">Total Program Length</p>
              </div>
              <Clock className="w-8 h-8 text-blue-500" />
            </div>
            <p className="text-2xl font-bold text-gradient">3 Years</p>
          </Card>

          <Card className="p-6 bg-gray-900/30 border-gray-800">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-white">Degree</h3>
                <p className="text-gray-400">Upon Completion</p>
              </div>
              <GraduationCap className="w-8 h-8 text-blue-500" />
            </div>
            <p className="text-2xl font-bold text-gradient">Bachelor's Degree</p>
          </Card>

          <Card className="p-6 bg-gray-900/30 border-gray-800">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-white">Specializations</h3>
                <p className="text-gray-400">Focus Areas</p>
              </div>
              <BookOpen className="w-8 h-8 text-blue-500" />
            </div>
            <p className="text-2xl font-bold text-gradient">2 Tracks</p>
          </Card>
        </div>
      </div>
    </div>
  );
}
