import React from "react";
import SliderComponent from "../components/sliders/SliderComponent";
import LastProductComponent from "../components/products/LastProductComponent";
import BrandComponent from "../components/brands/BrandComponent";
import ProductComponent from "../components/products/ProductComponent";
import AllProductComponent from "../components/products/AllProductComponent";
import CategoryComponent from "../components/categories/CategoryComponent";
import OfferComponent from "../components/offers/OfferComponent";

const HomeScreen = () => {
  return (
    <section>
      <SliderComponent />

      <LastProductComponent />

      <OfferComponent />

      <ProductComponent />

      <CategoryComponent />

      <BrandComponent />

      <AllProductComponent />
    </section>
  );
};

export default HomeScreen;
