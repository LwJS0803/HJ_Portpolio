import { FiMail, FiExternalLink, FiDownload } from 'react-icons/fi';
import { personalInfo, socialLinks } from '../data/portfolio-data';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              {personalInfo.name}
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-700 mb-6">
              {personalInfo.title}
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              {personalInfo.institution}
            </p>
            <p className="text-base text-gray-600 mb-8">
              {personalInfo.lab} • Advisor: {personalInfo.advisor}
            </p>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {personalInfo.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href={`mailto:${socialLinks.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                <FiMail size={20} />
                Get in Touch
              </a>
              <a
                href="/CV_Hyuckjin_Jang.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 border-2 border-gray-300 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors font-medium"
              >
                <FiDownload size={20} />
                Download CV
              </a>
              <a
                href={socialLinks.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 border-2 border-gray-300 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors font-medium"
              >
                <FiExternalLink size={20} />
                Website
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1">
                <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                  {/* Replace this with actual image once you add your photo */}
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `<div class="flex items-center justify-center h-full text-6xl font-bold text-gray-400">${personalInfo.name.charAt(0)}</div>`;
                    }}
                  />
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-400 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-purple-400 rounded-full opacity-20 blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
