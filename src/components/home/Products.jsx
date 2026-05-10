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
    <div className='absolute top-120'>
        Products
        {
            productData.map((item) => {
                <div key={item.id}>
                <img src={item.image} alt="ProductImg" />
                </div>
            })
        }
        { console.log(productData) }
    </div>
  )
}

export default Products
