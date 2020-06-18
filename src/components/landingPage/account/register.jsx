import React, { Component } from "react";
import "./register.scss";
import $ from "jquery";
import ConfirmPhoneNumber from "./confirmN";
import firebase from "./../../firebase";
import { connect } from "react-redux";

const initalState = {
  name: "",
  password: "",
  password1: "",
  phone_number: "",
  address_farm: "",
  error_: "",
  codeConfirm: 0,
};

class Register extends Component {
  state = initalState;
  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
    $(".img_ipt_status").removeClass("img_sh");
    this.setState({ error_: "" });
  };

  showErrorAnimation = (element) => {
    $("." + element + "_").addClass("img_sh");
  };

  register = () => {
    this.setState({ error_: "" });

    if (this.state.name === "") {
      this.showErrorAnimation("name");
      this.setState({ error_: "O Nome está vazio" });
    } else if (this.state.address_farm === "") {
      this.showErrorAnimation("address_farm");
      this.setState({ error_: "O Endereço está vazio" });
    } else if (this.state.password === "") {
      this.showErrorAnimation("palavra_passe");
      this.setState({ error_: "A palavra passe está vazia" });
    } else if (this.state.password1 === "") {
      this.showErrorAnimation("palavra_passe1");
      this.setState({
        error_: "Repete a palavra passe",
      });
    } else if (this.state.password !== this.state.password1) {
      this.showErrorAnimation("palavra_passe1");
      this.setState({ error_: "As palavra passe não correspondem" });
    } else if (this.state.phone_number === "") {
      this.showErrorAnimation("phone_number");
      this.setState({ error_: "O Telefone está vazio" });
    } else {
      $(".img_sp_").fadeIn();
      $(".btnL, .btnR, .input_fm").prop("disabled", true);

      var appVerifier = new firebase.auth.RecaptchaVerifier(
        "recaptcha-container"
      );

      firebase
        .auth()
        .signInWithPhoneNumber(this.state.phone_number, appVerifier)
        .then((res) => {
          if (res) {
            this.setState({ codeConfirm: res });
            $(".img_sp_").fadeOut();
            $(".btnL, .btnR, .input_fm").prop("disabled", false);
            $(".overlay_conf").fadeIn();
          }
        })
        .catch((err) => {
          $(".img_sp_").fadeOut();
          $(".btnL, .btnR, .input_fm ").prop("disabled", false);
          if (err.message === "Invalid format.") {
            this.setState({ error_: "Farmato do número errado" });
          } else {
            appVerifier.clear();
            this.setState({
              error_: "Falha na conexão, tente de novo",
            });
          }
        });
    }
  };

  showLogin = () => {
    $(".register_").fadeOut(300);
    setTimeout(() => {
      $(".login").fadeIn();
    }, 300);
    $("#register")[0].reset();
    this.setState(initalState);
    $(".img_spinner").fadeOut();
  };

  render() {
    const { name, phone_number, address_farm, password } = this.state;

    return (
      <div className="form_regis register_">
        <ConfirmPhoneNumber
          codigoConfirm={this.state.codeConfirm}
          farmData={{ name, phone_number, address_farm, password }}
        />
        <div className="subDiv_frm">
          <img src="images/logo.png" alt="" className="logo_re" />

          <h1 className="titl_rg_form">Regista-se, é gratuito</h1>

          <p className="txt_form">
            Expande a tua boa colheita para todos os mercados de Angola, tenha
            mais contractos e melhor gestão das colheitas.
          </p>

          <form
            action=""
            id="register"
            className="form_"
            onSubmit={this.handleSubmit}
          >
            <div className="form_group name">
              <img
                src="images/icons8_field_50px.png"
                alt=""
                className="img_frm_gr"
              />
              <div className="gr_ipt">
                <input
                  type="text"
                  onChange={this.handleChange}
                  id="name"
                  className="input_fm"
                  name="name"
                />
                <label
                  className={this.state.name ? " labelN name " : null}
                  htmlFor="name"
                >
                  Nome da fazenda
                </label>
              </div>

              <img
                src="images/icons8_box_important_24px.png"
                alt=""
                title={this.state.error_}
                className="img_ipt_status name_"
              />
            </div>

            <div className="form_group address_farm">
              <img
                src="images/icons8_address_24px.png"
                alt=""
                className="img_frm_gr"
              />
              <div className="gr_ipt">
                <input
                  type="text"
                  onChange={this.handleChange}
                  id="address_farm"
                  className="input_fm"
                  name="address_farm"
                />
                <label
                  className={this.state.address_farm ? " labelN " : null}
                  htmlFor="address_farm"
                >
                  Endereço
                </label>
              </div>
              <img
                src="images/icons8_box_important_24px.png"
                alt=""
                title={this.state.error_}
                className="img_ipt_status address_farm_"
              />
            </div>

            <div className="form_group password">
              <img
                src="images/icons8_password_24px.png"
                alt=""
                className="img_frm_gr"
              />
              <div className="gr_ipt">
                <input
                  type="password"
                  onChange={this.handleChange}
                  id="password"
                  className="input_fm"
                  name="password"
                />
                <label
                  className={this.state.password ? " labelN " : null}
                  htmlFor="password"
                >
                  Palavra Passe
                </label>
              </div>
              <img
                src="images/icons8_box_important_24px.png"
                alt=""
                title={this.state.error_}
                className="img_ipt_status palavra_passe_"
              />
            </div>

            <div className="form_group password1">
              <img
                src="images/icons8_password_24px.png"
                alt=""
                className="img_frm_gr"
              />
              <div className="gr_ipt">
                <input
                  type="password"
                  onChange={this.handleChange}
                  id="password1"
                  className="input_fm"
                  name="password1"
                />
                <label
                  className={this.state.password1 ? " labelN " : null}
                  htmlFor="password1"
                >
                  Repetir a Palavra Passe
                </label>
              </div>
              <img
                src="images/icons8_box_important_24px.png"
                alt=""
                title={this.state.error_}
                className="img_ipt_status palavra_passe1_"
              />
            </div>

            <div className="form_group phone_number">
              <img
                src="images/icons8_phone_26px_1.png"
                alt=""
                className="img_frm_gr"
              />
              <div className="gr_ipt">
                <input
                  type="text"
                  onChange={this.handleChange}
                  id="phone_number"
                  className="input_fm"
                  name="phone_number"
                />
                <label
                  className={this.state.phone_number ? " labelN " : null}
                  htmlFor="phone_number"
                >
                  Telefone
                </label>
              </div>
              <img
                src="images/icons8_box_important_24px.png"
                alt=""
                title={this.state.error_}
                className="img_ipt_status phone_number_"
              />
            </div>
          </form>

          {this.state.error_ ? (
            <p className="err_S err_R">{this.state.error_}</p>
          ) : null}

          <img
            src="images/icons8_Iphone_Spinner_32px.png"
            alt=""
            className="img_spinner img_sp_"
          />

          <div className="frm_btn">
            <button onClick={this.register} className="btn_rg btnR">
              REGISTER
            </button>

            <button onClick={this.showLogin} className=" btnL">
              Já tenho uma conta
            </button>
          </div>

          <div id="recaptcha-container"></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ state });
const mapDispatchToProps = (dispatch) => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(Register);
