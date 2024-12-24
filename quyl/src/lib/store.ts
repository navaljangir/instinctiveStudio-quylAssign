import {configureStore} from "@reduxjs/toolkit"
import selectYearReducer  from "../lib/slices/SelectYear"
import currClassReducer from "../lib/slices/currClass"
import studentDataReducer from "../lib/slices/studentData"
export const store = configureStore({
    reducer  :{
        selectYear : selectYearReducer, 
        currClass : currClassReducer,
        studentData : studentDataReducer
    }
})

export type IRootState = ReturnType<typeof store.getState>