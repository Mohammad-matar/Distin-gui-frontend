import React from 'react'
import './style.css'

export default function MenuHead({ data }) {
    return (
        <div className='menu__head__container'>
            <img src={`http://localhost:8080/uploads/${data.icon}`} alt="img" />
            <h1>{data.title}</h1>

        </div >
    )
}
