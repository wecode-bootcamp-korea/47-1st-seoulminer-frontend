import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Nav.scss';

const Nav = () => {
  return (
    <header className="nav">
      <div className="navContainer">
        <span className="mainLogo">배민배민배</span>
        <div className="navMenu">
          <div className="link">
            <Link to="">
              <button className="menuBtn">전체</button>
            </Link>
            <Link to="">
              <button className="menuBtn">문구</button>
            </Link>
            <Link to="">
              <button className="menuBtn">리빙</button>
            </Link>
            <Link to="">
              <button className="menuBtn">책/매거진F</button>
            </Link>
            <Link to="">
              <button className="menuBtn">콜라보레이션</button>
            </Link>
            <Link to="">
              <button className="menuBtn">명예의 전당</button>
            </Link>
          </div>
          <div className="icons">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="leadingGlass"
            />
            <FontAwesomeIcon icon={faCartShopping} className="cart" />
            <button className="loginBtn">로그인</button>
            <FontAwesomeIcon icon={faBars} className="bar" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
