import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from '../layouts/layout';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import CategoryScreen from '../screens/CategoryScreen';


const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<HomeScreen />} />
            <Route path="/products" element={<ProductScreen />} />
            <Route path="/categories" element={<CategoryScreen />} />
        </Route> 
      </Routes>
  )
}

export default AppRoutes