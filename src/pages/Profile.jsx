import React, { useState } from 'react'
import { getAuth } from "firebase/auth"
import { useNavigate } from 'react-router'

export default function Profile() {
  const auth = getAuth()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email
  })

  const {name, email} = formData
  function onLogout(){
    auth.signOut()
    navigate("/")
  }
  return (
    <>
      <section className='mx-w-6xl mx-auto flex justify-center items-center flex-col'>
        <h1 className='uppercase text-3xl text-center mt-6 font-bold'>my profile</h1>
        <div className='w-full md:w-[50%] mt-6 px-3'>
          <form>
            <input type="text" name="name" id="name" value={name}
            disabled className='w-full px-4 py-2 text-xl mb-6 border-transparent
             text-gray-700 bg-transparent border-b-emerald-600 outline-none border-ridge border-8
             rounded transition ease-in-out' / >

            <input type="email" name="email" id="email" value={email} disabled
            className='w-full px-4 py-2 text-xl mb-6 border-transparent
            text-gray-700 bg-transparent  border-b-emerald-600 outline-none border-ridge border-8
            rounded transition ease-in-out'  />

            <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg'>
              <p className='flex items-center mb-6 '>Do you want to change your name
               <span className='text-red-600 hover:text-red-700 transition ease-in-out duration-200 ml-1 cursor-pointer'>Edit </span></p>
              <p  onClick={onLogout} className='text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out cursor-pointer'>Sign out</p>
            </div>
             
          </form>
        </div>
      </section>
    </>
  )
}
