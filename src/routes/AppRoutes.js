import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from '../layouts/layout';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import CategoryScreen from '../screens/CategoryScreen';
import CartScreen from '../screens/CartScreen';
import WishlistScreen from '../screens/LikedProductScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import ContactScreen from '../screens/ContactScreen';
import ForgotPasswordScreet from '../screens/auth/ForgotPasswordScreen';

const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<HomeScreen />} />
            <Route path="/products" element={<ProductScreen />} />
            <Route path="/categories" element={<CategoryScreen />} />
            <Route path="/carts" element={<CartScreen />} />
            <Route path="/wishlists" element={<WishlistScreen />} />
            <Route path="/contacts" element={<ContactScreen />} />

            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/forgot-password" element={<ForgotPasswordScreet />} />
        </Route> 
      </Routes>
  )
}

export default AppRoutes