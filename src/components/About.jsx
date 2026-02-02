import { interests } from '../data/portfolio-data';

const About = () => {
  return (
    <section id="about" className="section-container bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title text-center">About Me</h2>

        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-gray-700 leading-relaxed mb-6">
            I am a Ph.D. candidate at the Graduate School of Culture Technology, KAIST, working in the Visual Cognition Lab under the supervision of Professor Jeongmi Lee. My research sits at the intersection of human cognition and emerging technologies, with a particular focus on how we can design more inclusive, intuitive, and socially meaningful extended reality experiences.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Through my work, I explore how haptic feedback, sensory substitution, and carefully designed virtual experiences can enhance human connection, reduce social biases, and create more accessible technological systems. I combine methods from cognitive neuroscience, experimental psychology, and interaction design to understand and improve how people perceive, interact with, and relate to others in virtual environments.
          </p>

          <p className="text-gray-700 leading-relaxed">
            My research has been published in top-tier venues including ACM CHI and IEEE TVCG, and has been recognized with awards such as the Honorable Mention at ISMAR and the Outstanding Research Prize at KAIST. I am passionate about creating technology that not only performs well technically but also contributes positively to social dynamics and human well-being.
          </p>
        </div>

        {/* Research Interests */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Research Interests</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-4 border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all duration-300"
              >
                <p className="text-gray-800 font-medium text-center">{interest}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
