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

      <section className="bg-white py-12">
        <LastProductComponent />
      </section>

      <section className="bg-yellow-100 py-12">
        <OfferComponent />
      </section>

      <section className="bg-white py-12">
        <ProductComponent />
      </section>

      <section className="bg-yellow-100 py-12">
        <CategoryComponent />
      </section>

      <section className="bg-white py-12">
        <BrandComponent />
      </section>

      <section className="bg-yellow-100 py-12">
        <AllProductComponent />
      </section>
    </section>
  );
};

export default HomeScreen;
