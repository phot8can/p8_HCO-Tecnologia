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
            Nuestra misión es impulsar la competitividad industrial mediante
            soluciones de automatización confiables y soporte personalizado,
            desde el diseño hasta la puesta en marcha.
          </p>
          {/* <p className="text-gray-700">
            Nos comprometemos a ofrecer un servicio integral que abarca desde el
            diseño y la integración de tecnologías avanzadas hasta la
            fabricación de maquinaria. Brindamos soporte técnico personalizado y
            continuo para asegurar eficiencia y confiabilidad.
          </p> */}
        </div>
      </section>

      {/* Visión */}
      <section className="my-16 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Nuestra visión
          </h2>
          <p className="text-gray-700 mb-4">
            En HCO, buscamos expandir nuestra presencia en el mercado,
            consolidándonos como un referente de excelencia, innovación y
            compromiso con la satisfacción total de nuestros clientes.
          </p>
          {/* <p className="text-gray-700">
            Buscamos expandir nuestra presencia en el mercado, consolidándonos
            como un referente de excelencia, innovación y compromiso con la
            satisfacción total del cliente.
          </p> */}
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
          {/* Equipo */}
          <div className="bg-white rounded-md shadow-lg flex flex-col items-center overflow-hidden">
            <div className="h-1/2 overflow-hidden bg-blue">
              <img
                src={img01}
                alt="Equipo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold">Equipo</h3>
              <p className="text-sm">
                El trabajo en equipo es la base sobre la cual trabajamos con
                comunicación abierta y respeto, sumando nuestras fortalezas para
                aprovechar al máximo las habilidades individuales y alcanzar
                soluciones más innovadoras con eficiencia y excelencia.
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
                La innovación es nuestro motor para explorar tecnologías
                emergentes y metodologías creativas, transformando ideas en
                soluciones eficientes que anticipan y satisfacen las necesidades
                de nuestros clientes.
              </p>
            </div>
          </div>

          {/* Integridad*/}
          <div className="bg-white rounded-md shadow-lg flex flex-col items-center overflow-hidden">
            <div className="h-1/2 overflow-hidden bg-blue">
              <img
                src={img03}
                alt="Integridad"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Integridad
              </h3>
              <p className="text-sm">
                La integridad es el principio que guía todas nuestras acciones,
                asegurando honestidad, transparencia y coherencia en cada
                acción.
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
