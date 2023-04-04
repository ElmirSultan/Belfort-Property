import React from 'react'
import { Link } from 'react-router-dom'
import "../components/css/standartlist.css"
const Standartlist = () => {
    return (
        <section className='standart-list'>
            <h1>HƏYAT TƏRZİNİZƏ ƏN UYĞUN OLAN <br />
                EVİ SEÇİN.</h1>
            <div className="box-container">
                <Link to={"/residence"}>
                <div className='evqutu one' data-aos="fade-right">
                    <p className='content'>Mini</p>
                    <div className='bottom-ev-qutu'>
                        <p>Daha yaxşı və rahat yaşam</p>
                        <i className="bi bi-arrow-up-right-square"></i>   
                    </div>
                </div></Link>
                

                <Link to={"/residence"}>
                <div className='evqutu two' data-aos="fade-down">
                    <p className='content'>LUMIA REZIDENS</p>
                    <div className='bottom-ev-qutu'>
                        <p>Daha yaxşı və rahat yaşam</p>
                        <i className="bi bi-arrow-up-right-square"></i>   
                    </div>
                </div>
                </Link>

                <Link to={"/residence"}>
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
                <div className='evqutu five' data-aos="zoom-in">
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

                <Link to={"/residence"}>
                <div className='evqutu seven' data-aos="fade-right">
                    <p className='content'>NEW CITY</p>
                    <div className='bottom-ev-qutu'>
                        <p>Daha yaxşı və rahat yaşam</p>
                        <i className="bi bi-arrow-up-right-square"></i>   
                    </div>
                </div>
                </Link>

                <Link to={"/residence"}>
                <div className='evqutu eight' data-aos="zoom-out">
                    <p className='content'>MAGNOLIA</p>
                    <div className='bottom-ev-qutu'>
                        <p>Daha yaxşı və rahat yaşam</p>
                        <i className="bi bi-arrow-up-right-square"></i>   
                    </div>
                </div>
                </Link>

                <Link to={"/residence"}>
                <div className='evqutu nine' data-aos="fade-left">
                    <p className='content'>SIENNA</p>
                    <div className='bottom-ev-qutu'>
                        <p>Daha yaxşı və rahat yaşam</p>
                        <i className="bi bi-arrow-up-right-square"></i>   
                    </div>
                </div>
                </Link>

                <Link to={"/residence"}>
                <div className='evqutu ten' data-aos="fade-right">
                    <p className='content'>BELVILLE</p>
                    <div className='bottom-ev-qutu'>
                        <p>Daha yaxşı və rahat yaşam</p>
                        <i className="bi bi-arrow-up-right-square"></i>   
                    </div>
                </div>
                </Link>
                 
                 <Link to={"/residence"}>
                <div className='evqutu eleven' data-aos="fade-up">
                    <p className='content'>TƏBİƏT MƏNZƏRƏLİ</p>
                    <div className='bottom-ev-qutu'>
                        <p>Daha yaxşı və rahat yaşam</p>
                        <i className="bi bi-arrow-up-right-square"></i>   
                    </div>
                </div> </Link>

                <Link to={"/residence"}>
                <div className='evqutu twelve' data-aos="fade-left">
                    <p className='content'>QUEENS PARK</p>
                    <div className='bottom-ev-qutu'>
                        <p>Daha yaxşı və rahat yaşam</p>
                        <i className="bi bi-arrow-up-right-square"></i>   
                    </div>
                </div>
                </Link>
            </div>
        </section>
    )
}

export default Standartlist