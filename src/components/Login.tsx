import { useState } from 'react';
import { UserCircle, Mail, AtSign, User } from 'lucide-react';

export default function Login() {
  const [formData, setFormData] = useState({
    registrationNumber: '',
    name: '',
    surname: '',
    email: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-black pt-32 pb-16">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
      
      <div className="relative max-w-md mx-auto px-4 sm:px-6">
        <div className="card backdrop-blur-xl border-gray-800/50">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Welcome to <span className="text-gradient">CSA</span></h2>
            <p className="text-gray-400">Sign in to access your student portal</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="relative">
                <AtSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                <input
                  type="text"
                  name="registrationNumber"
                  value={formData.registrationNumber}
                  onChange={handleChange}
                  placeholder="Registration Number"
                  className="input-primary w-full pl-11"
                  required
                />
              </div>

              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="input-primary w-full pl-11"
                  required
                />
              </div>

              <div className="relative">
                <UserCircle className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                <input
                  type="text"
                  name="surname"
                  value={formData.surname}
                  onChange={handleChange}
                  placeholder="Last Name"
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
                  placeholder="Email Address"
                  className="input-primary w-full pl-11"
                  required
                />
              </div>
            </div>

            <button type="submit" className="btn-primary w-full">
              Sign In
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}