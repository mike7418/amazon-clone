import React from 'react'
import FooterMiddleLinks from './FooterMiddleLinks'
import { knowUsItems, makeMoneyItems, paymentItems, helpItems } from '../../constants'
import { logo } from '../../assets/index'
import { CiGlobe } from "react-icons/ci";
import { RiExpandUpDownFill } from "react-icons/ri";
import { US } from 'country-flag-icons/react/3x2'

const FooterMiddle = () => {
  return (
    <div className='w-full bg-amazon-light text-white'>
        {/* Top Start Here */}
           <div className='w-full borer-b-[1px] border-gray-500 py-10'>
                <div className="max-w-5xl mx-auto text-gray-300">
                    <div className="w-full grid grid-cols-4 place-items-center items-start gap-38">
                        <FooterMiddleLinks category={"Get to Know Us"} arrLinks={knowUsItems} />
                        <FooterMiddleLinks category={"Make Money with Us"} arrLinks={makeMoneyItems} />
                        <FooterMiddleLinks category={"Amazon Payment Products"} arrLinks={paymentItems} />
                        <FooterMiddleLinks category={"Let Us Help You"} arrLinks={helpItems} />
                    </div>
                </div>
           </div>
        {/* Top End Here */}
        {/* Bottom Start Here */}
<div className="w-full flex gap-2 items-center justify-center py-6 border-t-2 border-gray-700">
  <div>
    <img src={logo} alt="" className="w-20 pt-3 mx-22" />
  </div>
  <div className="flex gap-2">
    <p className="flex gap-1 items-center justify-center border border-gray-500 hover:border-amazon-yellowcursor-pointer duration-200 px-2 py-1">
      <CiGlobe /> English <RiExpandUpDownFill />
    </p>
  </div>
  <div className='flex gap-2'>
      <p className="flex gap-1 items-center justify-center border border-gray-500 hover:border-amazon-yellowcursor-pointer duration-200 px-2 py-1">
        <US title="United States" className="w-5"/>
        United States
      </p>
  </div>
</div>
        {/* Bottom End Here */}
    </div>
  )
}

export default FooterMiddle
