import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RxCross2, RxReset } from "react-icons/rx";
import { 
  inputOne, 
  inputTwo, 
  multiplicationResult, 
  reset, 
  divideResult 
} from "../redux/slices/calculateSlice";

export const Calculation = () => {
  const [errorOne, setErrorOne] = useState(false);
  const [errorTwo, setErrorTwo] = useState(false);

  const dispatch = useDispatch();
  
  const { valueOne, valueTwo, Result } = useSelector( (state) => state.calculate );
  

  

  const handleInputOne = (e) => {
    setErrorOne(false);
    dispatch(inputOne(e.target.value));
  };

  const handleInputTwo = (e) => {
    setErrorTwo(false);
    dispatch(inputTwo(e.target.value));
  };



  const handleMultiplicate = () => {
    
    if (!valueOne) {
      setErrorOne(true);
    }
    else if (!valueTwo) {
      setErrorTwo(true);
    }
    else{
      dispatch(multiplicationResult());

    }
  };

  const handleDivide = () => {
    if (!valueOne) {
      setErrorOne(true);
      return;
    }
    else if (!valueTwo) {
      setErrorTwo(true);
      return
    }
    else{
      dispatch(divideResult());

    }
  };

  const handleReset = () => {
    dispatch(reset());
    setErrorOne(false);
    setErrorTwo(false);
  };

  return (
    <div className="grid place-items-center">
      <div className="mt-30 flex flex-col w-full items-center gap-5">
        <p className="mx-10 text-center">
          First, type two numbers then press calculate button to get the result.
        </p>
        
        <input  value={valueOne} onChange={handleInputOne} type="number" placeholder="Input one..."  className={`${errorOne ? "border-red-500" : ""} input`} />
        
        <input value={valueTwo} onChange={handleInputTwo} type="number" placeholder="Input two..." className={`${errorTwo ? "border-red-500" : ""} input`} />
        
        <input type="number"  value={Result} placeholder="Result.." className="input"  readOnly />
        
        <div className="flex">
          <button  className="btn text-[18px] mx-2"   onClick={handleMultiplicate} > × <span>Multiply</span> </button>
          <button   className="btn text-[18px] mx-2"   onClick={handleDivide} > ÷ <span>Divide</span> </button>
          <button  className="btn text-[18px] mx-2"  onClick={handleReset}  > <RxReset /> <span>Reset</span>  </button>
        </div>
      </div>
    </div>
  );
};