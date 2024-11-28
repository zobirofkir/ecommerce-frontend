import React, { useEffect } from 'react'
import CartComponent from '../../components/carts/CartComponent'

const CartScreen = () => {
  useEffect(() => {
    document.title = "Carts";
  }, [])
  return (
    <div>
        <CartComponent/>
    </div>
  )
}

export default CartScreen