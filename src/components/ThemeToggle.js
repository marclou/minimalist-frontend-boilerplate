import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/theme';

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      className="btn btn-square btn-outline border-gray-200 dark:border-gray-600"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <span className="text-2xl">{theme === 'dark' ? '🌞' : '🌝'}</span>
    </button>
  );
};

export default ThemeToggle;
