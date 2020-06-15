import React, { Component } from "react";
import "./alert.scss";
import NavbarApp from "../navbarApp/navbarApp";
import AlertCard from "./alert_card";
import { data } from "jquery";

class Alert extends Component {
  state = {
    markets: [],

    word: "",
  };

  handleChange = (e) => {
    e.preventDefault();

    this.setState({ word: e.target.value });
  };

  render() {
    const datas = this.state.markets.filter((market) => {
      const regex = new RegExp(`${this.state.word}`, "gi");

      return market.market_name.match(regex);
    });

    return (
      <div className="alert">
        <NavbarApp />

        {datas.length > 0 ? (
          <h1 className="titl_alert">
            <mark>05</mark> Mercados precisam do productos que você tem.
          </h1>
        ) : null}

        <div className="alert_list_div">
          <div className="search_div">
            <h3 className="til_src">Alertas</h3>
            <input
              type="text"
              name="hervest"
              id="hervest"
              onChange={this.handleChange}
              className="ipt_src"
              placeholder="pesquise aqui .."
            />
          </div>
          {datas.length > 0 ? (
            <ul className="list_alert">
              {datas.map((m, key) => (
                <AlertCard key={key} id={key} market={m} />
              ))}
            </ul>
          ) : (
            <h1 className="titl_av">Sem colehita</h1>
          )}
        </div>
      </div>
    );
  }
}

export default Alert;
