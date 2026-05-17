import axios from 'axios'
import { div, img } from 'framer-motion/client'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useLoaderData } from 'react-router-dom'
import { IoStar } from 'react-icons/io5'
import { MdApi, MdAddShoppingCart, MdArrowCircleRight, MdOutlineFavorite   } from "react-icons/md";

const Products = () => {
    
    const { data } = useLoaderData();
    const productData = data;

  return (
    <div className='z-auto max-w-screen-xl grid grid-cols-4 mt-176 gap-6 mb-10 ml-8'>
        {
            productData.map((item) => (
                <div className='bg-white w-72 z-10 hover:scale-103 hover:shadow-2xl rounded-lg transition-transform duration-300 rounded-lg shadow-md flex flex-col gap-4' key={item.id}>
                <div key={item.id} className='relative group'>
                    <span className='absolute text-xs capitalize italic top-2 right-2 text-gray-700 bg-gray-400 px-2'>{item.category.name}</span>
                    <img src={item.images[0]} alt="ProductImg" className='w-72 h-72 rounded-t-lg object-contain' />
                    <ul className='absolute w-full opacity-100 h-36 bg-gray-100 bottom-0 font-titleFont flex flex-col items-end justify-center gap-2 px-2 border-1 border-r border-gray-500 z-10 bottom-[-170px] hover:group-[bottom-0] transition-all duration-300 rounded-b-lg'>
                        <li className='productLi'>Compare {" "} <span><MdApi /></span></li>
                        <li className="productLi">Add to Cart <span><MdAddShoppingCart /></span></li>
                        <li className="productLi">View Details {""} <span><MdArrowCircleRight /></span></li>
                        <li className="productLi">Add to Wishlist {""} <span><MdOutlineFavorite /></span></li>
                    </ul>
                </div>
                <div className="z-10">
                <div className='mt-4 w-72 flex justify-between gap-2 items-center text-sm px-4'>
                    <h2 className='font-titleFont tracking-wide text-amazon-blue font-medium'>{item.title.substring(0, 20)}...</h2>
                    <p>{`$${item.price.toFixed(2)}`}</p>
                </div>
                <div className='w-72 text-xs text-gray-600 px-4'>{item.description.substring(0, 100)}...
                <div className='flex flex-row justify-content text-amazon-yellow'>
                    <IoStar /><IoStar /><IoStar /><IoStar /><IoStar /></div>
                </div>
                <div className='p-4'><button className='w-full font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200  borfer hover:from-yellow-300 hover:to-yellow-400 border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3'>Add to Cart</button></div>
                </div>
                
                </div>
            ))
        }        
    </div>
  )
}

export default Products
