"use client"
import React, {useState} from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai'
import { IoCloseSharp } from 'react-icons/io5'
export default function Navbar() {

  const [overlay, setOverlay] = useState(false)

  return (
    <div className='max-h-[150px] max-w-[1640px] mx-auto h-12 flex flex-row px-4 py-4 items-center justify-between '>
        {/* first section */}
        {/* burgerMenu/name/button */}
        <div className='flex flex-row items-center gap-4'>
            <GiHamburgerMenu size={20} 
            onClick={() => setOverlay(true)}
            />
            {/* name */}
            <h1 className='text-2xl'>Best <span className='font-bold'>Eats</span> </h1>

            {/* button switch*/}
            <div className='flex flex-row w-auto items-center bg-gray-400 rounded-full gap-2'>
                <div className='bg-black text-xs  text-white px-2 py-2 w-auto rounded-full items-center'>
                    Delivery
                </div>
                <div className='text-white text-xs w-auto px-2 py-2  rounded-full'>
                    Pickup
                </div>
            </div>
        </div>


        {/* second section */}
        {/* search bar */}
        <div className='flex-row items-center gap-4 bg-gray-200 px-4 py-1 rounded-full w-1/3 max-w-[700px] flex'>
            <AiOutlineSearch size={20} />
            <input type="text" placeholder='Search for food, cuisines, restaurants' className='bg-transparent outline-none w-full' />
        </div>

        {/* third section */}
        {/* cart */}
        <div className='hidden md:flex flex-row items-center gap-4'>

            <button className='bg-black text-white px-4 py-2 rounded-lg flex flex-row gap-2 items-center'>
                <AiOutlineShoppingCart size={20} />
                cart
                </button>
        </div>

        {/* overlay */}
        {
            overlay && (
                <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 duration-300 ' id='overlay'/>
            )
        }

        {/* mobile menu */}

        <div className={ overlay ? 'absolute top-0 left-0 w-[400px] h-full bg-white z-50 duration-300':
        'absolute top-0 left-0 w-[400px] h-full bg-white z-50 duration-300 transform -translate-x-full'
    } id='mobileMenu'>
            {/* container */}
            <div className='relative w-full h-full flex flex-col p-4'>

                {/* x button */}
                <button className='absolute top-4 right-4'>
                    <IoCloseSharp size={20} 
                    onClick={() => setOverlay(false)}
                    />
                </button>

                  {/* title  */}
                  <h1 className='text-2xl'>Best <span className='font-bold'>Eats</span> </h1>

            </div>
        </div>


    </div>
  )
}
