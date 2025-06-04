import React from "react";
// import image from "./assets/image2.jpg";
import imageEq from "../assets/imageeq.jpg"
import { FaEthereum } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import avataar from "../assets/avataaars.svg";

const Nftpreview = () => {
    return (
        <div className="bg-body flex items-center justify-center">
            <div className="bg-[#15273f] w-85 rounded-2xl shadow-xl/30 p-5 cursor-pointer">
                <div className=''>
                    <img
                        className="rounded-2xl mb-6"
                        src={imageEq}
                        alt="profile image"
                    />
                </div>

                <div className="">
                    <h1 className="text-gray-100 font-semibold mb-3 text-[18.5px] ">Equilibrum #3429</h1>
                    <p className="text-slate-500">
                        Our Equilibrum collection promotes balance and calm
                    </p>

                    <div className="mt-5 flex items-center justify-between">
                        <div className="text-cyan-400 flex items-center gap-2">
                            <FaEthereum />
                            <h2 className="font-semibold">0.041 ETH</h2>
                        </div>

                        <div className="text-slate-500 flex items-center gap-2">
                            <FaClock />
                            <h2>3 days left</h2>
                        </div>
                    </div>

                    <hr class="my-5 h-0.5 border-none bg-neutral-100 dark:bg-white/10" />

                    {/* Profile div */}
                    <div className=" flex items-center gap-4 mb-4">
                        <img className="size-9 rounded-full border-white border-2 shadow-xl shadow-blue-500" src={avataar} alt="" />
                        <h2 className="text-slate-500 text-sm"> Creation of <span className="text-gray-100 font-semibold pl-1">jules Wyvern</span></h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nftpreview;
