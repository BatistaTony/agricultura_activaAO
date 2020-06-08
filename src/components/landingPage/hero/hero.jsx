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
              The heart of our country and other motherfucker shit
            </h1>
          </ReactWOW>
          <ReactWOW animation="slideInLeft" duration="2s" delay="0.4s">
            <p className="item_texto">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Inventore quia fugiat obcaecati pariatur magni culpa commodi enim
              animi nihil reiciendis? Repellendus perferendis earum nostrum
              doloremque laborum velit repudiandae quisquam quo?
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
