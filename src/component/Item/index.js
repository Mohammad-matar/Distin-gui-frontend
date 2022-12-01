import React from 'react'
import matar from "../../images/Mushroom.webp"

import "./style.css"

export default function Item() {
    return (<>
        <div className='item__card_container'>
            <div className='item-card-imt'>
                <img src={matar} />
                <h2> Chicken mushroom<br /></h2>
                <p>Description</p>

                <div className='item__description-price'>
                    <p>
                        Price L.L.
                    </p>
                </div>
            </div>
        </div>
    </>

    )
}
