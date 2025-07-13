import React from 'react'
import { HiOutlineLightningBolt } from "react-icons/hi";
import { RiBrainLine, RiChatSmileAiLine, RiEyeFill, RiEyeLine } from "react-icons/ri";



const ResultSummary = () => {
    return (
        <>
            <div className='bg-Pale-blue h-screen flex items-center justify-center font-hanken'>
                <div className='w-180 rounded-4xl bg-White-resultSum flex '>

                    <div className='bg-linear-to-t from-Light-royal-blue to-Light-slate-blue rounded-4xl p-17 w-1/2 flex items-center justify-between flex-col'>
                        <h2 className='text-Light-lavender font-bold grid place-content-center text-xl'>Your result</h2>

                        <div className='rounded-full bg-linear-to-t from-Persian-blue to-Violet-blue size-45 grid place-content-center'>
                            <h1 className='text-White-resultSum font-bold text-6xl font-hanken'>76</h1>
                            <p className='flex justify-center text-Light-lavender'>of 100</p>
                        </div>

                        <h1 className='text-white text-2xl font-bold font-hanken'>Great</h1>
                        <h2 className='text-Light-lavender text-md text-center px-'>You scored higher than 65% of the people who have taken these tests.</h2>
                    </div>

                    <div className='p-10'>
                        <h1 className='text-xl font-bold font-hanken mb-3 text-Dark-gray-blue'>Summary</h1>

                        <div className=''>
                            <div className='bg-red-bg summaries '>
                                <div className='flex items-center gap-2'>
                                    <HiOutlineLightningBolt className='text-xl text-Light-red' />
                                    <h1 className='font-bold text-Light-red'>Reaction</h1>
                                </div>

                                <h1 ><span className='font-bold'>80</span> / 100</h1>
                            </div>

                            <div className='summaries bg-orange-bg'>
                                <div className='flex items-center gap-2'>
                                    <RiBrainLine className='text-xl text-Orangey-yellow' />

                                    <h1 className='font-bold text-Orangey-yellow'>Memory</h1>
                                </div>

                                <h1><span className='font-bold'>92</span> / 100</h1>
                            </div>

                            <div className='summaries bg-green-bg'>
                                <div className='flex items-center gap-2'>
                                    <RiChatSmileAiLine className='text-xl text-Green-teal' />
                                    <h1 className='font-bold text-Green-teal'>Verbal</h1>
                                </div>

                                <h1 ><span className='font-bold'>80</span> / 100</h1>
                            </div>

                            <div className='summaries bg-blue-bg'>
                                <div className='flex items-center gap-2'>
                                    <RiEyeLine className='text-xl text-Cobalt-blue' />

                                    <h1 className='font-bold text-Cobalt-blue'>Visual</h1>
                                </div>

                                <h1><span className='font-bold'>92</span> / 100</h1>
                            </div>

                            <button className='bg-Dark-gray-blue p-4 rounded-full w-full text-white my-5'>Continue</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ResultSummary