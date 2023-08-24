import React from 'react'
import CardComponent from './CardComponent';


interface Props {
    title: string;
    data: any
}

export default function ScrollableSection({
    title,
    data
}: Props) {

  let results = data?.data?.results;
  return (
    <div className='max-h-[350px] max-w-[1640px] mx-auto  flex flex-col px-4 py-4 items-start justify-between'>
        {/* title section */}
        <div className='flex flex-row items-center gap-4'>
            <h1 className='text-2xl font-semibold'>{title}</h1>
        </div>
        {/* scrollable section */}
        <div className='flex flex-row w-full items-center h-[250px] overflow-x-scroll'>
            <div className='h-full flex flex-row gap-4 items-center first:ml-2'>
            {
                results.map((item,index) => (
                    <CardComponent key={index}
                        name={item.name}
                        imageURL={item.image}
                        status={item.status}
                    />
                ))
            }
            </div>
        </div>  
    </div>
  )
}
