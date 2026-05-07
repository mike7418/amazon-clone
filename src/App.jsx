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
import { div } from 'framer-motion/client'

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
    <Route>
      <Route path="/" element={<Layout/>}/>
      <Route path="/home" element={<Home/>}/>
    </Route>
  ))
 
  return (
    <div className='font-bodyFont h-screen w-full'>
     <RouterProvider router={router}> </RouterProvider>
    </div>
  )
}

export default App
