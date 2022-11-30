import React from 'react'
import Category from '../component/Category'
import HeaderIMG from '../component/HeaderImg'
import Product from '../component/Product'
import Title from '../component/Title'
// import Navbar from "../component/Navbar"

import "./style.css"

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <HeaderIMG />
      <Title />
      <Category />
      <Product />
    </div>

  )
}
