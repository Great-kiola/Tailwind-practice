import React from 'react'
import illustratioon from "../assets/MortgageCalc/images/illustration-empty.svg"
import calculator from "../assets/MortgageCalc/images/icon-calculator.svg"

const MortgageCalc = () => {
  return (
    <div className='bg-SlateMorgageCalc100 h-screen flex items-center justify-center'>
      <div className='bg-WhiteMortgageCalc w-270 h-150 flex'>
        <div className='w-200'>
          <div className='title'>
            <h1>Mortgage Calculator</h1>
            <p><a href="#">Clear All</a></p>
          </div>

          <div className='formDiv'></div>

          <button className='bg-LimeMortgageCalc flex gap-2 p-4 rounded-full'>
            <img src={calculator} alt="claculator icon" />
            Calculate Repayments
          </button>

        </div>

        <div className='w-full bg-SlateMortgageCalc900 rounded-tr-4xl rounded-bl-[120px] flex justify-center items-center flex-col'>
          <img src={illustratioon} alt="" className='w-50'/>

          <h1 className='text-WhiteMortgageCalc font-bold text-2xl'>Results shown here</h1>
          <p className='text-SlateMorgageCalc300 text-center'>Complete the form and click "calculate repayments" to see what your monthly repayments would be. </p>
        </div>
      </div>

        
    </div>
  )
}

export default MortgageCalc