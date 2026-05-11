import React from 'react'
import FooterTop from './FooterTop'
import FooterMiddle from './FooterMiddle'
import FooterBottom from './FooterBottom'

const Footer = () => {
  return (
    <div className='w-full h-42 font-titleFont bottom-0 -z-20'>
      <FooterTop />
      <FooterMiddle />
      <FooterBottom />
    </div>
  )
}

export default Footer
