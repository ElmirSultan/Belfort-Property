import React from 'react'
import { useState, useRef } from 'react';
import "../components/css/header.css"
import homeLogo from "../assets/images/belfortlogo.png"
import { FaBars } from "react-icons/fa"
import { AiOutlineClose } from "react-icons/ai"
import { Link } from 'react-router-dom'

const Header = () => {

    const [navLink, setNavLink] = useState()
    const clickLink = (navbarLink) => {
        setNavLink(navbarLink)
    }

    const overlayRef = useRef();
    const openOverlay = (e) => {
        const klikElement = e.target;
        if (klikElement.classList.contains("bars-icon")) {
            overlayRef.current.classList.add("aktiv")
        }
    }

    function closeOverlay(e) {
        const klikElement = e.target
        if (klikElement.classList.contains("cls-icon")) {
            overlayRef.current.classList.remove("aktiv")
        }
    }

    function sectionTikla(e) {
        const klikElement = e.target
        if (klikElement.classList.contains("navlink")) {
            overlayRef.current.classList.remove("aktiv");
             setNavLink = null
        }
        else if (klikElement.classList.contains("liink")) {
            overlayRef.current.classList.remove("aktiv");
            setNavLink = null
        }
    }
     
   

    return (
        <header>

            <div className="overlay" ref={overlayRef}>
                <div className="links">
                    <ul className='linkul'>
                        <li className='link' onClick={() => clickLink("ana-sehife")}>ANA SƏHİFƏ
                            {
                                navLink === "ana-sehife" &&
                                <ul className="opened-link" data-aos="fade-up">
                                    <li><Link to={"/"} className='navlink' onClick={sectionTikla}>ANA SƏHİFƏ</Link></li>
                                    <li><Link to={"/property-agency"} className='navlink' onClick={sectionTikla}>ƏMLAK AGENTLİYİ</Link></li>
                                    <li><Link to={"/smart-home"} className='navlink' onClick={sectionTikla}>AĞILLI EV</Link></li>
                                    {/* <li className='navlink' onClick={sectionTikla}>DAŞINMAZ ƏMLAK</li>
                                    <li className='navlink' onClick={sectionTikla}>REZİDENT KOMPLEKS</li> */}
                                </ul>
                            }
                        </li>

                        <li className='link' onClick={() => clickLink("sehifeler")}>SƏHİFƏLƏR
                            {
                                navLink === "sehifeler" &&
                                <ul className="opened-link" data-aos="fade-up">
                                    <li><Link to={"about-us"} className='navlink' onClick={sectionTikla}>HAQQIMIZDA</Link></li>
                                    <li><Link to={"/register"} className='navlink' onClick={sectionTikla}>ƏLAQƏ</Link></li>
                                    <li><Link to={"/mortrage"}  className='navlink' onClick={sectionTikla}>İPOTEKA HESABLAYICI</Link></li>
                                    <li><Link to={"/faq"} className='navlink' onClick={sectionTikla}>SUALLAR</Link></li>
                                </ul>
                            }
                        </li>

                        <li className='link' onClick={() => clickLink("emlak")}>ƏMLAK
                            {
                                navLink === "emlak" &&
                                <ul className="opened-link" data-aos="fade-up">
                                    <li><Link to={"/standart-list"}  className='navlink' onClick={sectionTikla}>STANDART LIST</Link></li>

                                    {/* <li className='navlink'>ƏMLAK NÖQTƏSİ</li>
                                    <li className='navlink'>ƏMLAK MƏRTƏBƏLƏRİ</li>
                                    <li className='navlink'>MƏNZİL MƏRTƏBƏLƏRİ</li> */}
                                </ul>
                            }
                        </li>

                        <li className='link' onClick={() => clickLink("menziller")}>MƏNZİLLƏR
                            {
                                navLink === "menziller" &&
                                <ul className="opened-link" data-aos="fade-up">
                                    <li><Link to={"/apartment-list"}  className='navlink' onClick={sectionTikla}>MƏNZİLLƏRİN SİYAHISI</Link></li>
                                    {/* <li className='navlink'>MƏNZİLLƏR HAQQINDA</li>
                                    <li className='navlink'>GALEREYA</li> */}
                                </ul>
                            }
                        </li>

                        <li className='link' ><Link to={"/blog"} onClick={sectionTikla} className="liink">BLOQ</Link></li>
                        <li className='link'><Link to={"/about-us"}  onClick={sectionTikla}  className="liink">HAQQIMIZDA</Link></li>
                    </ul>
                </div>

                <div className="close-icon">
                    <AiOutlineClose className='cls-icon' onClick={closeOverlay} />
                </div>

            </div>

            <nav>

                <div className='logohref'>
                    <Link to={"/belfort"}><img src={homeLogo} alt="homelogo" /></Link>
                </div>


                <div className="middle-side-of-navbar">
                    <div className="link">
                        <Link to={"/"}>ANA SƏHİFƏ</Link>
                        <ul className='dropdown'>
                            <li><Link to={"/"}>ANA SƏHİFƏ</Link></li>
                            <li><Link to={"/property-agency"}>ƏMLAK AGENTLİYİ</Link></li>
                            <li><Link to={"/smart-home"}>AĞILLI EV</Link></li>
                            <li><a href="#">DAŞINMAZ ƏMLAK</a></li>
                            <li><a href="#">REZİDENT KOMPLEKS</a></li>
                        </ul>
                    </div>

                    <div className="link">
                        <a href="#">SƏHİFƏLƏR</a>
                        <ul className='dropdown'>
                            <li><Link to={"/about-us"}>HAQQIMIZDA</Link></li>
                            <li><Link to={"/register"}>ƏLAQƏ</Link></li>
                            <li><Link to={"/mortrage"}>İPOTEKA HESABLAYICI</Link></li>
                            <li><Link to={"/faq"}>SUALLAR</Link></li>
                        </ul>
                    </div>

                    <div className='link'>
                        <a href="#">ƏMLAK</a>
                        <ul className='dropdown'>
                            <li><Link to={"/standart-list"}>STANDART LIST</Link></li>
                            <li><a href="#">ƏMLAK NÖQTƏSİ</a></li>
                            <li><a href="#">ƏMLAK MƏRTƏBƏLƏRİ</a></li>
                            <li><a href="#">MƏNZİL MƏRTƏBƏLƏRİ</a></li>
                        </ul>
                    </div>




                    <div className="link">
                        <a href="#">MƏNZİLLƏR</a>
                        <ul className="dropdown">
                            <li><Link to={"/apartment-list"}>MƏNZİLLƏRİN SİYAHISI</Link></li>
                            <li><a href="#">MƏNZİLLƏR HAQQINDA</a></li>
                            <li><a href="#">GALEREYA</a></li>

                        </ul>
                    </div>
                    <Link to={"/blog"}>BLOQ</Link>
                    <Link to={"/about-us"}>HAQQIMMIZDA</Link>
                </div>

                <div>
                    <FaBars className="bars-icon" onClick={openOverlay} />
                </div>
            </nav>
        </header>
    )
}

export default Header