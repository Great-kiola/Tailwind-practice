import React from 'react'
import illustratioon from "../assets/MortgageCalc/images/illustration-empty.svg"
import calculator from "../assets/MortgageCalc/images/icon-calculator.svg"

const MortgageCalc = () => {
  return (
    <div className='bg-SlateMortgageCalc100 h-screen flex items-center justify-center font-jakarta'>
      <div className='bg-WhiteMortgageCalc w-270 h-155 flex rounded-4xl shadow-xl'>
        <div className='w-full p-10 flex flex-col justify-between'>
          <div className='flex justify-between mb-5'>
            <h1 className='font-bold text-xl '>Mortgage Calculator</h1>
            <p className='underline text-SlateMortgageCalc300'><a href="#">Clear All</a></p>
          </div>

          <div className='formDiv'>
            <form action="" method="get">

              <label htmlFor="log-email" className="text-SlateMortgageCalc700 font-medium text-sm">Mortgage Amount</label>
              <div class="flex mt-2 mb-5">
                <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-SlateMortgageCalc100 border rounded-e-0 border-SlateMortgageCalc300 border-r-0 rounded-s-md">
                  <span className='font-bold text-SlateMortgageCalc700'>£</span>
                </span>
                <input type="text" id="website-admin" className="rounded-none rounded-e-lg bg-gray-50 border border-l-0 text-gray-900  w-full text-sm border-SlateMortgageCalc300 p-2.5 h-12" />
              </div>

              <div className='flex gap-7 mb-5'>
                <div>
                  <label htmlFor="log-email" className="text-SlateMortgageCalc700 font-medium text-sm">Mortgage Term</label>
                  <div class="flex mt-2">
                    <input type="text" id="website-admin" className="rounded-l-lg bg-gray-50 border border-r-0 text-gray-900 text-sm border-SlateMortgageCalc300 p-2.5 h-12" />

                    <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-SlateMortgageCalc100 border rounded-e-0 border-SlateMortgageCalc300 border-l-0 rounded-r-lg">
                      <span className='font-bold text-SlateMortgageCalc700'>years</span>
                    </span>
                  </div>
                </div>

                <div>
                  <label htmlFor="log-email" className="text-SlateMortgageCalc700 font-medium text-sm">Interest Rate</label>
                  <div class="flex mt-2">
                    <input type="text" id="website-admin" className="rounded-l-lg bg-gray-50 border border-r-0 text-gray-900 text-sm border-SlateMortgageCalc300 p-2.5 h-12" />

                    <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-SlateMortgageCalc100 border rounded-e-0 border-SlateMortgageCalc300 border-l-0 rounded-r-lg">
                      <span className='font-bold text-SlateMortgageCalc700'>%</span>
                    </span>
                  </div>
                </div>
              </div>

              <label htmlFor="" className='text-sm'>Mortgage Type</label>
              <label className='border p-4 flex gap-4 mt-4 rounded-md items-center border-SlateMortgageCalc300'>
                <input type="checkbox" name="" id="" className='size-5 ' />
                <span className='font-bold'>Repayment</span>
              </label>

              <label className='border p-4 flex gap-4 mt-2 rounded-md items-center border-SlateMortgageCalc300'>
                <input type="checkbox" name="" id="" className='size-5' />
                <span className='font-bold'>Interest Only</span>
              </label>




            </form>

          </div>

          <button className='bg-LimeMortgageCalc flex gap-2 p-4 rounded-full font-bold w-75 pl-10'>
            <img src={calculator} alt="claculator icon" />
            Calculate Repayments
          </button>

        </div>

        <div className='w-300 bg-SlateMortgageCalc900 rounded-tr-4xl rounded-bl-[120px] flex justify-center items-center flex-col rounded-br-4xl'>
          <img src={illustratioon} alt="" className='w-50' />

          <h1 className='text-WhiteMortgageCalc font-bold text-[22px]'>Results shown here</h1>
          <p className='text-SlateMortgageCalc300 text-center text-md px-16 pt-3'>Complete the form and click "calculate repayments" to see what your monthly repayments would be. </p>
        </div>
      </div>


    </div>
  )
}

export default MortgageCalc