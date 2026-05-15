import axios from 'axios'
import { div, img } from 'framer-motion/client'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useLoaderData } from 'react-router-dom'

const Products = () => {
    
    const { data } = useLoaderData();
    const productData = data;

  return (
    <div className='z-auto max-w-screen-2xl grid grid-cols-4 mt-176 gap-10 grow-0 mb-10 '>
        {
            productData.map((item) => (
                <div className='bg-white p-6 w-64 z-10 hover:scale-105 hover:shadow-2xl rounded-lg transition-transform duration-300 rounded-lg shadow-md ' key={item.id}>
                <div key={item.id}>
                    <img src={item.category.image} alt="ProductImg" className='w-52 h-52 object-contain' />
                </div>
                <div className='mt-4 w-52 flex justify-between gap-2 font-semibold text-sm'>
                    <h2>{item.title}</h2>
                    <p>{`$${item.price.toFixed(2)}`}</p>
                </div>
                </div>
            ))
        }        
    </div>
  )
}

export default Products
