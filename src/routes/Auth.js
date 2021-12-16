import React, { useContext, useEffect, useState } from "react";

import { Navigate } from "react-router-dom";

import UserContext from "../context/User/UserContext";

export default function AuthRoute({ component: Component, ...props }) {
  //destructuracion de paramateros.
  //props adicionales del Router.js ...props
  //todas las props q vengan despues ...props
  //extraer los componented hay q extraerla en mayuscula Component

  const userCtx = useContext(UserContext);
  const { authStatus, verifyingToken } = userCtx;

  const [loading, setLoading] = useState(true);

  //verificacion del token
  useEffect(async () => {
    await verifyingToken();
    setLoading(false);
  }, [authStatus]);

  return <>{authStatus ? <Navigate replace to="/" /> : <Component />}</>;
}
