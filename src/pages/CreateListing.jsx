import React, { useState } from 'react'
import { toast } from 'react-toastify'
import Spinner from '../components/Spinner'

export default function CreateListing() {
    const [geolocationEnabled, setGeolocationEnabled] = useState(true)
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        type: 'virtual',
        name:"",
        durations: 2,
        amount: 30,
        enroll: false,
        person: false,
        description:"",
        latitude: 0,
        longitude: 0,
        images: {}, 
    })
    const {type, name, durations, amount, person, description, enroll, latitude, longitude, images} = formData
    function onChange(e){
        let boolean = null
        if(e.target.value === "true"){
            boolean = true
        }
        if(e.target.value === "false"){
            boolean = false
        }
        //files
        if(e.target.files){
            setFormData((prevState) =>({
                ...prevState,
                images: e.target.files
            }))
        }
            // text/boolean/number
        if(!e.target.files){
            setFormData((prevState) =>({
                ...prevState,
                [e.target.id]: boolean ?? e.target.value,
                }))   
        }
    }

    function onSubmit(e){
        e.preventDefault()
        setLoading(true)
    }
    if(images.length > 6){
        setLoading(false)
        toast.error("maximum of 6 images is allowed")
        return
    }
    let geolocation = {}
    let location
    
    if(loading){
        return <Spinner />
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
                    <input type="number" name='duration' id={amount} onChange={onChange} min="10000" max={150000} required
                    className='w-full px-4 text-xl py-2 text-gray-300 bg-white border border-gray-700 rounded transition duration-150 ease-in-out 
                    focus:bg-white focus:text-gray-700 focus:border-slate-600 text-center '/>

                </div>
            </div>

            <p className='text-lg mt-6 font-semibold'>kind of enrollment</p>
            <div className='flex'>
                <button type='button' id='enroll' value={true}
                onClick={onChange}
                className={`mr-3 uppercase px-7 py-3 font-medium text-sm shadow-md
                 rounded hover:shadow-lg focus:shadow-lg active:shadow-lg
                 transition duration-150 ease-in-out w-full ${
                    !enroll ? "bg-white text-black" : "bg-slate-600 text-white"
                 }`}>single</button>

                <button type='button' id='enroll' value={false}
                onClick={onChange}
                className={`uppercase px-7 py-3 font-medium text-sm shadow-md
                 rounded hover:shadow-lg focus:shadow-lg active:shadow-lg
                 transition duration-150 ease-in-out w-full ${
                    enroll ? "bg-white text-black" : "bg-slate-600 text-white"
                 }`}>specialization</button>
            </div>

            <p className='text-lg mt-6 font-semibold'>who is the course for</p>
            <div className='flex'>
                <button type='button' id='person' value={false}
                onClick={onChange}
                className={`mr-3 uppercase px-7 py-3 font-medium text-sm shadow-md
                 rounded hover:shadow-lg focus:shadow-lg active:shadow-lg
                 transition duration-150 ease-in-out w-full ${
                    person ? "bg-white text-black" : "bg-slate-600 text-white"
                 }`}>kids</button>

                <button type='button' id='person' value={true}
                onClick={onChange}
                className={`uppercase px-7 py-3 font-medium text-sm shadow-md
                 rounded hover:shadow-lg focus:shadow-lg active:shadow-lg
                 transition duration-150 ease-in-out w-full ${
                    !person ? "bg-white text-black" : "bg-slate-600 text-white"
                 }`}>adults</button>
            </div>

            { !geolocationEnabled && (
                <div className='flex space-x-6 justify-start'>
                    <div>
                        <p className='text-lg font-semibold '>Latitude</p>
                        <input type="text" name="latitude" id="latitude" value={latitude}
                        onchange={onChange} required  
                        className='w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:bg-white focus:text-gray-700 focus:border-slate-600 text-center' />
                    </div>
                    <div>
                        <p className='text-lg font-semibold '>Longitude</p>
                        <input type="text" name="latitude" id="latitude" value={latitude}
                        onchange={onChange} required  
                        className='w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:bg-white focus:text-gray-700 focus:border-slate-600 text-center' />
                    </div>
                </div>
            )}     

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
