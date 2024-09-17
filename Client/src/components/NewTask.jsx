import { useState, useEffect, useRef } from "react";
import { IoMdClose } from "react-icons/io";

const NewTask = ({ setCreateTaskPopup }) => {
    const [members, setMembers] = useState([]);
    const [comments, setComments] = useState("");
    const [desc, setDesc] = useState("");
    const [title, setTitle] = useState("");
    const [deadline, setDeadline] = useState("");
    const [member, setMember] = useState("");
    const [priority, setPriority] = useState("High");
    const [leaderId, setLeaderId] = useState("1");

    const popupRef = useRef(null); // Renamed for clarity

    const url = "http://localhost:4000";

    const handleAddTask = async (e) => {
        e.preventDefault();

        const data = {
            title: title,
            Leader_id: leaderId,
            Member_id: "13224",
            description: desc,
            priority: "High",
            dueDate: deadline,
            TaskChat: [comments],
        };

        console.log(data);

        await fetch(`${url}/api/tasks`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(response => {
            if (response.ok) {
                setCreateTaskPopup(false);
            }
        });
    };

    const changeLeaderId = (e) => {
        setMember(e.target.value)

        for (let i = 0; i < members.length; i++) {
            if (members[i].UserName == member) {
                setLeaderId(members[i]._id);
                break;
            }
        }
    }

    useEffect(() => {
        const getMembers = async () => {
            const res = await fetch(`${url}/api/user`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await res.json();

            setMembers(data);
        };

        getMembers();
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                setCreateTaskPopup(false);
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
                ref={popupRef} // Reference to the popup
                className="relative w-full md:w-[70%] h-auto md:h-[710px] bg-black flex flex-col p-5 md:p-10 text-white shadow-[0_20px_50px_rgba(233,_117,_79,_0.7)] rounded-3xl"
            >
                <IoMdClose
                    className="bg-white text-black font-bold cursor-pointer text-[40px] p-2 absolute rounded-full top-5 right-5"
                    onClick={() => setCreateTaskPopup(false)}
                />
                <div className="h-auto text-2xl md:text-3xl font-bold mb-4 md:mb-5">
                    Create New Task
                </div>
                <form className="flex flex-col px-4 md:px-10 text-lg md:text-xl font-semibold">
                    <div className="flex flex-col mb-4 md:mb-5">
                        <label className="text-white text-base md:text-xl">
                            Choose Team Member:
                        </label>
                        <select
                            name="task[tm]"
                            className="py-2 px-3 mt-2 md:mt-3 rounded-full bg-white text-black text-sm md:text-base"
                            value={member}
                            onChange={(e) => changeLeaderId(e)}
                        >
                            {members.map((mem, index) => (
                                <option key={index} value={mem.UserName}>
                                    {mem.UserName}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col mb-4 md:mb-5">
                        <label className="text-white text-base md:text-xl">Title:</label>
                        <input
                            name="task[title]"
                            placeholder="Enter the Title of the Task"
                            className="py-2 px-3 md:py-2 md:px-4 mt-2 md:mt-3 rounded-full bg-white text-black text-sm md:text-base"
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                        />
                    </div>
                    <div className="flex flex-col mb-4 md:mb-5">
                        <label className="text-white text-base md:text-xl">
                            Priority:
                        </label>
                        <select
                            name="task[tm]"
                            className="py-2 px-3 mt-2 md:mt-3 rounded-full bg-white text-black text-sm md:text-base"
                            value={priority}
                            onChange={(e) => setPriority(e.target.value)}
                        >
                            <option value="Low">
                                Low
                            </option>
                            <option value="Medium">
                                Medium
                            </option>
                            <option value="High">
                                High
                            </option>
                        </select>
                    </div>
                    <div className="flex flex-col mb-4 md:mb-5">
                        <label className="text-white text-base md:text-xl">
                            Description:
                        </label>
                        <textarea
                            name="task[desc]"
                            className="py-2 px-3 md:py-2 md:px-4 mt-2 md:mt-3 rounded-2xl bg-white text-black text-sm md:text-base"
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col md:flex-row">
                        <div className="flex flex-col mb-4 md:mb-5 w-full md:w-[40%] md:mr-5">
                            <label className="text-white text-base md:text-xl">
                                Deadline:
                            </label>
                            <input
                                name="task[deadline]"
                                type="datetime-local"
                                className="py-2 px-3 md:py-2 md:px-4 mt-2 md:mt-3 rounded-2xl bg-white text-black text-sm md:text-base"
                                value={deadline}
                                onChange={(e) => setDeadline(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col mb-4 md:mb-5 w-full md:w-[55%]">
                            <label className="text-white text-base md:text-xl">
                                Comments:
                            </label>
                            <input
                                name="task[comments]"
                                className="py-2 px-3 md:py-2 md:px-4 mt-2 md:mt-3 rounded-2xl bg-white text-black text-sm md:text-base"
                                value={comments}
                                onChange={(e) => setComments(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex justify-center mt-4 md:mt-5">
                        <button
                            className="bg-[#E9754F] py-2 px-4 md:py-3 md:px-5 rounded-full text-white text-sm md:text-base"
                            onClick={handleAddTask}
                        >
                            Create
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewTask;
