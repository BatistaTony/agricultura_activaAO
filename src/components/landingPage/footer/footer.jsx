import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
     

      <div className="di_footer_">
        <ul className="list_rd_sc">
          <li>
            <a target="_blank" href="www.facebook/agricultura_active.com">
              <img src="images/icons8_facebook_f_40px.png" alt="" />
            </a>
          </li>
          <li>
            <a target="_blank" href="www.facebook/agricultura_active.com">
              <img src="images/icons8_twitter_40px.png" alt="" />
            </a>
          </li>
          <li>
            <a target="_blank" href="www.facebook/agricultura_active.com">
              <img src="images/icons8_instagram_40px.png" alt="" />
            </a>
          </li>
        </ul>

        <p className="addr_">Luanda, Talatona Pred 4</p>
        <p className="addr_">+224 954 234 545</p>

        <div className="div_bottom">
          <p className="cpy">
            © Agricultura Activa 2020. Todos Os Direitos Reservados
          </p>

          <img src="images/icons8_angola_100px.png" alt="Angola" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
