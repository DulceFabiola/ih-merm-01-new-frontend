const reducer = (globalState, action) => {
  switch (action.type) {
    case "CHANGE_TEXT":
      return {
        //operador spread, hay que clonar el estado global y hacer el cambio
        ...globalState,
        hola: action.payload,
      };

    case "GET_STORES":
      return {
        ...globalState,
        stores: action.payload,
      };
    case "GET_STORE":
      return {
        ...globalState,
        singleStore: action.payload,
      };

    default:
      return globalState;
  }
};
export default reducer;
