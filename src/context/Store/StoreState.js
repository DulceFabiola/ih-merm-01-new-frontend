import { useReducer } from "react";
import StoreContext from "./StoreContext";
import StoreReducer from "./StoreReducer";
import axiosClient from "./../../config/axios";

const StoreState = (props) => {
  //1.INITIAL STATE (ESTADO INICIAL)
  const initialState = {
    stores: [],
    singleStore: {
      _id: "",
      domicilio: "",
      telefono: "",
    },
    hola: "stores",
  };

  //2.CONFIGURACION DE REDUCER Y CREACION DE ESTADO GLOBAL
  const [globalState, dispatch] = useReducer(StoreReducer, initialState);

  //3.FUNCIONES DE CAMBIO EN ESTADO GLOBAL
  const changeText = () => {
    dispatch({
      //este objeto se conoce como action
      type: "CHANGE_TEXT",
      payload: "Estoy aprendiendo Context en Stores", //valor que ocuparemos para cambiar el estado
    });
  };

  const getStores = async () => {
    const res = await axiosClient.get("stores/readall");
    const list = res.data.data;
    dispatch({
      type: "GET_STORES",
      payload: list,
    });
  };

  const getStore = async (storeId) => {
    const res = await axiosClient.get(`stores/readone/${storeId}`);
    const selectedStore = res.data.data;
    dispatch({
      type: "GET_STORE",
      payload: selectedStore,
    });
  };

  //CREAR TIENDA
  const createStore = async (form) => {
    const res = await axiosClient.post("stores/create", form);
    console.log(res);
  };
  //4.RETORNO
  return (
    <StoreContext.Provider
      value={{
        stores: globalState.stores,
        singleStore: globalState.singleStore,
        hola: globalState.hola,
        changeText,
        getStores,
        getStore,
        createStore,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};
export default StoreState;
