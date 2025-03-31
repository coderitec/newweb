import React from 'react'
import Moment from 'react-moment'
import { Link } from 'react-router-dom'
import {FaReadme} from 'react-icons/fa'
import {TbCurrencyNaira} from "react-icons/tb"

export default function ListingItem({listing, id}) {
  return (
    <li>
        <Link to={`/category/${listing.type}/${id}`}>
            <img src={listing.imgUrls[0]} alt={listing.name} className="w-3/4"/>
            <Moment fromNow>
                {listing.timestamp?.toDate()}
            </Moment>
            <div>
                <div>
                    <FaReadme/>
                    <p>{listing.name}</p>
                </div>
                <p ><TbCurrencyNaira className='inline font-medium'/>
                {listing.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ", ")}
                
                </p>
            </div>
        
        
        </Link>
    </li>
  )
}
