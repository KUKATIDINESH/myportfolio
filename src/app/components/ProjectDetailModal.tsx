import { Modal } from './Modal';
import { Project } from './Projects';
import { ExternalLink, Github, Calendar, CheckCircle, Lightbulb, AlertCircle } from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  if (!project) return null;

  return (
    <Modal isOpen={!!project} onClose={onClose} maxWidth="max-w-4xl">
      <div className="space-y-6">
        {/* Image */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-80 object-cover rounded-xl"
        />
        
        {/* Header */}
        <div>
          <div className="flex items-start justify-between mb-3">
            <h2 className="text-3xl">{project.title}</h2>
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full">
              {project.category}
            </span>
          </div>
          <p className="text-gray-600 text-lg">{project.description}</p>
        </div>
        
        {/* Duration */}
        <div className="flex items-center gap-2 text-gray-600">
          <Calendar className="w-5 h-5" />
          <span>Project Duration: {project.duration}</span>
        </div>
        
        {/* Technologies */}
        <div>
          <h3 className="text-xl mb-3 flex items-center gap-2">
            <span className="text-2xl">🛠️</span>
            Technologies Used
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-gray-800 rounded-lg"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {/* Features */}
        <div>
          <h3 className="text-xl mb-3 flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-green-600" />
            Key Features
          </h3>
          <ul className="space-y-2">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3 bg-green-50 p-3 rounded-lg">
                <span className="text-green-600 mt-0.5">✓</span>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Challenges */}
        <div className="bg-orange-50 p-4 rounded-lg">
          <h3 className="text-xl mb-2 flex items-center gap-2">
            <AlertCircle className="w-6 h-6 text-orange-600" />
            Challenges Faced
          </h3>
          <p className="text-gray-700">{project.challenges}</p>
        </div>
        
        {/* Learnings */}
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="text-xl mb-2 flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-blue-600" />
            What I Learned
          </h3>
          <p className="text-gray-700">{project.learnings}</p>
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-4 pt-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
          >
            <ExternalLink className="w-5 h-5" />
            View Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors flex items-center justify-center gap-2"
          >
            <Github className="w-5 h-5" />
            View Source Code
          </a>
        </div>
      </div>
    </Modal>
  );
}
