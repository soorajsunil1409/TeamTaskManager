import AppIcon from "../assets/AppIcon.png"
import { FaHome } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { IoPerson } from "react-icons/io5";
import { MdMenuBook } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = ({ pageNumber, setPageNumber }) => {
    return (
        <div className="md:flex hidden flex-col gap-5 w-[270px] h-[100vh] p-5 border-r-2">
            <div className="flex items-center justify-around font-bold text-end text-2xl gap-2">
                <img src={AppIcon} alt="" />
                <span>Overflow Squad</span>
            </div>
            <div className="">
                <Link to="/" className={`p-3 flex items-center justify-start cursor-pointer gap-3 ${pageNumber == 0 ? 'bg-[#dedede]' : ''}`} onClick={() => setPageNumber(0)}>
                    <FaHome className="text-2xl" />
                    Dashboard
                </Link>
                <Link to="/Tasks" className={`p-3 flex items-center justify-start cursor-pointer gap-3 ${pageNumber == 1 ? 'bg-[#dedede]' : ''}`} onClick={() => setPageNumber(1)}>
                    <TiTick className="text-2xl" />
                    Tasks
                </Link>
                
            </div>
        </div>
    )
}
export default Sidebar