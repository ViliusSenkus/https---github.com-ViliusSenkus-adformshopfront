import { BrowserRouter, Routes, Route } from 'react-router-dom'; // reikalinga, kad veiktu <Link to.../>
import Header from './Components/Header';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import UserProducts from './Pages/UserProducts';
import UserProduct from './Pages/UserProduct';
import ShoppingCart from './Pages/ShoppingCart';
import AdminProducts from './Pages/AdminProducts';
import AdminOrders from './Pages/AdminOrders';
import AdminUsers from './Pages/AdminUsers';


// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import LoginPage from './pages/LoginPage';
// import RegistrationPage from './pages/RegistrationPage';
// import ProductsPage from './pages/ProductsPage';
// import ProductPage from './pages/ProductPage';
// import ShoppingCartPage from './pages/ShoppingCartPage';
// import AdminProductsPage from './pages/AdminProductsPage';
// import AdminOrdersPage from './pages/AdminOrdersPage';
// import AdminUsersPage from './pages/AdminUsersPage';


function App() {
  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* User routes: */}
          <Route path="products" element={<UserProducts />} />
          <Route path="products/:id" element={<UserProduct />} />
          <Route path="cart" element={<ShoppingCart />} />

          {/* Admin & Manager routes  */}
          <Route path="/admin/products" element={<AdminProducts />} />
          <Route path="/admin/orders" element={<AdminOrders />} />

          {/* Admin routes */}
          <Route path="/admin/users" element={<AdminUsers />} />
        </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
