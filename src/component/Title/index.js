import React from 'react'
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

import "./style.css"

export default function index() {
    return (
        <>

            <div className='static_info'>
                <div className='info'>
                    <h1>
                        OddMenu Demo
                    </h1>
                    <div className='phone__alt'>
                        <h3><FaMapMarkerAlt />Lebanon Beirut 1, Rawshe, RestoCafe</h3>
                        <h3><FaPhoneAlt /> +961 03 000 000 </h3>
                    </div>
                   
                </div>
            </div>

           
        </>
    )
}
