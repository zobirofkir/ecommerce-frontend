import React from "react";
import SliderComponent from "../components/sliders/SliderComponent";
import LastProductComponent from "../components/products/LastProductComponent";
import BrandComponent from "../components/brands/BrandComponent";
import ProductComponent from "../components/products/ProductComponent";
import AllProductComponent from "../components/products/AllProductComponent";
import CategoryComponent from "../components/categories/CategoryComponent";

const HomeScreen = () => {
  return (
    <div>
      <SliderComponent />

      <LastProductComponent />

      <ProductComponent />

      <CategoryComponent />

      <BrandComponent />

      <AllProductComponent />
    </div>
  );
};

export default HomeScreen;
