import React from "react";
import "./about.scss";
import ReactWOW from "react-wow";

const About = () => {
  const services = [
    {
      img: "images/icons8_system_information_100px.png",
      title: "Alerta de escasseis",
      texto:
        "Quando um mercado ou grupo de pessoas ligado ao Projecto solicita uma quantidade de producto que está em falta no seu stock a App alerta a fazenda mais próxima Para que possa fornecer o producto",
    },
    {
      img: "images/icons8_small_business_100px.png",
      title: "Entra em contacto",
      texto:
        "A fazenda recebe o alerta a partir da App, e entre em contacto para fazer o negocio com o mercado ou o grupo de pessoas",
    },
    {
      img: "images/icons8_container_truck_100px.png",
      title: "Leve os productos",
      texto:
        "Depois de fechar o negocio, a fazenda pode pedir um transporte de mercadoria do projecto se não tiver cujo o valor será descontado consoante a trajectória e a venda.",
    },
  ];

  return (
    <div className="about" id="about">
      <div className="about_container">
        <ReactWOW animation="slideInLeft" duration="2s" delay="0.4s">
          <h1 className="about_title">
            A agricultura é uma das riquezas do nosso país
          </h1>
        </ReactWOW>

        <ReactWOW animation="slideInLeft" duration="2s" delay="0.4s">
          <p className="about_text">
            Agricultura Activa é uma App que reúne lojas que trabalham ou
            necessitam de productos agrícolas, como restaurantes, supermercados
            e fazenda para que possam ser conectadas e facilitar a prestação de
            serviços para cada um.
          </p>
        </ReactWOW>

        <ReactWOW animation="slideInRight" duration="2s" delay="0.4s">
          <p className="about_text">
            A App registas as lojas no sistema, pega as localizações das mesmas,
            quando estiverem com o seu estoque baixo de alimentos, eles podem
            alertar a partir da App e a App alerta a fazenda que está mais
            próxima e que tem o productos pedido pela loja e para assim a
            fazenda fazer uma colheita com uma trajectória e destino já traçado.
          </p>
        </ReactWOW>

        <ul className="services">
          {services.map((s, key) => (
            <li key={key} className="service_item">
              <img src={s.img} alt="" className="img_item_sr" />
              <h2 className="title_item_sr">{s.title}</h2>
              <p className="text_item_sr">{s.texto}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;
