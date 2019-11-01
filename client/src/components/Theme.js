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
      <div className={darkMode ? "dark-mode__toggle dark-mode__toggled" : "dark-mode__toggle"}>
        <div
          aria-label={"theme toggle switch"}
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </div>
  )
}

export default Theme;
