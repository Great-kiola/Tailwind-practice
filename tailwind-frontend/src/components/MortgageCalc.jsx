import React from 'react'
import illustratioon from "../assets/MortgageCalc/images/illustration-empty.svg"
import calculator from "../assets/MortgageCalc/images/icon-calculator.svg"

const MortgageCalc = () => {
  return (
    <div className='bg-SlateMorgageCalc100 h-screen flex items-center justify-center'>
      <div className='bg-WhiteMortgageCalc w-270 h-155 flex rounded-4xl shadow-xl'>
        <div className='w-full p-10'>
          <div className='title'>
            <h1>Mortgage Calculator</h1>
            <p><a href="#">Clear All</a></p>
          </div>

          <div className='formDiv'></div>

          <button className='bg-LimeMortgageCalc flex gap-2 p-4 rounded-full font-bold'>
            <img src={calculator} alt="claculator icon" />
            Calculate Repayments
          </button>

        </div>

        <div className='w-230 bg-SlateMortgageCalc900 rounded-tr-4xl rounded-bl-[120px] flex justify-center items-center flex-col rounded-br-4xl'>
          <img src={illustratioon} alt="" className='w-50'/>

          <h1 className='text-WhiteMortgageCalc font-bold text-2xl'>Results shown here</h1>
          <p className='text-SlateMorgageCalc300 text-center text-md px-16 pt-3'>Complete the form and click "calculate repayments" to see what your monthly repayments would be. </p>
        </div>
      </div>

        
    </div>
  )
}

export default MortgageCalc