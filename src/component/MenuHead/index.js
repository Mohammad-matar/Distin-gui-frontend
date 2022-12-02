import React from 'react'
import matar from "../../images/matar-logo.png"
import './style.css'

export default function MenuHead({ data }) {
    return (
        <div className='menu__head__container'>
            <img src={`http://localhost:8080/uploads/${data.icon}`} />
            <h1>{data.title}</h1>

        </div >
    )
}
