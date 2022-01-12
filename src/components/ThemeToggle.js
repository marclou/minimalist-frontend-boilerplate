import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from '../contexts/theme';

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      className="btn btn-square btn-outline border-gray-500 dark:border-gray-700"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} className="text-xl text-white" />
    </button>
  );
};

export default ThemeToggle;
