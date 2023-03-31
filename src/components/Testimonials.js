import React, { useState } from 'react'
import Card from './Card';
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'
function Testimonials(props) {
    let reviews = props.reviews;
    const [index, setIndex] = useState(0);

    function leftHandler() {
        if(index<=0){
            setIndex(reviews.length-1);
        }
        else{
            setIndex(index-1);
        }
    }
    function rigthHandler() {
        if(index >= reviews.length-1){
            setIndex(0);
        }
        else{
            setIndex(index+1);
        }
    }
    function surpriseHandler() {
        let randIndx = Math.floor(Math.random()*reviews.length);
        setIndex(randIndx);
    }
  return (
    <div className='w-[95%] mx-auto md:w-[700px] bg-white rounded-md my-4 py-4'>
        <div className='px-12'>
          <Card review = {reviews[index]}/>
        </div>
        <div className='flex text-3xl font-bold gap-3 justify-center mt-5 text-violet-400'>
            <button onClick={leftHandler} className='cursor-pointer hover:text-violet-500'>
                <AiOutlineLeft/>
            </button>
            <button onClick={rigthHandler} className='cursor-pointer hover:text-violet-500'>
                <AiOutlineRight/>
            </button>
        </div>
        <div>
            <button onClick={surpriseHandler}
            className='bg-violet-400 hover:bg-violet-500 text-white text-lg py-2 px-10 transition-all duration-200 font-bold rounded-md m-3'>
                Surprise Me
            </button>
        </div>
    </div>
  )
}

export default Testimonials