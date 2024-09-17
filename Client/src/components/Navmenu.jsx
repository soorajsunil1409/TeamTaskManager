import {useState,useEffect} from 'react'
import { MenuButton } from './MenuButton'
import AppIcon from "../assets/AppIcon.png"
import { frame } from 'framer-motion'
import {animationControls, motion,useAnimationControls} from "framer-motion"
import Sidebar from './Sidebar'
import { FaHome } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { IoPerson } from "react-icons/io5";
import { MdMenuBook } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
const Navmenu = ({pageNumber,setPageNumber}) => {
    const [mobMenu ,setmobMenu]=useState(false)
    const mobMenuControl = useAnimationControls()
    const handleAnimate = async()=>{
        await mobMenuControl.start({
          left:"0%",
          opacity:[0,1],
          transition:{duration:0.5,ease:"easeInOut",x:{stiffness:50,damping:100}}
        })
      }
      const handleMoreClose = async()=>{
        await mobMenuControl.start({
          left:"-100%",
          opacity:[1,0],
          transition:{duration:0.5,ease:"easeInOut",x:{stiffness:50,damping:100}}
        })
      }
      useEffect(() => {
        if (mobMenu) {
          handleAnimate();
        } else {
          handleMoreClose();
        }
      }, [mobMenu]);
  return (
    <>
    <motion.div className="flex md:hidden z-[100] top-10  absolute flex-col gap-5 w-full h-[100vh] p-5 border-r-2"
        initial={{left:"-100%"}}
      animate={mobMenuControl} >
            <div className="flex items-center justify-around font-bold text-end text-2xl gap-2">
                
            </div>
            <div className="bg-white h-[90vh] bg-opacity-90">
                <Link to="/" className={`p-3 flex items-center justify-start cursor-pointer gap-3 ${pageNumber == 0 ? 'bg-[#dedede]' : ''}`} onClick={() => setPageNumber(0)}>
                    <FaHome className="text-2xl" />
                    Dashboard
                </Link>
                <Link to="/Tasks" className={`p-3 flex items-center justify-start cursor-pointer gap-3 ${pageNumber == 1 ? 'bg-[#dedede]' : ''}`} onClick={() => setPageNumber(1)}>
                    <TiTick className="text-2xl" />
                    Tasks
                </Link>
                <Link to="/" className={`p-3 flex items-center justify-start cursor-pointer gap-3 ${pageNumber == 2 ? 'bg-[#dedede]' : ''}`} onClick={() => setPageNumber(2)}>
                    <IoPerson className="text-2xl" />
                    Team
                </Link>
                <Link to="/" className={`p-3 flex items-center justify-start cursor-pointer gap-3 ${pageNumber == 3 ? 'bg-[#dedede]' : ''}`} onClick={() => setPageNumber(3)}>
                    <MdMenuBook className="text-2xl" />
                    Overview
                </Link>
            </div>
        </motion.div>
    <div className='flex justify-center items-center gap-3 md:hidden'>
      <button type='button' className='text-2xl m-4 z-[10]  hover:cursor-pointer mr-auto ' onClick={()=>setmobMenu((prev)=>(!prev))}>
      <MenuButton isOpen={mobMenu} />
      </button>
      <img src={AppIcon} className='size-[30px]' alt="" />
      <span className='font-bold text-lg'>Overflow Squad</span>
    </div>
    </>
  )
}

export default Navmenu
