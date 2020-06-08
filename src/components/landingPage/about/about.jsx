import React from "react";
import "./about.scss";
import ReactWOW from "react-wow";

const About = () => {
  const services = [
    {
      img: "images/icons8_system_information_100px.png",
      title: "Alerta de escasseis",
      texto:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti perspiciatis iure, nihil, nam pariatur sed nisi officiis quae excepturi quod incidunt recusandae repellendus impedit. Dolore ipsa debitis consequuntur odit animi?",
    },
    {
      img: "images/icons8_small_business_100px.png",
      title: "Entra em contacto",
      texto:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti perspiciatis iure, nihil, nam pariatur sed nisi officiis quae excepturi quod incidunt recusandae repellendus impedit. Dolore ipsa debitis consequuntur odit animi?",
    },
    {
      img: "images/icons8_container_truck_100px.png",
      title: "Leva os productos",
      texto:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti perspiciatis iure, nihil, nam pariatur sed nisi officiis quae excepturi quod incidunt recusandae repellendus impedit. Dolore ipsa debitis consequuntur odit animi?",
    },
  ];

  return (
    <div className="about" id="about">
      <div className="about_container">
        <ReactWOW animation="slideInLeft" duration="2s" delay="0.4s">
          <h1 className="about_title">
            The heart of our country and other motherfucker shit
          </h1>
        </ReactWOW>

        <ReactWOW animation="slideInLeft" duration="2s" delay="0.4s">
          <p className="about_text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
            quia fugiat obcaecati pariatur magni culpa commodi enim animi nihil
            reiciendis? Repellendus perferendis earum nostrum doloremque laborum
            velit repudiandae quisquam quo?
          </p>
        </ReactWOW>

        <ReactWOW animation="slideInRight" duration="2s" delay="0.4s">
          <p className="about_text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
            quia fugiat obcaecati pariatur magni culpa commodi enim animi nihil
            reiciendis? Repellendus perferendis earum nostrum doloremque laborum
            velit repudiandae quisquam quo?
          </p>
        </ReactWOW>

        <ul className="services">
          {services.map((s) => (
            <ReactWOW animation="fadeIn" duration="2s" delay="0.4s">
              <li className="service_item">
                <img src={s.img} alt="" className="img_item_sr" />
                <h2 className="title_item_sr">{s.title}</h2>
                <p className="text_item_sr">{s.texto}</p>
              </li>
            </ReactWOW>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;
