import React from 'react'
import Item from "../Item"
import "./style.css"

export default function Items({ data }) {
    return (
        <div className='Item-Background'>
            {data.map((item)=>{
                return(
                    <Item key={item._id} data={item} />
                )
            })}
        </div>
    )
}
