import axios from 'axios';
import React, { useEffect, useState } from 'react'
import backgroundimg from "../../images/backgroundimg.jpg"

import "./style.css"

export default function Category() {
    const [data, setData] = useState();
    const [isloading, setIsloading] = useState(true)

    useEffect(() => {
        getAll();
    }, []);
    const getAll = () => {
        axios
            .get("http://localhost:8080/categories")
            .then((res) => {
                setData(res.data.data);
                console.log(res.data.data)
                setIsloading(false);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
        <div className='category_container'>
            {isloading ? (
                <div class="lds-roller">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            ) : (
                data.map((data) => {
                    return (
                        <>
                            <div className='category-img-card'>
                                <img src={`http://localhost:8080/categories/upload/${data.icon}`} className='category_img' />
                            </div>

                            <div className='category_name'>
                                <h1>
                                    {data.title}
                                </h1>
                            </div>
                        </>
                    )
                })

            )
            }

        </div>

    )
}
