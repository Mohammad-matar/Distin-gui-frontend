import React from 'react'
import "./style.css"
import matar from "../../images/Mushroom.webp"

export default function CategoryCard() {
    return (
        <div className='category_card__container'>
            <a href='#5'>
                <div className='category_card_icon'>
                    <img src={matar} />
                    <p>
                        Smocky's Menu
                    </p>
                </div>
            </a>
        </div>
    )
}
