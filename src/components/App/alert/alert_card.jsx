import React from "react";
import "./../cards/cardlist.scss";
import $ from "jquery";
import ReactWOW from "react-wow";
import firebase from "./../../firebase";

const AlertCard = ({ market, id }) => {
  const {
    alert_id,
    alert_for,
    market_name,
    market_address,
    date_alert,
    market_prod,
    prod_quant,
    market_number,
  } = market;

  const dateAlert = new Date(date_alert.seconds * 1000);
  const dateString =
    dateAlert.getDate() +
    " de " +
    (parseInt(dateAlert.getMonth()) +
    1) +
    " " +
    dateAlert.getFullYear();

  var toggle_ = 0;
  const toggleMenu = (c) => {
    if (toggle_ === 0) {
      $(".div_menu_card").fadeOut();
      $("." + c).fadeIn();
      toggle_ = 1;
    } else {
      $(".div_menu_card").fadeOut();
      toggle_ = 0;
    }
  };

  const deleteAlert = async (id) => {
    await $(".card_alert" + id).fadeOut();

    await firebase
      .firestore()
      .doc("alerts_farm/" + id)
      .delete();
  };

  const closedDeal = async (id) => {
    await $(".card_alert" + id).fadeOut();

    await firebase
      .firestore()
      .doc("alerts_farm/" + id)
      .set({
        alert_for,
        market_name,
        market_address,
        date_alert,
        market_prod,
        prod_quant,
        market_number,
        status: "Fechado",
      });
  };

  const notDeal = async (id) => {
    await $(".card_alert" + id).fadeOut();

    await firebase
      .firestore()
      .doc("alerts_farm/" + id)
      .set({
        alert_for,
        market_name,
        market_address,
        date_alert,
        market_prod,
        prod_quant,
        market_number,
        status: "Não fechado",
      });
  };

  return (
    <ReactWOW animation={"fadeIn"} duration="2s" delay="0.5s">
      <div className={"alert_card card_alert" + alert_id}>
        <div className="header_card">
          <div
            onClick={() => toggleMenu("menu_card_" + alert_id)}
            className="btnOpc"
          >
            <div className="dot_"></div>
            <div className="dot_"></div>
            <div className="dot_"></div>
          </div>

          <div
            className={"div_menu_card menu_card_alert menu_card_" + alert_id}
          >
            <ul className="menu_">
              <li onClick={() => closedDeal(alert_id)}>Fechado</li>
              <li onClick={() => notDeal(alert_id)}>Sem acordo</li>
              <li onClick={() => deleteAlert(alert_id)}>Apagar</li>
            </ul>
          </div>
          <div className="market_name">
            <img
              src="images/icons8_shop_50px.png"
              className="icon_market"
              alt=""
            />{" "}
            {market_name ? market_name : "Mercado"}
          </div>

          <p className="location_market">
            {market_address ? market_address : "Endereço"}
          </p>
          <p className="date_alert">
            {dateString ? dateString : "Data de alerta"}
          </p>
        </div>

        <div className="body_card_alert">
          <h1 className="quant_cases">{prod_quant ? prod_quant : 0}</h1>
          <p className="uni_med">
            Caixas de {market_prod ? market_prod : "Producto"}
          </p>
          <h1 className="market_number">{market_number ? market_number : 0}</h1>
        </div>
      </div>
    </ReactWOW>
  );
};

export default AlertCard;
