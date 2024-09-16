function NewTask() {
    return (
        <>
            <div className="w-full h-full flex justify-center bg-[#DEDEDE] items-center p-5 md:p-10">
                <div className="w-full md:w-[70%] h-auto md:h-[650px] bg-black flex flex-col p-5 md:p-10 text-white shadow-[0_20px_50px_rgba(233,_117,_79,_0.7)] rounded-3xl">
                    <div className="h-auto text-2xl md:text-3xl font-bold mb-4 md:mb-5">
                        Create New Task
                    </div>
                    <form className="flex flex-col px-4 md:px-10 text-lg md:text-xl font-semibold">
                        <div className="flex flex-col mb-4 md:mb-5">
                            <label className="text-white text-base md:text-xl">Choose Team Member:</label>
                            <select name="task[tm]" className="py-2 px-3 mt-2 md:mt-3 rounded-full bg-white text-black text-sm md:text-base">
                                <option>Member 1</option>
                                <option>Member 2</option>
                                <option>Member 3</option>
                                <option>Member 4</option>
                            </select>
                        </div>
                        <div className="flex flex-col mb-4 md:mb-5">
                            <label className="text-white text-base md:text-xl">Title:</label>
                            <input 
                                name="task[title]" 
                                placeholder="Enter the Title of the Task" 
                                className="py-2 px-3 md:py-2 md:px-4 mt-2 md:mt-3 rounded-full bg-white text-black text-sm md:text-base"
                            />
                        </div>
                        <div className="flex flex-col mb-4 md:mb-5">
                            <label className="text-white text-base md:text-xl">Description:</label>
                            <textarea 
                                name="task[desc]" 
                                className="py-2 px-3 md:py-2 md:px-4 mt-2 md:mt-3 rounded-2xl bg-white text-black text-sm md:text-base"
                            />
                        </div>
                        <div className="flex flex-col md:flex-row">
                            <div className="flex flex-col mb-4 md:mb-5 w-full md:w-[40%] md:mr-5">
                                <label className="text-white text-base md:text-xl">Deadline:</label>
                                <input 
                                    name="task[deadline]" 
                                    type="datetime-local" 
                                    className="py-2 px-3 md:py-2 md:px-4 mt-2 md:mt-3 rounded-2xl bg-white text-black text-sm md:text-base"
                                />
                            </div>
                            <div className="flex flex-col mb-4 md:mb-5 w-full md:w-[55%]">
                                <label className="text-white text-base md:text-xl">Comments:</label>
                                <input 
                                    name="task[comments]" 
                                    className="py-2 px-3 md:py-2 md:px-4 mt-2 md:mt-3 rounded-2xl bg-white text-black text-sm md:text-base"
                                />
                            </div>
                        </div>
                        <div className="flex justify-center mt-4 md:mt-5">
                            <button className="bg-[#E9754F] py-2 px-4 md:py-3 md:px-5 rounded-full text-white text-sm md:text-base">Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default NewTask;
