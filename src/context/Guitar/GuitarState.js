//ESTADO GLOBAL:
//TODOS LOS COMPONENTES VAN A TENER ACCESO A TODA LA INFO QUE TENGAMOS EN ESTE ESTADO

//ARQUITECTURA QUE SE UTILIZA PARA GENERAR EL ESTADO GLOBAL SE LE CONOCE COMO FLUX
//ARQUITECTURA FLUX:
//4 FUNDAMENTOS
//-Action
//-Dispatcher
//-Store
//-View

import { useReducer } from "react";
import GuitarContext from "./GuitarContext";
import GuitarReducer from "./GuitarReducer";
import axiosClient from "./../../config/axios";
const GuitarState = (props) => {
  //1.INITIAL STATE (ESTADO INICIAL)
  //el estado inicial debe ser un objeto

  const initialState = {
    guitars: [],
    singleGuitar: {
      _id: "",
      nombre: "",
      descripcion: "",
      color: "",
      precio: "",
      imagen: "",
    },
    hola: "mundo",
  };

  //2.CONFIGURACION DE REDUCER Y CREACION DE ESTADO GLOBAL
  //para cambios en el estado inicial
  //REDUCER son funciones que alteran el estado global
  //[globalState,dispatch] el dispatch es un asistente para enviar datos a los reducers
  //useReducer(Funciones que van a manipular el estado global,estado inicial)
  const [globalState, dispatch] = useReducer(GuitarReducer, initialState);

  //3.FUNCIONES DE CAMBIO EN ESTADO GLOBAL
  const changeText = () => {
    dispatch({
      //este objeto se conoce como action
      type: "CHANGE_TEXT",
      payload: "Estoy aprendiendo Context sin morir", //valor que ocuparemos para cambiar el estado
    });
  };

  const getGuitars = async () => {
    const res = await axiosClient.get("guitars/readall");
    const list = res.data.data;
    dispatch({
      //este objeto se conoce como action
      type: "GET_GUITARRA",
      payload: list, //valor que ocuparemos para cambiar el estado
    });
  };

  //LEER UNA GUITARRA
  const getGuitar = async (guitarId) => {
    const res = await axiosClient.get(`guitars/readone/${guitarId}`);
    const selectedGuitar = res.data.data;
    console.log(selectedGuitar);
    dispatch({
      type: "GET_GUITAR",
      payload: selectedGuitar,
    });
  };
  //CREAR GUITARRA
  const createGuitar = async (form) => {
    const res = await axiosClient.post("guitars/create", form);
    console.log(res);
  };
  //EDITAR GUITARRA
  const updateGuitar = async (form, idGuitar) => {
    const res = await axiosClient.put(`guitars/edit/${idGuitar}`, form);

    console.log(res);
  };

  //4.RETORNO
  //para poder transmitir la info necesitamos un provider: El cual podra distribuir el estado global al resto de los componentes
  return (
    //ejecutamos el Context como componente con su metodo Provider
    //Provee a todos los componentes a traves del value
    //dentro de los values tambien hay q pasar las funciones
    <GuitarContext.Provider
      value={{
        guitars: globalState.guitars,
        singleGuitar: globalState.singleGuitar,
        hola: globalState.hola,
        changeText,
        getGuitars,
        getGuitar,
        createGuitar,
        updateGuitar,
      }}
    >
      {/* Todos los componentes que esten en medio, tendran acceso al provider
    algo como el Outlet
     */}
      {props.children}
    </GuitarContext.Provider>
  );
};

export default GuitarState;
