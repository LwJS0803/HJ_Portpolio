import { news } from '../data/portfolio-data';
import { FiCalendar } from 'react-icons/fi';

const News = () => {
  // Category colors
  const getCategoryColor = (category) => {
    const colors = {
      Publication: 'bg-blue-100 text-blue-800',
      Award: 'bg-amber-100 text-amber-800',
      Talk: 'bg-purple-100 text-purple-800',
      Project: 'bg-green-100 text-green-800',
      Other: 'bg-gray-100 text-gray-800',
    };
    return colors[category] || colors.Other;
  };

  return (
    <section id="news" className="section-container bg-gray-50">
      <h2 className="section-title text-center">Latest News</h2>

      <div className="max-w-4xl mx-auto">
        <div className="space-y-4">
          {news.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(item.category)}`}>
                      {item.category}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-gray-600">
                      <FiCalendar size={14} />
                      {item.date}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            To add more news items, edit the news array in <code className="text-blue-600">src/data/portfolio-data.js</code>
          </p>
        </div>
      </div>
    </section>
  );
};

export default News;
