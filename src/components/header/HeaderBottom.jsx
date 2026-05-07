import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion';

{/* Icons */}
import { FaBars } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import SideNavContent from './sideNavContent';

{/* Sending the arrays */}
import { trendingItems, digitalItems, departmentItems, programItems } from '../../constants';

const HeaderBottom = () => {
    const ref = useRef()
    const [sidebar, setSidebar] = useState(false)
    useEffect(() =>{
        document.body.addEventListener("click", (e) => {
            if(e.target.contains(ref.current)) {
                setSidebar(false)
            }
        })
    }, [ref.sidebar])

  return (
    <div className='w-full px-4 h-[36px] bg-amazon-light text-white'>
        {/* ListItems starts here */}
        <ul className='flex items-center gap-2 text-sm tracking-wide'>
            <li onClick={() => setSidebar(true)} className='headerHover'><FaBars className='text-xl' />All</li>
            <li className='headerHover'>Today's Deals</li>
            <li className='headerHover'>Customer Service</li>
            <li className='headerHover'>Gift Cards</li>
            <li className='headerHover'>Registry</li>
            <li className='headerHover'>Sell</li>
        </ul>

        {/* sideNav starts here */}
        {
            sidebar && (
                <div className="fixed top-0 left-0 w-full h-screen z-50">
                <div className='w-full h-screen text-black fixed top-0 left-0 bg-amazon-blue opacity-50'>
                   
                </div>
                 <div className="w-full h-full relative">
                        <motion.div
                        ref={ref} 
                        initial={{x: -500, opacity: 0}} 
                        animate={{x: 0, opacity: 1}} 
                        transition={{duration: .5}}
                        className="w-86 h-full bg-white border border-black overflow-y-scroll overflow-x-hidden">
                            <div className='w-full bg-amazon-light text-white py-2 px-6 flex items-center gap-4'>
                            <MdAccountCircle className='text-3xl'/>
                            <h3>Hello, Sign In</h3>
                            </div>
                            <SideNavContent category={"Trending"} arrayTarget={trendingItems}/>
                            <SideNavContent category={"Digital Content & Devices"} arrayTarget={digitalItems}/>
                            <SideNavContent category={"Shop by Department"} arrayTarget={departmentItems}/>
                            <SideNavContent category={"Programs & Features"} arrayTarget={programItems}/>
                        </motion.div>
                        <span onClick={() => setSidebar(false)} className='absolute top-0 left-[352px] hover:text-red-600 hover:bg-amazon-blue py-2 px-0 w-4 h-4'>
                            <FaWindowClose className='w-12 h-12' />
                        </span>
                    </div>
                    </div>
            )
        }
    </div>
  )
}

export default HeaderBottom
