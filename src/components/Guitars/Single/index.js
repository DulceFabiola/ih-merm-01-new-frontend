import React, { useContext, useEffect } from "react";
import GuitarContext from "../../../context/Guitar/GuitarContext";
import { useParams } from "react-router-dom";
const Single = () => {
  const ctx = useContext(GuitarContext);
  const { getGuitar, singleGuitar } = ctx;
  //obtener el id de la url
  const params = useParams();
  const id = params.id;
  useEffect(() => {
    getGuitar(id);
  }, []);
  return (
    // <div>
    //   Pagina individual de guitarra
    //   <h3>Marca: {singleGuitar.nombre}</h3>
    //   <p>Descripcion:{singleGuitar.descripcion}</p>
    //   <p>Precio: {singleGuitar.precio}</p>
    // </div>
    <>
      <div class="bg-white">
        <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
          <div class="lg:max-w-lg lg:self-end">
            <div class="mt-4">
              <h1 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {singleGuitar.nombre}
              </h1>
            </div>

            <section aria-labelledby="information-heading" class="mt-4">
              <h2 id="information-heading" class="sr-only">
                Información de Producto
              </h2>

              <div class="flex items-center">
                <p class="text-lg text-gray-900 sm:text-xl">
                  ${singleGuitar.precio}
                </p>
              </div>

              <div class="mt-4 space-y-6">
                <p class="text-base text-gray-500">
                  {singleGuitar.descripcion}
                </p>
              </div>

              <div class="mt-6 flex items-center">
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <p class="ml-2 text-sm text-gray-500">En existencia</p>
              </div>
            </section>
          </div>

          <div class="mt-10 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-center">
            <div class="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
              <img
                src={singleGuitar.imagen}
                alt="Model wearing light green backpack with black canvas straps and front zipper pouch."
                class="w-full h-full object-center object-cover"
              />
            </div>
          </div>

          <div class="mt-10 lg:max-w-lg lg:col-start-1 lg:row-start-2 lg:self-start">
            <section aria-labelledby="options-heading">
              <h2 id="options-heading" class="sr-only">
                Product options
              </h2>

              <form>
                <div class="sm:flex sm:justify-between">
                  <fieldset>
                    <legend class="block text-sm font-medium text-gray-700">
                      Detalles:
                    </legend>
                    <div class="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <label class="relative block border border-gray-300 rounded-lg p-4 cursor-pointer focus:outline-none">
                        <input
                          type="radio"
                          name="size-choice"
                          value="18L"
                          class="sr-only"
                          aria-labelledby="size-choice-0-label"
                          aria-describedby="size-choice-0-description"
                        />
                        <p
                          id="size-choice-0-label"
                          class="text-base font-medium text-gray-900"
                        >
                          Color:
                        </p>
                        <p
                          id="size-choice-0-description"
                          class="mt-1 text-sm text-gray-500"
                        >
                          {singleGuitar.color}
                        </p>

                        <div
                          class="absolute -inset-px rounded-lg border-2 pointer-events-none"
                          aria-hidden="true"
                        ></div>
                      </label>
                    </div>
                  </fieldset>
                </div>

                <div class="mt-10">
                  <button
                    type="submit"
                    class="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                  >
                    Comprar Guitarra
                  </button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Single;
