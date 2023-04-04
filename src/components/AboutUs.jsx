import React from 'react'
import Register from './Register'
import "../components/css/aboutus.css"
import person1 from "../assets/images/person1.jpg"
import person2 from "../assets/images/person2.jpg"
import person3 from "../assets/images/person3.jpg"

import Services from './Services'
const AboutUs = () => {
    return (
        <section className='aboutUs'>
            <div className='picture' data-aos-duration="2000" data-aos="fade-down">
                {/* <img src={picture} alt="picture" /> */}
            </div>

            <div className="haqqimizda" data-aos-duration="2000" data-aos="fade-up">
                <p>Haqqımızda</p>
                <h1>BELFORT ƏMLAKA XOŞ GƏLDİNİZ. <br />
                    YAŞAYIŞ ƏMLAKLARINI DAYANMADAN İNKİŞAF ETDİRMƏKDƏYİK.</h1>
                <div className="box-container">
                    <div className="qutu">
                       <div className="top-side">
                         <img src={person1} alt="person" />
                       </div>
                       <div className="bottom-side">
                        <p>INGRID VULK</p>
                        <span>Layihə tərtibatçısı</span>
                       </div>
                    </div>

                    <div className="qutu">
                       <div className="top-side">
                         <img src={person2} alt="person" />
                       </div>
                       <div className="bottom-side">
                        <p>SIMONE COOPER</p>
                        <span>Əsas podratçı</span>
                       </div>
                    </div>

                    <div className="qutu">
                       <div className="top-side">
                         <img src={person3} alt="person" />
                       </div>
                       <div className="bottom-side">
                        <p>RAYMOND COLE</p>
                        <span>Arxitektor</span>
                       </div>
                    </div>
                </div>
            </div>

            <Services />
            
            <Register />
             
        </section>
    )
}

export default AboutUs