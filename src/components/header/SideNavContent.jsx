import React from 'react'


{/* Icons */}
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const SideNavContent = ({ category, arrayTarget}) => {
  return (
    <div>
        <h3 className="lext-lg font-titleFont text-amazon-blue font-semibold mb-1 px-6">{ category }</h3>
            <ul className='sidebarCategory'>
        {         
            arrayTarget.map((item) => (
                <li key={(item._id)} className='sidebarList'>{item.title} 
                {
                    (item.subCat != 0) ?
                        <span><MdOutlineKeyboardArrowRight /></span>
                    :
                    null
                }
                </li>
            ))
        }
        </ul>
    </div>
  )
}

export default SideNavContent

