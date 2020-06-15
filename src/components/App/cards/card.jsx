import React from "react";
import ReactWOW from "react-wow";
import $ from "jquery";
import { useDispatch } from "react-redux";
import { setHarvest } from "./../../store/actions/harvest";

const Card = ({ harvest, id }) => {
  const dispatch = useDispatch();

  const {
    harvest_name,
    harvest_today,
    total_harvest,
    harvest_date,
    harvest_price,
  } = harvest;

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

  const updateHarvest = async () => {
    await dispatch(
      setHarvest({
        harvest_id: id,
        harvest_name,
        harvest_today,
        total_harvest,
        harvest_price,
      })
    );
    $(".overlayAdd").fadeIn();
  };

  const deleteHarvest = (c) => {
    $("." + c).fadeOut();

    //delete from firebase
  };

  return (
    <ReactWOW animation={"fadeIn"} duration="2s" delay="0.5s">
      <div className={"card card_" + id}>
        <div onClick={() => toggleMenu("menu_card_" + id)} className="btnOpc">
          <div className="dot_"></div>
          <div className="dot_"></div>
          <div className="dot_"></div>
        </div>

        <div className={"div_menu_card menu_card_" + id}>
          <ul className="menu_">
            <li onClick={updateHarvest}>Add mais colheita</li>
            <li onClick={() => deleteHarvest("card_" + id)}>Apagar</li>
            <li>nada</li>
          </ul>
        </div>
        <p className="time_">{harvest_date}</p>
        <p className="prod_">{harvest_name}</p>
        <h5 className="harvest_today">+ {harvest_today}</h5>
        <h5 className="harvest_total">{total_harvest}</h5>
        <p className="cl_n_mdida">Caixas</p>
      </div>
    </ReactWOW>
  );
};

export default Card;
