import React from 'react'
import otaq from "../assets/images/otaq1.jpg"
import bina from "../assets/images/otaq2.jpg"
import "../components/css/property.css"
import evBina from "../assets/images/swiperslide2.jpg"
import evler from "../components/json/swiperhome.json"
import comment from "../assets/images/emlakqadin.jpg"
import imza from "../assets/images/imza.png"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Swiperhomes from './Swiperhomes'
import "swiper/css";
import apartment from "../assets/images/apartment.png"
import simplex from "../assets/images/simplex.png"
import duplex from "../assets/images/dupleks.png"
import studio from "../assets/images/studio.png"
import penthaus from "../assets/images/penthaus.png"
import { useState ,useRef } from 'react';
import emailjs from '@emailjs/browser'


import { Autoplay } from 'swiper'
const PropertyAgency = () => {
    const [selectedBuilding, setSelectedBuilding] = useState("Apartment");

    const handleClick = (buildingName) => {
        setSelectedBuilding(buildingName);
    }
    
    const formFillRef = useRef();
    const service_Id = "service_wdq81g7"
    const template_Id = "template_krx4yep"
    const public_Key = "3usssEuW5DEkQJdTz"

    const sendEmail = (e) => {
        e.preventDefault();



        emailjs.sendForm(service_Id, template_Id, formFillRef.current, public_Key)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        formFillRef.current.reset();
    };

    return (
     
            <section className='property-agency'>
                <div className='ilk-sehife'>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={10}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}

                        modules={[Autoplay]}
                        className="mySwiper"
                    >
                        <div className='swiper-homes'>
                            {
                                evler.map(ev => (
                                    <SwiperSlide key={ev.id}>
                                        <Swiperhomes
                                            binaSekili={ev.binaSekili}
                                            binaAd={ev.binaAd}
                                            binaQiymet={ev.binaQiymet}
                                            binaMelumat={ev.binaMelumat} />



                                    </SwiperSlide>
                                ))
                            }
                        </div>

                    </Swiper>
                </div>

                <div className='about-us' data-aos="fade-up" data-aos-duration="3000">
                    <p>HAQQIMIZDA</p>
                    <h3>BELFORT ƏMLAKA XOŞ GƏLDİNİZ. <br /> YAŞAYIŞ ƏMLAKLARINI DAYANMADAN İNKİŞAF ETDİRMƏKDƏYİK</h3>
                    <div className='comment-about'>
                        <img src={comment} alt="pp" />
                        <p>Məqsədimiz insanlar üçün əlverişli və sərfəli
                            <br /> məkanları tikib insanlara rahat həyat tərzi sürmələri üçün fürsət
                            <br /> tanımaqdır.</p>
                        <img src={imza} alt="imza" className='imza'/>
                    </div>
                </div>

                <div className="sehife-uc">
                    <div className="box-container">
                        <div className="left-side">
                            <h1>SİZƏ ƏN UYĞUN OLAN EVİ SEÇİN</h1>
                            <p>
                                Alıcıların rahatlığını təmin edəcək yaşayış kompleksləri ilə bazarda keyfiyyət və rahatlığın ünvanına çevrilən Belfort 2022-ci ildən fəaliyyətə başlamışdır. 
                                Şirkət fəaliyyətinə başladığı gündən etibarən insanların komfortunu və rahatlığını düşünərək inşaat sektorunda inamlı addımlarla irəliləməkdədir.
                                Belfort Group tikinti şirkəti, Azərbaycanda ilk dəfə sakinləri mənzillərə köçməmişdən əvvəl çıxarış və texniki pasport ilə təmin edib. 
                                Sizlərə, xəyallarınızda canlandırdığınız tam təmirli, yüksək keyfiyyətli, 17-20 mərtəbəli müasir tələblərə cavab verən binalar inşa edirik. İnşa etdiyimiz komplekslərdə daimi su, işıq və qaz sistemləri, Türkiyə istehsalı olan sərnişin və yük liftləri, plastik qapı və pəncərə sistemləri, seyf qapılar, yeraltı qaraj, təhlükəsizlik xidməti, istirahət parkı, tennis və futbol meydançaları yüksək standartlara cavab verəcək keyfiyyətdədir.
                            </p>
                        </div>
                        
                        <div className="right-side">
                            {/* <img src={evBina} alt="" /> */}
                        </div>
                    </div>
                </div>

                <div className="serfeli-teklifler">
                    <h1>ƏN SƏRFƏLİ TƏKLİFLƏR</h1>
                    <div className='building-box'>
                        <div className="building-names">
                            <ul>
                                <li onClick={() => handleClick("Apartment")}>Mənzil</li>
                                <li onClick={() => handleClick("Simplex")}>Sadə</li>
                                <li onClick={() => handleClick("Duplex")}>Dupleks</li>
                                <li onClick={() => handleClick("Studio")}>Studiya</li>
                                <li onClick={() => handleClick("Penthaus")}>Penthaus</li>
                            </ul>
                        </div>
                        <div className="building-images">
                            {selectedBuilding === "Apartment" && <img src={apartment} alt="Building A" data-aos= "zoom-out"/>}
                            {selectedBuilding === "Simplex" && <img src={simplex} alt="Building B" data-aos= "zoom-out" />}
                            {selectedBuilding === "Duplex" && <img src={duplex} alt="Building C" data-aos= "zoom-out" />}
                            {selectedBuilding === "Studio" && <img src={studio} alt="Building D" data-aos= "zoom-out" />}
                            {selectedBuilding === "Penthaus" && <img src={penthaus} alt="Building E" data-aos= "zoom-out" />}
                        </div>

                        <div className='building-about'>

                            {selectedBuilding === "Apartment" &&
                                <div className='about-apartment'>
                                    <p>Mənzil sahəsi: 110m2</p>
                                    <p>Eyvan sahesi: 8m2</p>
                                    <p>Otaqlar: 3</p>
                                    <p>Mərtəbə: 6</p>
                                </div>}

                            {selectedBuilding === "Simplex" &&
                                <div className='about-simplex'>
                                    <p>Mənzil sahəsi: 60m2</p>
                                    <p>Eyvan sahesi: 4m2</p>
                                    <p>Otaqlar: 1</p>
                                    <p>Mərtəbə: 8</p>
                                </div>}

                            {selectedBuilding === "Duplex" &&
                                <div className='about-duplex'>
                                    <p>Mənzil sahəsi: 130m2</p>
                                    <p>Eyvan sahesi: 12m2</p>
                                    <p>Otaqlar: 4</p>
                                    <p>Mərtəbə: 6</p>
                                </div>}

                            {selectedBuilding === "Studio" &&
                                <div className='about-studio'>
                                    <p>Mənzil sahəsi: 40m2</p>
                                    <p>Eyvan sahesi: 4m2</p>
                                    <p>Otaqlar: 1</p>
                                    <p>Mərtəbə: 3</p>
                                </div>}

                            {selectedBuilding === "Penthaus" &&
                                <div className='about-penthaus'>
                                    <p>Mənzil sahəsi: 170m2</p>
                                    <p>Eyvan sahesi: 20m2</p>
                                    <p>Otaqlar: 4</p>
                                    <p>Mərtəbə: 9</p>
                                </div>}
                        </div>
                    </div>
                </div>

                <div className='sehife-bes'>
                    <div className="box-container">
                        <div className="left-side">
                            <img src={otaq} alt="otaq" data-aos="fade-up" data-aos-duration="2000" />
                            <img src={bina} alt="bina" data-aos="fade-down" data-aos-duration="2000"/>
                        </div>

                        <div className="right-side" data-aos="fade-left">
                            <p>
                            Bütün layihələrimizi birləşdirən və reallaşdırılması mümkün yaradıcı bir vizyon birliyi...
                            </p>
                        </div>
                    </div>
                </div>

                <div className="teyinat" onSubmit={sendEmail} data-aos="fade-up">
                    <p>GÖRÜŞ TƏYİN ET</p>
                    <h1>GÖRÜŞ TƏYİN EDİN</h1>

                    <form className='inputlar' ref={formFillRef}>
                        <div className="left-right-one">
                           <input type="text" placeholder='Adınız' required name='name'/>
                           <input type="email" placeholder='E-mail hesabınız' required name='email' />
                        </div>
                        <div className="left-right-two">
                           <input type="date" required name='date'/>
                           <select name="time" id="time" placeholder='11:AM'>11:00
                            <option value="11:AM">11:00</option>
                            <option value="13:AM">13:00</option>
                            <option value="15:AM">15:00</option>
                           </select>
                        </div>
                        <textarea name="message" id="message" cols="30" rows="10" placeholder='Mesajiniz'></textarea>
                        <button>MÜRACİƏT ET</button>
                    </form>

                    
                </div>

            </section>

       
    )
}

export default PropertyAgency