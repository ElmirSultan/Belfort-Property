import React from 'react'
import error from "../assets/images/404.png"
import "../components/css/error.css"
import { useNavigate } from 'react-router-dom';
const Error = () => {
  const navigate = useNavigate()
  function backHome(){
    navigate("/")
  }

  return (
    <section className='error'>
        <div className='error-page'>
            <img src={error} alt="404" />
            <h1>SƏHİFƏ MÖVCUD DEYİL</h1>
            <p>Daxil etdiyiniz səhifə möcud deyil <br />
             və ya qaldırılıb.</p>
            <button onClick={backHome}>Geri dön</button>
        </div>
    </section>
  )
}

export default Error