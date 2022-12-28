import React, { useEffect, useState } from 'react'
import logo from './webimgs/logo.png'
import { useLocation, useNavigate } from 'react-router'
import { getAuth, onAuthStateChanged } from "firebase/auth"

export default function Header() {
    const [pageState, setPageState] = useState("Sign in")
    const location = useLocation()
    const navigate = useNavigate()
    const auth = getAuth()
    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            if(user){
                setPageState("Profile")
            }
            else{
                setPageState("Sign in")
            }
        })
    }, [auth])
    function pathMatchRoute(route){
        if(route === location.pathname){
            return true
        }
    }
  return (
    <div className='shadow-sm bg-white border-b sticky top-0 z-40'>

    <header className='flex justify-between items-center px-3 
    max-w-6xl mx-auto '>
        <div>
            <img src={logo} alt="embtec konzultz logo" className='h-7 cursor-pointer' onClick={()=>navigate("/")}/>
        </div>
        <div>
            <ul className='flex space-x-10 text-stone-700'>
                <li className={`cursor-pointer py-3 text-sm font-sm font-semibold text-grey-400 border-b-[3px] 
                border-b-transparent ${pathMatchRoute("/") && "text-black border-b-red-500"}`} onClick={()=>navigate("/")}>Home</li>

                <li className={`cursor-pointer py-3 text-sm font-sm font-semibold text-grey-400 border-b-[3px] 
                border-b-transparent ${pathMatchRoute("/courses") && "text-black border-b-red-500"}`} onClick={()=>navigate("/courses")}>Courses</li>

                <li className={`cursor-pointer py-3 text-sm font-sm font-semibold text-grey-400 border-b-[3px] 
                border-b-transparent
                 ${(pathMatchRoute("/sign-in") || pathMatchRoute("/profile")) && "text-black border-b-red-500"}`} 
                onClick={()=>navigate("/profile")}>
                    {pageState}
                </li>
            </ul>
        </div>
    </header>
    </div>
  )
}
