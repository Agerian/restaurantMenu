import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Make sure to reference the CSS file for styling
import AuthService from '../utils/auth';


function Header({ isAuthenticated, setIsAuthenticated }) {
  const logout = (event) => {
    AuthService.logout();
    setIsAuthenticated(false)
};
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
          {isAuthenticated && (
            <>
            <li><Link to="/admin">Admin</Link></li>
            <button onClick={logout}>Logout</button>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
