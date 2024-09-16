import AppIcon from "../assets/AppIcon.png"
import { FaHome } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { IoPerson } from "react-icons/io5";
import { MdMenuBook } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoPersonCircleOutline } from "react-icons/io5";
import { BiSolidUpArrow } from "react-icons/bi";
import { BiSolidDownArrow } from "react-icons/bi";
import NewTask from "../components/NewTask";
import { useState } from "react";

const Dashboard = ({ pageNumber, setPageNumber }) => {
    return (
        <div className={`flex w-full h-full`}>
            <div className={`flex w-full h-full ${pageNumber == 1 ? 'blur-md' : ''} transition-all duration-150`}>
                <div className="md:flex hidden flex-col gap-5 w-[270px] h-full p-5 border-r-2">
                    <div className="flex items-center justify-around font-bold text-end text-2xl gap-2">
                        <img src={AppIcon} alt="" />
                        <span>Overflow Squad</span>
                    </div>
                    <div className="">
                        <div className={`p-3 flex items-center justify-start cursor-pointer gap-3 ${pageNumber == 0 ? 'bg-[#dedede]' : ''}`} onClick={() => setPageNumber(0)}>
                            <FaHome className="text-2xl" />
                            Dashboard
                        </div>
                        <div className={`p-3 flex items-center justify-start cursor-pointer gap-3 ${pageNumber == 1 ? 'bg-[#dedede]' : ''}`} onClick={() => setPageNumber(1)}>
                            <TiTick className="text-2xl" />
                            Tasks
                        </div>
                        <div className={`p-3 flex items-center justify-start cursor-pointer gap-3 ${pageNumber == 2 ? 'bg-[#dedede]' : ''}`} onClick={() => setPageNumber(2)}>
                            <IoPerson className="text-2xl" />
                            Team
                        </div>
                        <div className={`p-3 flex items-center justify-start cursor-pointer gap-3 ${pageNumber == 3 ? 'bg-[#dedede]' : ''}`} onClick={() => setPageNumber(3)}>
                            <MdMenuBook className="text-2xl" />
                            Overview
                        </div>
                    </div>
                </div>

                <div className="md:w-[calc(100vw-270px)] w-full h-full">
                    <div className="flex w-full h-[50px] border-b-2">
                        <div className="w-[50%] h-full"></div>
                        <div className="flex justify-end items-center w-[50%] h-full p-5 gap-3">
                            <FaRegBell className="text-2xl cursor-pointer" />
                            <FaMagnifyingGlass className="text-2xl cursor-pointer" />
                            <IoPersonCircleOutline className="text-[30px] cursor-pointer" />
                        </div>
                    </div>

                    <div className="w-full h-[calc(100vh-50px)] p-8">
                        <div className="text-2xl w-full h-[10%] md:block hidden">Dashboard</div>
                        <div className="flex md:flex-row flex-col w-full md:h-[30%] h-[60%] md:p-8 py-8 md:gap-16 gap-4">
                            <div className="border-2 rounded-lg md:w-[50%] h-full p-4">
                                <div className="flex flex-col gap-4 justify-center h-full">
                                    <span className="text-[#777777]">Total Tasks</span>
                                    <span className="text-3xl font-semibold">120</span>
                                    <span className="flex items-center gap-1 text-green-500">
                                        <BiSolidUpArrow />
                                        30%
                                    </span>
                                </div>
                            </div>
                            <div className="border-2 rounded-lg md:w-[50%] h-full p-4">
                                <div className="flex flex-col gap-4 justify-center h-full">
                                    <span className="text-[#777777]">Total Team Members</span>
                                    <span className="text-3xl font-semibold">10</span>
                                    <span className="flex items-center gap-1 text-red-500">
                                        <BiSolidDownArrow />
                                        10%
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-[50%] border-2 rounded-lg p-4">
                            <div className="text-xl font-semibold flex justify-between items-center">
                                Member Contributions
                                <div className="absolute flex right-12 translate-y-2 cursor-pointer">
                                    <div className="px-5 py-2 rounded-lg border-2 border-[#FF906B] hover:bg-[#FF906B] hover:text-white">Filter</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute w-full h-full transition-all duration-150" style={{
                transform: pageNumber == 1 ? 'scale(1)' : 'scale(0)',
                visibility: pageNumber == 1 ? 'visible' : 'hidden'
            }}>
                <NewTask setPageNumber={setPageNumber} />
            </div>
        </div >
    )
}
export default Dashboard