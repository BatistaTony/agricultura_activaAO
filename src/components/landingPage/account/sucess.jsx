import React from "react";
import "./confirmN.scss";
import { Redirect } from "react-router-dom";

const RegisteredWithSucess = () => {
  return (
    <div className="overlay_confirm sucessDiv">
      <div className="div_conf">
        <div className="div_frm_cnf div_sc_dv">
          <h1 className="titl_cnf titl_scDv">Registada com Sucesso</h1>
          <img src="images/Image21.png" alt="" className="img_dn_sc" />
        </div>
      </div>
    </div>
  );
};

export default RegisteredWithSucess;
