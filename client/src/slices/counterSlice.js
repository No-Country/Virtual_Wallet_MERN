import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value:0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => { state.value+=1 },
    decrement: (state) => { state.value-=1 },
    //esta funcion incrementByAmount recibe el estado y la accion
    incrementByAmount: (state, action) => { state.value+=action.payload },
  },
  
})

//Los action creators se generan para cada función de caso del reducer
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer