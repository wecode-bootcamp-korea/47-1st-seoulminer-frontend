import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import NavData from './NavData';
import NavToggle from './NavToggle/NavToggle';
import LoginButtons from './LoginButtons/LoginBtn';
import './Nav.scss';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleClosed = () => {
    setIsOpen(false);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('TOKEN');
  };

  return (
    <header className="nav">
      <div className="navContainer">
        <span className="mainLogo">배민배민배</span>
        <div className="navMenu">
          <div className="link">
            {NavData.map((link, index) => (
              <Link to={link.path} key={index}>
                <button className="menuLink">{link.text}</button>
              </Link>
            ))}
          </div>
          <div className="icons">
            <Link to="">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="leadingGlass"
              />
            </Link>
            <Link to="">
              <FontAwesomeIcon icon={faCartShopping} className="cart" />
            </Link>
            <LoginButtons
              isLoggedIn={isLoggedIn}
              onLogin={handleLogin}
              onLogout={handleLogout}
            />
            <button className="menuBtn" onClick={handleOpen}>
              <FontAwesomeIcon icon={faBars} className="bar" />
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <NavToggle
          isNavOpen={isOpen}
          onClose={handleClosed}
          isLoggedIn={isLoggedIn}
        />
      )}
    </header>
  );
};

export default Nav;
