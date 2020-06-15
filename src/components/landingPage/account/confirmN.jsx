import React, { useState } from "react";
import "./confirmN.scss";
import "./register.scss";
import $ from "jquery";
import firebase from "./../../firebase";
import { useDispatch } from "react-redux";
import { getFarm } from "./../../store/actions/farm";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

const ConfirmPhoneNumber = ({ codigoConfirm, farmData }) => {
  const [codigo, setCodigo] = useState();
  const [erro, setErro] = useState("");
  const [gotFarm, setFar] = useState(false);
  var codConf = codigoConfirm;

  const dispatch = useDispatch();

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

    firebase
      .auth()
      .signInWithPhoneNumber(farmData.phone_number, appVerifier)
      .then((res) => {
        if (res) {
          codConf = res;
          $(".btnL, .btnR").prop("disabled", false);
          $(".overlay_conf").fadeIn();
        }
      })
      .catch((err) => {
        setErro(err.message);
      });
  };

  const confirmCode = () => {
    if (codigo > 0) {
      codConf
        .confirm(codigo)
        .then((res) => {
          if (res.user) {
            addFarmToDatabase();
          }
        })
        .catch((err) => {
          console.log(err);
          setErro("Codigo errado, tente reenviar a mensagem");
        });
    } else {
      setErro("O campo está  vazio");
    }
  };

  const addFarmToDatabase = () => {
    const id = firebase.auth().currentUser.uid;

    const saveUser = () => {
      const firestore = firebase.firestore();

      firestore
        .doc("farms/" + id)
        .set({
          name: farmData.name,
          address_farm: farmData.address_farm,
          phone_number: farmData.phone_number,
          password: farmData.password,
        })
        .then((res) => {
          closeConfirmation();
          dispatch(
            getFarm({
              name: farmData.name,
              address_farm: farmData.address_farm,
              phone_number: farmData.phone_number,
            })
          );
          setFar(true);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    seeIfUserExist(id)
      .then((res) => {
        if (res) {
          setErro("Ja existe");
        }
      })
      .catch((err) => {
        saveUser();
      });
  };

  const seeIfUserExist = (id) => {
    const firestore = firebase.firestore();

    const userExist = new Promise((res, rej) => {
      firestore
        .collection("farms")
        .get()
        .then((users) => {
          console.log(users.Wv.docChanges.length);
          if (users.Wv.docChanges.length > 0) {
            users.forEach((user) => {
              if (user.id === id) {
                res(true);
              } else {
                rej(false);
              }
            });
          } else {
            rej(false);
          }
        });
    });

    return userExist.then((res) => {
      return res;
    });
  };

  const closeConfirmation = () => {
    $(".overlay_confirm").fadeOut();
  };

  return (
    <div className="overlay_confirm overlay_conf">
      {gotFarm ? <Redirect to="/dashboard" /> : null}

      <div className="div_conf">
        <div className="div_frm_cnf">
          <button onClick={closeConfirmation} className="btnClose">
            <img src="images/icons8_delete_50px_4.png" alt="" />
          </button>
          <h1 className="titl_cnf">Verificação do Telefone</h1>
          <p className="text_cnf">
            Enviamos um código de verificação no número {farmData.phone_number},
            se não click: <mark onClick={resentCode}>Reenviar o código</mark> .
          </p>

          {erro ? <p className="err_S err_cfr"> {erro} </p> : null}
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

export default ConfirmPhoneNumber;
