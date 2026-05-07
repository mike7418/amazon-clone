import { useState } from 'react'
import Header from './components/header/Header'
import Banner from './components/home/Banner'
import Footer from './components/footer/Footer'

function App() {
 
  return (
    <div className='font-bodyFont h-screen w-full'>
      <Header />
      <Banner />
      <Footer />
    </div>
  )
}

export default App
