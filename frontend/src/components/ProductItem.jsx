import React, { use } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import bestSeller from '../Pages/Home.jsx'


const ProductItem = ({id,name,image,price}) => {

    const {currency}=useContext(ShopContext);

  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>

        <div className='overflow-hidden'>
            <img className='hover:scale-110 transition ease-in-out' src={image} alt='' />

        </div>
      
      <p className='pt-3 pb-1 text-sum'>{name}</p>
      <p className='text-sm font-medium'>{currency}{price}</p>
      <p className='text-xs text-gray-500 mt-1'>{bestSeller ? "Best Seller" : ""}</p>

      
    </Link>
  )
}

export default ProductItem
