import axios from 'axios'
import { div, img } from 'framer-motion/client'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useLoaderData } from 'react-router-dom'

const Products = () => {
    
    const {
    data: {data: productData},
     } = useLoaderData();

  return (
    <div className='relative top-180 grid grid-cols-5 gap-14 mx-36 max-h-lvh h-screen'>
        {
            productData.map((item) => (
                <div>
                <div key={item.id}>
                    <img src={item.image} alt="ProductImg" className='w-52 h-64 border-[1px] border-amazon-light object-contain' />
                </div>
                <div>
                    <h2>{item.title}</h2>
                    <p>{item.price}</p>
                </div>
                </div>
            ))
        }
        { console.log(productData) }
    </div>
  )
}

export default Products
