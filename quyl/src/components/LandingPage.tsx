import { useNavigate } from "react-router-dom";
import { Button } from "./ui/Button";

export function LandingPage() {
    const navigate = useNavigate()
    return <div className="w-screen h-screen">
        <div className="flex justify-center items-center h-full">
            <div>
                <div className="text-6xl flex justify-center font-semibold">
                    Empower Learning with Seamless Student Management
                </div>
                <div className="text-4xl ">
                    <div className="flex justify-center">
                    "Revolutionize the way you manage students, 

                    </div>
                    <div className="flex justify-center">
                        classes, and performance—all in one powerful platform."
                        </div>
                </div>
                <div className="flex justify-center">
                    <Button className="bg-gradient-to-tr from-cyan-300 to-cyan-600 rounded-md px-7 py-3" onClick={()=> navigate('/dashboard')}>Get Started</Button>
                </div>
            </div>
        </div>
    </div>
}