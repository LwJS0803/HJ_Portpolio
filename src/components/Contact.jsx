import { FiMail, FiMapPin, FiExternalLink, FiDownload } from 'react-icons/fi';
import { personalInfo, socialLinks } from '../data/portfolio-data';

const Contact = () => {
  return (
    <section id="contact" className="section-container bg-white">
      <h2 className="section-title text-center">Get in Touch</h2>

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-lg text-gray-700 leading-relaxed">
            I'm always open to discussing research collaborations, speaking opportunities,
            or questions about my work. Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Email */}
          <a
            href={`mailto:${socialLinks.email}`}
            className="flex items-start gap-4 p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all"
          >
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                <FiMail className="text-white" size={24} />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
              <p className="text-gray-700">{socialLinks.email}</p>
            </div>
          </a>

          {/* Location */}
          <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg border border-blue-100">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center">
                <FiMapPin className="text-white" size={24} />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Location</h3>
              <p className="text-gray-700">{personalInfo.institution}</p>
              <p className="text-gray-600 text-sm">{personalInfo.location}</p>
            </div>
          </div>

          {/* Website */}
          <a
            href={socialLinks.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all"
          >
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center">
                <FiExternalLink className="text-white" size={24} />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Website</h3>
              <p className="text-blue-600 hover:underline">Visit my personal website</p>
            </div>
          </a>

          {/* CV Download */}
          <a
            href="/CV_Hyuckjin_Jang.pdf"
            download
            className="flex items-start gap-4 p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all"
          >
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-amber-600 flex items-center justify-center">
                <FiDownload className="text-white" size={24} />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Curriculum Vitae</h3>
              <p className="text-blue-600 hover:underline">Download my full CV (PDF)</p>
            </div>
          </a>
        </div>

        {/* Lab Info */}
        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Research Lab</h3>
          <div className="space-y-2 text-gray-700">
            <p><strong>Lab:</strong> {personalInfo.lab}</p>
            <p><strong>Advisor:</strong> {personalInfo.advisor}</p>
            <p><strong>Institution:</strong> {personalInfo.institution}</p>
            <p><strong>Location:</strong> {personalInfo.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
