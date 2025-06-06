import React from 'react'
import dancer from "../assets/orderAssets/illustration-hero.svg";
import icon from "../assets/orderAssets/icon-music.svg"

const OrderSummary = () => {
  return (
    <div className='orderBody h-screen flex items-center justify-center'>
      <div className='rounded-3xl bg-white w-100'>
        <img className='rounded-t-3xl mb-3' src={dancer} alt="image svg" />


        <div className='p-10 flex flex-col text-center'>
          <div>
            <h1 className='text-2xl font-bold'>Order Summary</h1>
            <p className='text-sm text-gray-500 mt-2'>You can now listen to millions of songs,
              audiobooks and podcasts on any device anywhere you like!
            </p>
          </div>

          <div className='mt-6 p-5 bg-amber-100 rounded-2xl flex flex-col-1 justify-between items-center'>
            <img src={icon} alt="" />

            <div>
              <h2>Annual Plan</h2>
              <p>$59.99/year</p>
            </div>

            <div className='underline text-blue-800 font-bold'>
              <a href="http://#">Change</a>
            </div>
          </div>

          <button className='bg-blue-800 rounded-lg p-4 text-white font-medium mt-5 shadow-xl'>Proceed to payment</button>
          <a className='text-gray-500 mt-5 font-medium text-sm' href="http://#">Cancel Order</a>

        </div>

      </div>

    </div>
  )
}

export default OrderSummary