import React from 'react'
import "../components/css/property.css"
const Swiperhomes = ({binaSekili,binaAd,binaMelumat,binaQiymet}) => {
  return (
    <div className='swiperhome'>
        <div className="gorunen-ust-teref">
            <img src={binaSekili} alt="bina" />
        </div>
        <div className='gizli-alt-teref'>
            <p className='bina-adi'>{binaAd}</p>
            <p className='bina-qiymeti'>{binaQiymet}</p>
            <p className='bina-haqqinda-melumat'>{binaMelumat}</p>
        </div>
    </div>
  )
}

export default Swiperhomes