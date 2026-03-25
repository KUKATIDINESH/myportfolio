import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Download, FileText } from 'lucide-react';
import dineshImage from '../../asserts/dinesh.jpeg';

interface HeroProps {
  onContactClick: () => void;
  onResumeClick: () => void;
}

export function Hero({ onContactClick, onResumeClick }: HeroProps) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-4">
            👋 Welcome to my portfolio
          </div>
          <h1 className="text-5xl md:text-6xl mb-4">
            Hi, I'm <span className="text-blue-600">KUKATI DINESH</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
            Full-Stack Developer
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Junior Full Stack Developer with 8 months of experience developing web applications using Django and MySQL on the backend, 
            and HTML, CSS, JavaScript, and basic React.js on the frontend. Strong understanding of REST APIs, database design, and responsive UI development.
          </p>
          
          {/* CTA Buttons */} 
          <div className="flex flex-wrap gap-4 mb-8">
            <button
              onClick={onContactClick}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Get in Touch
            </button>
            <button
              onClick={onResumeClick}
              className="px-6 py-3 bg-white border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors flex items-center gap-2"
            >
              <FileText className="w-5 h-5" />
              View Resume
            </button>
          </div>
          
          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/kukati-dinesh-b3066a336"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:kukatidineshyadav69@gmail.com"
              className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
        
        {/* Right Content - Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <img
              src={dineshImage}
              alt="KUKATI DINESH"
              className="relative rounded-full w-full h-full object-cover border-8 border-white shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
