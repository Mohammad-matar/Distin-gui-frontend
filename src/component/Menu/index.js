import React from 'react'
import Items from '../Items'
import MenuHead from '../MenuHead'

import "./style.css"

export default function Menu({ data, onSubmit, isDashboard = false }) {
    return (
        <div className='menu'>
            {data.map((menu) => {
                return (
                    <div id={menu._id} className='Menu-Section' key={menu._id}>
                        <MenuHead data={menu} />
                        <Items data={menu.items} category_id={menu._id} isDashboard={isDashboard} onSubmit={onSubmit} />
                    </div >
                )
            })}
        </div>
    )
}
