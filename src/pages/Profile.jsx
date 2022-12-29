import React, { useState } from 'react'
import { getAuth, updateProfile } from "firebase/auth"
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { updateDoc } from 'firebase/firestore'
import {db} from '../firebase'
import { doc } from 'firebase/firestore'
import { HiComputerDesktop } from "react-icons/hi2"
import { Link } from 'react-router-dom'

export default function Profile() {
  const auth = getAuth()
  const navigate = useNavigate()
  const [changeDetail, setChangeDetail] = useState(false)
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email
  })

  const {name, email} = formData
  function onLogout(){
    auth.signOut()
    navigate("/")
  }

  function onChange(e){
    setFormData((prevState)=>({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  async function onSubmit(){
    try {
      if(auth.currentUser.displayName !== name){
        //update the display name in firebase auth
        await updateProfile(auth.currentUser, {
          displayName: name,
        })

        //update name in firestore
        const docRef = doc(db, "users", auth.currentUser.uid)
        await updateDoc(docRef, {
          name,
        })
        toast.success("Yes, Profile details updated")
      }
    } catch (error) {
      toast.error("Could not update the details")
    }
  }
  return (
    <>
      <section className='mx-w-6xl mx-auto flex justify-center items-center flex-col'>
        <h1 className='uppercase text-3xl text-center mt-6 font-bold'>my profile</h1>
        <div className='w-full md:w-[50%] mt-6 px-3'>
          <form>
            <input type="text" name="name" id="name" value={name.toUpperCase()}
            disabled={!changeDetail}
            onChange={onChange}
             className={`w-full px-4 py-2 text-xl mb-6 border-transparent
             text-gray-700 bg-transparent border-b-emerald-600 outline-none border-ridge border-8
             rounded transition ease-in-out ${changeDetail && "bg-red-200 focus:bg-red-200"}`} / >

            <input type="email" name="email" id="email" value={email} disabled
            className='w-full px-4 py-2 text-xl mb-6 border-transparent
            text-gray-700 bg-transparent  border-b-emerald-600 outline-none border-ridge border-8
            rounded transition ease-in-out'  />

            <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg'>
              <p className='flex items-center mb-6 '>Do you want to change your name
               <span 
               onClick={() => {
                  changeDetail && onSubmit()
                  setChangeDetail((prevState) => !prevState)
                } }
                className='text-red-600 hover:text-red-700 transition ease-in-out duration-200 ml-1 cursor-pointer'>
                
                {changeDetail ? "Apply change" : "Edit"}
                </span>
                
                </p>
              <p  onClick={onLogout} className='text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out cursor-pointer'>Sign out</p>
            </div>
             
          </form>

          <button type='submit' className='w-full bg-blue-600 text-white uppercase px-7 py-3 text-sm 
          font-medium rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg 
          active:bg-blue-800'>
            <Link to="/create-listing" className='flex justify-center items-center '>
            <HiComputerDesktop className='mr-2 text-3xl rounded-full p-1 border-2'/>
            Add or remove a course
            </Link>
          </button>
        </div>
      </section>
    </>
  )
}
