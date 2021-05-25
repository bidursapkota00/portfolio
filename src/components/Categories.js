import React from 'react'

function Categories({filter, categories}) {
    return (
        <div className="Categories">
            {
                categories.map((cat, i) => {
                    return <button type='button' className='btn' key={i} onClick={() => filter(cat)}>{cat}</button>
                })
            }
        </div>
    )
}

export default Categories
