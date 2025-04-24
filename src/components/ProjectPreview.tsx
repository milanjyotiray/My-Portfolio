import { ArrowLeft, Github, MessageSquare } from 'lucide-react';
import { Link } from 'react-scroll';

interface ProjectPreviewProps {
  title: string;
  onClose: () => void;
}

export default function ProjectPreview({ title, onClose }: ProjectPreviewProps) {
  return (
    <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-gray-900 rounded-xl p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 left-4 text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft size={24} />
        </button>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-400 mb-4">{title}</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-6 text-center">
          <h3 className="text-2xl font-semibold text-white">
            ✨ Nexuvo – AI Resume Builder
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
            Nexuvo is a smart resume builder powered by AI and enriched with LinkedIn integration. 
            Upload a resume, chat your way through, or auto-import details from LinkedIn. 
            Generate ATS-friendly resumes using sleek templates – instantly downloadable as PDFs.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <a
              href="https://github.com/milanjyotiray/nexuvo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
            >
              <Github size={20} />
              <span>View Nexuvo Repo</span>
            </a>

            <Link
              to="contact"
              onClick={onClose}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer"
            >
              <MessageSquare size={20} />
              <span>Let’s Collaborate</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
