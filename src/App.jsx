import { useState } from 'react'
import { 
  Router, 
  Routes, 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  Outlet, 
  RouterProvider 
} from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './pages/Home'
import { productData } from './api/api'


const Layout = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>} loader={productData}/>
    </Route>
  ))
 
  return (
    <div className='font-bodyFont w-full pt-27 flex flex-col z-auto bg-gray-100'>
     <RouterProvider router={router} />
    </div>
  )
}

export default App
