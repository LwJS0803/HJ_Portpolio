import { education } from '../data/portfolio-data';
import { FiAward } from 'react-icons/fi';

const Education = () => {
  return (
    <section id="education" className="section-container bg-gray-50">
      <h2 className="section-title text-center">Education</h2>

      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="relative">
              {/* Timeline line */}
              {index !== education.length - 1 && (
                <div className="absolute left-4 sm:left-8 top-12 bottom-0 w-0.5 bg-blue-200"></div>
              )}

              <div className="flex gap-4 sm:gap-8">
                {/* Timeline dot */}
                <div className="relative flex-shrink-0">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-blue-600 flex items-center justify-center">
                    <FiAward className="text-white" size={16} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                        {edu.degree}
                      </h3>
                      <p className="text-lg text-gray-700 font-medium mt-1">
                        {edu.program}
                      </p>
                    </div>
                    <span className="text-sm sm:text-base text-gray-600 font-medium whitespace-nowrap">
                      {edu.startDate} - {edu.endDate}
                    </span>
                  </div>

                  <p className="text-gray-700 font-medium mb-2">
                    {edu.institution}, {edu.location}
                  </p>

                  {edu.details && edu.details.length > 0 && (
                    <ul className="mt-3 space-y-1">
                      {edu.details.map((detail, idx) => (
                        <li key={idx} className="text-gray-600 text-sm flex items-start">
                          <span className="mr-2">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
