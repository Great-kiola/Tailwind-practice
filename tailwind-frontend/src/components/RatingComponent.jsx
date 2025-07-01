import React from 'react'
import { FaStar } from "react-icons/fa6";


const RatingComponent = () => {
  return <>
    <div className='ratingBackground h-screen flex items-center justify-center font-overpass'>

      <div className='w-110 bg-linear-to-t from-rating-dark to-rating-light p-10 rounded-2xl'>


        <div className='rounded-full bg-gray-700 flex size-14 justify-center items-center'>
          <FaStar className='text-rating-orange size-5' />
        </div>

        <h1 className='text-white text-2xl mt-5 font-semibold'>How did we do?</h1>
        <p className='text-gray-500 my-4 text-md '> Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>

        <div className='rating-nums flex items-center justify-between'>
          <h2 className='rating-numbers'>1</h2>
          <h2 className='rating-numbers'>2</h2>
          <h2 className='rating-numbers'>3</h2>
          <h2 className='rating-numbers'>4</h2>
          <h2 className='rating-numbers'>5</h2>
        </div>

        <button className='bg-rating-orange w-full h-14 rounded-full mt-5 hover:bg-amber-900 hover:text-white font-bold  '>SUBMIT</button>

      </div>


    </div>
  </>
}

export default RatingComponent