import React from 'react'
import '../styles/About.css'
import about from '../img/2.png'
import Skills from '../components/Skills'
import ServiceSection from '../components/ServiceSection'
import design from '../img/design.svg'
import intelligence from '../img/intelligence.svg'
import app from '../img/app.svg'

function About() {
    return (
        <div className="AboutPage">
            <div style={{padding: '4rem'}}>
                <div className='Title'>
                    <h3>
                        About Me
                        <span>About Me</span>
                    </h3>
                </div>
                <div className="imageSection">
                    <div className="img">
                        <img src={about} alt="...about img"/>
                    </div>
                    <div className="about-info">
                        <h4><span>Bidur Sapkota</span></h4>
                        <p className='about-text'>
                            I am python and javascript developer.
                            <br />
                            Web design, Machine learning and 
                            <br />
                            App development are my key skills.
                        </p>
                        <div className="about-details">
                            <div className="left-section">
                                <p>Full Name</p>
                                <p>Age</p>
                                <p>Country</p>
                                <p>Nationality</p>
                                <p>Languages</p>
                                <p>Address</p>
                            </div>
                            <div className="right-section">
                                <p>: Bidur Sapkota</p>
                                <p>: {new Date().getFullYear()-2000}</p>
                                <p>: Nepal</p>
                                <p>: Nepali</p>
                                <p>: English, Nepali</p>
                                <p>: Sindhupalchowk, Nepal</p>
                            </div>
                        </div>
                        <a href="/BidurSapkota.pdf" download>
                            <button className='btn'>Download CV</button>
                        </a>
                    </div>
                </div>
                <div className='Title'>
                    <h3>
                        My Skills
                        <span>My Skills</span>
                    </h3>
                </div>
            </div>
            <div className="skills-container">
                <Skills skill={'Javascript'} progress={'70%'} width={'70%'}/>
                <Skills skill={'Python'} progress={'80%'} width={'80%'}/>
                <Skills skill={'React Js'} progress={'60%'} width={'60%'}/>
                <Skills skill={'React Native'} progress={'65%'} width={'65%'}/>
                <Skills skill={'Django'} progress={'55%'} width={'55%'}/>
                <Skills skill={'Machine Learning'} progress={'40%'} width={'40%'}/>
                <Skills skill={'Kivy'} progress={'50%'} width={'50%'}/>
                <Skills skill={'UI/UX'} progress={'10%'} width={'10%'}/>
            </div>
            <div className='Title' style={{marginTop: '5rem', marginLeft: '4rem'}}>
                <h3>
                    Services
                    <span>Services</span>
                </h3>
            </div>
            <div className="services-container">
                <ServiceSection image={design} title='web development' text='Responsive Web Development'/>
                <ServiceSection image={intelligence} title='Machine Learning' text='Intelligent Backend Support'/>
                <ServiceSection image={app} title='App development' text='Mobile and Desktop App development'/>
            </div>
        </div>
    )
}

export default About
