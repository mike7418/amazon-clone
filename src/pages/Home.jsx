import React from 'react'
import Banner from '../components/home/Banner'
import Products from '../components/home/Products'

const Home = () => {
  return (
    <div className='flex-1 z-auto bg-gray-100'>
      <Banner/>
      <Products/>
    </div>
  )
}

export default Home
