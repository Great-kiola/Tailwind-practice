import React from 'react'
import illustratioon from "../assets/MortgageCalc/images/illustration-empty.svg"

const MortgageCalc = () => {
  return (
    <div className='bg-SlateMorgageCalc100 h-screen flex items-center justify-center'>
      <div className='bg-WhiteMortgageCalc w-270 h-170'>
        <div className='w-200'>
          <input type="password" name="password" id="pass" />
          <input type="password" name="password" id="pass" />
          <input type="password" name="password" id="pass" />
          <input type="password" name="password" id="pass" />
        </div>
        <div className='w-full'>
          <img src={illustratioon} alt="" />
        </div>
      </div>

        
    </div>
  )
}

export default MortgageCalc