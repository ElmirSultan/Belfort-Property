import React from 'react'
import "./css/mainhome.css"
import ev from "../assets/images/ev.jfif"
import binalar from "../assets/images/binalar.jpg"
import karuselBinalarJson from "../components/json/karuselevler.json"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import designPhoto from "../assets/images/designphoto.jpg"
import material from "../assets/images/material.jpg"
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Mousewheel, Keyboard } from "swiper";
import { Autoplay } from 'swiper'
import Karuselevler from './Karuselevler'
import sponsor1 from "../assets/images/almadine.png"
import sponsor2 from "../assets/images/luxuryhouse.png"
import sponsor3 from "../assets/images/sponsor3.png"
import sponsor4 from "../assets/images/building.png"
import Register from './Register'
import NumberCounter from './Numbercounter'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Button from './Button'
const Mainhome = () => {
  
    const [activeIndex, setActiveIndex] = useState(null);

    // array of questions and answers
    const suallar = [
      {
        question: 'Hansı materiallardan istifadə olunur?',
        answer: 'Evlərin tikilməsində Türkiyə Almaniya Kanada istehsalı tikinti resurslarından istifadə olunmuşdur'
      },
      {
        question: 'Necə ala bilərəm?',
        answer: 'Səhifəmizdən bəyəndiyiniz evi seçib bizimlə əlaqə saxlayıb ofisimizə görüş təyin edə bilərsiniz.Sonra isə ofisimzdə sənədləşməni yerinə yetirmək mümkündür.'
      },
      {
        question: 'Avropada filialımız varmı?',
        answer: 'Hal-hazırda Azərbaycan içində fillialarımız fəaliyyət göstərməktədir.Gələcək 1 il içində Kanada və Almaniya filiallarımızda açılacagdır.'
      }
    ];
  
    // function to toggle the active question
    function toggleActive(index) {
      setActiveIndex(activeIndex === index ? null : index);
    }
    
  
    return (
        

            <section className='main-home'>
                <div className='main-home-slide'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper"
                >
                        <SwiperSlide>
                            <div className='panaromik'>
                                <div className='slide-texts'>
                                    <h1>PANAROMİK</h1>
                                    <p>Yaşamın bir üst səviyyəsi</p>
                                </div>
                            </div>

                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='parkview'>
                                <div className="slide-texts">
                                    <h1>PARK GÖRÜNÜŞLÜ</h1>
                                    <p>Yaşamın bir üst səviyyəsi</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='natureview'>
                                <div className="slide-texts">
                                    <h1>TƏBİƏT GÖRÜNÜŞLÜ</h1>
                                    <p>Yaşamın bir üst səviyyəsi</p>
                                </div>
                            </div>

                        </SwiperSlide>


                    </Swiper>
                </div>
                <div className='premiumapartments'>
                    <div className="box-container">
                        <div className="left-side" data-aos="fade-right" >
                            <p>

                                MÜASİR MƏKANLAR VƏ PREMIUM MƏNZİL KOMPLEKSLERİ. <br />
                                BELFORT RESIDENCE VİTRİNƏ <br /> XOŞ GƏLİRSİNİZ.
                            </p>
                        </div>
                        <div className="right-side" >
                            <div className='ev'>
                                <img src={ev} alt="binalar" data-aos="fade-left" />
                            </div>
                            <div className='binalar'>
                                <img src={binalar} alt="binalar" data-aos="fade-right"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bestoffers">
                    <div className="basliq">
                        <p>ƏN YAXŞI TƏKLİFLƏR</p>
                        <h1>HƏYAT TƏRZİNİZƏ UYĞUN BİR EV TAPIN</h1>
                    </div>
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
                        <div className='karusel-evler'>
                            {
                                karuselBinalarJson.map(bina => (
                                    <SwiperSlide key={bina.id}>
                                        <Karuselevler
                                            nameOfBuilding={bina.nameOfBuilding}
                                            photoOfBuilding={bina.photoOfBuilding}
                                            priceOfBuilding={bina.priceOfBuilding}
                                            aboutOfBuilding={bina.aboutOfBuilding} />
                                    </SwiperSlide>
                                ))

                            }
                        </div>
                    </Swiper>
                </div>
                <div className='statistics' data-aos="fade-down">
                    <div className="stat-boxes">
                        <div className='stat-box'>
                            <h4><NumberCounter startCount={200} endCount={675} /></h4>
                            <p>GENİŞ MƏNZİLLƏR</p>
                        </div>
                        <div className='stat-box'>
                            <h4><NumberCounter startCount={500} endCount={850} /></h4>
                            <p>PARKINQ YERLƏRİ</p>
                        </div>
                        <div className='stat-box'>
                            <h4><NumberCounter startCount={6400} endCount={7246} /></h4>
                            <p>KVADRAT SAHƏLƏR</p>
                        </div>
                        <div className='stat-box'>
                            <h4><NumberCounter startCount={0} endCount={36} /></h4>
                            <p>YAŞILLIQ ƏRAZİLƏR</p>
                        </div>
                    </div>
                </div>
                <div className='search-buildings'>
                    <p> SİZİN ÜÇÜN ƏN UYĞUN MƏNZİLİ  TAPIN. <br />
                        AXTARIŞA BAŞLAYIN!</p>
                    <div className='axtaris'>
                        <input type="search" placeholder='Axtar...'/>
                        <Button butonYazisi={"Axtar"}/>
                    </div>
                </div>
                <div className="development">
                    <p className='dvlp'>YÜKSƏLİŞ</p>
                    <h1>DİZAYN VƏ TƏMİR EDİLMİŞ MƏNZİLLƏR</h1>

                    <div className="development-qutular">
                        <Link to={"/residence"}>
                        <div className='evqutu one' data-aos="fade-right">
                            <p className='content'>Mini</p>
                            <div className='bottom-ev-qutu'>
                                <p>Daha yaxşı və rahat yaşam</p>
                                <i className="bi bi-arrow-up-right-square"></i>
                            </div>
                        </div>
                        </Link>

                        <Link to={"/residence"}>
                        <div className='evqutu two' data-aos="fade-down">
                            <p className='content'>LUMIA REZIDENS</p>
                            <div className='bottom-ev-qutu'>
                                <p>Daha yaxşı və rahat yaşam</p>
                                <i className="bi bi-arrow-up-right-square"></i>
                            </div>
                        </div>
                        </Link>

                        <Link to={"./residence"}>
                        <div className='evqutu three' data-aos="fade-left">
                            <p className='content'>PARK MƏNZƏRƏLİ</p>
                            <div className='bottom-ev-qutu'>
                                <p>Daha yaxşı və rahat yaşam</p>
                                <i className="bi bi-arrow-up-right-square"></i>
                            </div>
                        </div>
                        </Link>

                        <Link to={"/residence"}>
                        <div className='evqutu four' data-aos="fade-right">
                            <p className='content'>MƏHLƏLİ</p>
                            <div className='bottom-ev-qutu'>
                                <p>Daha yaxşı və rahat yaşam</p>
                                <i className="bi bi-arrow-up-right-square"></i>
                            </div>
                        </div>
                        </Link>

                        <Link to={"/residence"}>
                        <div className='evqutu five' data-aos="fade-up">
                            <p className='content'>PANAROMİK</p>
                            <div className='bottom-ev-qutu'>
                                <p>Daha yaxşı və rahat yaşam</p>
                                <i className="bi bi-arrow-up-right-square"></i>
                            </div>
                        </div>
                        </Link>

                        <Link to={"/residence"}>
                        <div className='evqutu six' data-aos="fade-left">
                            <p className='content'>KVARTET</p>
                            <div className='bottom-ev-qutu'>
                                <p>Daha yaxşı və rahat yaşam</p>
                                <i className="bi bi-arrow-up-right-square"></i>
                            </div>
                        </div>
                        </Link>
                    </div>
                </div>
                <div className='discover' data-aos="fade-down">
                    <div className="box-container">
                        <div className="left-side">
                            <h1>
                                YENİ YAŞAMAQ YOLUNU KƏŞF EDİN
                            </h1>
                            <div className='melumat-qutular'>
                                {
                                    suallar.map((sual,index) => (
                                        <div key={index} className='qutu'>
                                        <div className='show-content'  onClick={() => toggleActive(index)}>
                                            <p className={activeIndex === index ? 'active' : ''}>{sual.question}</p>
                                            <i className="bi bi-caret-down"></i>
                                        </div>
                                        <div className="hide-content">
                                        {activeIndex === index && <p>{sual.answer}</p>}
                                        </div>
                                    </div>
                                    ))
                                }
                                
                                <p className='elave-sual'>Əlavə suallarınız var? <Link to={"/register"}>Bizimlə əlaqə saxlayın</Link></p>
                            </div>
                            
                        </div>

                        <div className="right-side">
                            <div className='photos'>
                               <img src={designPhoto} alt="design photo" className='designPhoto' />
                               <img src={material} alt="material" className='material'/>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='sponsorlar'>
                    <h1>
                    ƏN SADİQ TƏRƏFDAŞLARIMIZ VƏ İNVESTORLARIMIZ
                    </h1>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            324: {
                              slidesPerView: 1,
                              spaceBetween: 20,
                            },
                            768: {
                              slidesPerView: 2,
                              spaceBetween: 10,
                            },
                            1024: {
                              slidesPerView: 3,
                              spaceBetween: 50,
                            },
                          }}
                        modules={[Autoplay]}
                        className="mySwiper"
                    >
                        <div className='sponsorKarusel'>
                           <SwiperSlide><img src={sponsor1} alt="sponsor1" /></SwiperSlide>
                           <SwiperSlide><img src={sponsor2} alt="sponsor2" /></SwiperSlide>
                           <SwiperSlide><img src={sponsor3} alt="sponsor3" /></SwiperSlide>
                           <SwiperSlide><img src={sponsor4} alt="sponsor4" /></SwiperSlide>
                        </div>
                    </Swiper>

                </div>
                <div className="parallax">
                    <div className="parallax-content">

                    </div>
                </div>
               <Register />
            </section>
    
    )
}

export default Mainhome