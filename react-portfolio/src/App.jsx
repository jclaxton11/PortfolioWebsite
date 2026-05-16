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

export default function App() {
  const [aboutIndex, setAboutIndex] = useState(0);
  const [appIndex, setAppIndex] = useState(0);

  useEffect(() => {
    const aboutTimer = setInterval(() => {
      setAboutIndex((c) => (c + 1) % aboutImages.length);
    }, 3000);

    const appTimer = setInterval(() => {
      setAppIndex((c) => (c + 1) % appImages.length);
    }, 3000);

    return () => {
      clearInterval(aboutTimer);
      clearInterval(appTimer);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    const revealEls = document.querySelectorAll('.reveal');
    revealEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <div className="section-divider" />
        <About aboutIndex={aboutIndex} />
        <div className="section-divider" />
        <Experience />
        <div className="section-divider" />
        <Projects appIndex={appIndex} />
        <div className="section-divider" />
        <Skills />
        <div className="section-divider" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
