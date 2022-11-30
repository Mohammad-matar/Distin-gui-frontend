import axios from 'axios';
import React, { useEffect, useState } from 'react'
import backgroundimg from "../../images/backgroundimg.jpg"

import "./style.css"

export default function Product() {
    const [product, setProduct] = useState();
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getAll();
    }, []);

    const getAll = () => {
        axios
            .get("http://localhost:8080/categories")
            .then((res) => {
                setProduct(res.data.data);
                console.log(res.data.data)
                setIsLoading(false);
            })
            .catch((err) => {
                console.error(err);
            });
    };
    return (<>
        <div className='product__container'>
            {isLoading ? (
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
                product.map((data) => {
                    return (
                        <>
                            <div className='product-half__container'>
                                <div className='product-image'>
                                    <img src={backgroundimg} />
                                </div>
                                <div className='product-description'>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </p>
                                </div>
                                <div className='product_title'>
                                    <h1>
                                        Title
                                    </h1>
                                    <h1> Price: $</h1>
                                </div>
                            </div>
                        </>
                    )
                })
            )
            }

        </div>

    </>
    )
}   
