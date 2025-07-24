const imageModules = import.meta.glob("@assets/images/valores/*.webp", {
  eager: false,
});
import { useEffect, useState } from "react";

function enterprice_values() {
  const [valoresImg, setValoresImg] = useState({});

  useEffect(() => {
    const loadImages = async () => {
      const loaded = {};
      for (const path in imageModules) {
        const mod = await imageModules[path]();
        if (path.includes("equipo")) loaded.equipo = mod.default;
        if (path.includes("integridad")) loaded.integridad = mod.default;
        if (path.includes("innovacion")) loaded.innovacion = mod.default;
      }
      setValoresImg(loaded);
    };
    loadImages();
  }, []);
  return (
    <>
      {/* Valores */}
      <section
        className="my-28 px-6 lg:px-16 max-w-6xl mx-auto"
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-10 text-slate-500">
          Nuestros valores
        </h2>
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {/* Equipo */}
          <div className="rounded-md shadow-lg flex flex-col items-center overflow-hidden transform transition duration-300">
            <div className="max-h-1/4 overflow-hidden bg-blue-900">
              <img
                src={valoresImg.equipo}
                alt="Equipo"
                loading="lazy"
                className="w-full h-full object-cover rounded-t-md"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Equipo</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                El trabajo en equipo es la base sobre la cual trabajamos con
                comunicación abierta y respeto, sumando nuestras fortalezas para
                aprovechar al máximo las habilidades individuales y alcanzar
                soluciones más innovadoras con eficiencia y excelencia.
              </p>
            </div>
          </div>

          {/* Innovación */}
          <div className="rounded-md shadow-lg flex flex-col items-center overflow-hidden transform transition duration-300">
            <div className="max-h-1/2 overflow-hidden bg-blue-900">
              <img
                src={valoresImg.innovacion}
                alt="Innovación"
                loading="lazy"
                className="w-full h-full object-cover rounded-t-md"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Innovación
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                La innovación es nuestro motor para explorar tecnologías
                emergentes y metodologías creativas, transformando ideas en
                soluciones eficientes que anticipan y satisfacen las necesidades
                de nuestros clientes.
              </p>
            </div>
          </div>

          {/* Integridad*/}
          <div className="rounded-md shadow-lg flex flex-col items-center overflow-hidden transform transition duration-300">
            <div className="max-h-1/4 overflow-hidden bg-blue-900">
              <img
                src={valoresImg.integridad}
                alt="Integridad"
                loading="lazy"
                className="w-full h-full object-cover rounded-t-md"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Integridad
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                La integridad es el principio que guía todas nuestras acciones,
                asegurando honestidad, transparencia y coherencia en cada
                acción.
              </p>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-600 mt-14 max-w-3xl mx-auto text-base">
          Estos valores nos impulsan a ofrecer lo mejor en cada proyecto,
          asegurando cumplir con las expectativas de nuestros clientes.
        </p>
      </section>
    </>
  );
}

export default enterprice_values;
