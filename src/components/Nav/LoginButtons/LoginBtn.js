import React from 'react';

const LoginBtn = ({ isLoggedIn, onLogin, onLogout }) => {
  return isLoggedIn ? (
    <button className="logoutBtn" onClick={onLogout}>
      로그아웃
    </button>
  ) : (
    <button className="loginBtn" onClick={onLogin}>
      로그인
    </button>
  );
};

export default LoginBtn;
