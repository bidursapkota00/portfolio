import React from 'react'
import Typed from 'react-typed'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faYoutube} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom'
import Particles from 'react-particles-js'

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
                <button className="btn btn-main-offer">contact me</button>
                <div className="icons">
                    <Link className='icon-holder'>
                            <FontAwesomeIcon icon={faFacebook} className='icon fb'/>
                    </Link>
                    <Link className='icon-holder'>
                            <FontAwesomeIcon icon={faGithub} className='icon git'/>
                    </Link>
                    <Link className='icon-holder'>
                            <FontAwesomeIcon icon={faYoutube} className='icon utub'/>
                    </Link>
                </div>
           </div> 
        </div>
    )
}

export default Header
