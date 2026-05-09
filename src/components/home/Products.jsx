import axios from 'axios'
import { div } from 'framer-motion/client'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useLoaderData } from 'react-router-dom'

const Products = () => {
    
    const data = useLoaderData()
    const productData = data;
    console.log(productData);

  return (
    <div className='absolute top-120'>
        {
            console.log("Is an array: "+Array.isArray(productData)),
            productData.map((item) => {
                <div key={item.id}>
                    <img src={item.image} alt="ProductImg" />
                </div>
            })
        }       
    </div>
  )
}

export default Products
