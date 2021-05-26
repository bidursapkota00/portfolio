import React from 'react'
import Typed from 'react-typed'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {Link} from 'react-router-dom'
import Particles from 'react-particles-js'
import li from '../img/li.png'

function Header() {
    return (
        <div className="header-wraper">
            <Particles
                params={{
                    particles: {
                        number: {
                        value: 30,
                        density: {
                            enable: true,
                            value_area: 600
                        }
                        },
                        shape: {
                        type: 'circle',
                        color: '#f9ab00',
                        stroke: {
                            width: 5,
                            color: '#f9ab00'
                        }
                        },
                        line_linked: {
                        color: '#ef4035',
                        width: 3, 
                        }
                    }
                }}
            />
            <div className="main-info">
                <h1>hi!, i am</h1>
                <h1>python & javascript developer</h1>
                <Typed
                    className='typed-text'
                    strings={['web design', 'app development', 'machine learning']}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href="/contact">
                    <button className="btn btn-main-offer">contact me</button>
                </a>
                <div className="icons">
                    <a className='icon-holder' href='https://www.facebook.com/bdur.sapkota'>
                            <FontAwesomeIcon icon={faFacebook} className='icon fb'/>
                    </a>
                    <a className='icon-holder' href='https://github.com/bidursapkota00'>
                            <FontAwesomeIcon icon={faGithub} className='icon git'/>
                    </a>
                    <a className='icon-holder' href='https://www.linkedin.com/in/bidur-sapkota-3aa054203/'>
                            <img src={li} alt=""/>
                    </a>
                </div>
           </div> 
        </div>
    )
}

export default Header
