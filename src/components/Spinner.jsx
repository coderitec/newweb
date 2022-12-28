import React from 'react'
import spinner from "./assets/svg/spinner1.gif"

export default function Spinner() {
  return (
    <div className='bg-amber-500 bg-opacity-50 flex items-center justify-center fixed left-0 right-0 top-0 bottom-0 z-50'>
        <div>
            <img src={spinner} alt="loading..."  className='h-24'/>
        </div>
    </div>
  )
}
