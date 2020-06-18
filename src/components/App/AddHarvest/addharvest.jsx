import React from "react";
import "./addharvest.scss";
import $ from "jquery";
import { connect } from "react-redux";
import { clearHarvest } from "./../../store/actions/harvest";
import firebase from "./../../firebase";

const initialState = {
  harvest_name: "",
  harvest_quant: 0,
  harvest_price: 0,
  error: "",
};

class AddHarvest extends React.Component {
  state = initialState;

  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ error: "" });
    this.setState({ [e.target.name]: e.target.value });
  };

  addHarvestToday = () => {
    if (this.state.harvest_name === "") {
      this.setState({ error: "Colheita está vazia" });
    } else if (this.state.harvest_quant === 0) {
      this.setState({ error: "Selecione a quantidade" });
    } else if (this.state.harvest_price === 0) {
      this.setState({ error: "Selecione o preço da caixa" });
    } else {
      this.chooseWhatToDo();
    }
  };

  chooseWhatToDo = () => {
    const id = this.props.state.Harvest.harvest_id;

    if (id !== 0) {
      this.updateHarvest(id);
    } else {
      this.creatHarvest();
    }
  };

  creatHarvest = async () => {
    this.setState({ error: "" });
    $(".overlayAdd").fadeOut();
    $("#form_add")[0].reset();
    this.props.dispatch(clearHarvest());

    const firestore = firebase.firestore();

    await firestore.collection("farm_harvests").add({
      harvest_owner: this.props.state.Farm.phone_number,
      harvest_name: this.state.harvest_name,
      total_harvest: this.state.harvest_quant,
      harvest_price: this.state.harvest_price,
    });
  };

  updateHarvest = async () => {
    const firestore = firebase.firestore();

    await firestore
      .doc("farm_harvests/" + (await this.props.state.Harvest.harvest_id))
      .set({
        harvest_owner: this.props.state.Farm.phone_number,
        harvest_name: this.props.state.Harvest.harvest_name,
        total_harvest:
          parseInt(this.state.harvest_quant) +
          parseInt(this.props.state.Harvest.total_harvest),
        harvest_price: this.state.harvest_price,
        harvest_today: this.state.harvest_quant,
      });

    this.setState({ error: "" });
    $(".overlayAdd").fadeOut();
    $("#form_add")[0].reset();
    this.props.dispatch(clearHarvest());
  };

  cancelAdd = () => {
    this.setState({ harvest_name: "" });
    this.setState({ harvest_quant: 0 });
    this.setState({ harvest_price: 0 });
    this.setState({ error: "" });

    $(".overlayAdd").fadeOut();
    $("#form_add")[0].reset();

    this.props.dispatch(clearHarvest());
  };

  render() {
    const { harvest_name } = this.props.state.Harvest;

    return (
      <div className="overlayAdd">
        <div className="addharvest_">
          <div className="_div_form_add">
            <h1 className="titl_add_">Adicionar Colheita</h1>

            <form
              action=""
              id="form_add"
              className="form_add_"
              onSubmit={this.handleSubmit}
            >
              <div className="form_group_add_">
                <label htmlFor="harvest_name">Colheita</label>
                <input
                  type="text"
                  name="harvest_name"
                  id="harvest_name"
                  defaultValue={harvest_name}
                  onChange={this.handleChange}
                  placeholder="nome do producto colhido"
                />
              </div>

              <div className="form_group_add_">
                <label htmlFor="harvest_quant">Quantidade</label>
                <input
                  type="number"
                  name="harvest_quant"
                  id="harvest_quant"
                  onChange={this.handleChange}
                />
              </div>

              <div className="form_group_add_">
                <label htmlFor="harvest_price">Preço da caixa</label>
                <input
                  type="number"
                  name="harvest_price"
                  id="harvest_price"
                  onChange={this.handleChange}
                />
              </div>
            </form>

            {this.state.error ? (
              <p className="err_add_harv">{this.state.error}</p>
            ) : null}

            <div className="btnsAdd">
              <button onClick={this.cancelAdd} className="btnAdd">
                Cancelar
              </button>
              <button onClick={this.addHarvestToday} className="btnAdd">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapToStateProps = (state) => ({ state });
const mapDispatchToProps = (dispatch) => ({ dispatch });

export default connect(mapToStateProps, mapDispatchToProps)(AddHarvest);
