import React from 'react'
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'

import "./style.css"

export default function Title() {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/login`)
      }
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
                <div className='login_container_staticinfo'>
                    <button className='login_btn_staticinfo' onClick={handleClick}> Login</button>
                </div>
            </div>


        </>
    )
}
