import React, { useState } from "react";
import "./confirmN.scss";
import "./register.scss";
import $ from "jquery";
import firebase from './firebase'
import RegisteredWithSucess from "./sucess";

const ConfirmarTelefone = ({ codigoConfirm, telefone }) => {
  const [codigo, setCodigo] = useState(0);
  const [erro, setErro] = useState("");
  const [gotUser, setUser] = useState(false)
  var codConf = codigoConfirm

  const handleChange = (e) => {
    setCodigo(e.target.value);
    $(".codigo_").removeClass("img_sh");
    setErro("");
  };

  const resentCode = () => {
    $(".codigo_").removeClass("img_sh");
    setErro("");

    const appVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container2"
    );

      firebase.auth()
        .signInWithPhoneNumber(telefone, appVerifier)
        .then((res) => {
          if (res) {
            codConf = res
            $(".img_sp_").removeClass("shos_spinner");
            $(".btnL, .btnR").prop("disabled", false);
            $(".overlay_conf").fadeIn();
          }
        })
  };

 

  const confirmCode = () => {
    if (codigo > 0) {

    

      codConf
        .confirm(codigo)
        .then((res) => {
          if (res.user) {
            closeConfirmation()
            $(".sucessDiv").fadeIn()
            setUser(true)
          }
        })
        .catch((err) => {
          setErro("Codigo errado, tente reenviar a mensagem");
        });

     
      // if () {
      //   $(".img_spinner_conf").animate({ opacity: "1" });
      // } else {
      //   setErro("Codigo errado, tente reenviar a mensagem")
      // }
    } else {
      $(".codigo_").addClass("img_sh");
      setErro("O campo está  vazio");
    }
  };

  const closeConfirmation = () => {
    $(".overlay_confirm").fadeOut();
  };

  return (
    <div className="overlay_confirm overlay_conf">

      <RegisteredWithSucess isReal={gotUser} />

      <div className="div_conf">
        <div className="div_frm_cnf">
          <button onClick={closeConfirmation} className="btnClose">
            <img src="images/icons8_delete_50px_4.png" alt="" />
          </button>
          <h1 className="titl_cnf">Codigo de verificação do telefone</h1>
          <p className="text_cnf">
            Enviamos um código de verificação no numero: 945 555 565, se não
            click: <mark onClick={resentCode}>Reenviar o código</mark> .
          </p>

          {erro ? <p className="err_S"> {erro} </p> : null}
          <div className="form_group form_group_conf">
            <img
              src="images/icons8_password_24px.png"
              alt=""
              className="img_frm_gr"
            />
            <div className="gr_ipt">
              <input
                type="number"
                onChange={handleChange}
                id="codigo"
                className="input_fm"
                name="codigo"
                placeholder="Codido"
              />
            </div>

            <img
              src="images/icons8_box_important_24px.png"
              alt=""
              title={erro}
              className="img_ipt_status codigo_"
            />
          </div>

          <img
            src="images/icons8_Iphone_Spinner_32px.png"
            alt=""
            className="img_spinner img_spinner_conf"
          />

          <div className="frm_btn div_btn_cnf">
            <button onClick={confirmCode} className="btn_rg btnConfirm">
              Confirmar
            </button>
          </div>
        </div>

        <div id="recaptcha-container2"></div>
      </div>
    </div>
  );
};

export default ConfirmarTelefone;
