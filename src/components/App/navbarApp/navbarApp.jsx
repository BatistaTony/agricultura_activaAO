import React from "react";
import "./navbarApp.scss";
import $ from "jquery";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import firebase from "./../../firebase";
import { clearFarm } from "./../../store/actions/farm";

export default function NavbarApp() {
  const farm = useSelector((state) => state.Farm);
  const dispatch = useDispatch();

  const OpenMenuOpcoes = () => {
    $(".menu_op_").fadeToggle();
    $(".img_frm_op").toggleClass("img_opened_op");
  };

  const logOut = () => {
    firebase
      .auth()
      .signOut()
      .then((res) => {
        dispatch(clearFarm());
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="navbar navbarApp">
      <div className="logo">
          <img src="images/logo.png" alt="" />
      </div>

      <div className="menu_App">
          <div className="menu">
            <ul className="list_item">
              <li>
                <Link to="/dashboard">
                  <img
                    src="images/icons8_home_26px.png"
                    alt=""
                    className="img_mn"
                  />
                </Link>
              </li>

              <li>
                <Link to="/alerta_scasseis">
                  <img
                    src="images/icons8_alarm_24px_1.png"
                    alt=""
                    className="img_mn"
                  />
                  <h1 className="alert_n_">9</h1>
                </Link>
              </li>
            </ul>
          </div>

        <div className="farm">
          <img
            src="images/icons8_field_24px_1.png"
            alt=""
            className="img_mn_op"
          />
          <h5 className="nm_farm">{farm.name ? farm.name : "none"}</h5>
          <div className="img_frm_op" onClick={OpenMenuOpcoes}>
            <img
              src="images/icons8_back_24px_3.png"
              alt=""
              className="img_fr_op"
            />
          </div>

          <div className="menu_op_">
            <div className="div_menu_op_">
              <h1 className="farm_nme">{farm.name ? farm.name : "none"}</h1>
              <ul className="menu_op">
                <li>WhatIcanAddHere</li>
                <li onClick={logOut}>Sair</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
