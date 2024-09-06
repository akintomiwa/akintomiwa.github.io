// DarkModeContext.js
import React, { createContext, useState, useContext } from "react";

const DarkModeContext = createContext();

export const useDarkMode = () => useContext(DarkModeContext);

export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

// import React, { createContext, useContext, useState } from 'react';

// const DarkModeContext = createContext();

// export const useDarkMode = () => useContext(DarkModeContext);

// export const DarkModeProvider = ({ children }) => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   return (
//     <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
//       {children}
//     </DarkModeContext.Provider>
//   );
// };