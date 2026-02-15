import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  let navigate=useNavigate();
  let [show,setShow]=useState(false);
  return (
    <div className="w-full h-screen bg-slate-200 flex items-center justify-center">
      <div className="max-w-[500px] w-full h-[600px] bg-white rounded-lg shadow-lg shadow-gray-400 flex flex-col gap-[30px]">
        <div className="w-full h-[200px] bg-[#E2A3B7] rounded-b-[30%] shadow-lg shadow-gray-400  flex items-center justify-center">

         <h1 className="text-gray-600 font-bold text-[30px] text-center">Welcome to <span className="text-white">PinkPing</span>...</h1>
        </div>
   <form className="w-full flex flex-col gap-[20px] items-center">
    <input type="text" placeholder='username' className="w-[90%] h-[50px] border-2 border-[#E2A3B7] px-[20px] py-[10px] bg-white rounded-lg shadow-lg shadow-gray-200"/>
        <input type="email" placeholder='email' className="w-[90%] h-[50px] border-2 border-[#E2A3B7] px-[20px] py-[10px] bg-white rounded-lg shadow-lg shadow-gray-200"/>
            <div className="w-[90%] h-[50px] border-2 border-[#E2A3B7] overflow-hidden rounded-lg shadow-lg shadow-gray-200 relative"> 
               <input type={`${show?"text":"password"}`} placeholder='Password' className="w-full h-full  px-[20px] py-[10px] bg-white  "/>
               <span className="absolute top-[10px] right-[20px] text-[19px] text-[#E2A3B7] font-semibold cursor-pointer" onClick={()=>setShow(prev=>!prev)}>{`${show?"hidden":"show"}`}</span>
            </div>

            <button className="px-[20px] py-[10px] bg-[#E2A3B7] rounded-2xl shadow-lg shadow-gray-400 text-[#553D44] text-[20px] w-[200px] mt-[20px] font-semibold hover:shadow-inner">sign up</button>
            <p className='cursor-pointer' onClick={()=>navigate("/login")}>Already have an account? <span className="text-[#E2A3B7] text-[bold]">Login</span>
            </p>
   </form>
      </div>
   
    </div>
  );
}

export default SignUp;
 