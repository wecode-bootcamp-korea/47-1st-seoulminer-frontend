import React from 'react';
import { Link } from 'react-router-dom';

const LoginBtn = ({ isLoggedIn, onLogin, onLogout }) => {
  return isLoggedIn ? (
    <button className="logoutBtn" onClick={onLogout}>
      로그아웃
    </button>
  ) : (
    <Link to="/login">
      <button className="loginBtn" onClick={onLogin}>
        로그인
      </button>
    </Link>
  );
};

export default LoginBtn;
