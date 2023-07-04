import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import ProductList from './pages/productList/ProductList';
import CartLayout from './pages/cart/CartLayout';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/ProductList/:id" element={<ProductList />} />
        <Route path="/Cart" element={<CartLayout />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
