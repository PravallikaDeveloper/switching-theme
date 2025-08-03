import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import Home from './components/home/home';
import About from './components/about/about';
import Contact from './components/contact/contact';
import { themes } from './styles/themes';
import { ThemeContext } from './theme/themecontext';
import './App.css';

const AppContent = () => {
  const { theme } = useContext(ThemeContext);
  const current = themes[theme];

  const isSidebar = () => current.layout === 'sidebar';

  return (
    <div
      className="app-container"
      style={{
        background: current.background,
        fontFamily: current.font,
        fontWeight: current.fontWeight,
        color: current.color,
      }}
    >
      <Header />
      {isSidebar() ? (
        <div className="sidebar-layout">
          <nav className="sidebar">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>

          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
      ) : (
        <div className="default-layout">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      )}
    </div>
  );
};

export default AppContent;
