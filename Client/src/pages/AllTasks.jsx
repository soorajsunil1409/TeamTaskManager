
import { FaRegBell } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoPersonCircleOutline } from "react-icons/io5";
import { BiSolidUpArrow } from "react-icons/bi";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

import NewTask from "../components/NewTask";

function AllTasks({ pageNumber, setPageNumber }) {

    const [createTaskPopup, setCreateTaskPopup] = useState(false)

    const isTL = false;
    const showTask = () => {
        console.log("Task Shown");
    }
    const createTask = () => {
        setCreateTaskPopup(true)
        console.log("Task Added");
    }
    return (
        <div className={`flex w-full h-full`}>
            <div className={`flex w-full h-full ${createTaskPopup ? 'blur-md' : ''} transition-all duration-150`}>
                {/* <div className={`flex w-full h-full transition-all duration-150`}> */}
                <Sidebar pageNumber={pageNumber} setPageNumber={setPageNumber} />

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
                        <div className="flex flex-col  h-[1000px] sm:h-full w-full ">
                            <div className=" h-fit md:h-[200px] flex justify-center items-center flex-col md:flex-row">
                                <div className="w-[100%] md:w-[20%] h-[150px] bg-white m-4 text-2xl font-semibold p-8 relative rounded-[30px] shadow-[0_20px_50px_rgba(0,_0,_0,_0.7)]">
                                    <p className="absolute top-5">
                                        Pending
                                    </p>
                                    <div className=" absolute bottom-4 right-5  p-4 rounded-full flex justify-center items-center font-bold aspect-square text-3xl">
                                        07
                                    </div>
                                </div>
                                <div className="w-[100%] md:w-[20%] h-[150px] bg-white m-4 text-2xl font-semibold p-8 relative rounded-[30px] shadow-[0_20px_50px_rgba(0,_0,_0,_0.7)]">
                                    <p className="absolute top-5">
                                        Completed
                                    </p>
                                    <div className=" absolute bottom-4 right-5 p-4 rounded-full flex justify-center items-center font-bold aspect-square text-3xl">
                                        08
                                    </div>
                                </div>
                                <div className="w-[100%] md:w-[20%] h-[150px] bg-white m-4 text-2xl font-semibold p-8 relative rounded-[30px] shadow-[0_20px_50px_rgba(0,_0,_0,_0.7)]">
                                    <p className="absolute top-5">
                                        Assigned
                                    </p>
                                    <div className=" absolute bottom-4 right-5 p-4 rounded-full flex justify-center items-center font-bold aspect-square text-3xl">
                                        15
                                    </div>
                                </div>
                            </div>

                            <div className="w-full h-full flex justify-center items-center flex-col mt-5">
                                <div className="text-2xl sm:text-3xl font-bold flex w-[90%] justify-between">
                                    <div>
                                        All Tasks
                                    </div>
                                    <div className="border-2 border-black px-2 py-1 rounded-2xl cursor-pointer" onClick={createTask}>
                                        <i className="fa-solid fa-plus"></i>
                                    </div>
                                </div>
                                <div className="mt-5 w-full h-[70%] flex flex-col justify-start items-center">
                                    <table className="w-[90%] text-md sm:text-xl font-semibold bg-white rounded-3xl mb-4 border-separate border-spacing-0">
                                        <thead className="bg-black text-white">
                                            <tr>
                                                <th className="p-3 border border-black">#</th>
                                                <th className="p-3 border border-black">Task Name</th>
                                                {/* Just remove the team member column while showing all tasks for team member */}
                                                <th className="p-3 border border-black">Team Member</th>
                                                <th className="p-3 border border-black">Status</th>
                                            </tr>
                                        </thead>
                                    </table>
                                    {/* Wrap the table rows in a scrollable div */}
                                    <div className="w-[90%] h-[300px] overflow-y-scroll">
                                        <table className="w-full text-md sm:text-xl font-semibold bg-white rounded-3xl mb-4 border-separate border-spacing-0">
                                            <tbody>
                                                <tr className="bg-white text-black">
                                                    <td className="p-3 text-center border border-black">1</td>
                                                    <td className="p-3 text-center border border-black">Task Name</td>
                                                    <td className="p-3 text-center border border-black">Team Member</td>
                                                    <td className="p-3 text-center border border-black">Status</td>
                                                </tr>
                                                <tr className="bg-white text-black">
                                                    <td className="p-3 text-center border border-black">2</td>
                                                    <td className="p-3 text-center border border-black">Task Name</td>
                                                    <td className="p-3 text-center border border-black">Team Member</td>
                                                    <td className="p-3 text-center border border-black">Status</td>
                                                </tr>
                                                <tr className="bg-white text-black">
                                                    <td className="p-3 text-center border border-black">3</td>
                                                    <td className="p-3 text-center border border-black">Task Name</td>
                                                    <td className="p-3 text-center border border-black">Team Member</td>
                                                    <td className="p-3 text-center border border-black">Status</td>
                                                </tr>
                                                <tr className="bg-white text-black">
                                                    <td className="p-3 text-center border border-black">3</td>
                                                    <td className="p-3 text-center border border-black">Task Name</td>
                                                    <td className="p-3 text-center border border-black">Team Member</td>
                                                    <td className="p-3 text-center border border-black">Status</td>
                                                </tr>
                                                <tr className="bg-white text-black">
                                                    <td className="p-3 text-center border border-black">3</td>
                                                    <td className="p-3 text-center border border-black">Task Name</td>
                                                    <td className="p-3 text-center border border-black">Team Member</td>
                                                    <td className="p-3 text-center border border-black">Status</td>
                                                </tr>
                                                <tr className="bg-white text-black">
                                                    <td className="p-3 text-center border border-black">3</td>
                                                    <td className="p-3 text-center border border-black">Task Name</td>
                                                    <td className="p-3 text-center border border-black">Team Member</td>
                                                    <td className="p-3 text-center border border-black">Status</td>
                                                </tr>
                                                {/* Repeat for more rows */}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute w-full h-full transition-all duration-150" style={{
                transform: createTaskPopup ? 'scale(1)' : 'scale(0)',
                visibility: createTaskPopup ? 'visible' : 'hidden'
            }}>
                <NewTask setCreateTaskPopup={setCreateTaskPopup} />
            </div>
        </div >
    );
}

export default AllTasks;
