import React from 'react'
import { Link } from 'react-router-dom'

const Karuselevler = ({photoOfBuilding,nameOfBuilding,priceOfBuilding,aboutOfBuilding}) => {
    return (
        <Link to={"/residence"}>
        <div className="ev-qutu">
            <div className="top-side">
               <img src={photoOfBuilding} alt="binanin şəkili" />
            </div>
            <div className="bottom-side">
                <p> {nameOfBuilding} </p>
                <h4> {priceOfBuilding} </h4>
                <span> {aboutOfBuilding} </span>
            </div>
        </div>
        </Link>
    )
}

export default Karuselevler