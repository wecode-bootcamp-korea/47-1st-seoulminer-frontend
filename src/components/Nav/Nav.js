import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import NavData from './NavData';
import './Nav.scss';

const Nav = () => {
  const [isOpen, setMenu] = useState(false);

  const handleMenuToggle = () => {
    setMenu(!isOpen);
  };
  return (
    <header className="nav">
      <div className="navContainer">
        <span className="mainLogo">배민배민배</span>
        <div className={`navMenu ${isOpen ? 'open' : 'closed'}`}>
          <div className="link">
            {NavData.map((link, index) => (
              <Link to={link.path} key={index}>
                <button className="menuLink">{link.text}</button>
              </Link>
            ))}
          </div>
          <div className="icons">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="leadingGlass"
            />
            <FontAwesomeIcon icon={faCartShopping} className="cart" />
            <button className="loginBtn">로그인</button>
            <button className="menuBtn" onClick={handleMenuToggle}>
              <FontAwesomeIcon icon={faBars} className="bar" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
