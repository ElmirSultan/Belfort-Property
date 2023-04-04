import React from 'react'
import "../components/css/smarthome.css"
const Smarthomebox = ({devicePhoto,deviceName,deviceContent}) => {
  return (
    <div className='smart-box'>
        <img src={devicePhoto} alt="device photo" />
        <p>{deviceName}</p>
        <span>{deviceContent}</span>
    </div>
  )
}

export default Smarthomebox