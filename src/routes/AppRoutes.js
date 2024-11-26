import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from '../layouts/layout';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import CategoryScreen from '../screens/CategoryScreen';
import CartScreen from '../screens/CartScreen';


const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<HomeScreen />} />
            <Route path="/products" element={<ProductScreen />} />
            <Route path="/categories" element={<CategoryScreen />} />
            <Route path="/carts" element={<CartScreen />} />
        </Route> 
      </Routes>
  )
}

export default AppRoutes