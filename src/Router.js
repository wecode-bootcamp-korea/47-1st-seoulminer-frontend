import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Login from './pages/Login';
import SignUpSecond from './pages/SignUpSecond';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signUpSecond" element={<SignUpSecond />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
