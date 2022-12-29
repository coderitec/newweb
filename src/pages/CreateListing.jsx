import React, { useState } from 'react'

export default function CreateListing() {
    const [formData, setFormData] = useState({
        type: 'virtual',
        name:"",
        durations: 2,
        amount: 30,
        single: false,
        specialization: false,
        kids: false,
        adults: false,
        description:"",
    })
    const {type, name, durations, amount, single, specialization, kids, adults, description} = formData
    function onChange(){

    }

  return (
    <main className='max-w-md px-2 mx-auto'>
        <h1 className='text-3xl text-center mt-6 font-bold uppercase'>create a course</h1>

        <form>
            <p className='text-lg mt-6 font-semibold'>onsite / virtual</p>
            <div className='flex'>
                <button type='button' id='type' value='onsite'
                onClick={onChange}
                className={`mr-3 uppercase px-7 py-3 font-medium text-sm shadow-md
                 rounded hover:shadow-lg focus:shadow-lg active:shadow-lg
                 transition duration-150 ease-in-out w-full ${
                    type === 'virtual' ? "bg-white text-black" : "bg-slate-600 text-white"
                 }`}>onsite</button>

                <button type='button' id='type' value='virtual'
                onClick={onChange}
                className={`uppercase px-7 py-3 font-medium text-sm shadow-md
                 rounded hover:shadow-lg focus:shadow-lg active:shadow-lg
                 transition duration-150 ease-in-out w-full ${
                    type === 'onsite' ? "bg-white text-black" : "bg-slate-600 text-white"
                 }`}>virtual</button>
            </div>
            <p className='text-lg mt-6 font-semibold'>Name </p>
            <input type="text" name="name" id="name" value={name}  onChange={onChange}
            placeholder="course name" maxLength={40} minLength={10} required 
            className='w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded
            transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6'/>

            <div className='flex space-x-6 mb-6'>
                <div>
                    <p className='text-lg font-semibold'>duration</p>
                    <input type="number" name='duration' id={durations} onChange={onChange} min="1" max={6} required
                    className='w-full px-4 text-xl py-2 text-gray-300 bg-white border border-gray-700 rounded transition duration-150 ease-in-out 
                    focus:bg-white focus:text-gray-700 focus:border-slate-600 text-center '/>

                </div>
                <div>
                    <p className='text-lg font-semibold'>amount</p>
                    <input type="number" name='duration' id={amount} onChange={onChange} min="1" max={6} required
                    className='w-full px-4 text-xl py-2 text-gray-300 bg-white border border-gray-700 rounded transition duration-150 ease-in-out 
                    focus:bg-white focus:text-gray-700 focus:border-slate-600 text-center '/>

                </div>
            </div>

            <p className='text-lg mt-6 font-semibold'>kind of registration</p>
            <div className='flex'>
                <button type='button' id='single' value={true}
                onClick={onChange}
                className={`mr-3 uppercase px-7 py-3 font-medium text-sm shadow-md
                 rounded hover:shadow-lg focus:shadow-lg active:shadow-lg
                 transition duration-150 ease-in-out w-full ${
                    single ? "bg-white text-black" : "bg-slate-600 text-white"
                 }`}>single</button>

                <button type='button' id='specialization' value={true}
                onClick={onChange}
                className={`uppercase px-7 py-3 font-medium text-sm shadow-md
                 rounded hover:shadow-lg focus:shadow-lg active:shadow-lg
                 transition duration-150 ease-in-out w-full ${
                    !specialization ? "bg-white text-black" : "bg-slate-600 text-white"
                 }`}>specialization</button>
             </div>    

            <p className='text-lg mt-6 font-semibold'>Kids/ Adults</p>
            <div className='flex'>
                <button type='button' id='kids' value={true}
                onClick={onChange}
                className={`mr-3 uppercase px-7 py-3 font-medium text-sm shadow-md
                 rounded hover:shadow-lg focus:shadow-lg active:shadow-lg
                 transition duration-150 ease-in-out w-full ${
                    !kids ? "bg-white text-black" : "bg-slate-600 text-white"
                 }`}>kids</button>

                <button type='button' id='adults' value={true}
                onClick={onChange}
                className={`uppercase px-7 py-3 font-medium text-sm shadow-md
                 rounded hover:shadow-lg focus:shadow-lg active:shadow-lg
                 transition duration-150 ease-in-out w-full ${
                    adults ? "bg-white text-black" : "bg-slate-600 text-white"
                 }`}>adults</button>
            </div>
            <p className='text-lg mt-6 font-semibold'>Description </p>
            <textarea type="text" name="description" id="description" value={description}  onChange={onChange}
            placeholder="course name" required 
            className='w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded
            transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6'/>

           <div className='mb-6'>
            <p className='text-lg font-semibold'>Images</p>
            <p className='text-gray-600'>The first image will be the cover (max 6)</p>
            <input type="file" name="images" id="images" onChange={onChange} 
            accept=".jpg,.png,.webp,.jpeg" 
            multiple required
            className='w-full px-3 py-1.5 text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out 
            focus:bg-white focus:border-slate-600'/>
           </div>

           <button type="submit" 
           className='uppercase mb-6 w-full px-7 py-3 bg-blue-600 text-white font-medium 
           text-sm rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 active:bg-blue-800
           active:shadow-lg transition duration-100 ease-in-out'>create course</button>
        </form>
    </main>
  )
}
