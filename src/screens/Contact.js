import React from 'react'
import ContactItem from '../components/ContactItem'
import location from '../img/location.svg'
import emailme from '../img/emailme.svg'
import contact from '../img/contact.svg'
import '../styles/contact.css'
function Contact() {
    return (
        <div className="contact-wrap">
            <div className='Title aalu'>
                <h3>
                    Contacts
                    <span>Contacts</span>
                </h3>
            </div>
            <div className="contact-container">
                <div className="map-sect">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220.87451661477377!2d85.3145557089819!3d27.655710995512795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb177f9eddb455%3A0x7d8d9640760db6d8!2sEris%20Academy!5e0!3m2!1sen!2snp!4v1621922820836!5m2!1sen!2snp" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={contact} text1={'+977 9865711881'} text2={'+977 9828557626'} title={'Phone'}/>
                    <ContactItem icon={emailme} text1={'bidursapkota00'} text2={'@gmail.com'} title={'Email'}/>
                    <ContactItem icon={location} text1={'kubinde, sindhupalchowk'} text2={'shobhahiti, lalitpur'} title={'Location'}/>
                </div>
            </div>
        </div>
    )
}

export default Contact
