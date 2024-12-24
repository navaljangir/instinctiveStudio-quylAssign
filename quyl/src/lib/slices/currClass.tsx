import { createSlice } from "@reduxjs/toolkit";

export const currClass = createSlice({
    name : "currClass" , 
    initialState : {
       val : "12"
    },
    reducers : {
        setCurrClass : (state ,action) => {state.val = action.payload}
    }
})

export const {setCurrClass} = currClass.actions

export default currClass.reducer