import img01 from "../assets/images/machines/1S5A0138.jpeg";
import img02 from "../assets/images/production/1S5A0155.jpeg";
import img03 from "../assets/images/products/1S5A0224.jpeg";

function enterprice_values() {
  return (
    <>
      {/* Misión */}
      <section className="my-16 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <img
          src={img02}
          alt="Misión"
          className="rounded-lg shadow-md w-full h-auto object-cover"
        />
        <div>
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Nuestra misión
          </h2>
          <p className="text-gray-700 mb-4">
            En HCO, Tecnología Industrial, nuestra misión es ser el principal
            aliado en la automatización industrial, proporcionando soluciones
            innovadoras y de alta calidad que optimicen los procesos de
            producción de nuestros clientes.
          </p>
          <p className="text-gray-700">
            Nos comprometemos a ofrecer un servicio integral que abarca desde el
            diseño y la integración de tecnologías avanzadas hasta la
            fabricación de maquinaria. Brindamos soporte técnico personalizado y
            continuo para asegurar eficiencia y confiabilidad.
          </p>
        </div>
      </section>

      {/* Visión */}
      <section className="my-16 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Nuestra visión
          </h2>
          <p className="text-gray-700 mb-4">
            Nuestra visión es ser reconocidos como el principal proveedor de
            automatización industrial en nuestra ciudad, ofreciendo soluciones
            tecnológicas que transformen los procesos productivos.
          </p>
          <p className="text-gray-700">
            Buscamos expandir nuestra presencia en el mercado, consolidándonos
            como un referente de excelencia, innovación y compromiso con la
            satisfacción total del cliente.
          </p>
        </div>
        <img
          src={img01}
          alt="Visión"
          className="rounded-lg shadow-md w-full h-auto object-cover"
        />
      </section>

      {/* Valores */}
      <section className="my-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue mb-8">
          Nuestros valores
        </h2>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          {/* Compromiso */}
          <div className="bg-white rounded-md shadow-lg flex flex-col items-center overflow-hidden">
            <div className="h-1/2 overflow-hidden bg-blue">
              <img
                src={img01}
                alt="Compromiso"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold">Compromiso</h3>
              <p className="text-sm">
                Dedicación total a cada proyecto, cumpliendo plazos y
                garantizando calidad sin comprometer objetivos.
              </p>
            </div>
          </div>

          {/* Innovación */}
          <div className="bg-white rounded-md shadow-lg flex flex-col items-center overflow-hidden">
            <div className="h-1/2 overflow-hidden bg-blue">
              <img
                src={img02}
                alt="Innovación"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Innovación
              </h3>
              <p className="text-sm">
                Buscamos ideas nuevas para mejorar procesos y aplicar
                tecnologías de vanguardia en automatización.
              </p>
            </div>
          </div>

          {/* Trabajo en equipo */}
          <div className="bg-white rounded-md shadow-lg flex flex-col items-center overflow-hidden">
            <div className="h-1/2 overflow-hidden bg-blue">
              <img
                src={img03}
                alt="Trabajo en equipo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Trabajo en equipo
              </h3>
              <p className="text-sm">
                Valoramos la colaboración, comunicación y el aprovechamiento de
                fortalezas individuales para el éxito conjunto.
              </p>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-600 mt-10 max-w-3xl mx-auto">
          Estos valores nos impulsan a ofrecer lo mejor en cada proyecto,
          asegurando cumplir con las expectativas de nuestros clientes.
        </p>
      </section>
    </>
  );
}

export default enterprice_values;
