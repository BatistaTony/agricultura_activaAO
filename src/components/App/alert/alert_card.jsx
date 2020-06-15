import React from "react";
import "./../cards/cardlist.scss";
import $ from "jquery";
import ReactWOW from "react-wow";

const AlertCard = ({ market, id }) => {
  const {
    market_name,
    market_address,
    date_alert,
    market_prod,
    prod_quant,
    market_number,
  } = market;

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

  const deleteAlert = (id) => {
    alert("delete ", id);
  };

  const closedDeal = (id) => {
    alert("closed deal", id);
  };

  const notDeal = (id) => {
    alert("no deal ", id);
  };

  return (
    <ReactWOW animation={"fadeIn"} duration="2s" delay="0.5s">
      <div className="alert_card">
        <div className="header_card">
          <div onClick={() => toggleMenu("menu_card_" + id)} className="btnOpc">
            <div className="dot_"></div>
            <div className="dot_"></div>
            <div className="dot_"></div>
          </div>

          <div className={"div_menu_card menu_card_alert menu_card_" + id}>
            <ul className="menu_">
              <li onClick={() => closedDeal(id)}>Fechado</li>
              <li onClick={() => notDeal(id)}>Sem acordo</li>
              <li onClick={() => deleteAlert(id)}>Apagar</li>
            </ul>
          </div>
          <div className="market_name">
            <img
              src="images/icons8_shop_50px.png"
              className="icon_market"
              alt=""
            />{" "}
            {market_name}
          </div>

          <p className="location_market">{market_address}</p>
          <p className="date_alert">{date_alert}</p>
        </div>

        <div className="body_card_alert">
          <h1 className="quant_cases">{prod_quant}</h1>
          <p className="uni_med">Caixas de {market_prod}</p>
          <h1 className="market_number">{market_number}</h1>
        </div>
      </div>
    </ReactWOW>
  );
};

export default AlertCard;
