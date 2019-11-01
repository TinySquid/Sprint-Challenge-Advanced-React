import React, { useState } from 'react';

import { useDarkMode } from '../hooks/useDarkMode';

const Theme = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <div className="theme">
      <span>
        Toggle Dark Mode
      </span>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </div>
  )
}

export default Theme;
