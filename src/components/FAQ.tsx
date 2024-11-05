import { useState } from 'react';
import { Plus, Minus, Send } from 'lucide-react';

interface FAQProps {
  onNavigate: (page: string) => void;
}

function FAQ({ onNavigate }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What are the admission requirements?",
      answer: "Requirements include a high school diploma with strong mathematics and science backgrounds."
    },
    {
      question: "How long is the program?",
      answer: "The program is a double diplomation that typically takes 3 years to complete."
    },
    {
      question: "Is there a possibility to complete the master's degree?",
      answer: "Yes, there is a possibility to complete the master's degree in one of the two specializations, or both when the dual master's degree becomes available soon."
    },
    {
      question: "What career paths can I pursue?",
      answer: "Graduates can pursue careers in software development, automation engineering, AI, and more."
    },
    {
      question: "Is financial aid available?",
      answer: "Yes, various financial aid options and scholarships are available for eligible students."
    }
  ];

  return (
    <div className="bg-black py-20" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          Frequently Asked <span className="text-gradient">Questions</span>
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="card border-gray-800/30">
              <button
                className="w-full flex justify-between items-center text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-medium text-white">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-blue-500 shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-blue-500 shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="mt-4 text-gray-400 leading-relaxed animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button 
            onClick={() => onNavigate('question')}
            className="btn-primary flex items-center gap-2 mx-auto group"
          >
            Ask your question
            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default FAQ;