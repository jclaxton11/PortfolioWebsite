import { useEffect, useState } from 'react';
import { aboutImages, appImages } from './components/data';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import WaveBackground from './components/Wave.jsx';

export default function App() {
  const [aboutIndex, setAboutIndex] = useState(0);
  const [appIndex, setAppIndex] = useState(0);

  useEffect(() => {
    const aboutTimer = setInterval(() => {
      setAboutIndex((current) => (current + 1) % aboutImages.length);
    }, 3000);

    const appTimer = setInterval(() => {
      setAppIndex((current) => (current + 1) % appImages.length);
    }, 3000);

    return () => {
      clearInterval(aboutTimer);
      clearInterval(appTimer);
    };
  }, []);

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About aboutIndex={aboutIndex} />
        <Experience />
        <Projects appIndex={appIndex} />
        <Skills />
        <Contact />
      </main>
      <WaveBackground />
      <Footer />
    </div>
  );
}
