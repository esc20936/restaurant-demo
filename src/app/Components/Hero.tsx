import React from 'react'

export default function Hero() {
  return (
    // container
    <div className='max-w-[1640px] mx-auto p-4'>
        <div className='max-h-[500px] relative rounded-lg'>
            {/* Overlay */}
            <div className='absolute w-full h-full rounded-lg text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>Rick and <span className='text-orange-500'></span></h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'> <span className='text-cyan-300'>Morty</span></h1>
            </div>
            <img className='w-full max-h-[500px] object-cover rounded-lg' src="https://th.bing.com/th/id/R.fba488c5be1b08212bfe44a500092345?rik=oCo4lTnaXCIXmQ&pid=ImgRaw&r=0" alt="/" />
        </div>
    </div>
  )
}
