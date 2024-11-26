import React from 'react'
import SliderComponent from '../components/SliderComponent'
import LastProductComponent from '../components/LastProductComponent'
import BrandComponent from '../components/BrandComponent'
import ProductComponent from '../components/ProductComponent'
import AllProductComponent from '../components/AllProductComponent'
import CategoryComponent from '../components/CategoryComponent'

const HomeScreen = () => {
  return (
    <div>
      <SliderComponent/>

      <LastProductComponent/>

      <ProductComponent/>

      <CategoryComponent/>

      <BrandComponent/>
      
      <AllProductComponent/>
    </div>
  )
}

export default HomeScreen