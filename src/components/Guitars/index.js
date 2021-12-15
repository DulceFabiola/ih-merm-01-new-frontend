import React, { useEffect, useContext } from "react";
import GuitarContext from "../../context/Guitar/GuitarContext";
import { Link } from "react-router-dom";
const Guitars = () => {
  //ESTADO GLOBAL
  const ctx = useContext(GuitarContext);
  const { guitars, hola, changeText, getGuitars } = ctx;
  //ESTADO LOCAL

  return (
    <>
      <p>Listado de Guitarras</p>
      {/* <p>{hola}</p>
      <button
        onClick={() => {
          changeText();
        }}
      >
        Cambiar Texto
      </button> */}

      <button
        onClick={() => {
          getGuitars();
        }}
      >
        Listar guitarras
      </button>
      <div>
        <h2>Listado de guitarras</h2>
        <ul>
          {guitars.map((element) => {
            return (
              <li key={element._id}>
                <Link to={`/guitarras/${element._id}`}>
                  <p>Marca: {element.nombre}</p>
                </Link>
                <p>Precio:{element.precio}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Guitars;
