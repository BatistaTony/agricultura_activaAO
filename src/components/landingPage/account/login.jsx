import React, { Component } from "react";
import "./register.scss";
import $ from "jquery";

const initalState = {
  password: "",
  telefone: "",
  erro: "",
};

export default class Login extends Component {
  state = initalState;

  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
    $(".img_ipt_status").removeClass("img_sh");
  };

  login = () => {
    if (this.state.telefone === "") {
      $(".telefone_").addClass("img_sh");
      this.setState({ erro: "O Telefone está vazio" });
    } else if (this.state.password === "") {
      $(".password_").addClass("img_sh");
      this.setState({ erro: "A palavra passe está vazia" });
    } else {
      $(".img_spinner").addClass("shos_spinner");
      $(".btnL, .btnR").prop("disabled", true);
    }
  };

  showRegister = () => {
    $(".login").fadeOut(300);
    setTimeout(() => {
      $(".register_").fadeIn();
    }, 300);

    $("#login")[0].reset();
    this.setState(initalState);
    $(".img_spinner").removeClass("shos_spinner");
  };

  render() {
    return (
      <div className="form_regis login">
        <div className="subDiv_frm">
            <img src="images/logo.png" alt="" className="logo_re" />
            <h1 className="titl_rg_form">Entre na tua conta</h1>

            <p className="txt_form">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Adipisci, distinctio doloremque!
            </p>

            <form
              action=""
              id="login"
              className="form_"
              onSubmit={this.handleSubmit}
            >
              <div className="form_group ">
                <img
                  src="images/icons8_phone_26px_1.png"
                  alt=""
                  className="img_frm_gr"
                />
                <div className="gr_ipt">
                  <input
                    type="text"
                    onChange={this.handleChange}
                    id="telefone1"
                    className="input_fm"
                    name="telefone"
                  />
                  <label
                    className={this.state.telefone ? " labelN " : null}
                    htmlFor="telefone1"
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

              <div className="form_group ">
                <img
                  src="images/icons8_password_24px.png"
                  alt=""
                  className="img_frm_gr"
                />
                <div className="gr_ipt">
                  <input
                    type="password"
                    onChange={this.handleChange}
                    id="password3"
                    className="input_fm"
                    name="password"
                  />
                  <label
                    className={this.state.password ? " labelN " : null}
                    htmlFor="password3"
                  >
                    Palavra Passe
                  </label>
                </div>
                <img
                  src="images/icons8_box_important_24px.png"
                  alt=""
                  title={this.state.erro}
                  className="img_ipt_status password_"
                />
              </div>
            </form>

          <img
            src="images/icons8_Iphone_Spinner_32px.png"
            alt=""
            className="img_spinner"
          />

          <div className="frm_btn">
              <button onClick={this.login} id="btnL" className="btn_rg btnR">
                LOGIN
              </button>

              <button onClick={this.showRegister} className=" btnL">
                Ainda não tenho uma conta
              </button>
          </div>
        </div>
      </div>
    );
  }
}
