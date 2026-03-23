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
      <section className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16" data-aos="fade-up">
        <h2 className="text-6xl font-bold text-center text-blue mb-20">Nuestros valores</h2>

        <div className="flex flex-col gap-24 md:gap-32">
          {/* Equipo */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="flex justify-center items-center">
              <img
                src={valoresImg.equipo}
                alt="Equipo"
                loading="lazy"
                decoding="async"
                className="object-contain select-none w-full h-auto max-w-[28rem] sm:max-w-[32rem]"
                style={{
                  WebkitUserDrag: "none",
                  KhtmlUserDrag: "none",
                  MozUserDrag: "none",
                  OUserDrag: "none",
                }}
              />
            </div>
            <div>
              <div className="flex gap-2 flex-col">
                <h3 className="text-5xl font-bold text-black mb-4">
                  Equipo
                </h3>
              </div>
              <p className="text-black text-base sm:text-lg leading-relaxed mb-4">
                El trabajo en equipo es la base sobre la cual trabajamos con
                comunicación abierta y respeto, sumando nuestras fortalezas para
                aprovechar al máximo las habilidades individuales y alcanzar
                soluciones más innovadoras con eficiencia y excelencia.
              </p>
            </div>
          </div>

          {/* Innovación */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="flex gap-2 flex-col">
                <h3 className="text-5xl font-bold text-black mb-4">
                  Innovación
                </h3>
              </div>
              <p className="text-black text-base sm:text-lg leading-relaxed mb-4">
                La innovación es nuestro motor para explorar tecnologías
                emergentes y metodologías creativas, transformando ideas en
                soluciones eficientes que anticipan y satisfacen las necesidades
                de nuestros clientes.
              </p>
            </div>
            <div className="order-1 md:order-2 flex justify-center items-center">
              <img
                src={valoresImg.innovacion}
                alt="Innovación"
                loading="lazy"
                decoding="async"
                className="object-contain select-none w-full h-auto max-w-[28rem] sm:max-w-[32rem]"
                style={{
                  WebkitUserDrag: "none",
                  KhtmlUserDrag: "none",
                  MozUserDrag: "none",
                  OUserDrag: "none",
                }}
              />
            </div>
          </div>

          {/* Integridad */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="flex justify-center items-center">
              <img
                src={valoresImg.integridad}
                alt="Integridad"
                loading="lazy"
                decoding="async"
                className="object-contain select-none w-full h-auto max-w-[28rem] sm:max-w-[32rem]"
                style={{
                  WebkitUserDrag: "none",
                  KhtmlUserDrag: "none",
                  MozUserDrag: "none",
                  OUserDrag: "none",
                }}
              />
            </div>
            <div>
              <div className="flex gap-2 flex-col">
                <h3 className="text-5xl font-bold text-black mb-4">
                  Integridad
                </h3>
              </div>
              <p className="text-black text-base sm:text-lg leading-relaxed mb-4">
                La integridad es el principio que guía todas nuestras acciones,
                asegurando honestidad, transparencia y coherencia en cada
                acción.
              </p>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-600 mt-20 max-w-6xl text-2xl mx-auto">
          Estos valores nos impulsan a ofrecer lo mejor en cada proyecto,
          asegurando cumplir con las expectativas de nuestros clientes.
        </p>
      </section>
    </>
  );
}

export default enterprice_values;
