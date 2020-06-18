import React from "react";
import Navbar from "./navbar/navbar";
import "./../styles/main.scss";
import Hero from "./hero/hero";
import Gallery from "./gallery/gallery";
import About from "./about/about";
import Footer from "./footer/footer";
import { Link } from "react-router-dom";
import ReactWOW from "react-wow";
import "animate.css";

export default function LangingPage() {
  return (
    <div className="LandingPage">
      <Navbar isHome={true} item={"home"} />
      <Hero />
      <Gallery />
      <About />

      <ReactWOW animation="fadeIn" duration="2s" delay="0.4s">
        <div className="src_demo">
          <h1 className="title_sr_dm">
            Tenha uma colheita já com o caminho e destino traçado
          </h1>
          <p className="text_sr_dm">
            Expande a tua boa colheita para todos os mercados de Angola, tenha
            mais contractos e melhor gestão das colheitas.
          </p>
          <div className="itemBtns">
            <button className="btnItem btnItem_dm">
              <Link to="/register">REGISTAR-SE</Link>
            </button>
          </div>
        </div>
      </ReactWOW>
      <Footer />
    </div>
  );
}
