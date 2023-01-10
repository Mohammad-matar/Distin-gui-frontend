import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../auth'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
// import logo from '../../images/matar-logo.png'
import { BsArrowBarLeft } from 'react-icons/bs'

import './style.css'

export default function Login() {
    const [data, setData] = useState({})
    const [inputType, setInputType] = useState("password");


    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleClick = () => {
        
        navigate("/")
    }
    const togglePassword = () => {
        if (inputType === "password") {
            setInputType("text");
        } else {
            setInputType("password");
        }
    };

    const auth = useAuth()
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        if (!data.email) {
            alert("Email is required")
        } else if (!data.password) {
            alert("Password is required")

        } else {
            axios.post("https://disting-ui-api.onrender.com/auth/login", data)
                .then(res => {
                    // console.log(res.data.token);
                    auth.login(res.data.token);
                    navigate('/dashboard');
                })
                .catch(error => {
                    console.log(error)
                    alert(error.response.data.message)

                })
        }
    }


    return (
        <>
            <div className='back_arrow' onClick={handleClick} >
                <p> <BsArrowBarLeft /></p>
            </div>

            <div className='login_container'>
                <div className='main_login_container'>
                    <div className='login_header'>
                        {/* <img src={logo} alt="wardeh_logo" /> */}
                        <h3 className='header_text'>Log in to our online store</h3>
                    </div>

                    <div >
                        <form className='login_inputs_container' onSubmit={handleLogin}>
                            <input type="text" placeholder="Username" name='email' onChange={handleChange} required />
                            <div className='login_pw_input'>
                                <input
                                    className="input"
                                    name="password"
                                    type={inputType}
                                    placeholder="Password"
                                    required
                                    onChange={handleChange}
                                />
                                {inputType === "password" ? (
                                    <AiOutlineEye
                                        className='login-eye'
                                        onClick={() => togglePassword()}
                                    />
                                ) : (
                                    <AiOutlineEyeInvisible
                                        className='login-eye'
                                        onClick={() => togglePassword()}
                                    />
                                )}
                            </div>

                            <button className='login_btn' type='submit' onClick={handleLogin}>
                                Login
                            </button>
                            <div className='login-foot'>
                                <p>don’t have an account ? <span> signup</span></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>

    )
}
