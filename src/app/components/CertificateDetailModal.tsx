import { Modal } from './Modal';
import { Certificate } from './Certificates';
import { Award, Calendar, ExternalLink, Hash } from 'lucide-react';
import certificateImage from '../../asserts/jspiders_certificate.jpeg';

interface CertificateDetailModalProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export function CertificateDetailModal({ certificate, onClose }: CertificateDetailModalProps) {
  if (!certificate) return null;

  return (
    <Modal isOpen={!!certificate} onClose={onClose} title={certificate.title}>
      <div className="space-y-6">
        {/* Certificate Image */}
        {certificate.image && (
          <div className="flex justify-center">
            <img 
              src={certificateImage} 
              alt={certificate.title}
              className="max-w-full h-auto rounded-lg shadow-lg max-h-96 object-contain"
            />
          </div>
        )}
        
        {/* Certificate Badge - Fallback if no image */}
        {!certificate.image && (
          <div className="flex justify-center">
            <div className="p-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full">
              <Award className="w-24 h-24 text-white" />
            </div>
          </div>
        )}
        
        {/* Issuer */}
        <div className="text-center">
          <h3 className="text-2xl text-blue-600 mb-2">{certificate.issuer}</h3>
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <Calendar className="w-4 h-4" />
            <span>{certificate.date}</span>
          </div>
        </div>
        
        {/* Description */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-gray-700">{certificate.description}</p>
        </div>
        
        {/* Credential ID */}
        <div className="flex items-center gap-2 bg-blue-50 p-4 rounded-lg">
          <Hash className="w-5 h-5 text-blue-600" />
          <div>
            <p className="text-sm text-gray-600">Credential ID</p>
            <p className="font-mono">{certificate.credentialId}</p>
          </div>
        </div>
        
        {/* Skills */}
        <div>
          <h4 className="text-lg mb-3">Skills Covered</h4>
          <div className="flex flex-wrap gap-2">
            {certificate.skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-gray-800 rounded-lg"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        {/* Verify Button */}
        <a
          href={certificate.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
        >
          <ExternalLink className="w-5 h-5" />
          Verify Certificate
        </a>
      </div>
    </Modal>
  );
}
