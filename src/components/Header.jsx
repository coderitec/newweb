import React from 'react'
import logo from './webimgs/logo.png'
import { useLocation, useNavigate } from 'react-router'

export default function Header() {
    const location = useLocation()
    const navigate = useNavigate()
    function pathMathRoute(route){
        if(route === location.pathname){
            return true
        }
    }
  return (
    <div className='shadow-sm bg-white border-b sticky top-0 z-50'>

    <header className='flex justify-between items-center px-3 
    max-w-6xl mx-auto '>
        <div>
            <img src={logo} alt="embtec konzultz logo" className='h-7 cursor-pointer' onClick={()=>navigate("/")}/>
        </div>
        <div>
            <ul className='flex space-x-10 text-stone-700'>
                <li className={`cursor-pointer py-3 text-sm font-sm font-semibold text-grey-400 border-b-[3px] 
                border-b-transparent ${pathMathRoute("/") && "text-black border-b-red-500"}`} onClick={()=>navigate("/")}>Home</li>

                <li className={`cursor-pointer py-3 text-sm font-sm font-semibold text-grey-400 border-b-[3px] 
                border-b-transparent ${pathMathRoute("/courses") && "text-black border-b-red-500"}`} onClick={()=>navigate("/courses")}>Courses</li>

                <li className={`cursor-pointer py-3 text-sm font-sm font-semibold text-grey-400 border-b-[3px] 
                border-b-transparent ${pathMathRoute("/sign-in") && "text-black border-b-red-500"}`} onClick={()=>navigate("/sign-in")}>Sign in</li>
            </ul>
        </div>
    </header>
    </div>
  )
}
