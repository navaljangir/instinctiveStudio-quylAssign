import { Appbar } from "../Appbar";
import { Sidebar } from "../Sidebar";
import { Outlet } from "react-router-dom";

export function DashboardLayout() {
    return <div className="flex gap-2 h-screen">
        <div className="w-fit px-3">
            <Sidebar/>
        </div>
        <div className="w-full bg-slate-200 px-10">
            <div className="w-full">
                <Appbar />
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    </div>
}