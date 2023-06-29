import React from 'react';
import { Link } from 'react-router-dom';
import NavData from '../NavData';
import NavToggleData from './NavToggleData';
import './NavMenuToggle.scss';

const NavToggle = () => {
  return (
    <div className="navToggle">
      <div className="navToggleStyle">
        <header className="headerText">
          <h2 className="firstText">
            일단
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
              {NavToggleData.map((link, index) => (
                <Link to={link.path} key={index}>
                  <button className="loginLink">{link.text}</button>
                </Link>
              ))}
            </div>
          </ul>
          <ul>
            <div className="link">
              <h2 className="thirdText">카테고리</h2>
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
              </li>
              <li>
                <Link to="" className="emailQna">
                  <h2>이메일 문의</h2>
                </Link>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default NavToggle;
