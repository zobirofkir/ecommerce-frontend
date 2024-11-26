import React from 'react'
import SliderComponent from '../components/SliderComponent'
import LastProduct from '../components/LastProduct'
import NavCategory from '../components/NavCategory'

const HomeScreen = () => {
  return (
    <div>
      <SliderComponent/>
      <NavCategory/>
      <LastProduct/>
    </div>
  )
}

export default HomeScreen