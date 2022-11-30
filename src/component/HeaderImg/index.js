import React from 'react'
import backgroundimg from "../../images/backgroundimg.jpg"

import "./style.css"

export default function HeaderIMG() {
    return (
        <div className='header_img'>
            <img src={backgroundimg} alt='logo' className='image_header-img'/>
        </div>
    )
}
