import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: 'Trainee Software Development',
      company: 'Ninestars Information Technologies Pvt Ltd',
      location: 'Bangalore',
      period: 'Jul 2024 - Present',
      type: 'Full-time',
      description: 'Developing and maintaining backend functionalities using Django and MySQL, including business logic implementation and database management. Working on enterprise automation platforms and ad-tech systems.',
      achievements: [
        'Developed and maintained backend functionalities using Django and MySQL',
        'Designed and implemented RESTful APIs for front-end features',
        'Integrated backend services with frontend applications',
        'Implemented authentication, authorization, and data validation mechanisms',
        'Optimized database queries and backend processes for performance',
        'Contributed to creative automation platform development',
        'Built role-based access control and workflow management systems'
      ],
      technologies: ['Django', 'MySQL', 'Python', 'REST APIs', 'Django REST Framework', 'Authentication', 'CairoSVG']
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l-4 border-blue-600"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-600 rounded-full border-4 border-white"></div>
              
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl mb-1">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-blue-600 mb-2">
                      <Briefcase className="w-4 h-4" />
                      <span className="text-lg">{exp.company}</span>
                      <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded-full">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  <div className="text-right text-gray-600 text-sm">
                    <div className="flex items-center gap-1 mb-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">{exp.description}</p>
                
                <div className="mb-4">
                  <h4 className="mb-2">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">▸</span>
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
