import React from "react";
import ReactWOW from "react-wow";

export default function ItemGallery({ name, prov }) {
  const styleI = {
    background: `url(images/gallery/${name}.jpg`,
    backgroundSize: "cover",
  };

  const { provincia, texto } = prov;

  return (
    <ReactWOW animation="fadeIn" duration="2s" delay="0.4s">
      <div className="itemGallery" style={styleI}>
        <div className="inforItem">
          <div className="texD">
            <h1 className="local">{provincia}</h1>
            <p className="desc">{texto} </p>
          </div>
        </div>
      </div>
    </ReactWOW>
  );
}
