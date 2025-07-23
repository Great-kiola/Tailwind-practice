import React from 'react'

const Colpreview = () => {
  return (
    <>
      <div className='bg-Gray-100 h-screen flex justify-center font-lexendDeca'>

        <div className='flex w-200 items-center '>

          <div className='bg-Gold-500 cards rounded-l-xl flex flex-col justify-between w-280'>
            <div>
              <img src="icon" alt="car icon" />
              <h1 className='text-3xl my-5 font-BigShoulders uppercase text-white'>Sedans</h1>
              <p className='pr-10 text-white text-sm'>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip</p>
            </div>

            <div >
              <button className='bg-white py-3 rounded-full w-full hover:text-white hover:bg-transparent text-Gold-500 border-2'>Learn More</button>
            </div>
          </div>

          <div className='bg-Cyan-800 cards flex flex-col justify-between w-280'>
            <div>
              <img src="icon" alt="car icon" />
              <h1 className='text-3xl my-5 font-BigShoulders uppercase text-white'>SUVS</h1>
              <p className='pr-10 text-sm text-white'>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip</p>
            </div>

            <div >
              <button className='bg-white py-3 rounded-full w-full hover:text-white hover:bg-transparent text-Cyan-800 border-2'>Learn More</button>
            </div>
          </div>

          <div className='bg-Green-950 cards rounded-r-xl flex flex-col justify-between w-280'>
            <div>
              <img src="icon" alt="car icon" />
              <h1 className='text-3xl my-5 font-BigShoulders uppercase text-white'>Luxury</h1>
              <p className='pr-10 text-sm text-white'>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip</p>
            </div>

            <div >
              <button className='bg-white py-3 rounded-full w-full hover:text-white hover:bg-transparent text-Green-950 border-2'>Learn More</button>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Colpreview