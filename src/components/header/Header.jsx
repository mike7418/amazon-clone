import React, { useEffect, useRef, useState } from 'react'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdArrowDropDown } from "react-icons/md";
import { BiCartAdd } from "react-icons/bi";
import { IoIosSearch } from "react-icons/io";
import { allItems } from '../../constants'


import {logo} from "../../assets/index"
import HeaderBottom from './HeaderBottom';

const Header = () => {
  const [showAll, setShowAll] = useState(false);
  const refAll = useRef(null);
  useEffect(() => {
    
    document.activeElement.addEventListener("mousedown", (e) => {
      if(e.target.contains(refAll.current) || (!window.current)) {
        setShowAll(false)
      }
    })
  },[])  

  return (
    <div>
      <div className="w-full bg-amazon-blue text-white px-4 py-3 flex items-center gap-4">
        {/* Image start here */}
        <div className="headerHover">
          <img className="w-24 mt-2" src={logo} alt="" />
        </div>
        {/* Delivery Start Here */}
        <div className='headerHover'>
          <HiOutlineLocationMarker className="text-lg" />
          
          <p className="text-sm font-light text-lightText flex flex-col">Deliver to Mike <span className='text-sm font-semibold -mt-1 text-whiteText'>Adel 50003</span></p>
        </div>
        {/* Start Search bar here*/}
        <div className='h-10 rounded-md flex flex-grow-1 relative bg-white'>
          <span onClick={() => setShowAll(!showAll)} className="w-14 h-full bg-gray-200 hover:bg-gray-300 border-r-2 cursor-pointer duration-300 text-sm font-titleFont text-amazon-blue flex items-center gap-1 px-2 rounded-tl-md rounded-bl-md">
            All <MdArrowDropDown />
          </span>
          {
            showAll && (
              <div className="" ref={refAll} className='group'>
                <ul className='z-50 absolute w-64 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon-blue text-black px-3 py-1 flex-col gap-0 z-50 group-hover:delay-1000'>
                  {/*<li className='departmentList'>All Departments</li>*/}

                  {
                    allItems.map((item) => (
                      <li key={(item._id)} className='departmentList'>{item.title}</li>
                    ))
                  }
                  
                </ul>
              </div>
            )
          }
          <input type="text" className='h-full text-base text-amazon-blue flex-grow-1 outline-none border-none px-2' />
          <span className='w-12 h-full flex items-center justify-center bg-amazon-yellow hover:bg-[#f3a847] duration-300 text-amazon-blue cursor-pointer rounded-tr-md rounded-br-md text-3xl'><IoIosSearch /></span>
        </div>
        {/* Sign In Starts here */}
        <div className="flex flex-col items-start justify-center headerHover">
          <p className='text-sm text-lightText font-light'>Hello, sign in</p>
          <p className='flex flex-row items-center gap-1 text-sm font-semibold -mt-1'>Accounts & Lists <span><MdArrowDropDown /></span></p>
        </div>
        {/* Orders Starts here */}
        <div className='flex flex-col items-start justify-center headerHover'>
          <p className='text-sm text-lightText font-light '>Returns</p>
          <p className='text-sm font-semibold-mt-1 text-whiteText'>& Orders</p>
        </div>
        {/* Cart Starts here */}
        <div className="flex items-start justify-center headerHover relative">
            <BiCartAdd className='text-5xl' />
            <p className='text-[13px] mt-7 font-semibold text-whiteText'>Cart <span className='absolute text-xl top-0.5 w-4 left-7 bg-amazon-blue font-semibold text-amber-500 rounded-b-md'>0</span></p>
        </div>
      </div>
      <HeaderBottom />
    </div>
  )
}

export default Header
