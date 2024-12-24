// import { Appbar } from "./Appbar";

import { PlusIcon } from "lucide-react";
import { Button } from "../ui/Button";
import { StudentContent } from "./StudentContent";
import { useDispatch  } from "react-redux";
import { chooseYear } from "../../lib/slices/SelectYear";
import { setCurrClass } from "../../lib/slices/currClass";

export function StudentsPage() {
    const dispatch = useDispatch()
    const setAY = (val : string)=>{
        dispatch(chooseYear(val))
    }
    const setClass = (val : string)=>{
        dispatch(setCurrClass(val))
    }
    return <div className="bg-white rounded-xl mt-3 px-3 py-3">
        <div className="flex justify-between">
        <div className="md:flex gap-3">
                <select className="py-2 px-4 bg-gray-300 rounded-md text-blue-950 font-bold" onChange={(e)=> {
                    setAY(e.target.value.split(' ')[1])}} >
                    <option>AY 2024-25</option>
                    <option>AY 2024-23</option>
                    <option>AY 2023-22</option>
                </select>
                <select className="py-2 px-4 bg-gray-300 rounded-md text-blue-950 font-bold" onChange={(e)=> {
                    setClass(e.target.value.split(' ')[1])}}>
                    <option>CBSE 12</option>
                    <option>CBSE 11</option>
                    <option>CBSE 10</option>
                    <option>CBSE 9</option>
                </select>
            </div>
            <div>
                <Button className="md:flex gap-2 items-center px-4 py-2 bg-gray-300 rounded-md">
                    <div className="hidden md:flex">
                    <PlusIcon/>

                    </div>
                     Add new Student
                </Button>
            </div>
        </div>
        <div className="mt-10">
            <StudentContent/>
        </div>
    </div>
}