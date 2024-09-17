import { FaRegBell } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoPersonCircleOutline } from "react-icons/io5";
import { BiSolidUpArrow } from "react-icons/bi";
import { BiSolidDownArrow } from "react-icons/bi";
import NewTask from "../components/NewTask";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { MenuButton } from "../components/MenuButton";
import MobSidebar from "../components/Sidebar";
import Navmenu from "../components/Navmenu";
import { animationControls } from "framer-motion";
import Sidebar from "../components/Sidebar";
import { RiLogoutBoxRFill } from "react-icons/ri";
const Dashboard = ({ pageNumber, setPageNumber }) => {
    const navigate = useNavigate();
    const [Profile,setProfile]=useState(false)
    useEffect(() => {
        const isLoggedin = localStorage.getItem('isLoggedin') === 'true';

        if (!isLoggedin) {
            // If not logged in, redirect to the login page
            navigate('/Login');
        }

      }, [navigate]);

      const [users, setUsers] = useState([]);
      const [tasks,setTasks] = useState([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);
      
      
    
      useEffect(() => {
        // Fetch data from localhost:4000/api/user when the component mounts
        fetch('http://localhost:4000/api/user/')
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            setUsers(data); // Set the fetched data
            setLoading(false);
          })
          .catch(error => {
            setError(error); // Handle errors
            setLoading(false);
          });
        fetch('http://localhost:4000/api/tasks/')
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            setTasks(data); // Set the fetched data
            setLoading(false);
          })
          .catch(error => {
            setError(error); // Handle errors
            setLoading(false);
          });
      }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
    return (
        <div className={`flex w-full h-full`}>
            {/* <div className={`flex w-full h-full ${pageNumber == 1 ? 'blur-md' : ''} transition-all duration-150`}> */}
            <div className={`flex w-full h-full transition-all duration-150`}>

               <Sidebar pageNumber={pageNumber} setPageNumber={setPageNumber}/>

                <div className="md:w-[calc(100vw-270px)] w-full h-full">
                    <div className="flex w-full h-[50px] border-b-2">
                    
                        <div className="flex w-[50%] h-full">
                        <Navmenu pageNumber={pageNumber} setPageNumber={setPageNumber}/>
                        </div>
                        <div className="flex justify-end items-center w-[50%] h-full p-5 gap-3">
                        
                            <FaRegBell className="text-2xl cursor-pointer" />
                            <IoPersonCircleOutline className="relative text-[30px] cursor-pointer" onClick={()=>setProfile((prev)=>(!prev))}/>
                            <div style={{transform:Profile? "scale(1)":"scale(0)"}} className="absolute cursor-pointer transition-all duration-200  z-[10] gap-3 bg-red-600 top-14 flex justify-center items-center w-[120px] h-[50px] right-1 border-2 rounded-lg "
                            onClick={()=>{localStorage.clear();window.location.reload()}}
                            >
                            <RiLogoutBoxRFill className="size-[30px] text-white" />
                               <h2 className="font-bold text-lg text-white" > Logout</h2>
                            </div>
                           
                           
                        </div>
                    </div>

                    <div className="w-full h-[calc(100vh-50px)] p-8">
                        <div className="text-4xl w-full h-[10%] md:block hidden font-bold">Dashboard</div>
                        <div className="flex md:flex-row flex-col w-full md:h-[30%] h-[60%] md:p-8 py-8 md:gap-16 gap-4">
                            <div className="border-2 rounded-lg md:w-[50%] h-full p-4">
                                <div className="flex flex-col gap-4 justify-center h-full">
                                    <span className="text-[#777777]">Total Tasks</span>
                                    <span className="text-3xl font-semibold">{tasks && tasks.length}</span>
                                    <span className="flex items-center gap-1 text-green-500">
                                        <BiSolidUpArrow />
                                        30%
                                    </span>
                                </div>
                            </div>
                            <div className="border-2 rounded-lg md:w-[50%] h-full p-4">
                                <div className="flex flex-col gap-4 justify-center h-full">
                                    <span className="text-[#777777]">Total Team Members</span>
                                    <span className="text-3xl font-semibold">{users && users.length}</span>
                                    <span className="flex items-center gap-1 text-red-500">
                                        <BiSolidDownArrow />
                                        10%
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-[60%] border-2 rounded-lg p-4">
                            <div className="text-xl font-semibold flex justify-between items-center mb-5">
                                <div className="mb-5">
                                    Tasks Progress
                                </div>
                                <div className="absolute flex right-12 translate-y-2 cursor-pointer">
                                    <div className="px-5 py-2 rounded-lg border-2 border-[#FF906B] hover:bg-[#FF906B] hover:text-white">Filter</div>
                                </div>
                            </div>
                            <div>
                            
                        {/* Wrap the table rows in a scrollable div */}
                        {tasks && (
                            <div className="w-full h-[300px] overflow-hid">
                                <table className="w-full  text-md sm:text-xl font-semibold bg-white rounded-3xl mb-4 border-separate border-spacing-0">
                                <thead className="bg-black text-white">
                                    <tr>
                                    <th className="p-3 border border-black">#</th>
                                    <th className="px-10 border border-black">Task Name</th>
                                    <th className="p-3 border border-black">Team Member</th>
                                    <th className="p-3 border border-black">Status</th>
                                    <th className="p-3 border border-black">Priority</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tasks.length > 0 && (
                                    <tr className="bg-white text-black">
                                        <td className="p-3 text-center border border-black">1</td>
                                        <td className="p-3 text-center border border-black">{tasks[0]?.title}</td>
                                        <td className="p-3 text-center border border-black">{tasks[0]?.Member_id}</td>
                                        <td className="p-3 text-center border border-black">{tasks[0]?.status}</td>
                                        <td className="p-3 text-center border border-black">{tasks[0]?.priority}</td>
                                    </tr>
                                    )}
                                    {tasks.length > 1 && (
                                    <tr className="bg-white text-black">
                                        <td className="p-3 text-center border border-black">2</td>
                                        <td className="p-3 text-center border border-black">{tasks[1]?.title}</td>
                                        <td className="p-3 text-center border border-black">{tasks[1]?.Member_id}</td>
                                        <td className="p-3 text-center border border-black">{tasks[1]?.status}</td>
                                        <td className="p-3 text-center border border-black">{tasks[1]?.priority}</td>
                                    </tr>
                                    )}
                                    {tasks.length > 2 && (
                                    <tr className="bg-white text-black">
                                        <td className="p-3 text-center border border-black">3</td>
                                        <td className="p-3 text-center border border-black">{tasks[2]?.title}</td>
                                        <td className="p-3 text-center border border-black">{tasks[2]?.Member_id}</td>
                                        <td className="p-3 text-center border border-black">{tasks[2]?.status}</td>
                                        <td className="p-3 text-center border border-black">{tasks[2]?.priority}</td>
                                    </tr>
                                    )}
                                    {/* Repeat for more rows if necessary */}
                                </tbody>
                                </table>
                            </div>
)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="absolute w-full h-full transition-all duration-150" style={{
                transform: pageNumber == 1 ? 'scale(1)' : 'scale(0)',
                visibility: pageNumber == 1 ? 'visible' : 'hidden'
            }}>
                <NewTask setPageNumber={setPageNumber} />
            </div> */}
        </div >
    )
}
export default Dashboard