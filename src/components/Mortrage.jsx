import React from 'react'
import kapital from "../assets/images/kapital.png"
import { useState, useEffect } from 'react';
import "../components/css/mortrage.css"
import Button from './Button';
import { Link } from 'react-router-dom';
const Mortrage = () => {


 // Ipoteka kredit
 const [propertyPrice, setPropertyPrice] = useState(0);
 const [downPayment, setDownPayment] = useState(0);
 const [loanLength, setLoanLength] = useState(1);
 const [interestRate, setInterestRate] = useState(0.05);
 const [monthlyPayment, setMonthlyPayment] = useState(0);

 useEffect(() => {
     // Calculate monthly mortgage payment
     const principal = propertyPrice - downPayment;
     const monthlyInterestRate = interestRate / 12;
     const numberOfPayments = loanLength * 12;

     const monthlyPayment =
         (principal *
             monthlyInterestRate *
             Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
         (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
     setMonthlyPayment(monthlyPayment);
 }, [propertyPrice, downPayment, loanLength, interestRate]);


 const handlePropertyPriceChange = (event) => {
     setPropertyPrice(event.target.value);
 };

 const handleDownPaymentChange = (event) => {
     setDownPayment(event.target.value);
 };

 const handleLoanLengthChange = (event) => {
     setLoanLength(event.target.value);
 };

 const handleInterestRateChange = (event) => {
     setInterestRate(event.target.value);
 };
return (
    <div className='mortrage' data-aos="fade-up">
        <p>Ev almağa tələsirsən?</p>
        <h1>Elə indi öz ipoteka məbləğini hesabla</h1>
        <div className="box-container">
            <div className="left-side">
                <div className="box">
                    <div className="ust-teref">
                        <p>Əmlakın qiyməti</p>
                        <span>₼{propertyPrice}</span>
                    </div>

                    <input type="range" min="0" max="1000000" step="1000" value={propertyPrice} onChange={handlePropertyPriceChange} />

                </div>
                <div className='box'>
                    <div className="ust-teref">
                        <p>İlkin ödəniş</p>
                        <span>₼{downPayment}</span>
                    </div>

                    <input
                        type="range"
                        min="0"
                        max={propertyPrice}
                        step="1000"
                        value={downPayment}
                        onChange={handleDownPaymentChange}
                    />

                </div>

                <div className="box">
                    <div className='ust-teref'>
                        <p>Kredit müddəti</p>
                        <span>{loanLength} il</span>
                    </div>

                    <input
                        type="range"
                        min="1"
                        max="30"
                        step="1"
                        value={loanLength}
                        onChange={handleLoanLengthChange}
                    />

                </div>

                <div className="box">
                    <div className='ust-teref'>
                        <p>Faiz derecesi</p>
                        <span>{interestRate * 100}%</span>
                    </div>

                    <input
                        type="range"
                        min="0"
                        max="0.2"
                        step="0.01"
                        value={interestRate}
                        onChange={handleInterestRateChange}
                    />

                </div>
            </div>
            <div className="right-side">
                <div>
                <img src={kapital} alt="kapital" />
                <div>
                    <h2>₼{monthlyPayment.toFixed(2)}</h2>
                    <p>Aylıq ödəniş</p>
                </div>
                <Link to={"/register"}><Button butonYazisi={"Görüş təyin et"} /></Link>
                </div>
            </div>
        </div>
    </div>
)
}

export default Mortrage