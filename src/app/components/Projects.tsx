import { motion } from 'motion/react';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { useState } from 'react';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  liveUrl: string;
  githubUrl: string;
  features: string[];
  challenges: string;
  learnings: string;
  duration: string;
}

interface ProjectsProps {
  onProjectClick: (project: Project) => void;
}

export function Projects({ onProjectClick }: ProjectsProps) {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Ad Creatives Automation Platform',
      description: 'A creative automation platform for dynamically generating static and animated ad banners based on campaign briefs and brand guidelines.',
      image: 'https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZyUyMHdlYnNpdGV8ZW58MXx8fHwxNzczOTIwMDM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      technologies: ['Django', 'MySQL', 'Python', 'CairoSVG', 'REST APIs', 'React.js'],
      category: 'Enterprise Platform',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      features: [
        'Dynamic banner generation workflows using SVG templates',
        'Role-based access control (Designer, QC, Project Manager)',
        'Real-time preview functionality with canvas-based UI',
        'Automated creative creation, validation, and approval processes',
        'Backend optimization for performance and scalability'
      ],
      challenges: 'Processing SVG templates and generating static creatives programmatically while maintaining performance.',
      learnings: 'Mastered CairoSVG library, implemented complex workflow management, and gained experience in enterprise automation.',
      duration: '3 months'
    },
    {
      id: 2,
      title: 'PG Room Booking System',
      description: 'A full-stack PG accommodation booking web application with room listings, booking workflows, and user management.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb29tJTIwYm9va2luZyUyMHdlYnNpdGV8ZW58MXx8fHwxNzczOTIwMDM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      technologies: ['Django', 'MySQL', 'Python', 'Django Templates', 'Authentication'],
      category: 'Web Application',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      features: [
        'Secure user registration and login with Django authentication',
        'Dynamic room availability management with real-time updates',
        'Admin dashboard for managing rooms, users, and bookings',
        'Booking approval/rejection workflows with status updates',
        'Double-booking prevention through backend validation'
      ],
      challenges: 'Implementing proper relational database constraints and preventing booking conflicts.',
      learnings: 'Gained deep understanding of Django ORM, authentication systems, and relational database design.',
      duration: '2 months'
    },
    {
      id: 3,
      title: 'Enterprise Animated Digital Ad Campaigns',
      description: 'High-performance animated ad banners developed for enterprise clients including Adobe, Microsoft, and Audible.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltYXRlZCUyMGFkJTIwYmFubmVyc3xlbnwxfHx8fDE3NzM5MjAwMzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'GSAP', 'Responsive Design'],
      category: 'Digital Advertising',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      features: [
        'Animated ad banners for enterprise clients',
        'Brand compliance and engaging user interactions',
        'Cross-browser compatibility and responsive design',
        'Performance optimization for fast loading',
        'Interactive UI components with smooth animations'
      ],
      challenges: 'Ensuring brand compliance while creating engaging animations across different platforms.',
      learnings: 'Mastered GSAP for animations, learned enterprise client requirements, and improved performance optimization skills.',
      duration: '1 month'
    }
  ];

  const [filter, setFilter] = useState('All');
  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 mb-8">Click on any project to see detailed information</p>
          
          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full transition-all ${
                  filter === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group cursor-pointer"
              onClick={() => onProjectClick(project)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4 gap-4">
                  <button className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors">
                    <Eye className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl">{project.title}</h3>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm whitespace-nowrap">
                    {project.category}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors flex items-center justify-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}