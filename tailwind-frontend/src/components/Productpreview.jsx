import React from 'react'
import prodImage from "../assets/productPrev/image-product-desktop.jpg"
import { FaBasketShopping } from "react-icons/fa6";


const Productpreview = () => {
    return (
        <div className='bg-cream h-screen flex items-center justify-center'>

            <div className='flex justify-center items-center w-200 h-150 bg-white rounded-3xl'>

                <div className='size-full'>
                    <img className='rounded-l-3xl h-full' src={prodImage} alt="" />
                </div>

                <div className='p-10 h-full'>
                    <p className='uppercase tracking-[0.5rem]'>Perfume</p>
                    <h1 className='text-5xl font-fraunces font-extrabold'>Gabrielle Essence Eau De Parfum</h1>

                    <p className='text-prod-grey my-5 text-lg'>
                        A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.
                    </p>

                    <div className='flex gap-5 items-center '>
                        <h1 className='font-fraunces text-5xl font-bold text-Green-light'>$149.99</h1>
                        <span className='line-through text-lg'>$169.99</span>

                    </div>

                    <button className='bg-Green-light w-full text-white h-15 rounded-lg font-montserrat flex items-center justify-center gap-3 text-lg font-bold mt-10'>
                        <FaBasketShopping/>
                        Add to Cart
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Productpreview