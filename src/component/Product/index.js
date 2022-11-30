import React from 'react'
import backgroundimg from "../../images/backgroundimg.jpg"

import "./style.css"

export default function Product() {
    

    
    return (<>
        <div className='product__container'>
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
        </div>
        <div className='product__container'>
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
        </div>
        <div className='product__container'>
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
        </div>
    </>
    )
}   
