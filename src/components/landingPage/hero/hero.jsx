import React from "react";
import "./hero.scss";
import { Link } from "react-router-dom";
import ReactWOW from "react-wow";

export default function Hero() {
  return (
    <div className="hero">
      <div className="item">
        <div className="contentItem">
          <ReactWOW animation="slideInLeft" duration="2s" delay="0.4s">
            <h1 className="item_title">
              Faça uma colheita com objectivo, regista-se para obter mais
              contractos.
            </h1>
          </ReactWOW>
          <ReactWOW animation="slideInLeft" duration="2s" delay="0.4s">
            <p className="item_texto">
              Todos os dias faz se uma colheita sem fim, e tem sempre algum
              mercado ou grupo de pessoas precisando deste mesmo producto, o
              Projecto Agricultura activa uni os mercados com as fazendas para
              uma forma fácil de ter os productos em mão e fazer uma colheita
              com objectivo.
            </p>
          </ReactWOW>

          <div className="itemBtns">
            <ReactWOW animation="rollIn" duration="2s" delay="0.4s">
              <button className="btnItem">
                <Link to="/register">REGISTAR-SE</Link>
              </button>
            </ReactWOW>
            <ReactWOW animation="rollIn" duration="2s" delay="0.4s">
              <button className="btnItem">
                <a href="#about">SABER MAIS...</a>
              </button>
            </ReactWOW>
          </div>
        </div>
      </div>
    </div>
  );
}
