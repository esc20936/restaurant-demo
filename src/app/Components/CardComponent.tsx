import React from 'react'

interface Props {
    name: string;
    imageURL: string;
    status: string;
}

export default function CardComponent({
    name, imageURL, status
}: Props) {


  return (
    <div className='group relative  h-[170px] w-[230px] rounded-lg shadow-xl hover:scale-110 duration-300'>
        <div className='absolute top-0 left-0 h-[170px] w-[230px]  rounded-lg flex flex-col justify-end p-4 bg-black bg-opacity-40 text-white group-hover:bg-opacity-20'>
            <h1 className='text-xl font-semibold'>{name}</h1>
            <h1 className='text-sm font-semibold'>{status}</h1>
        </div>
        <img className='h-[170px] w-[230px] rounded-lg object-cover' src={imageURL} alt="/" />
    </div>
  )
}
