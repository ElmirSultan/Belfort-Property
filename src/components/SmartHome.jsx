import React from 'react'
import "../components/css/smarthome.css"
import mainhome from "../assets/images/smarthome.jpg"
import smartBox from "../components/json/smarthomeboxes.json"
import Smarthomebox from './Smarthomebox'
import first from "../assets/images/first.png"
import second from "../assets/images/second.png"
import third from "../assets/images/third.jpg"
import Button from './Button'
import heating from "../assets/images/heating.jpg"
import muasir from "../assets/images/modern.jpg"
import kontrol from "../assets/images/kontrol.jpg"
import voice from "../assets/images/voice.jpg"
import otagPhoto from "../assets/images/cat.jpg"
import otagPhoto2 from "../assets/images/otaqphoto2.jpg"
import otagPhoto3 from "../assets/images/otaqphoto3.jpg"
import otagPhoto4 from "../assets/images/bathroom.jpg"
import { useState, useEffect } from 'react';
import Comments from './Comments'
import Mortrage from './Mortrage'
import { Link } from 'react-router-dom'
const SmartHome = () => {

    // Smart home
    const [choice, setChoice] = useState("heating");
    const handleClick = (choiceName) => {
        setChoice(choiceName);
    }

    //   Changing room photos
    const [photo, setPhoto] = useState("photo1")
    const clickPhoto = (roomPhoto) => {
        setPhoto(roomPhoto);
    }

    // Photo Video 360
    const [link, setLink] = useState("Photos")
    const clickLink = (linkName) => {
        setLink(linkName)
    }

    
    return (
        <section className='smart-home'>
            <div className="wallpaper-section">
                <h1>MAISON AĞILLI EVİ</h1>
                <div className='wallpaper'>
                    <div className='main-value'>
                        <img src={mainhome} alt="mainhome" />
                        <div className='right-side'>
                            <p>Evin dəyəri</p>
                            <p className='price'>₼ 900.000 </p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="smart-home-bilgileri">
                <div className="box-container">
                    <div className="left-side" data-aos="fade-left">
                        <div>
                            <p>Ağıllı Ev</p>
                            <h1>MÜKƏMMƏL DİZAYN EDİLMİŞ MÜASİR EV</h1>
                            <p className='haqda'>Ayrı ayrı çalışan qurğuların əvəzinə bir ağıllı ev bir əsas ev avtomatlaşdırma nəzarətçisi tərəfindən idarə olunan bir çox alt sistemini birləşdirir. Bu əsas avtomatlaşdırma nəzarətçi ev avtomatlaşdırma sistemində idarəçi
                                <br /> kimi ev ətrafında olan bütün qurğulara daxil olur, əmr verir və hər şeyi nəzarət edir
                            </p>
                        </div>
                       <Link to={"/about-us"}> <Button butonYazisi={"ƏTRAFLI İNCƏLƏ"} /></Link>
                    </div>
                    <div className='right-side' data-aos="fade-right">
                        {
                            smartBox.map(qutu => (
                                <Smarthomebox key={qutu.id}
                                    devicePhoto={qutu.devicePhoto}
                                    deviceName={qutu.deviceName}
                                    deviceContent={qutu.deviceContent} />
                            ))
                        }

                    </div>
                </div>
            </div>

            <div className="ev-dizayn">
                <div className="box-container">
                    <div className="box" data-aos="zoom-in" >
                        <div className="top-side">
                            <img src={first} alt="mirror" />
                        </div>
                        <div className="bottom-side">
                            <p>Müasir interyerlər mövcuddur</p>
                            <a href="#">Daha ətraflı</a>
                        </div>
                    </div>
                    <div className="box" data-aos="zoom-out">
                        <div className="top-side">
                            <img src={second} alt="photo" />
                        </div>
                        <div className="bottom-side">
                            <p>Uzunömürlülük üçün dizayn edilmiş və tikilmiş mənzil həlləri</p>
                            <a href="#">Daha ətraflı</a>
                        </div>
                    </div>
                    <div className="box" data-aos="zoom-in" >
                        <div className="top-side">
                            <img src={third} alt="photo" />
                        </div>
                        <div className="bottom-side">
                            <p>Yeni yaşam tərzini kəşf edin</p>
                            <a href="#">Daha ətraflı </a>
                        </div>
                    </div>
                </div>
            </div>

            <Comments />

            <div className="agilli-sistem">
                <div className="box-container">
                    <div className="left-side">
                        <h1>
                            AĞILLI SİSTEMLƏRİ İNKİŞAF ETDİRDİK
                        </h1>
                        <div className="kliks">
                            <div className="qutu" onClick={() => handleClick("heating")}>
                                <p>İSİTMƏ VƏ SOYUTMA</p>
                                <i className="bi bi-arrow-up-right"></i>
                            </div>
                            <div className="qutu" onClick={() => handleClick("modern")}>
                                <p>MÜASİR TEXNOLOGİYA</p>
                                <i className="bi bi-arrow-up-right"></i>
                            </div>
                            <div className="qutu" onClick={() => handleClick("control")}>
                                <p>KONTROL PANEL</p>
                                <i className="bi bi-arrow-up-right"></i>
                            </div>
                            <div className="qutu" onClick={() => handleClick("voice")}>
                                <p>SƏS KÖMƏKÇİLƏRİ</p>
                                <i className="bi bi-arrow-up-right"></i>
                            </div>
                        </div>
                    </div>

                    <div className="right-side">
                        {choice === "heating" &&
                            <div className="sekil-qutu" data-aos="fade-left">
                                <img src={heating} alt="photo" />
                                <p>Müasir texniklara cavab verən istilik və soyutma sitemləri</p>
                            </div>}

                        {choice === "modern" &&
                            <div className="sekil-qutu" data-aos="fade-left">
                                <img src={muasir} alt="photo" />
                                <p>Müasir cihazlar və avadanlıqlar</p>
                            </div>}

                        {choice === "control" &&
                            <div className="sekil-qutu" data-aos="fade-left">
                                <img src={kontrol} alt="photo" />
                                <p>Hər şeyin idarə etməsi sizin əlinizdə</p>
                            </div>}

                        {choice === "voice" &&
                            <div className="sekil-qutu" data-aos="fade-left">
                                <img src={voice} alt="photo" />
                                <p>Artıq evinizi idarə etmək üçün səslənməyiniz yetərli</p>
                            </div>}

                    </div>
                </div>
            </div>

            <div className='video'>
                <video src="https://belfort.qodeinteractive.com/wp-content/uploads/2023/01/h4-video.mp4" autoPlay muted loop></video>
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
                                <img src={otagPhoto} alt="room" data-aos="flip-up"/>}
                            {photo === "photo2" &&
                                <img src={otagPhoto2} alt="room" data-aos="flip-left"/>}
                            {photo === "photo3" &&
                                <img src={otagPhoto3} alt="room" data-aos="flip-right"/>}
                            {photo === "photo4" &&
                                <img src={otagPhoto4} alt="room"  data-aos="flip-down"/>}
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
            
            <Mortrage />
            
        </section>
    )
}

export default SmartHome