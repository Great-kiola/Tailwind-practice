import React from 'react'
import { HiOutlineLightningBolt } from "react-icons/hi";
import { RiBrainLine } from "react-icons/ri";



const ResultSummary = () => {
    return (
        <>
            <div className='bg-Pale-blue h-screen flex items-center justify-center font-hanken'>
                <div className='h-150 w-180 rounded-4xl bg-White-resultSum flex '>

                    <div className='bg-linear-to-t from-Light-royal-blue to-Light-slate-blue rounded-4xl p-10 w-1/2'>
                        <h2 className='text-Light-lavender font-bold grid place-content-center text-2xl mb-10'>Your result</h2>

                        <div className='rounded-full bg-linear-to-t from-Persian-blue to-Violet-blue size-50 grid place-content-center'>
                            <h1 className='text-White-resultSum font-bold text-6xl font-hanken'>76</h1>
                            <p className='flex justify-center text-Light-lavender'>of 100</p>
                        </div>

                        <h1 className='text-white grid place-content-center text-3xl font-bold font-hanken'>Great</h1>
                        <h2 className='text-Light-lavender text-md'>You scored higher than 65% of the people who have taken these tests.</h2>
                    </div>

                    <div className='p-10'>
                        <h1 className='text-2xl font-bold font-hanken mb-5 text-Dark-gray-blue'>Summary</h1>

                        <div className=''>
                            <div className='bg-Light-lavender summaries '>
                                <div className='flex items-center gap-2'>
                                    <HiOutlineLightningBolt  className='text-xl'/>
                                    <h1 className='font-bold'>Reaction</h1>
                                </div>

                                <h1><span className='font-bold'>80</span> / 100</h1>
                            </div>

                            <div className='bg-Orangey-yellow summaries'>
                                <div className='flex items-center gap-2'>
                                    <RiBrainLine className='text-xl'/>

                                    <h1 className='font-bold'>Memory</h1>
                                </div>

                                <h1><span className='font-bold'>92</span> / 100</h1>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ResultSummary