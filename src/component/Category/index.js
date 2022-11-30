import React from 'react'
import backgroundimg from "../../images/backgroundimg.jpg"

import "./style.css"

export default function Category() {
    return (
        <div className='category_container'>
            <div className='category-img-card'>
                <img src={backgroundimg} className='category_img' />
            </div>

            <div className='category_name'>
                <h1>
                    Name
                </h1>
            </div>
        </div>

    )
}
