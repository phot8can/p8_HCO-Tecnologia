function contactUs_form({ textColor = "text-white" }) {
  return (
    <>
      <div className="max-w-5xl mx-auto ">
        <h2 className={`text-5xl font-bold mb-2 ${textColor} text-center`}>Contáctanos</h2>
        <p className={`text-xl mb-12 ${textColor}  text-center`}>Contact Us</p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className={`space-y-4 ${textColor}`}>
            <h3 className="text-xl font-semibold">
              ¿Tienes un proyecto en mente?
            </h3>
            <p className={`text-gray-400`}>
              Estamos listos para ayudarte a automatizar tus procesos
              industriales. Completa el formulario o envíanos un mensaje
              directo.
            </p>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>
                <strong>Teléfono:</strong>{" "}
                <a
                  href="tel:+528682990165"
                  className={`${textColor} hover:underline`}
                >
                  +52 (868) 299 0165
                </a>
                {" , "}
                <a
                  href="tel:+528681619773"
                  className={`${textColor} hover:underline`}
                >
                  +52 (868) 161 9773
                </a>
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:tecnologiaindustrial.hco@gmail.com"
                  className={`${textColor} hover:underline`}
                >
                  tecnologiaindustrial.hco@gmail.com
                </a>
              </li>
              <li>
                <strong>Dirección:</strong>{" "}
                <a
                  href="https://maps.app.goo.gl/Mr7fNbYmEyJzAEiU7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${textColor} hover:underline`}
                >
                  Hacienda Quinta Real, H. Matamoros, Tam. MX. CP 87345
                </a>
              </li>
            </ul>
          </div>
          <form className="bg-slate-50 bg-opacity-50 p-6 rounded-md shadow space-y-4">
            <input
              type="text"
              placeholder="Nombre"
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue"
            />
            <input
              type="email"
              placeholder="Correo electrónico"
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue"
            />
            <textarea
              rows="4"
              placeholder="Mensaje"
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue text-white py-2 rounded font-semibold hover:bg-white hover:text-blue border border-blue transition"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default contactUs_form;
