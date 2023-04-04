import React from 'react'
import Smarthomebox from './Smarthomebox'
import service from "../components/json/services.json"
import "../components/css/services.css"

const Services = () => {
    return (
        <div className="services">
            <p>XİDMƏTLƏRİMİZ</p>
            <h1>ƏLVERİŞLİ VƏ AĞILLI EVLƏRDƏ <br />
                YAŞAMAĞA HAZIRLAŞIN.</h1>
            <div className="service-qutular">
                {
                    service.map(qutu => (
                        <Smarthomebox
                            key={qutu.id}
                            devicePhoto={qutu.devicePhoto}
                            deviceName={qutu.deviceName}
                            deviceContent={qutu.deviceContent} />
                    ))
                }

            </div>
        </div>
    )
}

export default Services