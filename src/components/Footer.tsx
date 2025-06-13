import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
              John Doe
            </div>
            <p className="text-gray-400">Full Stack Developer & UI/UX Designer</p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-400 mb-2">
              Made with <Heart className="inline text-red-400" size={16} /> in San Francisco
            </p>
            <p className="text-sm text-gray-500">
              © 2024 John Doe. All rights reserved.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <button
            onClick={scrollToTop}
            className="group bg-gradient-to-r from-purple-500 to-blue-500 text-white p-3 rounded-full hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;