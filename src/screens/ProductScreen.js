import React, { useEffect } from 'react'
import ProductComponent from '../components/products/ProductComponent'

const ProductScreen = () => {
  useEffect(() => {
    document.title = "Products";
  }, [])
  return (
    <div>
      <ProductComponent/>
    </div>
  )
}

export default ProductScreen