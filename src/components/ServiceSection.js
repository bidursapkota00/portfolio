import React from 'react'
import '../styles/services.css'

function ServiceSection({image, title, text}) {
    return (
        <div className="serviceSection">
            <div className="service">
                <div className="service-content">
                    <img src={image} alt="" />
                    <h5 className="s-title">{title}</h5>
                    <p className="s-text">
                        {text}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ServiceSection
