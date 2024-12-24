/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
// import { RootState } from "@reduxjs/toolkit/query"
import { useEffect } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import { useDispatch, useSelector } from "react-redux"
import { IRootState } from "../../lib/store"
import {format} from "date-fns"
import axios from "axios"
import { CoursesType, setStudentData, StudentDataType } from "../../lib/slices/studentData"

const tableHeadings = [
    "Student Name" , 
    "Cohort", 
    "Courses" , 
    "Date Joined",
    "Last Login" ,
    "Status" 
]


export function StudentContent(){
    const studentData= useSelector((state : IRootState)=> state.studentData)
    const AY = useSelector((state: IRootState) => state.selectYear.val)
    const currClass = useSelector((state : IRootState) => state.currClass.val)
    const dispatch = useDispatch();
    const getTheDateJoined = (DateJoined : string)=>{
        const currDate = format(DateJoined , "dd,MMM,y")
        return currDate
    }
    useEffect(()=>{
        async function findStudentData(){
            try{
                const res  = await axios.post(import.meta.env.VITE_BACKEND_URL || "http://localhost:3000", {
                    AY: AY, 
                    currClass : currClass
                })
                dispatch(setStudentData(res.data))
            }catch(e){
                return []
            }
        }
        findStudentData()
    } , [AY, currClass ])
    return <div className="w-full">
        <Table>
            
            <TableHeader>
                <TableRow>
                {tableHeadings.map((val , index)=>{
                    return <TableHead key={index} className="text-black">
                        {val}
                    </TableHead>
                })}
                </TableRow>
            </TableHeader>
            <TableBody className="items-center">
                
            {studentData.map((val : StudentDataType, index : number)=>{
                return <TableRow key={index}>
                    <TableCell>
                        {val.StudentName}
                    </TableCell>
                    <TableCell>
                        AY {val.Cohort}
                    </TableCell>
                    <TableCell className="flex gap-1">
                        {val.Courses.map((course : CoursesType, courseIndex : number)=>{
                            return <div key={courseIndex} className="bg-gray-300 rounded-md px-3 flex gap-2 items-center">
                                <div className="h-8 w-6">
                                <img className="h-8 w-6 object-cover rounded-md" src={"https://plus.unsplash.com/premium_photo-1661942126259-fb08e7cce1e2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
                                </div>
                                <div className="py-2">
                                Class {val.currClass} {course.CourseName}

                                </div>
                            </div>
                        })}
                    </TableCell>
                    <TableCell>
                        {getTheDateJoined(val.DateJoined)}
                    </TableCell>
                    <TableCell>
                        {format(val.LastLogin , "dd,MMM,y h:m a")}
                    </TableCell>
                    <TableCell className="">
                        {val.Status=="Green" ? <div className="h-3 w-3 rounded-full bg-green-500"></div> : <div className="h-3 w-3 rounded-full bg-red-500"></div>}
                    </TableCell>
                </TableRow>
            })}
            </TableBody>
            
        </Table>
    </div>
}