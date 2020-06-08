import React from "react";
import "./navbar.scss";
import $ from "jquery";
import { Link } from "react-router-dom";
import ReactWOW from "react-wow";

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
        <ReactWOW animation="fadeIn" duration="2s" delay="0.4s">
          <img src="images/logo.png" alt="" />
        </ReactWOW>
      </div>

      <ReactWOW animation="fadeIn" duration="2s" delay="0.4s">
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
      </ReactWOW>

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
