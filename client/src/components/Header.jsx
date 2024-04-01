import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Make sure to reference the CSS file for styling

function Header() {
  return (
    <header className="header">
      <div className="brand">
        <Link to="/">PIEDMONT</Link>
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
