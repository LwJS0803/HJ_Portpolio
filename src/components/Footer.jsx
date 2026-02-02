import { FiMail, FiExternalLink, FiArrowUp } from 'react-icons/fi';
import { personalInfo, socialLinks } from '../data/portfolio-data';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{personalInfo.name}</h3>
            <p className="text-gray-400 text-sm mb-2">{personalInfo.title}</p>
            <p className="text-gray-400 text-sm">{personalInfo.institution}</p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#publications"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Publications
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/CV_Hyuckjin_Jang.pdf"
                  download
                  className="text-gray-400 hover:text-white text-sm transition-colors inline-flex items-center gap-1"
                >
                  Download CV <FiExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${socialLinks.email}`}
                  className="text-gray-400 hover:text-white text-sm transition-colors inline-flex items-center gap-2"
                >
                  <FiMail size={16} />
                  {socialLinks.email}
                </a>
              </li>
              <li>
                <a
                  href={socialLinks.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-sm transition-colors inline-flex items-center gap-2"
                >
                  <FiExternalLink size={16} />
                  Personal Website
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors"
            aria-label="Scroll to top"
          >
            Back to top <FiArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
