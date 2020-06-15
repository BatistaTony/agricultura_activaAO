import React from "react";
import "./gallery.scss";
import ItemGallery from "./item";
import { useState } from "react";

export default function Gallery() {
  const [prov, setPro] = useState([
    {
      provincia: "Fazenda Chivela, Benguela",
      texto: "Colheita de Jindundo e entregado ao mercado Kero",
    },
    {
      provincia: "Fazenda GuachaLuka, Luanda",
      texto: "Colheita de feita para um restaurante",
    },

    {
      provincia: "Fazenda Mushi, Malanje",
      texto: "Colhetando para entregar ao mercado informal",
    },

    {
      provincia: "Benguela",
      texto: "Colheita de tangerina e entregado ao mercado Kero",
    },

    {
      provincia: "Benguela",
      texto: "Colheita de tangerina e entregado ao mercado Kero",
    },

    {
      provincia: "Benguela",
      texto: "Colheita de tangerina e entregado ao mercado Kero",
    },
  ]);

  return (
    <div className="gallery">
      <div className="divM">
        <div className="divOne">
          <div className="divOne_1">
            <ItemGallery name={1} prov={prov[0]} />
            <ItemGallery name={2} prov={prov[1]} />
          </div>
          <ItemGallery name={4} prov={prov[2]} />
        </div>

        <div className="divTwo">
          <ItemGallery name={3} prov={prov[3]} />
          <div className="divTow_1">
            <ItemGallery name={5} prov={prov[4]} />
            <ItemGallery name={6} prov={prov[5]} />
          </div>
        </div>
      </div>
    </div>
  );
}
