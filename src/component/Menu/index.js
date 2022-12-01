import React from 'react'
import Items from '../Items'
import MenuHead from '../MenuHead'

import "./style.css"

export default function Menu() {
    return (
        <div className='menu'>
            <div id='1' className='Menu-Section'>
                <MenuHead />
                <Items />
            </div >
            <div id='2' className='Menu-Section'>
                <MenuHead />
                <Items />
            </div>
            <div id='3' className='Menu-Section'>
                <MenuHead />
                <Items />
            </div>
            <div id='4' className='Menu-Section'>
                <MenuHead />
                <Items />
            </div>
            <div id='5' className='Menu-Section'>
                <MenuHead />
                <Items />
            </div>
        </div>
    )
}
