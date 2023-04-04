import React from 'react'
import imza from "../assets/images/imza.png"
import "../components/css/welcomeaprtmnt.css"
import slide1 from "../assets/images/slide1.jpg"
import slide2 from "../assets/images/slide2.jpg"
import slide3 from "../assets/images/slide3.jpg"
import otagPhoto from "../assets/images/house1.jpg"
import otagPhoto2 from "../assets/images/house2.jpg"
import otagPhoto3 from "../assets/images/house3.jpg"
import otagPhoto4 from "../assets/images/house4.jpg"
import fullRoom from "../assets/images/roomfull.png"
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Navigation } from "swiper";
import Services from './Services'
import Mortrage from './Mortrage'
import NumberCounter from './Numbercounter'

const Welcomeaprtmnt = () => {

    //   Changing room photos
    const [photo, setPhoto] = useState("photo1")
    const clickPhoto = (roomPhoto) => {
        setPhoto(roomPhoto);
    }

    // Changing photo,video,360  
    const [link, setLink] = useState("Photos")
    const clickLink = (linkName) => {
        setLink(linkName)
    }

    return (
        <section className='welcome-apartment'>
            <div className='slide-page'>
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
                    <SwiperSlide><img src={slide1} alt="slide-photo" /></SwiperSlide>
                    <SwiperSlide><img src={slide2} alt="slide-photo" /></SwiperSlide>
                    <SwiperSlide><img src={slide3} alt="slide-photo" /></SwiperSlide>
                </Swiper>
            </div>

            <div className="numbers-page">
                <div className="box-container">
                    <div className="left-side" data-aos="fade-left" data-aos-duration="1000">
                        <h3>XƏYALLARINIZIN EVİNİ TAPMAQDA <br /> SİZƏ KÖMƏK EDİRİK</h3>
                        <div>
                            <img src={imza} alt="sign" />
                        </div>
                    </div>

                    <div className="right-side" data-aos="fade-right" data-aos-duration="1000">
                        <div className="metr">
                            <h1><NumberCounter startCount={6900} endCount={7269}/></h1>
                            <p>KVADRAT METR</p>
                        </div>

                        <div className="deyer">
                            <h1><NumberCounter startCount={0} endCount={189.580} /> ₼</h1>
                            <p>TƏXMİNİ DƏYƏR</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="photos-video">
                <div className='names-row'>
                    <p onClick={() => clickLink("Photos")}><i className="bi bi-camera"></i>Şəkillər</p>
                    <p onClick={() => clickLink("Video")}><i className="bi bi-camera-video"></i>Video</p>
                    <p onClick={() => clickLink("360")}><i className="bi bi-arrow-clockwise"></i>360 Video</p>
                </div>

                {link === "Photos" &&
                    <div className="photo-home">

                        <div className="top-side">
                            {photo === "photo1" &&
                                <img src={otagPhoto} alt="room" data-aos="zoom-in" data-aos-duration="1000"/>}
                            {photo === "photo2" &&
                                <img src={otagPhoto2} alt="room" data-aos="zoom-out" data-aos-duration="1000"/>}
                            {photo === "photo3" &&
                                <img src={otagPhoto3} alt="room" data-aos="zoom-in" data-aos-duration="1000"/>}
                            {photo === "photo4" &&
                                <img src={otagPhoto4} alt="room" data-aos="zoom-out" data-aos-duration="1000"/>}
                        </div>
                        <div className="bottom-side">
                            <img src={otagPhoto} alt="room" onClick={() => clickPhoto("photo1")} />
                            <img src={otagPhoto2} alt="room" onClick={() => clickPhoto("photo2")} />
                            <img src={otagPhoto3} alt="room" onClick={() => clickPhoto("photo3")} />
                            <img src={otagPhoto4} alt="room" onClick={() => clickPhoto("photo4")} />
                        </div>

                    </div>}

                {link === "Video" &&
                    <div className='room-video'>
                        <video src="https://res.cloudinary.com/dxhdjso8d/video/upload/v1679399202/479025865_h8mccr.mp4" autoPlay muted loop></video>
                    </div>}

                {link === "360" &&
                    <div className='full-degree'>
                        <video src="https://res.cloudinary.com/dxhdjso8d/video/upload/v1679399676/1869376517_qqheyu.mp4" autoPlay muted loop></video>
                    </div>}


            </div>

            <Services />

            <div className="full-room">
                <div className="box-container">
                    <div className="left-side">
                        <h1>MƏNZİLİN ÜMUMİ GÖRÜNÜŞÜ</h1>
                        <div className="table">
                            <div className="row">
                                <p><span>01.</span>QONAQ OTAĞI</p>
                                <p className='sahe'>20.60m2</p>
                            </div>

                            <div className="row">
                                <p><span>02.</span>YEMƏK OTAĞI</p>
                                <p className='sahe'>10.30m2</p>
                            </div>

                            <div className='row'>
                                <p><span>03.</span>MƏTBƏX</p>
                                <p className='sahe'>5.40m2</p>
                            </div>

                            <div className='row'>
                                <p><span>04.</span>HAMAM</p>
                                <p className='sahe'>8.12m2</p>
                            </div>

                            <div className="row">
                                <p><span>05.</span>YATAQ OTAĞI</p>
                                <p className='sahe'>11.25m2</p>
                            </div>

                            <div className="result">
                                <p>TOTAL:</p>
                                <p className='sahe-total'>46.92M2</p>
                            </div>


                        </div>
                    </div>
                    <div className="right-side">
                     <img src={fullRoom} alt="room-photo" />
                    </div>
                </div>
            </div>

            <Mortrage />

            <div className="map">
            <iframe
        title="Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3049.245874896279!2d49.84093601542479!3d40.39518997936702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403f1984a5d5f5b5%3A0x5ce5f9e9d79b41eb!2sGanjlik%20Mall!5e0!3m2!1sen!2s!4v1648245389279!5m2!1sen!2s"
        width="100%"
        height="700"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      />
            </div>
        </section>
    )
}

export default Welcomeaprtmnt