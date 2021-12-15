//1.IMPORTACIONES
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Guitars from "./components/Guitars";
import GuitarState from "./context/Guitar/GuitarState"; //estado global
import StoreState from "./context/Store/StoreState";
import Stores from "./components/Stores";
import Single from "./components/Guitars/Single";
import SingleStore from "./components/Stores/SingleStore";
import CreateGuitar from "./components/Guitars/Create";
import CreateStore from "./components/Stores/CreateStore";
//2.FUNCIÓN
const Router = () => {
  return (
    <>
      {/* GuitarState debe ser el padre de BrowserRouter ya que esta pasando todos los datos a todos los componentes */}
      <StoreState>
        <GuitarState>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                {/* localhost:3000/ */}
                <Route index element={<Home />} />
                {/* localhost:3000/registro */}
                <Route path="registro" element={<Register />} />
                {/* localhost:3000/iniciar-sesion */}
                <Route path="iniciar-sesion" element={<Login />} />
                <Route path="guitarras" element={<Guitars />} />
                <Route path="guitarras/crear" element={<CreateGuitar />} />
                <Route path="guitarras/:id" element={<Single />} />
                <Route path="tiendas" element={<Stores />} />
                <Route path="tiendas/crear" element={<CreateStore />} />
                <Route path="tiendas/:id" element={<SingleStore />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </GuitarState>
      </StoreState>
    </>
  );
};
//3.EXPORTACIÓN
export default Router;
