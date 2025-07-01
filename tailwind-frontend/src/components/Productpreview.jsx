import React from 'react'
import prodImage from "../assets/productPrev/image-product-desktop.jpg"

const Productpreview = () => {
  return (
    <div className='bg-cream h-screen'>

        <div className='card'>


            <div>
                <img src={prodImage} alt="" />
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default Productpreview