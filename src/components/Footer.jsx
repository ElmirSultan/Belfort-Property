import React from 'react'
import { BsFillTelephoneFill } from "react-icons/bs"
import belfortFooter from "../assets/images/belfortfooter.png"
import "../components/css/footer.css"

const Footer = () => {
    return (
        <footer>
            <div className="footer">
            <div className='contact-info'>
                <p>Əlaqə haqqında məlumat</p>
                <a href="#"><BsFillTelephoneFill className='telephone' /> CALL +123 456 789 </a>
                <a href="mailto:elmirsultann@gmail.com"><i className="bi bi-envelope"></i>elmirsultann@gmail.com</a>
                <a href="#"><i className="bi bi-geo-alt"></i>14 Küçə,28 MAY, Bakı</a>

            </div>
            <div className="unvanlar">
                <div>
                <p>28 May filialı ofisimiz</p>
                <span>Bazar ertəsi - Şənbə  saat 8:00 - 19:00</span>
                <span>Bazar günləri saat 10:00 - 14:00</span>
                </div>
                <div>
                <p>Gənclik filialı ofisimiz</p>
                <span>Bazar ertəsi - Şənbə  saat 9:00 - 19:00</span>
                <span>Bazar günləri saat 9:00 - 14:00</span>
                </div>
            </div>
            <div className="subscribe">
                <p>Abunə ol</p>
                <div className='subscribe-input'>
                <input type="emial" placeholder='E-mail ünvanı' />
                <button><i className="bi bi-arrow-up-right"></i></button>
                </div>
            </div>
            </div>
            
            <div className="copyright">
              <img src={belfortFooter} alt="belfort Logo" />
              <span>© 2023 made by Elmir Sultan</span>
              <div className='footerLogolar'>
                <a href="#"><i className="bi bi-facebook"></i></a>
                <a href="#"><i className="bi bi-instagram"></i></a>
                <a href="#"><i className="bi bi-twitter"></i></a>
                <a href="#"><i className="bi bi-pinterest"></i></a>
              </div>
            </div>
        </footer>
    )
}

export default Footer