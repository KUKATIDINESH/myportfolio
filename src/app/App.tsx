import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { Certificates } from './components/Certificates';
import { CertificateDetailModal } from './components/CertificateDetailModal';
import { ContactModal } from './components/Contact';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';
import type { Project } from './components/Projects';
import type { Certificate } from './components/Certificates';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  return (
    <div className="min-h-screen">
      <Navigation onContactClick={() => setIsContactOpen(true)} />
      
      <div className="pt-30">
        <Hero
          onContactClick={() => setIsContactOpen(true)}
          onResumeClick={() => setIsResumeOpen(true)}
        />
        
        <About />
        
        <Skills />
        
        <Experience />
        
        <Projects onProjectClick={setSelectedProject} />
        
        <Certificates onCertificateClick={setSelectedCertificate} />
        
        <Footer />
      </div>
      
      {/* Modals */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
      
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
      
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
      
      <CertificateDetailModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
    </div>
  );
}