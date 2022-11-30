import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import "./style.css";

const Navbarmenu = () => {
  const [isMenu, setisMenu] = useState(false);
  const [isResponsiveclose, setResponsiveclose] = useState(false);
  const toggleClass = () => {
    setisMenu(isMenu === false ? true : false);
    setResponsiveclose(isResponsiveclose === false ? true : false);
  };

  let boxClass = ["main-menu menu-right menuq1"];
  if (isMenu) {
    boxClass.push("menuq2");
  } else {
    boxClass.push("");
  }

  return (
    <div className="header">
      <div className="header_container">
        <div className="header_logo">
          <NavLink exact activeClassName="is-active" to="/">
            <img src="" alt="logo" className="logo_img" />
          </NavLink>
        </div>

        <div className="header_menus">
          <nav className="main-nav ">
            {isResponsiveclose === true ? (
              <>
                <span
                  className="menubar__button"
                  style={{ display: "none" }}
                  onClick={toggleClass}
                >
                  <IoMdClose />
                </span>
              </>
            ) : (
              <>
                <span
                  className="menubar__button"
                  style={{ display: "none" }}
                  onClick={toggleClass}
                >
                  <IoIosMenu />
                </span>
              </>
            )}

            <ul className={boxClass.join(" ")}>
              <li className="menu-item">
                <a href="#about">Category</a>
              </li>
              <li className="menu-item">
                <a href="#experience">Item</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbarmenu;