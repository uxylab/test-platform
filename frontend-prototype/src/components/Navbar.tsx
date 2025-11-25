import React from 'react';

interface NavbarProps {
  onLogout: () => void;
  onSettingsClick: () => void;
  userName: string;
}

const Navbar: React.FC<NavbarProps> = ({ onLogout, onSettingsClick, userName }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>Frontend Prototype</h1>
      </div>
      <div className="navbar-menu">
        <span className="navbar-user">Welcome, {userName}</span>
        <button className="btn btn-secondary" onClick={onSettingsClick}>
          Settings
        </button>
        <button className="btn btn-outline" onClick={onLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
