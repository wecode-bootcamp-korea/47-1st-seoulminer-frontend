import React from 'react';
import { Link } from 'react-router-dom';

const LoginBtn = ({ onLogin }) => {
  return localStorage.getItem('token') ? (
    <button className="logoutBtn" onClick={onLogin}>
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
