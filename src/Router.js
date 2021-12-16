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
import UserState from "./context/User/UserState";
import Edit from "./components/Guitars/Edit";
import EditStore from "./components/Stores/EditStore";
import Auth from "./routes/Auth";
import Private from "./routes/Private";
import Profile from "./components/User/Profile";

//2.FUNCIÓN
const Router = () => {
  return (
    <>
      {/* GuitarState debe ser el padre de BrowserRouter ya que esta pasando todos los datos a todos los componentes */}
      <UserState>
        <StoreState>
          <GuitarState>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Layout />}>
                  {/* localhost:3000/ */}
                  <Route index element={<Home />} />
                  {/* 1.Rutas de autenticacion
                  Evitan que un usuari ologeado pueda entrar a Register y Login
                   */}
                  {/* localhost:3000/registro */}
                  {/* localhost:3000/registro */}
                  <Route
                    path="registro" //path indica cual es la url a la q quiero acceder
                    element={
                      <Auth
                        component={Register} //element paso un componente que recibe un component
                      />
                    }
                  />
                  {/* localhost:3000/iniciar-sesion */}
                  {/* localhost:3000/registro */}
                  <Route
                    path="iniciar-sesion"
                    element={<Auth component={Login} />}
                  />
                  {/* localhost:3000/profile */}
                  <Route
                    path="profile"
                    element={<Private component={Profile} />}
                  />
                  <Route path="guitarras" element={<Guitars />} />
                  <Route path="guitarras/crear" element={<CreateGuitar />} />
                  <Route path="guitarras/:id" element={<Single />} />
                  <Route path="guitarras/:id/editar" element={<Edit />} />
                  <Route path="tiendas" element={<Stores />} />
                  <Route path="tiendas/crear" element={<CreateStore />} />
                  <Route path="tiendas/:id" element={<SingleStore />} />
                  <Route path="tiendas/:id/editar" element={<EditStore />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </GuitarState>
        </StoreState>
      </UserState>
    </>
  );
};
//3.EXPORTACIÓN
export default Router;
