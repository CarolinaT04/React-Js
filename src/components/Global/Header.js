import React from 'react';
import logo from './images/logo.svg';
import './css/Header.css';

function Header() {
  return (
    <div className="Header">
      <div className="Logo">
        <img src={logo} alt="logo" />
        <h2>This is the header</h2>
      </div>
    </div>
  );
}

export default Header;
