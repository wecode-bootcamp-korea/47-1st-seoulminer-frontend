import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import NavToggle from './components/Nav/NavToggle/NavToggle';
// import '/data.json';

const Router = () => {
  return (
    <BrowserRouter>
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/NavToggle" element={<NavToggle />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
