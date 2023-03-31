import React from 'react'
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';
function Card(props) {
    let review = props.review;

  return (
    <div className='flex flex-col md:relative'>
        <div className='md:absolute top-[-6rem] z-[10] mx-auto'>
            <img className='aspect-square z-[20] w-[140px] h-[140px] rounded-full'
             src={review.image} alt="" />
            <div className='w-[140px] h-[140px] rounded-full bg-violet-500 md:absolute top-[-6px] z-[-10] left-[10px] md:block hidden'></div>
        </div>
        <div className='text-center mt-7'>
            <p className='font-bold text-2xl capitalize'>{review.name}</p>
        </div>
        <div className='text-center mt-1'>
            <p className='text-violet-300 uppercase text-sm'>{review.job}</p>
        </div>
        <div className='text-violet-400 mx-auto mt-5'>
            <FaQuoteLeft/>
        </div>
        <div className=' mt-4 text-slate-500 text-justify'>
            <p>{review.text}</p>
        </div>
        <div className='text-violet-400 mx-auto mt-5'>
            <FaQuoteRight/>
        </div>
    </div>
  )
}

export default Card