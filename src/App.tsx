import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact'; // Add this import
import Footer from './components/Footer';
import { FiSun, FiMoon, FiArrowUp } from 'react-icons/fi';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <Skills />
      <Education />
      <Certifications />
      <Contact /> {/* Add Contact component here */}
      <Footer />

      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed bottom-6 right-6 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-all z-50 border border-gray-200 dark:border-gray-700"
        aria-label="Toggle dark mode"
      >
        {darkMode ? (
          <FiSun className="text-yellow-500" size={20} />
        ) : (
          <FiMoon className="text-gray-700" size={20} />
        )}
      </button>

      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-24 right-6 w-12 h-12 bg-primary-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary-700 transition-all z-50 animate-bounce"
          aria-label="Scroll to top"
        >
          <FiArrowUp size={20} />
        </button>
      )}
    </div>
  );
}

export default App;