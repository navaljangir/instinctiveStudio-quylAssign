import { createSlice, PayloadAction } from "@reduxjs/toolkit";
 

export const selectYear = createSlice({
    name : 'selectYear' , 
    initialState :  {
        val : "2024-25" 
    }, 
    reducers  : {
       chooseYear : (state , action : PayloadAction<string>) =>{
       {state.val = action.payload}
       }
    }
})

export const {chooseYear} = selectYear.actions

export default selectYear.reducer