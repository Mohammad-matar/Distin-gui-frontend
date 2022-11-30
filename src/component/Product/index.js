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
            .get("http://localhost:8080/items")
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
                        <div className='product__container'>

                            <div className='product-half__container'>
                                <div className='product-image'>
                                    <img src={backgroundimg} />
                                </div>
                                <div className='product-description'>
                                    <p>
                                        {data.description}
                                    </p>
                                </div>
                                <div className='product_title'>
                                    <h1>
                                        {data.title}
                                    </h1>
                                    <h1> Price: ${data.price}</h1>
                                </div>
                            </div>
                        </div>

                    </>
                )
            })
        )
        }
    </>
    )
}   
