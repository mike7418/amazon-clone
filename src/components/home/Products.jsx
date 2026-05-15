import axios from 'axios'
import { div, img } from 'framer-motion/client'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useLoaderData } from 'react-router-dom'

const Products = () => {
    
    const { data } = useLoaderData();
    const productData = data;

  return (
    <div className='max-w-screen-2xl grid grid-cols-4 mt-176 grow-0'>
        {
            productData.map((item) => (
                <div className='bg-white p-8  w-68'>
                <div key={item.id}>
                    <img src={item.category.image} alt="ProductImg" className='bg-gray-400 w-52 h-52 object-contain' />
                </div>
                <div className='mt-4 w-52'>
                    <h2>{item.title}</h2>
                    <p>{`$${item.price.toFixed(2)}`}</p>
                </div>
                </div>
            ))
        }
        { console.log(productData) }
    </div>
  )
}

export default Products
