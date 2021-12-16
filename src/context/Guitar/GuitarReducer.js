//funciones que modificaran el estado global

const reducer = (globalState, action) => {
  switch (action.type) {
    case "CHANGE_TEXT":
      return {
        //operador spread, hay que clonar el estado global y hacer el cambio
        ...globalState,
        hola: action.payload,
      };

    case "GET_GUITARRA":
      return {
        //operador spread, hay que clonar el estado global y hacer el cambio
        ...globalState,
        guitars: action.payload,
      };

    case "GET_GUITAR":
    case "UPDATE_GUITAR":
      return {
        ...globalState,

        singleGuitar: action.payload,
      };

    default:
      return globalState;
  }
};
export default reducer;
