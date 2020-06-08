import React, { Component } from "react";
import "./register.scss";
import $ from "jquery";
import ConfirmarTelefone from "./confirmN";
import RegisteredWithSucess from "./sucess";
import firebase from "./firebase";

const initalState = {
  nome: "",
  password: "",
  password1: "",
  telefone: "",
  endereco: "",
  erro: "",
  codeConfirm: 0,
};

export default class Register extends Component {
  state = initalState;

  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
    $(".img_ipt_status").removeClass("img_sh");
    this.setState({ erro: "" });
  };

  showErrorAnimation = (element) => {
    $("." + element + "_").addClass("img_sh");
  };

  register = () => {
    if (this.state.nome === "") {
      this.showErrorAnimation("nome");
      this.setState({ erro: "O Nome está vazio" });
    } else if (this.state.endereco === "") {
      this.showErrorAnimation("endereco");
      this.setState({ erro: "O Endereço está vazio" });
    } else if (this.state.password === "") {
      this.showErrorAnimation("palavra_passe");
      this.setState({ erro: "A palavra passe está vazia" });
    } else if (this.state.password1 === "") {
      this.showErrorAnimation("palavra_passe1");
      this.setState({ erro: "A repetição da palavra passe está vazia" });
    } else if (this.state.password !== this.state.password1) {
      this.showErrorAnimation("palavra_passe1");
      this.setState({ erro: "As palavra passe não correspondem" });
    } else if (this.state.telefone === "") {
      this.showErrorAnimation("telefone");
      this.setState({ erro: "O Telefone está vazio" });
    } else {
      // $(".img_sp_").addClass("shos_spinner");
      // $(".btnL, .btnR").prop("disabled", true);

      const appVerifier = new firebase.auth.RecaptchaVerifier(
        "recaptcha-container"
      );

      const auth = firebase
        .auth()
        .signInWithPhoneNumber(this.state.telefone, appVerifier)
        .then((res) => {
          if (res) {
            this.setState({ codeConfirm: res });

            $(".img_sp_").removeClass("shos_spinner");
            $(".btnL, .btnR").prop("disabled", false);
            $(".overlay_conf").fadeIn();
          }
        })
        .catch((err) => {
          console.log(err)
          if (err.message === "Invalid format.") {
            this.setState({ erro: "Farmato do número errado" });
          } else {
            this.setState({ erro: "Falha na internet, tente de novo" });
          }
        });

      // //SIMULAÇÃO DO TIME QUE VAI LEVAR PARA PCONFIRMAR O NUMERO
      // setTimeout(() => {

      // }, 500)
    }
  };

  showLogin = () => {
    $(".register_").fadeOut(300);

    setTimeout(() => {
      $(".login").slideDown();
    }, 300);
    $("#register")[0].reset();
    this.setState(initalState);
    $(".img_spinner").removeClass("shos_spinner");
  };

  render() {
    return (
      <div className="form_regis register_">
        <ConfirmarTelefone
          codigoConfirm={this.state.codeConfirm}
          telefone={this.state.telefone}
        />
        

        <div className="subDiv_frm">
          <img src="images/logo.png" alt="" className="logo_re" />

          <h1 className="titl_rg_form">Regista-se, é gratuito</h1>

          <p className="txt_form">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci,
            distinctio doloremque!
          </p>

          <form
            action=""
            id="register"
            className="form_"
            onSubmit={this.handleSubmit}
          >
            <div className="form_group nome">
              <img
                src="images/icons8_field_50px.png"
                alt=""
                className="img_frm_gr"
              />
              <div className="gr_ipt">
                <input
                  type="text"
                  onChange={this.handleChange}
                  id="nome"
                  className="input_fm"
                  name="nome"
                />
                <label
                  className={this.state.nome ? " labelN nome " : null}
                  htmlFor="nome"
                >
                  Nome da fazenda
                </label>
              </div>

              <img
                src="images/icons8_box_important_24px.png"
                alt=""
                title={this.state.erro}
                className="img_ipt_status nome_"
              />
            </div>

            <div className="form_group endereco">
              <img
                src="images/icons8_address_24px.png"
                alt=""
                className="img_frm_gr"
              />
              <div className="gr_ipt">
                <input
                  type="text"
                  onChange={this.handleChange}
                  id="endereco"
                  className="input_fm"
                  name="endereco"
                />
                <label
                  className={this.state.endereco ? " labelN " : null}
                  htmlFor="endereco"
                >
                  Endereço
                </label>
              </div>
              <img
                src="images/icons8_box_important_24px.png"
                alt=""
                title={this.state.erro}
                className="img_ipt_status endereco_"
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
                title={this.state.erro}
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
                title={this.state.erro}
                className="img_ipt_status palavra_passe1_"
              />
            </div>

            <div className="form_group telefone">
              <img
                src="images/icons8_phone_26px_1.png"
                alt=""
                className="img_frm_gr"
              />
              <div className="gr_ipt">
                <input
                  type="text"
                  onChange={this.handleChange}
                  id="telefone"
                  className="input_fm"
                  name="telefone"
                />
                <label
                  className={this.state.telefone ? " labelN " : null}
                  htmlFor="telefone"
                >
                  Telefone
                </label>
              </div>
              <img
                src="images/icons8_box_important_24px.png"
                alt=""
                title={this.state.erro}
                className="img_ipt_status telefone_"
              />
            </div>
          </form>

          {this.state.erro ? <p className="err_S">{this.state.erro}</p> : null}

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
