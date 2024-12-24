import { Bell, HelpCircle, MessageSquareMore, Search, Settings2 } from "lucide-react";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";

export function Appbar() {
    return <div className="flex justify-between items-center mt-5 text-[#6F767E] gap-1 md:gap-20 ">
        <div className="flex items-center bg-white rounded-lg py-3  w-full gap-3 md:px-5">
            <div className="hidden md:flex">
                <Search />

            </div>
            <Input className="outline-none w-full" placeholder="Search your course " />
        </div>
        <div>
            <div className="flex gap-5 md:gap-10 ">
                <Button className="">
                    <HelpCircle />

                </Button>
                <div className="items-center flex">
                    <Button className="relative">
                        <MessageSquareMore />
                        <div className="bg-red-600 h-[6px] w-[6px] rounded-full absolute top-0 right-0">
                        </div>
                    </Button>
                </div>
                <div className="flex items-center">
                    <Settings2 />
                </div>
                <div className="items-center flex">
                    <Button className="relative">
                        <Bell />
                        <div className="bg-red-600 h-[6px] w-[6px] rounded-full absolute top-0 right-[2px]">
                        </div>
                    </Button>
                </div>
                <div className="md:gap-3 flex">
                <div className="h-10 w-10">
                    <img
                        src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb"
                        className="h-full w-full object-cover rounded-md"
                        alt="Profile"
                    />
                </div>
                <div className="hidden md:flex items-center">
                    <div className="text-nowrap text-black font-semibold text-xl">
                        Adeline H. Dancy
                    </div>

                </div>

                </div>
            </div>
        </div>
    </div>
}