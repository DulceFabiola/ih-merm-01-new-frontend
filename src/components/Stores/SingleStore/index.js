import React, { useContext } from "react";
import StoreContext from "../../../context/Store/StoreContext";
import { useParams } from "react-router-dom";
const SingleStore = () => {
  const ctx = useContext(StoreContext);
  const { getStore, singleStore } = ctx;

  const params = useParams();
  const id = params.id;
  return (
    <div>
      Pagina individual de store
      <button
        onClick={() => {
          getStore(id);
        }}
      >
        Obtener una tienda
      </button>
      <h3>Store</h3>
      <h4>Descripcion:{singleStore.domicilio}</h4>
      <h4>Precio: {singleStore.telefono}</h4>
    </div>
  );
};

export default SingleStore;
