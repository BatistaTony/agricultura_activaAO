import React from "react";
import ReactWOW from 'react-wow'

export default function ItemGallery({ name }) {
  const styleI = {
    background: `url(images/gallery/${name}.jpg`,
    backgroundSize: "cover",
  };

  return (
    <ReactWOW animation="fadeIn" duration="2s" delay="0.4s">
      <div className="itemGallery" style={styleI}>
        <div className="inforItem">
          <div className="texD">
            <h1 className="local">Huila</h1>
            <l className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </l>
          </div>
        </div>
      </div>
    </ReactWOW>
  );
}
