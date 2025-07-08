import React from 'react'

const ResultSummary = () => {
  return (
    <>
        <div className='bg-Pale-blue h-screen flex items-center justify-center'>
            <div className='h-150 w-200 rounded-4xl bg-White-resultSum'>
                <div>
                    <h2>Your result</h2>

                    <div className='rounded-full'>
                        <h1>76</h1>
                        <p>of 100</p>
                    </div>

                    <h1>Great</h1>
                    <h2>You scored higher than 65% of the people who have taken these tests.</h2>
                </div>
                <div></div>
            </div>
        </div>
    </>
)
}

export default ResultSummary