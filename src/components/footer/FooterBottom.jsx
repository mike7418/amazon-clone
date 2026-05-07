import React from 'react'
import BottomLinks from './BottomLinks'
import { abeItems, acxItems, adsItems, audItems, blinkItems, bopItems, busItems, eerItems, foodsItems, freshItems, globItems, goodrItems, homeItems, imdbItems, imdbProItems, kindleItems, mojoItems, musicItems, neighItems, photosItems, pillItems, pmItems, renewItems, resaleItems, ringItems, sellItems, veeqoItems, videoItems, webItems, wootItems, zapItems } from '../../constants'
import { PiToggleLeftFill } from "react-icons/pi";

const FooterBottom = () => {
  return (
    <div className='w-full bg-footerBottom py-8'>
      <div className="max-w-5xl mx-auto text-gray-300">
        <div className="w-full grid grid-cols-7 place-items-center items-start gap-8">
          <BottomLinks category={"Amazon Music"} arrItems={musicItems}/>
          <BottomLinks category={"Amazon Ads"} arrItems={adsItems}/>
          <BottomLinks category={"6am"} arrItems={pmItems}/>
          <BottomLinks category={"Abe Books"} arrItems={abeItems}/>
          <BottomLinks category={"ACX"} arrItems={acxItems}/>
          <BottomLinks category={"Sell on Amazon"} arrItems={sellItems}/>
          <BottomLinks category={"Veeqo"} arrItems={veeqoItems}/>
          <BottomLinks category={"Amazon Business"} arrItems={busItems}/>
          <BottomLinks category={"Amazon Fresh"} arrItems={freshItems}/>
          <BottomLinks category={"AmazonGlobal"} arrItems={globItems}/>
          <BottomLinks category={"Home Services"} arrItems={homeItems}/>
          <BottomLinks category={"Amazon Web Services"} arrItems={webItems}/>
          <BottomLinks category={"Audible"} arrItems={audItems}/>
          <BottomLinks category={"Box Office Mojo"} arrItems={mojoItems}/>
          <BottomLinks category={"Goodreads"} arrItems={goodrItems}/>
          <BottomLinks category={"IMDB"} arrItems={imdbItems}/>
          <BottomLinks category={"IMDB Pro"} arrItems={imdbProItems}/>
          <BottomLinks category={"Kindle Direct Publishing"} arrItems={kindleItems}/>
          <BottomLinks category={"Amazon Photos"} arrItems={photosItems}/>
          <BottomLinks category={"Prime Video Direct"} arrItems={videoItems}/>
          <BottomLinks category={"Shopbop"} arrItems={bopItems}/>
          <BottomLinks category={"Amazon Resale"} arrItems={resaleItems}/>
          <BottomLinks category={"Whole Foods Market"} arrItems={foodsItems}/>
          <BottomLinks category={"Woot!"} arrItems={wootItems}/>
          <BottomLinks category={"Zappos"} arrItems={zapItems}/>
          <BottomLinks category={"Ring"} arrItems={ringItems}/>
          <BottomLinks category={"eero WiFi"} arrItems={eerItems}/>
          <BottomLinks category={"Blink"} arrItems={blinkItems}/>
        </div>
        <div className="grid grid-cols-3 place-items-center items-start gap-10 mx-78 my-10">
          <BottomLinks category={"Neightbors App"} arrItems={neighItems}/>
          <BottomLinks category={"PillPack"} arrItems={pillItems}/>
          <BottomLinks category={"Amazon Renewed"} arrItems={renewItems}/>
        </div>
      </div>
      <div className="max-w-full w-xl text-white text-xs font-extralight flex flex-row justify-between items-center mx-auto">
        <p className="cursor-pointer hover:underline">Conditions of Use</p>
        <p className="cursor-pointer hover:underline">Privacy Notice</p>
        <p className="cursor-pointer hover:underline">Customer Health Data Privacy Disclosure</p>
        <p className="cursor-pointer hover:underline">Your Ads Privacy Choices</p>
        <p><PiToggleLeftFill className='w-[30px] h-5' /></p>
      </div>
      <div className="max-w-full w-lg text-white text-xs font-extralight mx-auto text-center">&copy; 1996-2026, Amazon.com, Inc. or it's affiliates</div>
    </div>
  )
}

export default FooterBottom
