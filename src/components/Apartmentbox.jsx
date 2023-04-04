import React from 'react'
import { Link } from 'react-router-dom'
import "../components/css/apartmentbox.css"
const Apartmentbox = ({image,apartmentName,qiymet,melumat}) => {
  return (
    <Link to={"/apartment"}>
      <div className='apartment-box'>
        <div className="top-side">
            <img src={image} alt="photo" />
        </div>
        <div className="bottom-side">
            <p>{apartmentName}</p>
            <h5>{qiymet}</h5>
            <span>{melumat}</span>
        </div>
    </div>
    </Link>
  )
}

export default Apartmentbox