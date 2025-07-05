import React from 'react'
import jessica from "../assets/SocialLinks/avatar-jessica.jpeg"

const SocialLinks = () => {
  return (

    <section className='bg-Grey-900 h-screen flex items-center justify-center'>
      <div className='bg-Grey-800 w-100 flex items-center justify-center rounded-xl'>
        <div className='grid place-items-center w-full'>

          <img src={jessica} alt="" className='rounded-full w-20 my-9' />
          <h1 className='text-3xl text-WhiteLinks'>Jessica Randall</h1>
          <p className='text-greenLinks'>London, United Kingdom</p>

          <p className='text-gray-300 my-5 text-sm'>"Front-end developer and avid reader"</p>


          <div className='grid place-content-center mb-5'>


            <button class="relative overflow-hidden font-medium transition-all bg-Grey-700 rounded group h-12 my-2">
              <span class="buttonSpan"></span>
              <a href="https://x.com" target='_blank' className='links'>Github</a>
            </button>

            <button class="relative overflow-hidden font-medium transition-all bg-Grey-700 rounded group h-12 my-2">
              <span class="buttonSpan"></span>
              <a href="https://x.com" target='_blank' className='links'>Frontend Mentor</a>
            </button>

            <button class="relative overflow-hidden font-medium transition-all bg-Grey-700 rounded group h-12 my-2">
              <span class="buttonSpan"></span>
              <a href="https://x.com" target='_blank' className='links'>LinkedIn</a>
            </button>

            <button class="relative overflow-hidden font-medium transition-all bg-Grey-700 rounded group h-12 my-2 hover:text-black">
              <span class="buttonSpan"></span>
              <a href="https://x.com" target='_blank' className='links'>Twitter</a>
            </button>


          </div>


        </div>

      </div>

    </section>
  )
}

export default SocialLinks