import React, { Component } from "react";
import "./alert.scss";
import NavbarApp from "../navbarApp/navbarApp";
import AlertCard from "./alert_card";
import firebase from "./../../firebase";
import { connect } from "react-redux";

class Alert extends Component {
  state = {
    markets: [],

    word: "",
  };

  handleChange = (e) => {
    e.preventDefault();

    this.setState({ word: e.target.value });
  };

  componentDidMount() {

    const firestore = firebase.firestore();

    const refCol = firestore.collection("alerts_farm");


    const query = refCol
      .where("alert_for", "==", this.props.state.Farm.phone_number)
      .where("status", "==", "novo");

    query.onSnapshot((docs) => {
      const data = [];
      
      docs.forEach((doc) => {
        data.push({ ...doc.data(), alert_id: doc.id });
      });

      this.setState({ markets: data });
    });

  }

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
            <mark>{this.state.markets.length}</mark> Mercados precisam do
            productos que você tem.
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
            <h1 className="titl_av">Sem Alertas Hoje</h1>
          )}
        </div>
      </div>
    );
  }
}

const mapToStateProps = (state) => ({ state });
const mapDispatchToProps = (dispatch) => ({ dispatch });

export default connect(mapToStateProps, mapDispatchToProps)(Alert);
