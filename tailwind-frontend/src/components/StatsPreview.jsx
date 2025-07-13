import React from 'react'
import employees from "../assets/StatsPreview/header-desktop.jpg"

const StatsPreview = () => {
    return (
        <>
            <div className='bg-veryDarkBlue h-screen flex items-center justify-center font-inter'>

                <div className='cardStats bg-desatBlue w-270 flex items-center'>
                    <div className='p-10 mx-10'>
                        <h1 className='text-4xl font-bold text-statsWhite mb-5'>Get <span className='text-softViolet'>Insights</span> that help your business grow.</h1>
                        <p className='text-slightlyWhite text-sm mb-20'>Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>

                        <div className='flex items-center gap-20'>
                            <div>
                                <h1 className='text-statsWhite font-bold text-2xl'>10k+</h1>
                                <p className='text-slightlyWhiter font-lexendDeca text-xs'>COMPANIES</p>
                            </div>
                            <div>
                                <h1 className='text-statsWhite font-bold text-2xl'>314</h1>
                                <p className='text-slightlyWhiter font-lexendDeca text-xs'>TEMPLATES</p>
                            </div>
                            <div>
                                <h1 className='text-statsWhite font-bold text-2xl'>12M+</h1>
                                <p className='text-slightlyWhiter font-lexendDeca text-xs'>QUERIES</p>
                            </div>

                        </div>
                    </div>

                    {/* <div className=''>
                        <img 
                            src={employees} 
                            alt="Image of a woman on her computer"
                            className='w-250 bg-softViolet mix-blend-normal'
                        />
                    </div> */}

                    <div class="relative">
                        <div className="absolute inset-0 bg-softViolet mix-blend-multiply"></div>
                        <img src={employees} alt="Image" className="w-280" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default StatsPreview