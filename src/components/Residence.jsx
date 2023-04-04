import React, { useState } from 'react'
import parkView from "../assets/images/parkview.jpg"
import gardenView from "../assets/images/bina1.jpg"
import panaromikVieW from "../assets/images/panaromic.jpg"
import smartHome from "../assets/images/bina2.jpg"
import "../components/css/residence.css"
import residenceJson from "../components/json/district.json"
import Residencebox from './Residencebox'
import pht2 from "../assets/images/pht2.jpg"
import pht3 from "../assets/images/pht3.jpg"
import pht4 from "../assets/images/pht4.jpg"
import pht5 from "../assets/images/pht5.jpg"
import pht6 from "../assets/images/pht6.jpg"
import Comments from './Comments'
import Register from './Register'
import NumberCounter from './Numbercounter'
const Residence = () => {
    
    const[melumat,setMelumat] = useState("Villa")
    const clickMelumat = (park) => {
         setMelumat(park)
    }
    return (
        <section className='rezidens'>
            <div className='thefirst'></div>

            <div className="numbers" data-aos="fade-up">
                <div className="box-container">
                    <div className="box">
                        <h3><NumberCounter startCount={100} endCount={675}/></h3>
                        <p>GENİŞ MƏNZİLLƏR</p>
                    </div>

                    <div className="box">
                        <h3><NumberCounter startCount={300} endCount={850}/></h3>
                        <p>PARKİNG YERLƏRİ</p>
                    </div>

                    <div className="box">
                        <h3><NumberCounter startCount={6900} endCount={7246}/></h3>
                        <p>KVADRAT METR</p>
                    </div>

                    <div className="box">
                        <h3><NumberCounter startCount={0} endCount={36}/></h3>
                        <p>YAŞIL ƏRAZİLƏR</p>
                    </div>
                </div>
            </div>

            <div className="available">
                <p>SƏRFƏLİ TƏKLİFLƏR</p>
                <h1>MÖVCUD DİSTRİKT DƏBLİ MƏNZİLLƏR</h1>
                <div className="box-container">
                    {
                        residenceJson.map(qutu => (
                            <Residencebox key={qutu.id}
                                distrikAd={qutu.districtName}
                                sahe={qutu.sahe}
                                certyoj={qutu.certyoj}
                                otaqSayi={qutu.otaqSayi}
                                mertebe={qutu.mertebe}
                                tip={qutu.tip}
                                qiymet={qutu.qiymet} />
                        ))
                    }
                </div>
            </div>

            <div className="welcome">

                <div className="box-container">
                    <div className="left-side">

                    </div>

                    <div className="right-side">
                        <p>Q1 DİSTRİKTƏ XOŞ GƏLMİŞSİNİZ</p>
                        <h1>HƏYAT TƏRZİNİZƏ ƏN UYĞUN OLAN EVİ SEÇİN</h1>
                        <div>
                            <p className='text'>
                                Alıcıların rahatlığını təmin edəcək yaşayış kompleksləri ilə bazarda keyfiyyət və rahatlığın ünvanına çevrilən Belfort 2022-ci ildən fəaliyyətə başlamışdır.
                                Şirkət fəaliyyətinə başladığı gündən etibarən insanların komfortunu və rahatlığını düşünərək inşaat sektorunda inamlı addımlarla irəliləməkdədir. Belfort Group tikinti şirkəti, Azərbaycanda ilk dəfə sakinləri mənzillərə köçməmişdən əvvəl çıxarış və texniki pasport ilə təmin edib.
                                Sizlərə, xəyallarınızda canlandırdığınız tam təmirli, yüksək keyfiyyətli, 17-20 mərtəbəli müasir tələblərə cavab verən binalar inşa edirik. İnşa etdiyimiz komplekslərdə daimi su, işıq və qaz sistemləri, Türkiyə istehsalı olan sərnişin və yük liftləri, plastik qapı və pəncərə sistemləri, seyf qapılar, yeraltı qaraj, təhlükəsizlik xidməti, istirahət parkı, tennis və futbol meydançaları yüksək standartlara cavab verəcək keyfiyyətdədir.
                            </p>
                        </div>

                       <div className="link-hisse">
                       <p>Necə görüş təyin edə bilərəm?</p>
                        <p>Şirkətimizə gəlmədən görüş təyin etmək üçün aşağıdakı linkdən randevu ala bilərsiniz.</p>
                        <a href="#">Görüş təyin et</a> 
                       </div>
                    </div>
                </div>
            </div>

            <div className="interior-design">
                <div className="box-container">
                    <div className="left-side">
                    <p>İNTERYER DIZAYN</p>
                        <h1>MÜASIR VƏ PREMIUM DIZAYN.</h1>
                        <div>
                            <p className='text'>
                                Alıcıların rahatlığını təmin edəcək yaşayış kompleksləri ilə bazarda keyfiyyət və rahatlığın ünvanına çevrilən Belfort 2022-ci ildən fəaliyyətə başlamışdır.
                                Şirkət fəaliyyətinə başladığı gündən etibarən insanların komfortunu və rahatlığını düşünərək inşaat sektorunda inamlı addımlarla irəliləməkdədir. Belfort Group tikinti şirkəti, Azərbaycanda ilk dəfə sakinləri mənzillərə köçməmişdən əvvəl çıxarış və texniki pasport ilə təmin edib.
                                Sizlərə, xəyallarınızda canlandırdığınız tam təmirli, yüksək keyfiyyətli, 17-20 mərtəbəli müasir tələblərə cavab verən binalar inşa edirik. İnşa etdiyimiz komplekslərdə daimi su, işıq və qaz sistemləri, Türkiyə istehsalı olan sərnişin və yük liftləri, plastik qapı və pəncərə sistemləri, seyf qapılar, yeraltı qaraj, təhlükəsizlik xidməti, istirahət parkı, tennis və futbol meydançaları yüksək standartlara cavab verəcək keyfiyyətdədir.
                            </p>
                        </div>

                       <div className="link-hisse">
                       <p>Necə görüş təyin edə bilərəm?</p>
                        <p>Şirkətimizə gəlmədən görüş təyin etmək üçün aşağıdakı linkdən randevu ala bilərsiniz.</p>
                        <a href="#">Görüş təyin et</a> 
                       </div>
                    </div>
                    <div className="right-side"></div>
                </div>
            </div>

            <div className='about-state'>
                <div className="box-container">
                    <div className="top-side">
                        <p onClick={() => clickMelumat("Villa")}>VILLA PARK</p>
                        <p onClick={() => clickMelumat("Garden")}>BAĞÇA PARK</p>
                        <p onClick={()=> clickMelumat("Panaromik")}>PANAROMİK PARK</p>
                        <p onClick={()=> clickMelumat("Eko")}>EKO PARK</p>
                    </div>

                    <div className="bottom-side">
                       {melumat === "Villa" && 
                        <div className='park'>
                        <div className="left-side" data-aos="fade-right" data-aos-duration="1000">
                            <h1>XƏYALLARINIZ EVİNƏ ÇATMAĞA SİZƏ KÖMƏK EDİR</h1>
                            <p>İndi xəyallarınızdaki evə çatmaq daha asan və rahat.Belfort sizin rahatlığınız üçün yaradılıdı</p>

                            <ul>
                                <li>Sağlamlıq və SPA</li>
                                <li>Bar və restoranlar</li>
                                <li>Yaxınlıqda məktəb</li>
                                <li>Fitness</li>
                            </ul>
                        </div>
                        <div className="right-side" data-aos="fade-left" data-aos-duration="1000">
                            <img src={parkView} alt="photo" />
                        </div>
                        </div>
                       }
                         
                         {melumat === "Garden" && 
                         <div className='park'>
                         <div className="left-side" data-aos="fade-right" data-aos-duration="1000">
                             <h1>DİSTRİKT EVLƏRDƏ AĞILLI YAŞAYIŞ TƏRZİ</h1>
                             <p>İndi xəyallarınızdaki evə çatmaq daha asan və rahat.Belfort sizin rahatlığınız üçün yaradılıdı</p>
 
                             <ul>
                                 <li>Sağlamlıq və SPA</li>
                                 <li>Bar və restoranlar</li>
                                 <li>Yaxınlıqda məktəb</li>
                                 <li>Fitness</li>
                             </ul>
                         </div>
                         <div className="right-side" data-aos="fade-left" data-aos-duration="1000">
                             <img src={gardenView} alt="photo" />
                         </div>
                         </div>}

                         {melumat === "Panaromik" &&
                         <div className='park'>
                         <div className="left-side" data-aos="fade-right" data-aos-duration="1000">
                             <h1>EV HƏLLƏRI INŞA EDILMIŞ VƏ DAVAMLI OLMAQ ÜÇÜN NƏZƏRDƏ TUTULMUŞDUR.</h1>
                             <p>İndi xəyallarınızdaki evə çatmaq daha asan və rahat.Belfort sizin rahatlığınız üçün yaradılıdı</p>
 
                             <ul>
                                 <li>Sağlamlıq və SPA</li>
                                 <li>Bar və restoranlar</li>
                                 <li>Yaxınlıqda məktəb</li>
                                 <li>Fitness</li>
                             </ul>
                         </div>
                         <div className="right-side" data-aos="fade-left" data-aos-duration="1000">
                             <img src={panaromikVieW} alt="photo" />
                         </div>
                         </div>}

                         {melumat === "Eko" && 
                         <div className='park'>
                         <div className="left-side" data-aos="fade-right" data-aos-duration="1000">
                             <h1>EVİNİZDƏN ZÖVQ ALMAĞIN YENİ YOLLARINI KƏŞF EDİN.</h1>
                             <p>İndi xəyallarınızdaki evə çatmaq daha asan və rahat.Belfort sizin rahatlığınız üçün yaradılıdı</p>
 
                             <ul>
                                 <li>Sağlamlıq və SPA</li>
                                 <li>Bar və restoranlar</li>
                                 <li>Yaxınlıqda məktəb</li>
                                 <li>Fitness</li>
                             </ul>
                         </div>
                         <div className="right-side" data-aos="fade-left" data-aos-duration="1000">
                             <img src={smartHome} alt="photo" />
                         </div>
                         </div>}

                    </div>
                </div>
            </div>

            <Comments />

            <div className="photos">
                <div className="box-container">
                    <div className="left-side">
                    </div>
                    <div className="right-side">
                        <div className="top-side">
                            <div className="pht2"><img src={pht2} alt="photo" /></div>
                            <div className="pht3"><img src={pht3} alt="photo" /></div>
                            <div className="pht4"><img src={pht4} alt="photo" /></div>
                        </div>
                        <div className="bottom-side">
                            <div className="pht5"><img src={pht5} alt="photo" /></div>
                            <div className="pht6"><img src={pht6} alt="photo" /></div>
                        </div>
                    </div>
                </div>
            </div>

            <Register />
        </section>
    )
}

export default Residence