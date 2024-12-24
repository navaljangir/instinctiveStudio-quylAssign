import {  useNavigate, useParams  } from "react-router-dom";
import { Logo } from "./SVG"
import { Button } from "./ui/Button";
import {  Album, Bolt, BookUser, ChartPie, CircleHelp, LayoutDashboard} from "lucide-react";
// import { useState } from "react";

export function Sidebar() {
    const navigate = useNavigate()
    const path= useParams()['*']
    return <div className="items-center">
        <div className="my-7">
            <Logo />
        </div>
        <div className="flex flex-col gap-2 text-[#6F767E] font-medium text-md">
            <Button className={`flex gap-2 items-center  w-full rounded-md pl-3 pr-20 py-3 ${ path=== '' ?  'text-black bg-gray-300': '' }`} onClick={()=> {
                    navigate('/dashboard')
                }}>
                <div className="">
                    <LayoutDashboard/>
                </div>
                Dashboard
            </Button>
            <Button className={`flex gap-2 items-center w-full rounded-md px-3 py-3 ${ path === "students" ?  'text-black bg-gray-300': '' }`} onClick={()=> {
                    navigate('/dashboard/students')
                }}>
                <div className="">
                    <BookUser/>
                </div>
                Students
            </Button>
            <Button className={`flex gap-2 items-center w-full rounded-md px-3 py-3 ${ path=== 'chapters' ?  'text-black bg-gray-300': '' }`} onClick={()=> {
                    navigate('/dashboard/chapters')
                }}>
                <div>
                    <Album/>
                </div>
                Chapters
            </Button>
            <Button className={`flex gap-2 items-center w-full rounded-md px-3 py-3 ${ path=== 'help' ?  'text-black bg-gray-300': '' }`} onClick={()=> {
                    navigate('/dashboard/help')
                }}>
                <div className="text-2xl text-red-500">
                <CircleHelp/>
                </div>
                Help
            </Button>
            <Button className={`flex gap-2 items-center  w-full rounded-md px-3 py-3 ${ path=== 'reports' ?  'text-black bg-gray-300': '' }`} onClick={()=> {
                    navigate('/dashboard/reports')
                }}>
                <div className="text-2xl text-green-500">
                    <ChartPie/>
                </div>
                Reports
            </Button>
            <Button className={`flex gap-2 items-center  w-full rounded-md px-3 py-3 ${ path=== 'settings' ?  'text-black bg-gray-300': '' }`} onClick={()=> {
                    navigate('/dashboard/settings')
                }}>
                <div>
                    <Bolt/>
                </div>
                Settings
            </Button>

        </div>
    </div>
}