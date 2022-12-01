import React from 'react'
import CategoryCard from '../Category_card'
import "./style.css"

export default function Categories() {
    return (
        <div className='categories_container__sx'>
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
        </div>
    )
}
