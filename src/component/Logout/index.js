import React from 'react'
import { BiLogOut } from "react-icons/bi"
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth'

import "./style.css"

export default function Logout() {
    const auth = useAuth();
    const navigate = useNavigate()

    const handleClick = () => {
        auth.logout()
        navigate("/login")
    }
    return (
        <div className='logout-btn' onClick={handleClick} >
            <p> <BiLogOut /></p>
        </div>
    )
}
