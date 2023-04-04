import React from 'react'
import "../components/css/residence.css"
const Residencebox = ({distrikAd,sahe,certyoj,otaqSayi,mertebe,tip,qiymet}) => {
  return (
    <div className='residence-box' data-aos="fade-down">
        <div className="ad-hisse">
            <h4>{distrikAd}</h4>
            <p>{sahe}</p>
        </div>

        <div className="sekil-hisse">
            <img src={certyoj} alt="photo" />
        </div>

        <div className="melumat-hisse">
            <ul>
                <li>{otaqSayi}</li>
                <li>{mertebe}</li>
                <li>{tip}</li>
            </ul>
        </div>

        <div className="qiymet-hisse">
            <p>{qiymet}</p>
        </div>
    </div>
  )
}

export default Residencebox