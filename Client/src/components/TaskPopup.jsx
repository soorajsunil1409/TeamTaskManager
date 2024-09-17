import { useState, useRef, useEffect } from "react";

const TaskPopup = ({ setEditTaskPopup, task }) => {
    const [isFlipped, setIsFlipped] = useState(false); // State to manage flip
    const [role, setRole] = useState(false); // State to manage flip

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    const popupRef = useRef(null); // Renamed for clarity

    useEffect(() => {
        setRole(localStorage.getItem("User_role") === "Team Lead");

        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                setEditTaskPopup(false);
                handleFlip();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };

    }, []);

    return (
        <div className="w-full h-full flex justify-center bg-[#dedede00] items-center p-5 md:p-10">
            <div
                ref={popupRef}
                className={`relative w-full md:w-[70%] h-auto md:h-[710px] bg-black text-white shadow-[0_20px_50px_rgba(233,_117,_79,_0.7)] rounded-3xl transform transition-all duration-700 ${isFlipped ? "rotate-y-180" : ""}`}
                style={{ perspective: "1000px" }}
            >
                <div className={`absolute w-full h-full backface-hidden p-5 md:p-10 flex flex-col gap-10 ${isFlipped ? "hidden" : "block"}`}>
                    <div className="text-3xl font-semibold">{task.title}</div>
                    <div className="text-xl">
                        {task.description}
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="flex text-xl gap-4 items-center">
                            Assigned By:
                            <div className="p-2 bg-white text-black flex-grow font-semibold rounded-xl px-10">
                                {task.Leader_id}
                            </div>
                        </div>
                        <div className="flex text-xl gap-4 items-center">
                            Assigned To:
                            <div className="p-2 bg-white text-black flex-grow font-semibold rounded-xl px-10">
                                {task.Member_id}
                            </div>
                        </div>
                    </div>
                    <div className="text-2xl font-semibold flex gap-4 items-center text-center">
                        Task Deadline:
                        <span className="text-xl items-center ">12/03/24 12:45</span>
                    </div>
                    <button
                        className="mt-5 py-2 px-4 bg-[#E9754F] rounded-full text-white text-sm md:text-base"
                        onClick={handleFlip}
                    >
                        Add Items
                    </button>
                </div>

                {
                    role === false ?
                        <div className={`absolute w-full h-full p-5 md:p-10 backface-hidden transform rotate-y-180 flex flex-col gap-10 ${isFlipped ? "block" : "hidden"}`}>
                            <div className="text-3xl font-semibold">{task.title}</div>
                            <div className="text-xl">
                                {task.description}
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="flex text-xl gap-4 items-center">
                                    Assigned By:
                                    <div className="p-2 bg-white text-black flex-grow font-semibold rounded-xl px-10">
                                        {task.Leader_id}
                                    </div>
                                </div>
                                <div className="flex text-xl gap-4 items-center">
                                    Assigned To:
                                    <div className="p-2 bg-white text-black flex-grow font-semibold rounded-xl px-10">
                                        {task.Member_id}
                                    </div>
                                </div>
                            </div>
                            <div className="text-2xl font-semibold flex gap-4 items-center text-center">
                                Task Deadline:
                                <span className="text-xl items-center ">{task.dueDate}</span>
                            </div>
                            <button
                                className="mt-5 py-2 px-4 bg-[#E9754F] rounded-full text-white text-sm md:text-base"
                                onClick={handleFlip}
                            >
                                Go Back
                            </button>
                        </div>
                        :
                        <div className={`absolute w-full h-full p-5 md:p-10 backface-hidden transform rotate-y-180 flex flex-col gap-10 ${isFlipped ? "block" : "hidden"}`}>
                            <div className="text-xl items-center font-semibold flex justify-between">
                                Edit Task Name:
                                <input type="text" className="rounded-3xl p-3 text-black font-normal" placeholder="To do" />
                            </div>
                            <div className="text-xl flex flex-col font-semibold gap-2">
                                Edit description:
                                <textarea type="" name="" style={{ resize: "none" }} id="" className="text-black p-3 rounded-lg font-normal h-[200px]" placeholder="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, eius. Id ex at ipsum impedit commodi veniam vitae cupiditate ad, consequatur aliquam tempora quos? Nihil tempore itaque laudantium architecto doloremque?" />
                            </div>
                            <div className="text-2xl font-semibold flex gap-4 items-center justify-between">
                                Edit Task Deadline:
                                <input type="datetime-local" name="" id="" className="p-3 text-xl text-black" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <button
                                    className="mt-5 py-2 px-4 bg-[#e17442] rounded-full text-white text-sm md:text-base"
                                    onClick={handleFlip}
                                >
                                    Save
                                </button>
                                <button
                                    className="mt-5 py-2 px-4 bg-gray-600 rounded-full text-white text-sm md:text-base"
                                    onClick={handleFlip}
                                >
                                    Go Back
                                </button>
                            </div>
                        </div>
                }
            </div>
        </div>
    );
};

export default TaskPopup;
