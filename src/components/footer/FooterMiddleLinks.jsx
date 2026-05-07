import React from 'react'

const FooterMiddleLinks = ({category, arrLinks}) => {
  return (
    <div>
        <h3 className="font-titleFont text-white text-base cont-semibold mb-3">{ category }</h3>
        <ul className='flex flex-col gap-2 font-bodyFont'>
            {
                arrLinks.map(item => (
                    <li key={item._id} className='footerLink'>{item.title}</li>
                ))
            }
            
        </ul>
    </div>
  )
}

export default FooterMiddleLinks
