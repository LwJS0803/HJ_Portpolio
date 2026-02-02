import { projects } from '../data/portfolio-data';
import { FiFolder, FiUser } from 'react-icons/fi';

const Projects = () => {
  return (
    <section id="projects" className="section-container bg-white">
      <h2 className="section-title text-center">Research Projects & Experience</h2>

      <div className="max-w-6xl mx-auto">
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <FiFolder className="text-white" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <FiUser size={14} />
                        {project.role}
                      </span>
                      <span>•</span>
                      <span>{project.organization}</span>
                    </div>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-600 whitespace-nowrap">
                  {project.year}
                </span>
              </div>

              <p className="text-gray-700 leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
