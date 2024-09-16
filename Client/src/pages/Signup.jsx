import { Link } from "react-router-dom"
import { useState } from "react"
const Signup = () => {
    const [UserName,setUserName]=useState("")
const [Password,setPassword]=useState("")
const [error,seterror]=useState("")
const [Email,setEmail]=useState("")
const handleSignUp = async(e)=>{
e.preventDefault()
if(UserName?.trim()&&Password?.trim()&&Email?.trim()){
    const user_data = {"UserName":UserName,"Email":Email,"Role":Role,"Password":Password}
        const response = await fetch("http://localhost:4000/api/user/",{
        method:"POST",
        body:JSON.stringify(user_data),
        headers:{
          'Content-Type':'application/JSON'
        }
      })
}
}
    return (
        <div className="w-full h-full p-10 md:px-[150px] flex">
            <div className="bg-[#dedede] md:w-[50%] h-full md:flex hidden flex-col justify-between">
                <div className="bg-[#E9754F] w-[60%] h-[300px] rounded-br-full"></div>
                <div className="relative flex justify-end items-end border-[#1b1b1b] border-t-[50px] border-l-[50px] w-[60%] h-[300px] rounded-tl-full translate-x-[66.7%]"></div>
            </div>
            <div className="md:w-[50%] bg-[#dedede] md:bg-white w-full h-full flex flex-col text-center gap-16 justify-center">
                <div className="text-3xl font-semibold">Signup</div>
                <form action="" className="flex flex-col gap-[70px] md:px-[15%] px-[5%]">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col text-start gap-1">
                            <span className="text-lg ml-4">Username</span>
                            <input type="text" value={UserName} placeholder="Enter your username" name="username" id="" className=" p-4 rounded-[50px] border-[2px] border-[#dedede]" 
                            onChange={(e)=>setUserName(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col text-start gap-1">
                            <span className="text-lg ml-4">Email</span>
                            <input type="email" value={Email} placeholder="Enter your email" name="email" id="" className=" p-4 rounded-[50px] border-[2px] border-[#dedede]"
                            onChange={(e)=>setEmail(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col text-start gap-1">
                            <span className="text-lg ml-4">Password</span>
                            <div className="w-full">
                                <input type="password" value={Password} placeholder="Enter your password" name="password" id="" className="w-full p-4 rounded-[50px] border-[2px] border-[#dedede]"
                                 onChange={(e)=>setPassword(e.target.value)}
                                 />
                                <i className="fa-solid fa-eye absolute translate-x-[-45px] translate-y-[23px]"></i>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col text-center gap-3">
                        <input type="submit" value="Signup" className="bg-[#1b1b1b] cursor-pointer text-white p-4 rounded-[50px] text-xl" />
                        <div className="flex justify-between px-3">
                            <span>
                                Already a user?
                            </span>
                            <Link to="/Login" className="font-semibold">
                                Login
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Signup