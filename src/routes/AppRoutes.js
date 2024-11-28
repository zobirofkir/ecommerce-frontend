import React from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "../layouts/layout";
import HomeScreen from "../screens/HomeScreen";
import ProductScreen from "../screens/products/ProductScreen";
import CategoryScreen from "../screens/categories/CategoryScreen";
import CartScreen from "../screens/carts/CartScreen";
import WishlistScreen from "../screens/wishlists/WishlistScreen";
import LoginScreen from "../screens/auth/LoginScreen";
import RegisterScreen from "../screens/auth/RegisterScreen";
import ContactScreen from "../screens/products/ContactScreen";
import ForgotPasswordScreet from "../screens/auth/ForgotPasswordScreen";
import ProductInfoScreen from "../screens/products/ProductInfoScreen";
import CategoryProductScreen from "../screens/products/CategoryProductScreen";
import ProfileScreen from "../screens/auth/ProfileScreen";
import ProtectedRoute from "../protected/ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeScreen />} />
        <Route path="/products" element={<ProductScreen />} />
        <Route path="/products/:slug" element={<ProductInfoScreen />} />

        <Route path="/categories" element={<CategoryScreen />} />
        <Route
          path="/categories/:slug/products"
          element={<CategoryProductScreen />}
        />

        <Route path="/carts" element={<CartScreen />} />
        <Route path="/wishlists" element={<WishlistScreen />} />
        <Route path="/contacts" element={<ContactScreen />} />

        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/forgot-password" element={<ForgotPasswordScreet />} />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfileScreen />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
