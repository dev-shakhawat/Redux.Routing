import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  valueOne: 0,
  valueTwo: 0,
  Result: 0,
};

export const calculateSlice = createSlice({
  name: "calculate",
  initialState,
  reducers: {
    inputOne: (state , action) => {
      state.valueOne = Number(action.payload)
    },
    inputTwo: (state , action)=>{
        state.valueTwo = Number(action.payload)
    },
    multiplicationResult : (state)=>{
        state.Result = state.valueOne * state.valueTwo
    },
    divideResult: (state)=> {
        state.Result = state.valueOne / state.valueTwo
    },
    reset: (state) => {
        state.valueOne = 0;
        state.valueTwo = 0;
        state.Result = 0;
    }

  },
});

// Action creators are generated for each case reducer function
export const { inputOne, inputTwo , multiplicationResult , reset , divideResult} = calculateSlice.actions;

export default calculateSlice.reducer;