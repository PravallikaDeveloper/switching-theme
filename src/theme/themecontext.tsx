import React, { createContext, useState, useEffect } from 'react';

export type ThemeName = 'theme1' | 'theme2' | 'theme3';

interface ThemeContextProps {
  theme: ThemeName;
  setTheme: (name: ThemeName) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: 'theme1',
  setTheme: () => {}
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeName>(() => {
    return (localStorage.getItem('theme') as ThemeName) || 'theme1';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};