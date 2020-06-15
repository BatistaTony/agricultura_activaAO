import React from "react";
import "./cardlist.scss";
import Card from "./card";
import $ from "jquery";
import AddHarvest from "../AddHarvest/addharvest";
import { connect } from "react-redux";

class CardList extends React.Component {
  state = {
    harvest: [],

    haverst_name_: "",
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ haverst_name_: e.target.value });
  };

  addHarvest = () => {
    $(".overlayAdd").fadeIn();
  };

  render() {
    const datas = this.state.harvest.filter((prod) => {
      const regex = new RegExp(`${this.state.haverst_name_}`, "gi");
      return prod.harvest_name.match(regex);
    });

    return (
      <div className="card_list">
        <AddHarvest />

        <div className="header_list">
          <div className="search_div">
            <h3 className="til_src">Colheitas</h3>
            <input
              type="text"
              name="hervest"
              id="hervest"
              onChange={this.handleChange}
              className="ipt_src"
              placeholder="pesquise aqui .."
            />
          </div>

          <button onClick={this.addHarvest} className="btnAddharvest">
            Add Colheita
          </button>
        </div>

        {this.state.harvest.length > 0 ? (
          <ul className="list_">
            {datas.map((hr, key) => (
              <Card harvest={hr} id={key + 1} key={key} />
            ))}
          </ul>
        ) : (
          <h1 className="titl_av">Sem colehita</h1>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ state });

export default connect(mapStateToProps, null)(CardList);
