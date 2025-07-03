import React from 'react'
import jessica from "../assets/SocialLinks/avatar-jessica.jpeg"

const SocialLinks = () => {
  return (

    <section className='bg-Grey-900 h-screen flex items-center justify-center'>
      <div className='bg-Grey-800 w-100 flex items-center justify-center rounded-xl'>
        <div className='grid place-items-center w-full'>

          <img src={jessica} alt="" className='rounded-full w-20 my-9' />
          <h1 className='text-xl text-WhiteLinks'>Jessica Randall</h1>
          <p className='text-greenLinks'>London, United Kingdom</p>

          <p className='text-gray-300 my-5 text-sm'>"Front-end developer and avid reader"</p>


          <div className='grid place-content-center mb-5'>
            <a href="#" target='_blank' className='links '>Github</a>
            <a href="#" target='_blank' className='links'>Frontend Mentor</a>
            <a href="#" target='_blank' className='links'>LinkedIn</a>
            <a href="#" target='_blank' className='links'>Twitter</a>
            <a href="#" target='_blank' className='links'>Instagram</a>
          </div>


        </div>

      </div>

    </section>
  )
}

export default SocialLinks