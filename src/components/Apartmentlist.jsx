import React from 'react'
import apartmentJson from "../components/json/apartments.json"
import "../components/css/apartment.css"
import Apartmentbox from './Apartmentbox'
import { Link } from 'react-router-dom'
const Apartmentlist = () => {
  return (
    <section className='apartment-list' data-aos="fade-up">
        <div className="first">
            <h1>ƏN GÖZƏL LÜKS MƏNZILLƏRIMIZIN SIYAHISI</h1>
            <div className='apartment-qutular'>
             
                {
                   apartmentJson.map(qutu => (
                    
                      <Apartmentbox key={qutu.id}
                    image={qutu.image}
                    apartmentName={qutu.yerlesdiyiYer} 
                    qiymet={qutu.qiymet}
                    melumat={qutu.melumat}/>
                    
                    
                   ))
                }
            </div>
        </div>

    </section>
  )
}

export default Apartmentlist