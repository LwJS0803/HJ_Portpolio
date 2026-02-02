import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Publications from './components/Publications';
import Awards from './components/Awards';
import Projects from './components/Projects';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  return (
    <div className="App">
      <Header />

      <main>
        <div data-aos="fade-up">
          <Hero />
        </div>

        <div data-aos="fade-up">
          <About />
        </div>

        <div data-aos="fade-up">
          <Education />
        </div>

        <div data-aos="fade-up">
          <Publications />
        </div>

        <div data-aos="fade-up">
          <Awards />
        </div>

        <div data-aos="fade-up">
          <Projects />
        </div>

        <div data-aos="fade-up">
          <News />
        </div>

        <div data-aos="fade-up">
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
