import placeholder from "../../images/placeholder.webp"

import "./style.css"

export default function Item({ data }) {
    return (<>
        <div className='item__card_container'>
            <div className='item-card-imt'>
                <img src={data.img ? `http://localhost:8080/uploads/${data.img}` : placeholder} />
                <h2> {data.title}<br /></h2>
                <p>{data.description && data.description}</p>

                <div className='item__description-price'>
                    <p>
                        {data.price && data.price} L.L.
                    </p>
                </div>
            </div>
        </div>
    </>
    )
}
