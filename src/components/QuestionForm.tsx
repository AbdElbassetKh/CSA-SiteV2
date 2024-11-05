import { useState } from 'react';
import { Send, User, Mail, MessageSquare } from 'lucide-react';

export default function QuestionForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    question: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // In a real implementation, you'd want to use a backend service
      // This is a simple mailto link for demonstration
      const mailtoLink = `mailto:computerscienceautomation@gmail.com?subject=Question from ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AQuestion:%0D%0A${formData.question}`;
      window.location.href = mailtoLink;
      setStatus('success');
      setFormData({ name: '', email: '', question: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-black pt-32 pb-16">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
      
      <div className="relative max-w-2xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Ask a <span className="text-gradient">Question</span>
          </h2>
          <p className="text-gray-400">
            Have a question about our program? We're here to help!
          </p>
        </div>

        <div className="card backdrop-blur-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="input-primary w-full pl-11"
                  required
                />
              </div>

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="input-primary w-full pl-11"
                  required
                />
              </div>

              <div className="relative">
                <MessageSquare className="absolute left-3 top-4 text-gray-500 w-5 h-5" />
                <textarea
                  name="question"
                  value={formData.question}
                  onChange={handleChange}
                  placeholder="Write your question here..."
                  className="input-primary w-full pl-11 h-32 resize-none"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn-primary w-full flex items-center justify-center gap-2 group"
            >
              {status === 'sending' ? (
                'Sending...'
              ) : (
                <>
                  Send Question
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>

            {status === 'success' && (
              <p className="text-green-500 text-center animate-fade-in">
                Your question has been sent successfully!
              </p>
            )}
            {status === 'error' && (
              <p className="text-red-500 text-center animate-fade-in">
                There was an error sending your question. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}