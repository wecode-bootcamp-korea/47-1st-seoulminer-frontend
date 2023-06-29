import React from 'react';
import { Link } from 'react-router-dom';
import NavData from '../NavData';
import NavToggleData from './NavToggleData';
import './NavMenuToggle.scss';

const NavToggle = ({ isNavOpen, onClose }) => {
  return (
    <div className="dimmedNav">
      <div className={`navToggle ${isNavOpen ? 'open' : ''}`}>
        <div className="navToggleStyle">
          <header className="headerText">
            <button className="closedBtn" onClick={onClose}>
              X
            </button>
            <h2 className="firstText">
              일단 ..!
              <br />
              <Link to="" className="headerLoginLink">
                로그인부터 하세요.
              </Link>
            </h2>
          </header>
          <nav className="theme">
            <h2 className="secondText">테마</h2>
            <ul>
              <div className="loginLink">
                {NavToggleData.map((loginLink, index) => (
                  <Link to={loginLink.path} key={index}>
                    <button className="loginMenuBtn">{loginLink.text}</button>
                  </Link>
                ))}
              </div>
            </ul>
            <ul>
              <h2 className="thirdText">카테고리</h2>
              <div className="link">
                {NavData.map((link, index) => (
                  <Link to={link.path} key={index}>
                    <button className="menuLink">{link.text}</button>
                  </Link>
                ))}
              </div>
            </ul>
          </nav>
          <footer className="themeFooter">
            <div className="footerText">
              <ul>
                <li>
                  <Link to="" className="qna">
                    <h2>1:1 문의</h2>
                  </Link>
                  <Link to="" className="emailQna">
                    <h2>이메일 문의</h2>
                  </Link>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default NavToggle;
