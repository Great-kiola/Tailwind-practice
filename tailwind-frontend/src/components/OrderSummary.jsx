import React from 'react'
import dancer from "../assets/orderAssets/illustration-hero.svg";

const OrderSummary = () => {
  return (
    <div className='orderBody h-screen flex items-center justify-center'>
        <div className='rounded-3xl w-50 h-40 bg-amber-600 p-30 cardColor'>
          <img src={dancer} alt="image svg" />
        </div>

    </div>
  )
}

export default OrderSummary