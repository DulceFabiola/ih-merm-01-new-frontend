import React, { useEffect, useContext } from "react";
import StoreContext from "../../context/Store/StoreContext";
import { Link } from "react-router-dom";
const Stores = () => {
  //ESTADO GLOBAL
  const ctx = useContext(StoreContext);
  const { stores, hola, changeText, getStores } = ctx;
  //ESTADO LOCAL
  useEffect(() => {
    getStores();
  }, []); // CUANDO HAY UN ARREGLO VACÍO, SIGNIFICA QUE VA A EJECUTARSE UNA SOLA VEZ.

  return (
    <>
      <div>
        <div className="max-w-7xl mx-auto my-8 px-4 sm:px-6 lg:px-8">
          <div class="md:flex md:items-center md:justify-between">
            <div class="flex-1 min-w-0">
              <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                Listado de Tiendas
              </h2>
            </div>
            <div class="mt-4 flex md:mt-0">
              <Link to="/tiendas/crear">
                <button
                  type="button"
                  class="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Crear tienda
                </button>
              </Link>
            </div>
          </div>

          <div class="bg-white">
            <div>
              <div class="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {stores.map((element) => {
                  return (
                    <>
                      <div class="">
                        <div class="pt-10 pb-4 text-center">
                          <h3 class="text-sm font-medium text-gray-900">
                            <Link to={`/tiendas/${element._id}`}>
                              {element.domicilio}
                            </Link>
                          </h3>
                          <div class="mt-3 flex flex-col items-center">
                            <p class="mt-1 text-sm text-gray-500">
                              {element.telefono}
                            </p>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stores;
