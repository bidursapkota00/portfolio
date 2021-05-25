import React from 'react'

function MenuItem({menu}) {
    return (
        <div>
            {
                menu.map(item => {
                    return(
                        <div className="menus" key={item.id}>
                            <div className="img-data">
                                <img src={item.image} alt="" />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MenuItem
