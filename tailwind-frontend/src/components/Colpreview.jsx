import React from 'react'

const Colpreview = () => {
  return (
    <>
      <div className='bg-Gray-100 h-screen flex justify-center'>

        <div className='flex w-200 items-center '>

          <div className='bg-Gold-500 cards rounded-l-xl flex flex-col justify-between'>
            <div>
              <img src="icon" alt="car icon" />
              <h1 className='text-3xl my-5'>Sedans</h1>
              <p>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip</p>
            </div>

            <div classna>
              <button className='bg-Transparent-white py-3 rounded-full w-full'>Learn More</button>
            </div>
          </div>

          <div className='bg-Cyan-800 cards'>
            <img src="icon" alt="car icon" />
            <h1>Sedans</h1>
            <p>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip</p>

            <button>Learn More</button>
          </div>

          <div className='bg-Green-950 cards rounded-r-xl'>
            <img src="icon" alt="car icon" />
            <h1>Sedans</h1>
            <p>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip</p>

            <button className=''>Learn More</button>
          </div>``
        </div>

      </div>
    </>
  )
}

export default Colpreview