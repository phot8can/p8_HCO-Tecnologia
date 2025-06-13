import React from "react";
import { useLocation } from "react-router-dom";
import products from "../data/products.json";

function Services() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoria = queryParams.get("categoria");
  const item = queryParams.get("item");

  const normalizedItem = item?.toUpperCase();
  const matchedCategory = Object.entries(products).find(([key]) =>
    key.toUpperCase().includes(normalizedItem || "")
  );

  const matchedCategoryName = matchedCategory?.[0];
  const matchedData = matchedCategory?.[1];

  return (
    <div className="my-32 mb-96">
      <h1 className="text-2xl font-bold mb-4">Información del servicio</h1>
      {categoria && (
        <p className="text-lg mb-2">
          <strong>Categoría:</strong> {categoria}
        </p>
      )}
      {categoria != "clientes" ? (
        <>
          {item && (
            <p className="text-lg mb-4">
              <strong>Item:</strong> {item}
            </p>
          )}
          {matchedData ? (
            <div>
              <h2 className="text-xl font-semibold">{matchedCategoryName}</h2>
              <p className="mb-2">{matchedData.descripcion_categoria}</p>
              <ul className="list-disc ml-6">
                {matchedData.productos.map((producto, idx) => (
                  <li key={idx}>
                    <strong>{producto.nombre}:</strong>{" "}
                    {producto.descripcion_producto}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p className="text-red-500">
              No se encontraron productos relacionados.
            </p>
          )}
        </>
      ) : (
        <>
          <div className="mt-36">
            <h1 className="text-3xl">
              Ciente: <b>{item}</b>
            </h1>
            <h2 className="text-2xl">
              Aqui puede hablar sobre la historia o productos que se le fabrican
              a {item.toUpperCase()}.
            </h2>
          </div>
        </>
      )}
    </div>
  );
}

export default Services;
