import React from 'react'
import SliderComponent from '../components/SliderComponent'
import LastProduct from '../components/LastProduct'
import NavCategory from '../components/NavCategory'
import ProductComponent from '../components/ProductComponent'
import AllProducts from '../components/AllProducts'

const HomeScreen = () => {
  return (
    <div>
      <SliderComponent/>
      
      <NavCategory/>

      <LastProduct/>

      <ProductComponent/>

      <AllProducts/>
    </div>
  )
}

export default HomeScreen