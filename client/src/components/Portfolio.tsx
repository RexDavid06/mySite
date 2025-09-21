import { useState, useEffect } from 'react';
import Navigation from './Navigation';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  // Initialize theme based on system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const shouldUseDark = savedTheme === 'dark' || (!savedTheme && systemPrefersDark);
    
    setDarkMode(shouldUseDark);
    document.documentElement.classList.toggle('dark', shouldUseDark);
  }, []);

  const toggleDarkMode = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);
    document.documentElement.classList.toggle('dark', newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero onScrollToProjects={scrollToProjects} />
        <About />
        <Projects />
        <Skills />
      </main>
      
      {/* Simple Footer */}
      <footer className="py-8 px-4 text-center border-t border-border">
        <div className="max-w-6xl mx-auto">
          <p className="text-muted-foreground">
            © 2025 Buchi Rex-David. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}