import { motion } from 'motion/react';
import { Award, ExternalLink } from 'lucide-react';

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  description: string;
  skills: string[];
  url: string;
  image?: string;
}

interface CertificatesProps {
  onCertificateClick: (certificate: Certificate) => void;
}

export function Certificates({ onCertificateClick }: CertificatesProps) {
  const certificates: Certificate[] = [
    // {
    //   id: 1,
    //   title: 'React - The Complete Guide 2024',
    //   issuer: 'Udemy',
    //   date: 'February 2024',
    //   credentialId: 'UC-XXXXXXXXXX',
    //   description: 'Comprehensive course covering React fundamentals, hooks, context, Redux, and advanced patterns.',
    //   skills: ['React', 'Redux', 'Hooks', 'Context API', 'React Router'],
    //   url: 'https://example.com'
    // },
    // {
    //   id: 2,
    //   title: 'JavaScript Algorithms and Data Structures',
    //   issuer: 'freeCodeCamp',
    //   date: 'January 2024',
    //   credentialId: 'FCC-XXXXXXXXXX',
    //   description: 'In-depth certification covering JavaScript ES6+, algorithms, data structures, and problem-solving.',
    //   skills: ['JavaScript', 'Algorithms', 'Data Structures', 'ES6+'],
    //   url: 'https://example.com'
    // },
    {
      id: 3,
      title: 'Python Full Stack Development',
      issuer: 'Pyspiders',
      date: 'July 2025',
      credentialId: 'PYS-25206',
      description: 'Certification covering Python , Django, MYSQl, HTML5, CSS3, JavaScript, CSS Grid, and responsive design principles.',
      skills: ['Python', 'Django', 'MySQL', 'HTML5', 'CSS3', 'JavaScript', 'CSS Grid', 'Responsive Design'],
      url: 'https://www.pyspiders.com',
      image: 'jspiders_certificate.jpeg'
    },
    // {
    //   id: 4,
    //   title: 'TypeScript for Professionals',
    //   issuer: 'Coursera',
    //   date: 'November 2023',
    //   credentialId: 'COURSERA-ZZZZZ',
    //   description: 'Advanced TypeScript course covering types, interfaces, generics, and real-world applications.',
    //   skills: ['TypeScript', 'Type Systems', 'Generics', 'OOP'],
    //   url: 'https://example.com'
    // },
    // {
    //   id: 5,
    //   title: 'Git & GitHub Essential Training',
    //   issuer: 'LinkedIn Learning',
    //   date: 'October 2023',
    //   credentialId: 'LIL-AAAAAAA',
    //   description: 'Complete guide to version control, Git workflows, branching strategies, and GitHub collaboration.',
    //   skills: ['Git', 'GitHub', 'Version Control', 'Collaboration'],
    //   url: 'https://example.com'
    // }
  ];

  return (
    <section id="certificates" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl mb-4">Certifications & Achievements</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Click on any certificate to view details</p>
        </motion.div>
        
        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => onCertificateClick(cert)}
              className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-blue-600 rounded-lg group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <h3 className="text-lg mb-2 line-clamp-2">{cert.title}</h3>
              <p className="text-blue-600 mb-1">{cert.issuer}</p>
              <p className="text-gray-500 text-sm mb-4">{cert.date}</p>
              
              <div className="flex flex-wrap gap-2">
                {cert.skills.slice(0, 2).map((skill, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-white text-gray-700 rounded-full text-xs"
                  >
                    {skill}
                  </span>
                ))}
                {cert.skills.length > 2 && (
                  <span className="px-2 py-1 bg-white text-gray-700 rounded-full text-xs">
                    +{cert.skills.length - 2}
                  </span>
                )}
              </div>
            </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
