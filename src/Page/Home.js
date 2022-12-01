import React from 'react'
import Categories from '../component/Categories'
import HeaderIMG from '../component/HeaderImg'
import Menu from '../component/Menu'
import Title from '../component/Title'

import "./style.css"

export default function Home() {
  return (
    <div>
      <HeaderIMG />
      <Title />
      <Categories />
      <Menu />
    </div>

  )
}
