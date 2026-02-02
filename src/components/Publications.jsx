import { useState, useMemo } from 'react';
import { publications } from '../data/portfolio-data';
import { FiExternalLink, FiSearch, FiAward } from 'react-icons/fi';

const Publications = () => {
  const [filterType, setFilterType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('year-desc');

  // Get unique years for year filter
  const years = useMemo(() => {
    const uniqueYears = [...new Set(publications.map(pub => pub.year))];
    return uniqueYears.sort((a, b) => b - a);
  }, []);

  // Filter and sort publications
  const filteredPublications = useMemo(() => {
    let filtered = publications;

    // Filter by type
    if (filterType !== 'all') {
      filtered = filtered.filter(pub => pub.type.toLowerCase() === filterType);
    }

    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(pub =>
        pub.title.toLowerCase().includes(term) ||
        pub.authors.toLowerCase().includes(term) ||
        pub.venue.toLowerCase().includes(term)
      );
    }

    // Sort
    if (sortBy === 'year-desc') {
      filtered = [...filtered].sort((a, b) => b.year - a.year);
    } else if (sortBy === 'year-asc') {
      filtered = [...filtered].sort((a, b) => a.year - b.year);
    }

    return filtered;
  }, [filterType, searchTerm, sortBy]);

  // Highlight author name in author list
  const highlightAuthorName = (authors) => {
    const parts = authors.split('Jang, H.');
    if (parts.length === 1) return authors;

    return (
      <>
        {parts[0]}
        <span className="font-bold text-blue-600">Jang, H.</span>
        {parts[1]}
      </>
    );
  };

  return (
    <section id="publications" className="section-container bg-white">
      <h2 className="section-title text-center">Publications</h2>

      <div className="max-w-6xl mx-auto">
        {/* Controls */}
        <div className="mb-8 space-y-4">
          {/* Search */}
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search publications..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex gap-2">
              <button
                onClick={() => setFilterType('all')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filterType === 'all'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All ({publications.length})
              </button>
              <button
                onClick={() => setFilterType('journal')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filterType === 'journal'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Journals ({publications.filter(p => p.type === 'Journal').length})
              </button>
              <button
                onClick={() => setFilterType('conference')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filterType === 'conference'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Conferences ({publications.filter(p => p.type === 'Conference').length})
              </button>
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="year-desc">Newest First</option>
              <option value="year-asc">Oldest First</option>
            </select>
          </div>
        </div>

        {/* Publications List */}
        {filteredPublications.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            No publications found matching your criteria.
          </div>
        ) : (
          <div className="space-y-6">
            {filteredPublications.map((pub) => (
              <div
                key={pub.id}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                {/* Header with year and type */}
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    {pub.year}
                  </span>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    pub.type === 'Journal'
                      ? 'bg-purple-100 text-purple-800'
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {pub.type}
                  </span>
                  {pub.status && pub.status !== 'Published' && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                      {pub.status}
                    </span>
                  )}
                  {pub.award && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-800">
                      <FiAward size={14} />
                      {pub.award}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 leading-snug">
                  {pub.title}
                </h3>

                {/* Authors */}
                <p className="text-gray-700 mb-2">
                  {highlightAuthorName(pub.authors)}
                </p>

                {/* Venue */}
                <p className="text-gray-600 italic mb-3">
                  {pub.venue}
                  {pub.volume && `, ${pub.volume}`}
                  {pub.pages && ` (pp. ${pub.pages})`}
                </p>

                {/* DOI Link */}
                {pub.doi && (
                  <a
                    href={pub.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
                  >
                    <FiExternalLink size={16} />
                    DOI: {pub.doi.split('doi.org/')[1] || pub.doi}
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Publications;
