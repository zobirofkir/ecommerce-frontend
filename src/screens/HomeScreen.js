import React from 'react'
import SliderComponent from '../components/SliderComponent'
import LastProductComponent from '../components/LastProductComponent'
import BrandComponent from '../components/BrandComponent'
import ProductComponent from '../components/ProductComponent'
import AllProductComponent from '../components/AllProductComponent'

const HomeScreen = () => {
  return (
    <div>
      <SliderComponent/>

      <LastProductComponent/>

      <ProductComponent/>

      <BrandComponent/>
      
      <AllProductComponent/>
    </div>
  )
}

export default HomeScreen