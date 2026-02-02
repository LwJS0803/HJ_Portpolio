import { awards } from '../data/portfolio-data';
import { FiAward } from 'react-icons/fi';

const Awards = () => {
  return (
    <section id="awards" className="section-container bg-gray-50">
      <h2 className="section-title text-center">Awards & Honors</h2>

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                    <FiAward className="text-white" size={24} />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                      {award.title}
                    </h3>
                    <span className="text-sm font-medium text-gray-600 whitespace-nowrap">
                      {award.year}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-1">
                    {award.organization}
                  </p>
                  {award.details && (
                    <p className="text-gray-500 text-sm italic">
                      {award.details}
                    </p>
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

export default Awards;
