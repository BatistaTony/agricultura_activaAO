import React from "react";
import "./navbar.scss";
import $ from "jquery";
import { Link } from "react-router-dom";

export default function Navbar({ isHome, item }) {
  const openMenu = () => {
    $(".overlay").toggleClass("overlayShow");
    $(".navbar").toggleClass("navbarFixed");
    $(".btnMenu").toggleClass("openedMenu");
  };

  const closeMenu = () => {
    $(".overlay").removeClass("overlayShow");
    $(".navbar").removeClass("navbarFixed");
    $(".btnMenu").removeClass("openedMenu");
  };

  return (
    <div className={isHome ? "navbar" : "navbar navbarS"} id="home">
      <div className="logo">
          <img src="images/logo.png" alt="" />
      </div>

        <div className="menu">
          <ul className="list_item">
            <li className={item === "home" ? "active_item" : null}>
              <Link to={item === "home" ? "#home" : "/"}>Home</Link>
            </li>
            {isHome ? (
              <li>
                <a href="#about">Sobre</a>
              </li>
            ) : null}

            <li className={item === "conta" ? "active_item" : null}>
              <Link to="/register">Registar-se</Link>
            </li>
          </ul>
        </div>

      <div className="btnMenu" onClick={openMenu}>
        <div className="line line1"></div>
        <div className="line line2"></div>
        <div className="line line3"></div>
      </div>

      <div className="overlay">
        <div className="menuMobile">
          <ul className="list_item">
            <li onClick={closeMenu} className="active_item">
              <Link to={item === "home" ? "#home" : "/"}>Home</Link>
            </li>
            {isHome ? (
              <li onClick={closeMenu}>
                <a href="#about">Sobre</a>
              </li>
            ) : null}
            <li onClick={closeMenu}>
              <Link to="/register">Registar-se</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
