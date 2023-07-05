import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Main from './pages/Main';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Login from './pages/Login';
import ProductDetail from './pages/ProductDetail';
import SignUp from './pages/SignUp';
import SignUpSecond from './pages/SignUpSecond';
import NotFound from './pages/NotFound';
import Purchase from './pages/Purchase';
import ProductList from './pages/productList/ProductList';
import CartLayout from './pages/cart/CartLayout';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Main />} />
          <Route path="/productDetail/:id" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signUpSecond" element={<SignUpSecond />} />
          <Route path="/purchase" element={<Purchase />} />
          <Route path="/productList" element={<ProductList />} />
          <Route path="/cart" element={<CartLayout />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};
