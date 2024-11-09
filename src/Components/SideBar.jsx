import { MdOutlineWorkOutline } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { GrTasks } from "react-icons/gr";
import { IoCalendarOutline } from "react-icons/io5";
import { IoTimeOutline } from "react-icons/io5";
import { FiPieChart } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
const SideBar = () =>{
    const [show,setShow]=useState(true);
    return(
        <>
        {/* <button onClick={()=>setShow(!show)}>
            <span>
                <RxHamburgerMenu className="m-2 "/>
            </span>
        </button> */}
        {show &&
        <div className="h-screen z-50 border-r-2 fixed bg-white md:w-1/5  w-44">
            <button className="min-w-full flex justify-end m-1" onClick={()=>setShow(!show)}>
                <span className="font-bold text-4xl mx-2 hover:text-black hover:cursor-pointer text-red-600 ">
                    &times;
                </span>
            </button>

        <ul>
            <li className="flex items-center  gap-2 border-s-[3px] md:ps-7 ps-3 py-3 border-blue-500 bg-blue-50">
            <RxDashboard />
                <a
                    href="#"
                    className="flex items-center text-sm font-medium   text-blue-700"
                >DASHBOARD
                </a>
            </li>

            <li className="flex items-center hover:border-gray-100 hover:bg-gray-300 hover:text-gray-700   md:ps-7 ps-3 py-3 gap-2">
            <MdOutlineWorkOutline />
                <a
                    href="#"
                    className="flex items-center  text-gray-500 text-sm font-medium"
                >
                    PROJECTS
                </a>
            </li>

            <li className="flex items-center hover:border-gray-100 hover:bg-gray-300 hover:text-gray-700   md:ps-7 ps-3 py-3 gap-2">
            <GrTasks />
                <a
                    href="#"
                    className="flex items-center  text-gray-500  text-sm font-medium"
                >MY TASKS
                </a>
            </li>

            <li className="flex items-center hover:border-gray-100 hover:bg-gray-300 hover:text-gray-700  md:ps-7 ps-3 py-3  gap-2">
            <IoCalendarOutline />
                <a
                    href="#"
                    className="flex items-center  text-gray-500  text-sm font-medium"
                > CALENDAR
                </a>
            </li>

            <li className="flex items-center hover:border-gray-100 hover:bg-gray-300 hover:text-gray-700   md:ps-7 ps-3 py-3  gap-2">
                <IoTimeOutline />
                <a
                    href="#"
                    className="flex items-center  text-gray-500 text-sm font-medium"
                > TIME MANAGE
                </a>
            </li>
            <li className="flex items-center md:ps-7 ps-3 hover:border-gray-100 hover:bg-gray-300 hover:text-gray-700  py-3 gap-2">
            <FiPieChart />
                <a
                    href="#"
                    className="flex items-center    text-gray-500 text-sm font-medium"
                > TIME MANAGE
                </a>
            </li>
            <li className="flex items-center hover:border-gray-100 hover:bg-gray-300 hover:text-gray-700  md:ps-7 ps-3 py-3 gap-2">
            <IoSettingsOutline />
                <a
                    href="#"
                    className="flex items-center   text-gray-500 text-sm font-medium"
                > SETTINGS
                </a>
            </li>
        </ul>
        </div>
}
</>
)
}
export default SideBar