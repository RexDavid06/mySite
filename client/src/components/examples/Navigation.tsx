import Navigation from '../Navigation';
import { useState } from 'react';

export default function NavigationExample() {
  const [darkMode, setDarkMode] = useState(false);
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    console.log('Theme toggled:', !darkMode ? 'dark' : 'light');
  };

  return <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />;
}