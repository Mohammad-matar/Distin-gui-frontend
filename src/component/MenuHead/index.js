import React from 'react'
import matar from "../../images/matar-logo.png"
import './style.css'

export default function MenuHead() {
    return (
        <div className='menu__head__container'>
            <img src={matar} />
            <h1>Menu Head</h1>
            
        </div>
    )
}
