import React, { useRef } from 'react'
import Slider from 'react-slick'
import { BsChevronLeft,BsChevronRight } from "react-icons/bs";

import { 
    bannerImgOne, 
    bannerImgTwo, 
    bannerImgThree,
    bannerImgFour,
    bannerImgFive,
 } from '../../assets';

const Banner = () => {

    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };
    
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 9000,
        cssEase: "ease",
        slidesToShow: 1,
        slidesToScroll: 1,
    };
  return (
    <div className='w-full -z-50 relative'>
        <div className='w-full max-h-full border-none'>
        <Slider ref={slider => {
          sliderRef = slider;
        }}
        {...settings}>
            <div className='border-none'>
                <img src={bannerImgOne} alt="bannerImgOne" />
            </div>
            <div className='border-none'>
                <img src={bannerImgTwo} alt="bannerImgTwo" />
            </div>
            <div className='border-none'>
                <img src={bannerImgThree} alt="bannerImgThree" />
            </div>
            <div className='border-none'>
                <img src={bannerImgFour} alt="bannerImgFour" />
            </div>
            <div className='border-none'>
                <img src={bannerImgFive} alt="bannerImgFive" />
            </div>            
        </Slider>
        <div className='relative -my-136 px-16 flex justify-between '>
        <button className="button cursor-pointer" onClick={previous}>
          <BsChevronLeft className='h-22 w-14 text-gray-400' />
        </button>
        <button className="button cursor-pointer" onClick={next}>
          <BsChevronRight className='h-22 w-14 text-gray-400' />
        </button>
      </div>
        </div>
    </div>
  )
}

export default Banner
