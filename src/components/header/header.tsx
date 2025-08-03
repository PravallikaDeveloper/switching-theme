import React, { useContext } from 'react';
import { ThemeContext } from '../../theme/themecontext';
import './header.css';

const Header: React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <header className="header">
      <div className="header-container">
        <h2 className="header-title">Theme Switcher</h2>
        <div className="header-select-wrapper">
          <select value={theme} onChange={e => setTheme(e.target.value as any)}>
            <option value="theme1">Theme 1</option>
            <option value="theme2">Theme 2</option>
            <option value="theme3">Theme 3</option>
          </select>
        </div>
      </div>
    </header>
  );
}

export default Header; 