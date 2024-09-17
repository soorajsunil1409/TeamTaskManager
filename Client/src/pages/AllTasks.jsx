
import { FaRegBell } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoPersonCircleOutline } from "react-icons/io5";
import { BiSolidUpArrow } from "react-icons/bi";
import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";

import NewTask from "../components/NewTask";


const url = "http://localhost:4000";



function AllTasks({ pageNumber, setPageNumber }) {

    const [createTaskPopup, setCreateTaskPopup] = useState(false)
    const [allTasks, setAllTasks] = useState([]);
    const [pendingTasks, setPendingTasks] = useState(0);
    const [completedTasks, setCompletedTasks] = useState(0);

    const isTL = false;
    const showTask = () => {
        console.log("Task Shown");
    }


    const createTask = () => {
        setCreateTaskPopup(true)
        console.log("Task Added");
    }

    useEffect(() => {
        const getTasks = async () => {
            const res = await fetch(`${url}/api/tasks`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await res.json();

            setAllTasks(data);

            let pendingCount = 0;
            let completedCount = 0;

            for (let i = 0; i < data.length; i++) {
                if (data[i].status === "To Do" || data[i].status === "In Progress") {
                    pendingCount++;
                } else {
                    completedCount++;
                }
            }

            setPendingTasks(pendingCount);
            setCompletedTasks(completedCount);
        };

        getTasks();
    }, []);


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

                    <div className="w-full h-[calc(100vh-50px)] pt-8">
                        <div className="flex flex-col  h-[1000px] sm:h-full w-full ">
                            <div className="h-fit md:h-[200px] flex justify-center gap-8 w-full items-center flex-col md:flex-row md:p-0 p-8">
                                <div className="w-[100%] justify-center items-center flex flex-col md:w-[25%] h-[150px] bg-white text-2xl font-semibold p-2 relative rounded-[30px] shadow-[0_20px_50px_rgba(0,_0,_0,_0.7)]">
                                    <span>Pending</span>
                                    <span>{pendingTasks}</span>
                                </div>
                                <div className="w-[100%] justify-center items-center flex flex-col md:w-[25%] h-[150px] bg-white text-2xl font-semibold p-8 relative rounded-[30px] shadow-[0_20px_50px_rgba(0,_0,_0,_0.7)]">
                                    <span>Pending</span>
                                    <span>{completedTasks}</span>
                                </div>
                                <div className="w-[100%] justify-center items-center flex flex-col md:w-[25%] h-[150px] bg-white text-2xl font-semibold p-8 relative rounded-[30px] shadow-[0_20px_50px_rgba(0,_0,_0,_0.7)]">
                                    <span>All Tasks</span>
                                    <span>{allTasks.length}</span>
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
                                                <th className="p-3 border border-black">Team Member</th>
                                                <th className="p-3 border border-black">Status</th>
                                            </tr>
                                        </thead>
                                    </table>

                                    <div className="w-[90%] h-[300px] overflow-y-scroll">
                                        <table className="w-full text-md sm:text-xl font-semibold bg-white rounded-3xl mb-4 border-separate border-spacing-0">
                                            <tbody>
                                                {
                                                    allTasks.map((task, i) => (
                                                        <tr className="bg-white text-black cursor-pointer" onClick={showTask}>
                                                            <td className="p-3 text-center border border-black">{i + 1}</td>
                                                            <td className="p-3 text-center border border-black">{task.title}</td>
                                                            <td className="p-3 text-center border border-black">{task.Member_id}</td>
                                                            <td className="p-3 text-center border border-black">{task.status}</td>
                                                        </tr>
                                                    ))
                                                }
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
