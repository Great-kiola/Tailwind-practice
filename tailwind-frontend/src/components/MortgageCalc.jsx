import React from 'react'
import illustratioon from "../assets/MortgageCalc/images/illustration-empty.svg"
import calculator from "../assets/MortgageCalc/images/icon-calculator.svg"

const MortgageCalc = () => {
  return (
    <div className='bg-SlateMorgageCalc100 h-screen flex items-center justify-center font-jakarta'>
      <div className='bg-WhiteMortgageCalc w-270 h-155 flex rounded-4xl shadow-xl'>
        <div className='w-full p-10'>
          <div className='flex justify-between mb-5'>
            <h1 className='font-bold text-xl '>Mortgage Calculator</h1>
            <p className='underline text-SlateMorgageCalc300'><a href="#">Clear All</a></p>
          </div>

          <div className='formDiv mb-20'>
            <form action="" method="get">
              {/* Form */}
              <label htmlFor="log-email" className="text-SlateMorgageCalc500">Mortgage Amount</label>

              <div class="flex mt-2">
                <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-SlateMorgageCalc100 border rounded-e-0 border-SlateMorgageCalc500 border-r-0 rounded-s-md">
                  <span className='font-bold text-SlateMortgageCalc700'>£</span>
                </span>
                <input type="text" id="website-admin" className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900  w-full text-sm border-SlateMorgageCalc500 p-2.5 h-12" />
              </div>
            </form>

          </div>

          <button className='bg-LimeMortgageCalc flex gap-2 p-4 rounded-full font-bold'>
            <img src={calculator} alt="claculator icon" />
            Calculate Repayments
          </button>

        </div>

        <div className='w-300 bg-SlateMortgageCalc900 rounded-tr-4xl rounded-bl-[120px] flex justify-center items-center flex-col rounded-br-4xl'>
          <img src={illustratioon} alt="" className='w-50' />

          <h1 className='text-WhiteMortgageCalc font-bold text-[22px]'>Results shown here</h1>
          <p className='text-SlateMorgageCalc300 text-center text-md px-16 pt-3'>Complete the form and click "calculate repayments" to see what your monthly repayments would be. </p>
        </div>
      </div>


    </div>
  )
}

export default MortgageCalc