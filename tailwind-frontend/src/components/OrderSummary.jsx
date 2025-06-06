import React from 'react'
import dancer from "../assets/orderAssets/illustration-hero.svg";
import icon from "../assets/orderAssets/icon-music.svg"

const OrderSummary = () => {
  return (
    <div className='orderBody h-screen flex items-center justify-center'>
      <div className='rounded-3xl bg-white h-150 w-100'>
        <img className='rounded-t-3xl' src={dancer} alt="image svg" />


        <div className='p-5 flex flex-col text-center'>
          <div>
            <h1 className='text-xl font-bold'>Order Summary</h1>
            <p className=''>You can now listen to millions of songs,
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

        </div>

      </div>

    </div>
  )
}

export default OrderSummary