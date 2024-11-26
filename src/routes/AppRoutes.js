import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from '../layouts/layout';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import CategoryScreen from '../screens/CategoryScreen';
import CartScreen from '../screens/CartScreen';
import WishlistScreen from '../screens/LikedProductScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<HomeScreen />} />
            <Route path="/products" element={<ProductScreen />} />
            <Route path="/categories" element={<CategoryScreen />} />
            <Route path="/carts" element={<CartScreen />} />
            <Route path="/wishlists" element={<WishlistScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
        </Route> 
      </Routes>
  )
}

export default AppRoutes