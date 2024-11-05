import { Mail, ArrowRight } from 'lucide-react';

function Newsletter() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Join our <span className="text-gradient">Newsletter</span>
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Stay updated with the latest news about CSA and automation technology.
                Get exclusive insights and updates delivered to your inbox.
              </p>
            </div>
            <div>
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input-primary flex-1"
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  className="btn-primary flex items-center justify-center gap-2 group whitespace-nowrap"
                >
                  <Mail className="w-4 h-4" />
                  Subscribe
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;