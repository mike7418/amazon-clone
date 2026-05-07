import React from 'react'

const BottomLinks = ({ category, arrItems}) => {
  return (
    <div className='group cursor-pointer hover:underline duration-200 w-34' >
        <h4 className='font-titleFont text-white text-xs/0 font-semibold mb-3 py-0 my-0'>{category}</h4>
        <ul className='py-0 my-0'>
            {
                arrItems.map(item => (
                    <li key={item._id} className='font-titleFont text-white text-xs font-extralight'>{item.title}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default BottomLinks
