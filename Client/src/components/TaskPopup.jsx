import { useState, useRef, useEffect } from "react";

const TaskPopup = ({ setEditTaskPopup, task }) => {
    const [isFlipped, setIsFlipped] = useState(false); // State to manage flip
    const [role, setRole] = useState(false); // State to manage flip
    const [newTitle, setNewTitle] = useState(task.title);
    const [newDesc, setNewDesc] = useState(task.description);
    const [newDue, setNewDue] = useState(task.deadline);

    const handleFlip = () => {
        setNewTitle(task.title);
        setNewDesc(task.description);
        setNewDue(task.deadline);
        setIsFlipped(!isFlipped);
    };

    const popupRef = useRef(null); // Renamed for clarity

    useEffect(() => {
        console.log(task);
        setNewTitle(task.title);
        setNewDesc(task.description);
        setNewDue(task.deadline);

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

    const handleUpdate = async () => {
        const data = {
            title: newTitle,
            Leader_id: task.Leader_id,
            Member_id: task.Member_id,
            description: newDesc,
            priority: task.priority,
            dueDate: newDue,
            status: task.status,
        }

        const url = "http://localhost:4000";
        await fetch(`${url}/api/tasks/${task._id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response => {
            if (response.ok) {
                setEditTaskPopup(false);
            }
        })
    }

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

                <div className={`absolute w-full h-full p-5 md:p-10 backface-hidden transform rotate-y-180 flex flex-col gap-10 ${isFlipped ? "block" : "hidden"}`}>
                    <div className="text-xl items-center font-semibold flex justify-between">
                        Edit Task Name:
                        <input type="text" className="rounded-3xl p-3 text-black font-normal" onChange={(e) => setNewTitle(e.target.value)} placeholder="To do" value={newTitle} />
                    </div>
                    <div className="text-xl flex flex-col font-semibold gap-2">
                        Edit description:
                        <textarea type="" name="" style={{ resize: "none" }} value={newDesc} onChange={(e) => setNewDesc(e.target.value)} id="" className="text-black p-3 rounded-lg font-normal h-[200px]" placeholder={newDesc} />
                    </div>
                    <div className="text-2xl font-semibold flex gap-4 items-center justify-between">
                        Edit Task Deadline:
                        <input type="datetime-local" name="" value={newDue} onChange={(e) => setNewDue(e.target.value)} id="" className="p-3 text-xl text-black" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <button
                            className="mt-5 py-2 px-4 bg-[#e17442] rounded-full text-white text-sm md:text-base"
                            onClick={handleUpdate}
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
            </div>
        </div>
    );
};

export default TaskPopup;
