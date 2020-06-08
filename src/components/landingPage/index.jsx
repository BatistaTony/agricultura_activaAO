import React from "react";
import Navbar from "./navbar/navbar";
import "./styles/main.scss";
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
            The heart of our country and other motherfucker shit
          </h1>
          <p className="text_sr_dm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perferendis, eum! Qui magni molestiae, voluptatem cumque soluta,
            aliquam quidem iure maiores dolorum a voluptatibus tempora nihil
            vitae molestias perspiciatis aspernatur libero.
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
