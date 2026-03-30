import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 sm:py-10 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* About */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl mb-3 sm:mb-4">Kukati Dinesh</h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Frontend Developer passionate about creating beautiful and functional web experiences.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl mb-3 sm:mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <a href="#home" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Home</a>
              <a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">About</a>
              <a href="#projects" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Projects</a>
              <a href="#certificates" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Certificates</a>
            </div>
          </div>
          
          {/* Connect */}
          <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg sm:text-xl mb-3 sm:mb-4">Connect</h3>
            <div className="flex gap-3 sm:gap-4 justify-center sm:justify-start">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="mailto:kukatidineshyadav69@gmail.com"
                className="p-2 sm:p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="pt-6 sm:pt-8 border-t border-gray-800 text-center text-gray-400">
          <p className="flex items-center justify-center gap-2 text-xs sm:text-sm">
            Made with <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-500" /> by Kukati Dinesh © 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
