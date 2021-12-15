import React, { useEffect, useContext } from "react";
import StoreContext from "../../context/Store/StoreContext";
import { Link } from "react-router-dom";
const Stores = () => {
  //ESTADO GLOBAL
  const ctx = useContext(StoreContext);
  const { stores, hola, changeText, getStores } = ctx;
  //ESTADO LOCAL

  return (
    <>
      <p>Listado de Stores</p>
      <p>{hola}</p>
      <button
        onClick={() => {
          changeText();
        }}
      >
        Cambiar Texto de stores
      </button>
      <br />

      <button
        onClick={() => {
          getStores();
        }}
      >
        Listar stores
      </button>

      <div>
        <h2>Listado de stores</h2>
        <ul>
          {stores.map((element) => {
            return (
              <li key={element._id}>
                <Link to={`/tiendas/${element._id}`}>
                  <h4>Domicilio: {element.domicilio}</h4>
                </Link>
                <h4>Telefono:{element.telefono}</h4>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Stores;
