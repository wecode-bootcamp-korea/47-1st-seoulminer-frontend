import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Main from './pages/Main';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Login from './pages/Login';
import SignUpSecond from './pages/SignUpSecond';
import SignUp from './pages/SignUp';
import NotFound from './pages/NotFound';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Main />} />
          <Route path="signUpSecond" element={<SignUpSecond />} />
          <Route path="login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
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
