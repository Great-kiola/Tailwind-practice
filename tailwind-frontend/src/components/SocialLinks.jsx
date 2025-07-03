import React from 'react'
import jessica from "../assets/SocialLinks/avatar-jessica.jpeg"

const SocialLinks = () => {
  return (

    <section className='bg-Grey-900 h-screen flex items-center justify-center'>
        <div className='bg-Grey-800 w-100 flex items-center justify-center rounded-xl'>
          <div className='grid place-items-center'>

            <img src={jessica} alt="" className='rounded-full w-20 my-5' />
            <h1 className='text-xl text-WhiteLinks'>Jessica Randall</h1>
            <p className='text-greenLinks'>London, United Kingdom</p>

            <p className='text-gray-500 my-5'>"Front-end developer and avid reader"</p>


            <h1>Github</h1>
          </div>

        </div>

    </section>
  )
}

export default SocialLinks