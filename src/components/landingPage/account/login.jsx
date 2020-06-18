import React, { Component } from "react";
import "./register.scss";
import $ from "jquery";
import firebase from "./../../firebase";
import { getFarm } from "./../../store/actions/farm";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

const initalState = {
  password: "",
  phone_number: "",
  error: "",
  isLogged: false,
};

class Login extends Component {
  state = initalState;

  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
    $(".img_ipt_status").removeClass("img_sh");
  };

  login = async () => {
    if (this.state.phone_number === "") {
      $(".phone_number_").addClass("img_sh");
      this.setState({ error: "O Telefone está vazio" });
    } else if (this.state.password === "") {
      $(".password_").addClass("img_sh");
      this.setState({ error: "A palavra passe está vazia" });
    } else {
      $(".img_spinner").fadeIn();
      this.setState({ error: "" });
      $(".btnL, .btnR, .input_fm").prop("disabled", true);

      const firestore = firebase.firestore();

      const farmRef = firestore.collection("farms");

      const query = farmRef
        .where("phone_number", "==", this.state.phone_number)
        .where("password", "==", this.state.password);

      query
        .get()
        .then((docs) => {
          if (docs.Wv.docChanges.length) {
            docs.forEach((doc) => {
              if (doc.id !== "") {
                $(".img_spinner").fadeOut();
                this.props.dispatch(
                  getFarm({
                    name: doc.data().name,
                    address_farm: doc.data().address_farm,
                    phone_number: doc.data().phone_number,
                  })
                );
                this.setState({ isLogged: true });
              }
            });
          } else {
            $(".img_spinner").fadeOut();
            $(".btnL, .btnR, .input_fm").prop("disabled", false);
            this.setState({ error: "Fazenda não encontrada" });
          }
        })
        .catch((err) => {
          $(".img_spinner").fadeOut();
          $(".btnL, .btnR, .input_fm").prop("disabled", false);
          this.setState({ error: err.message });
        });
    }
  };

  showRegister = () => {
    $(".login").fadeOut(300);
    setTimeout(() => {
      $(".register_").fadeIn();
    }, 300);

    $("#login")[0].reset();
    this.setState(initalState);
    $(".img_spinner").fadeOut();
  };

  render() {
    return (
      <div className="form_regis login">
        {this.state.isLogged ? <Redirect to="/dashboard" /> : null}
        <div className="subDiv_frm">
          <img src="images/logo.png" alt="" className="logo_re" />
          <h1 className="titl_rg_form">Entre na tua conta</h1>

          <p className="txt_form">
            Expande a tua boa colheita para todos os mercados de Angola, tenha
            mais contractos e melhor gestão das colheitas.
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
                  id="phone_number1"
                  className="input_fm"
                  name="phone_number"
                />
                <label
                  className={this.state.phone_number ? " labelN " : null}
                  htmlFor="phone_number1"
                >
                  Telefone
                </label>
              </div>
              <img
                src="images/icons8_box_important_24px.png"
                alt=""
                title={this.state.error}
                className="img_ipt_status phone_number_"
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
                title={this.state.error}
                className="img_ipt_status password_"
              />
            </div>
          </form>

          {this.state.error ? (
            <p className="err_S err_R">{this.state.error}</p>
          ) : null}

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

          <div id="recaptcha-container3"></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ state });
const mapDispatchToProps = (dispatch) => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(Login);
