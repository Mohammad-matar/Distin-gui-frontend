import React from 'react'
import Items from '../Items'
import MenuHead from '../MenuHead'

import "./style.css"

export default function Menu({ data }) {
    return (
        <div className='menu'>
            {data.map((menu) => {
                return (
                    <div id={menu._id} className='Menu-Section' key={menu._id}>
                        <MenuHead data={menu} />
                        <Items data={menu.items} />
                    </div >
                )
            })}
        </div>
    )
}
