import React, { Component } from "react";
import Navbar from "../navbar/navbar";
import "./register.scss";
import Footer from "../footer/footer";
import Register from "./register";
import Login from "./login";
import ReactWOW from "react-wow";

export default class Account extends Component {
  render() {
    return (
      <div className="register">
        <Navbar item={"conta"} isHome={false} />

       
        <div className="containerRegister">
          <div className="reg_ap">
            <ReactWOW animation="slideInLeft" duration="2s" delay="0.4s">
              <h1 className="titl_rg_ap">Faça uma colheita com objectivo</h1>
            </ReactWOW>
            <ReactWOW animation="slideInLeft" duration="2s" delay="0.4s">
              <img src="images/farm.png" alt="" className="img_ap_rg" />
            </ReactWOW>
          </div>

            <Register />
            <Login />
        </div>
        <Footer />
      </div>
    );
  }
}
