import { Modal } from './Modal';
import { Download, FileText, Briefcase, GraduationCap, Award, Code } from 'lucide-react';
import resumePDF from '../../asserts/resume.pdf';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const handleDownloadPDF = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'KUKATI_DINESH_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Resume" maxWidth="max-w-4xl">
      <div className="space-y-8">
        {/* Download Button */}
        <div className="flex justify-end">
          <button 
            onClick={handleDownloadPDF}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            Download PDF
          </button>
        </div>
        
        {/* Personal Info */}
        <div className="text-center pb-6 border-b">
          <h2 className="text-3xl mb-2">KUKATI DINESH</h2>
          <p className="text-xl text-gray-600 mb-3">Full-Stack Developer</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <span>📧 kukatidineshyadav69@gmail.com</span>
            <span>📱 9014274964</span>
            <span>� https://www.linkedin.com/in/kukati-dinesh-b3066a336</span>
          </div>
        </div>
        
        {/* Summary */}
        <div>
          <h3 className="text-2xl mb-3 flex items-center gap-2">
            <FileText className="w-6 h-6 text-blue-600" />
            Professional Summary
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Junior Full Stack Developer with 7 months of experience developing web applications using Django and MySQL on the backend, 
            and HTML, CSS, JavaScript, and basic React.js on the frontend. Strong understanding of REST APIs, database design, and responsive UI development.
          </p>
        </div>
        
        {/* Experience */}
        <div>
          <h3 className="text-2xl mb-4 flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-blue-600" />
            Work Experience
          </h3>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-4">
              <h4 className="text-xl mb-1">Trainee Software Development</h4>
              <p className="text-blue-600 mb-2">Ninestars Information Technologies Pvt Ltd, Bangalore | Jul 2024 - Present</p>
              <ul className="space-y-1 text-gray-700">
                <li>• Developed and maintained backend functionalities using Django and MySQL</li>
                <li>• Designed and implemented RESTful APIs to support front-end features</li>
                <li>• Integrated backend services with frontend applications</li>
                <li>• Implemented authentication, authorization, and data validation mechanisms</li>
                <li>• Optimized database queries and backend processes to improve performance</li>
                <li>• Collaborated with designers and back-end developers on front-end solutions</li>
                <li>• Worked on enterprise automation platforms and ad-tech systems</li>
                <li>• Identified, debugged, and resolved backend-related issues with QA teams</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Education */}
        <div>
          <h3 className="text-2xl mb-4 flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-blue-600" />
            Education
          </h3>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-600 pl-4">
              <h4 className="text-xl mb-1">MCA (Master of Computer Applications)</h4>
              <p className="text-blue-600 mb-2">Yogi Vemana University | 2022 - 2024</p>
              <p className="text-gray-700">Percentage: 75%</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h4 className="text-xl mb-1">B.sc (Bachelor of Science)</h4>
              <p className="text-blue-600 mb-2">Yogi Vemana University | 2019 - 2022</p>
              <p className="text-gray-700">Percentage: 80%</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h4 className="text-xl mb-1">Intermediate</h4>
              <p className="text-blue-600 mb-2">Sri Chaitanya JR College | 2017 - 2019</p>
              <p className="text-gray-700">Percentage: 94%</p>
            </div>
          </div>
        </div>
        
        {/* Skills */}
        <div>
          <h3 className="text-2xl mb-4 flex items-center gap-2">
            <Code className="w-6 h-6 text-blue-600" />
            Technical Skills
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <h4 className="mb-2">React.js</h4>
              <div className="flex flex-wrap gap-2">
                {['Functional Components', 'React Hooks', 'Context API', 'Redux', 'React Router'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="mb-2">Python & Django</h4>
              <div className="flex flex-wrap gap-2">
                {['Core Python', 'Django', 'Django REST Framework', 'OOP', 'Django ORM'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="mb-2">Frontend & Database</h4>
              <div className="flex flex-wrap gap-2">
                {['JavaScript ES6+', 'HTML5', 'CSS3', 'Tailwind CSS', 'MySQL'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Projects */}
        <div>
          <h3 className="text-2xl mb-4 flex items-center gap-2">
            <Code className="w-6 h-6 text-blue-600" />
            Key Projects
          </h3>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-600 pl-4">
              <h4 className="text-xl mb-1">Ad Creatives Automation Platform</h4>
              <p className="text-gray-700 mb-2">Built backend services using Django and MySQL for creative automation platform</p>
              <ul className="space-y-1 text-gray-600 text-sm">
                <li>• Implemented dynamic banner generation workflows using CairoSVG</li>
                <li>• Developed RESTful APIs for ad banner generation</li>
                <li>• Built role-based access control and workflow management</li>
              </ul>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h4 className="text-xl mb-1">PG Room Booking System</h4>
              <p className="text-gray-700 mb-2">Full-stack web application using Django and MySQL</p>
              <ul className="space-y-1 text-gray-600 text-sm">
                <li>• Implemented secure authentication and booking workflows</li>
                <li>• Built admin dashboard for room and user management</li>
                <li>• Designed relational database models with proper constraints</li>
              </ul>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h4 className="text-xl mb-1">Enterprise Animated Digital Ad Campaigns</h4>
              <p className="text-gray-700 mb-2">Animated ad banners for enterprise clients (Adobe, Microsoft, Audible)</p>
              <ul className="space-y-1 text-gray-600 text-sm">
                <li>• Developed high-performance animated banners using HTML5, CSS3, JavaScript</li>
                <li>• Ensured brand compliance and engaging user interactions</li>
                <li>• Used GSAP for smooth animations and transitions</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Certifications */}
        <div>
          <h3 className="text-2xl mb-4 flex items-center gap-2">
            <Award className="w-6 h-6 text-blue-600" />
            Skills & Expertise
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="mb-2 font-semibold">Core Competencies</h4>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Full-Stack Development (Django + React)</li>
                <li>• RESTful API Design & Implementation</li>
                <li>• Database Design & Optimization</li>
                <li>• Authentication & Authorization Systems</li>
                <li>• Responsive UI Development</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2 font-semibold">Technical Tools</h4>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Git Version Control</li>
                <li>• Django Admin & ORM</li>
                <li>• CairoSVG for Image Processing</li>
                <li>• GSAP for Animations</li>
                <li>• Modern JavaScript (ES6+)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
