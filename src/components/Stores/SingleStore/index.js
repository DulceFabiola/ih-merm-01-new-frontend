import React, { useContext, useEffect } from "react";
import StoreContext from "../../../context/Store/StoreContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const SingleStore = () => {
  const ctx = useContext(StoreContext);
  const { getStore, singleStore } = ctx;

  const params = useParams();
  const id = params.id;
  useEffect(() => {
    getStore(id);
  }, []);
  return (
    <>
      <div class="bg-white">
        <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
          <div class="lg:max-w-lg lg:self-end">
            <Link to={`/tiendas/${id}/editar`}>
              <button
                type="button"
                class="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Editar tienda
              </button>
            </Link>
            <div class="mt-4">
              <h1 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {singleStore.domicilio}
              </h1>
            </div>

            <section aria-labelledby="information-heading" class="mt-4">
              <div class="flex items-center">
                <p class="text-lg text-gray-900 sm:text-xl">
                  Tel: {singleStore.telefono}
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleStore;
