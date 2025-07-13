import React from 'react'
import employees from "../assets/StatsPreview/header-desktop.jpg"

const StatsPreview = () => {
    return (
        <>
            <div className='bg-veryDarkBlue h-screen flex items-center justify-center'>

                <div className='cardStats bg-desatBlue w-250 flex items-center'>
                    <div>
                        <h1 className='text-lg'>Get <span className='text-softViolet'>Insights</span> That help your business grow.</h1>
                        <p>Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>

                        <div>
                            <div>
                                <h1>10k+</h1>
                                <p>COMPANIES</p>
                            </div>
                            <div>
                                <h1>314</h1>
                                <p>TEMPLATES</p>
                            </div>
                            <div>
                                <h1>12M+</h1>
                                <p>QUERIES</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <img src={employees} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default StatsPreview