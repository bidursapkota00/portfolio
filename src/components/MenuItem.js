import React from 'react'

function MenuItem({menu}) {
    return (
        <div className="MenuItem">
            {
                menu.map(item => {
                    return(
                        <div className="menus" key={item.id}>
                            <div className="img-data">
                                <img src={item.image} alt="" />
                                <ul className="hover-items">
                                    <li>
                                        <a href={item.link1}><img src={item.icon1} alt="" /></a>
                                        <a href={item.link2}><img src={item.icon2} alt="" /></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="menu-title">
                                <h5>{item.title}</h5>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MenuItem
