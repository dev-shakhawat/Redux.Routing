import React, { useState } from 'react'


import { FiPlusCircle } from "react-icons/fi";
import { RxReset } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../redux/slices/counterSlice';
import { reset } from '../redux/slices/counterSlice';
import { setValue } from '../redux/slices/counterSlice';
import { decrement } from '../redux/slices/counterSlice';

export const Count = () => {


  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  // const [inputVal, setInputVal] = useState(counter);


  const handleSetCount = (e) => {
    const value = e.target.value;
    if (value !== '') {
      dispatch(setValue(value));
    }
  };

  const handleReset = () => {
    dispatch(reset());
  };
  return (
    <div className='grid place-items-center  '>
      <div className="mt-30 flex flex-col w-full items-center gap-5  ">
        <p className=' mx-10 text-center  '>Default value is 0 , But you can set default value by typing on input field.</p>
        <input value={counter} onChange={handleSetCount}   type="number" placeholder="Input one..." className="input" />
        <div className="">
          <button className="btn text-[18px]  " onClick={()=> dispatch(increment()) }> <FiPlusCircle  /> <span>Plus</span> </button>
          <button className="btn text-[18px] mx-2 " onClick={()=> dispatch(decrement()) }> <FiPlusCircle  /> <span>Minus</span> </button>
          <button className="btn text-[18px]   " onClick={handleReset}> <RxReset /> <span>Reset</span> </button>
        </div>
      </div>
    </div>
  )
}
