import React, { useContext } from "react";
import GuitarContext from "../../../context/Guitar/GuitarContext";
import { useParams } from "react-router-dom";
const Single = () => {
  const ctx = useContext(GuitarContext);
  const { getGuitar, singleGuitar } = ctx;
  //obtener el id de la url
  const params = useParams();
  const id = params.id;
  return (
    <div>
      Pagina individual de guitarra
      <button
        onClick={() => {
          getGuitar(id);
        }}
      >
        Obtener guitarra individual
      </button>
      <h3>Marca: {singleGuitar.nombre}</h3>
      <p>Descripcion:{singleGuitar.descripcion}</p>
      <p>Precio: {singleGuitar.precio}</p>
    </div>
  );
};

export default Single;
