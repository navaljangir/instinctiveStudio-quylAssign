import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface CoursesType{
    id: number
    CourseName : string
    StudentId : number
}
export interface StudentDataType{
    Cohort: string
    id : number
    StudentName : string
    currClass: string
    Courses : CoursesType[]
    Status : string
    DateJoined : string
    LastLogin : string
}

const initialState : StudentDataType[] = []
export const studentData = createSlice({
    name : "studentData" , 
    initialState, 
    reducers : {
        setStudentData : (_state , action : PayloadAction<StudentDataType[]>) => {return action.payload}
    }
})

export const {setStudentData} = studentData.actions

export default studentData.reducer