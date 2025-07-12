import React from 'react'
import { HiOutlineLightningBolt } from "react-icons/hi";
import { RiBrainLine } from "react-icons/ri";



const ResultSummary = () => {
    return (
        <>
            <div className='bg-Pale-blue h-screen flex items-center justify-center'>
                <div className='h-150 w-170 rounded-4xl bg-White-resultSum flex '>
                    <div className='bg-linear-to-t from-Light-royal-blue to-Light-slate-blue rounded-4xl p-10'>
                        <h2 className='text-Light-lavender font-bold grid place-content-center text-2xl mb-10'>Your result</h2>

                        <div className='rounded-full bg-linear-to-t from-Persian-blue to-Violet-blue size-50 grid place-content-center'>
                            <h1 className='text-White-resultSum font-bold text-6xl'>76</h1>
                            <p className='flex justify-center'>of 100</p>
                        </div>

                        <h1 className=''>Great</h1>
                        <h2>You scored higher than 65% of the people who have taken these tests.</h2>
                    </div>
                    <div className='p-10'>
                        <h1 className='text-xl font-bold'>Summary</h1>

                        <div className='Summaries'>
                            <div className='bg-red-500 summaries '>
                                <div className='flex items-center'>
                                    <HiOutlineLightningBolt />
                                    <h1>Reaction</h1>
                                </div>

                                <h1><span>80</span> / 100</h1>
                            </div>

                            <div className='bg-orange-500 summaries'>
                                <div>
                                    <RiBrainLine />

                                    <h1>Memory</h1>
                                </div>

                                <h1><span>92</span> / 100</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResultSummary