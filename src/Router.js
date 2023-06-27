import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Main from './pages/Main';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import ProductOne from './pages/ProductOne';
// import '/data.json';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/productOne" element={<ProductOne />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
