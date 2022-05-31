import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main/Main';
import Cart from './pages/cart/Cart';
import Terms from './pages/signup/components/Terms';
import SignUp from './pages/signup/SignUp';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
