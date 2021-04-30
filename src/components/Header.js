import React from 'react'
import Typed from 'react-typed'

function Header() {
    return (
        <div className="header-wraper">
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
                <a href="#" className="btn-main-offer">contact me</a>    
           </div> 
        </div>
    )
}

export default Header
