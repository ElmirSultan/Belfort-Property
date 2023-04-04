import React, { useRef } from 'react'
import "../components/css/register.css"
import emailjs from '@emailjs/browser';
const Register = () => {
    const formFillRef = useRef();
    const service_Id = "service_p41pjkn"
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

        <div className="contact" data-aos="fade-up"
        data-aos-anchor-placement="top-center">
            <p>BİZİMLƏ ƏLAQƏ SAXLAYIN</p>
            <h2>ELƏ İNDİ BİZİMLƏ ƏLAQƏ <br /> SAXLAYIN</h2>
            <div onSubmit={sendEmail}>
            <form className='contact-input' ref={formFillRef}>
                <input
                    type="text"
                    placeholder='Adınız'
                    required
                    id='nameText'
                    name="name" />
                <input
                    type="email"
                    placeholder='E-mail Ünvanı'
                    required
                    name="email"
                    id="emailText"/>
                <input required 
                type="text"
                placeholder='Telefon nömrəniz'
                name='number'
                id='phoneNumber' />

                <button>TƏSDİQLƏ</button>
            </form>
            
            </div>
        </div>
    )
}

export default Register