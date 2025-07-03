import { Github, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 px-4 sm:px-6 lg:px-20 py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-xl font-bold text-green-600 dark:text-white">NGOConnect</div>
        <div className="flex gap-6 items-center">
          <a href="https://your-portfolio.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-green-600 transition">
            <Globe className="w-5 h-5 mr-1" /> Portfolio
          </a>
          <a href="https://github.com/yourname" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-green-600 transition">
            <Github className="w-5 h-5 mr-1" /> GitHub
          </a>
        </div>
      </div>
      <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} NGOConnect. Built with ❤️ by Kalpesh Parmar.
      </div>
    </footer>
  );
};

export default Footer;