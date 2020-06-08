import React from "react";
import "./gallery.scss";
import ItemGallery from "./item";
import ReactWOW from 'react-wow'

export default function Gallery() {
  return (
    <div className="gallery">
      <div className="divM">
        <div className="divOne">
          <div className="divOne_1">
            <ItemGallery name={1} />
            <ItemGallery name={2} />
          </div>
          <ItemGallery name={4} />
        </div>

        <div className="divTwo">
          <ItemGallery name={3} />
          <div className="divTow_1">
            <ItemGallery name={5} />
            <ItemGallery name={6} />
          </div>
        </div>
      </div>
    </div>
  );
}
