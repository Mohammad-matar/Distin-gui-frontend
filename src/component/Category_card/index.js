import React from 'react'
import "./style.css"

export default function CategoryCard({data}) {

    return (
        <>
            <div className='category_card__container'>
                <a href={`#${data._id}`}>
                    <div className='category_card_icon'>
                        <img src={`http://localhost:8080/uploads/${data.icon}`} />
                        <p>
                            {data.title}
                        </p>
                    </div>
                </a>
            </div>

        </>
    )
}
