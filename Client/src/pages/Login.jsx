import { useEffect,useState } from "react";
import { useNavigate,Link } from "react-router-dom"

function Login() {
const [UserName,setUserName]=useState("")
const [Password,setPassword]=useState("")
const [error,seterror]=useState("")
const navigate=useNavigate();
const handleLogin = async(e)=>{
  e.preventDefault()
  if(UserName?.trim()&&Password?.trim()){
    console.log(true)
    const get_response= await fetch("http://localhost:4000/api/user/"+`${UserName}`);
    if(get_response.ok){
      
      
      const data = await get_response.json();
      
      if (data.Password===Password){
        localStorage.setItem("isLoggedin",true)
        localStorage.setItem("User_id",data._id)
        navigate('/',{state:data,replace:true})
      }else{
        seterror("Invalid UserName or Password")
      } }else{
        seterror("Fill in required fields.")
      }}else{
        seterror("Fill in required fields.")
      }
}
    return (
      <div className="absolute w-full h-full">
        <div className="w-full h-full flex items-center justify-center py-10 px-[10%]">
          <div className="relative hidden md:flex md:w-[50%] h-full bg-[#DEDEDE] flex-col">
            <div className="w-[50%] h-[50%] rounded-br-full border-b-[50px] border-r-[50px] border-[#1B1B1B]"></div>
            <div className="w-[50%] h-[50%] bg-[#1B1B1B] rounded-tl-full border-t-[50px] border-l-[50px] border-[#1B1B1B] absolute bottom-0 right-0"></div>
          </div>
          <div className="w-full sm:w-[90%] md:w-[50%] h-full flex items-center justify-center">
            <div className="bg-[#DEDEDE] md:bg-white w-[90%] h-[90%] flex flex-col items-center">
              <div className="h-[70px] w-full mx-5 p-10 font-bold text-2xl md:text-3xl lg:text-4xl">
                Login
              </div>
              <form className="h-[400px] flex flex-col w-full p-5 md:p-10">
                <label className="px-5 py-2 text-sm md:text-md lg:text-lg">Username</label>
                <div className="w-full mb-10 bg-white rounded-[50px] p-5 border-[2px] border-[#DEDEDE]">
                  <div className="flex items-center">
                    <i className="fa-regular fa-user"></i>
                    <input
                      placeholder="Enter your username"
                      className="ml-3 text-sm md:text-base lg:text-lg w-full outline-none"
                      name="username"
                      value={UserName}
                      onChange={(e)=>{setUserName(e.target.value)}}
                    />
                  </div>
                </div>
                <label className="px-5 py-2 text-sm md:text-md lg:text-lg">Password</label>
                <div className="w-full mb-10 bg-white rounded-[50px] p-5 border-2 border-[#DEDEDE]">
                  <div className="flex items-center">
                    <i className="fa-solid fa-key"></i>
                    <input
                      placeholder="Enter your password"
                      className="ml-3 text-sm md:text-base lg:text-lg w-full outline-none"
                      name="pass"
                      type="password"
                      value={Password}
                      onChange={(e)=>{setPassword(e.target.value)}}
                    />
                  </div>
                </div>
                <div className="w-full flex flex-col">
                  <button className="p-5 text-lg md:text-xl lg:text-2xl font-bold bg-black text-white rounded-[50px]"
                  onClick={handleLogin}
                  >
                    Login
                  </button>
                  {error&&<h2 className="text-red-500 text-lg">{error}</h2>}
                  <div className="flex justify-between mx-5 my-2 text-md md:text-lg lg:text-xl">
                    <span>Create new account?</span>
                    <Link to="/Signup" className="font-medium">
                      Sign Up
                    </Link>
                  </div>
                </div>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Login;
  