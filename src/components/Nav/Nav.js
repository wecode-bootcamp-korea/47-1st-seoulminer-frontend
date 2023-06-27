import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Nav.scss';

const Nav = () => {
  return (
    <nav className="nav">
      <div className="container">
        <div className="utilMenu">
          <span className="mainLogo">배민배민배</span>
          <span className="navMenu">
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
          </span>

          <FontAwesomeIcon icon={faMagnifyingGlass} className="leadingGlass" />
          <FontAwesomeIcon icon={faCartShopping} className="cart" />
          <button className="loginBtn">로그인</button>
          <FontAwesomeIcon icon={faBars} className="menuBar" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
