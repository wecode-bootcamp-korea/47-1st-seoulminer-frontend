import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleClosed = () => {
    setIsOpen(false);
  };

  const handleLogin = () => {
    if (localStorage.getItem('token')) {
      setIsLoggedIn(false);
      localStorage.removeItem('token');
      navigate('');
    } else {
      setIsLoggedIn(true);
    }
  };

  const goToCart = () => {
    if (localStorage.getItem('token')) {
      navigate('/cart');
    } else {
      navigate('/login');
    }
  };

  return (
    <header className="nav">
      <div className="navContainer">
        <Link to="">
          <img className="mainLogo" src="/images/logo.png" alt="navLogo" />
        </Link>
        <div className="navMenu">
          {NavData.map((link, index) => (
            // <Link to={link.path} key={index}>
            <Link to="/productList" key={index}>
              <button className="menuLink">{link.text}</button>
            </Link>
          ))}
        </div>
        <div className="icons">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="leadingGlass" />
          <FontAwesomeIcon
            icon={faCartShopping}
            className="cart"
            onClick={goToCart}
          />
          <LoginButtons isLoggedIn={isLoggedIn} onLogin={handleLogin} />
          <button className="menuBtn" onClick={handleOpen}>
            <FontAwesomeIcon icon={faBars} className="bar" />
          </button>
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
