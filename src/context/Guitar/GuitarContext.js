// INICIALIZACIÓN DEL CONTEXT,
//ESTO SIGNIFICA QUE EMPIEZA CON UN VALOR INICIAL DE NULL,
//PERO, CONFORME VAYAMOS AGREGANDO NUEVOS VALORES, ESE NULL VA A CAMBIAR A UN OBJETO
//Podemos proveer info en tiempo real
import { createContext } from "react";

//variables globales que se puedes distribuir por todos los componentes
//equivalente a los props
const GuitarContext = createContext(null);
export default GuitarContext;
