import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productAction } from '../redux/actions/ProductAction';

const AllProductComponent = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(productAction());
  }, [dispatch]);
    
  return (
    <div className='container mx-auto md:px-0 px-6'>
        <div>
            <h1 className='text-3xl font-bold text-gray-900 mb-6 text-center'>All Products</h1>
        </div>

        <div className='flex flex-col justify-center items-center'>
            <div className='grid grid-cols-2 md:grid-cols-5 gap-4'>
                {products.map((product) => (
                    <div key={product.id} className='border border-gray-300 p-4 flex md:flex-row flex-col justify-center items-center gap-6'>
                        <h2 className='text-lg font-semibold text-gray-900'>{product.title}</h2>
                        <img src={product.images.split(',')[0].trim()} alt={product.title} className='w-32 h-32'/>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default AllProductComponent