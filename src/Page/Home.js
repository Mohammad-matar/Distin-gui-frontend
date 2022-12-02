import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Categories from '../component/Categories'
import HeaderIMG from '../component/HeaderImg'
import Menu from '../component/Menu'
import Title from '../component/Title'

import "./style.css"

export default function Home() {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getall();
  }, []);

  const getall = () => {
    axios
      .get("http://localhost:8080/categories")
      .then((res) => {
        setData(res.data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div>
      <HeaderIMG />
      <Title />
      {isLoading ? (
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (<>
        <Categories data={data} />
        <Menu data={data} />
      </>
      )}

    </div>

  )
}
