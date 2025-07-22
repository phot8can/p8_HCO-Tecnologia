import { FaPhone } from "react-icons/fa6";
import { MdOutlineAlternateEmail } from "react-icons/md";

function contactus() {
  return (
    <div className="my-48">
      {/* Contact Form */}
      <section className="my-10 px-10 max-w-7xl mx-auto" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center mb-12">Contáctanos</h2>
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold flex items-center gap-2">
              ¿Tienes un proyecto en mente?
            </h3>
            <p className="text-gray-700 text-lg">
              Estamos listos para ayudarte a automatizar tus procesos industriales.
              Contáctanos llenando el formulario o vía directa.
            </p>
            <div className="space-y-4 text-gray-700">
              <p className="flex items-center gap-2">
                <FaPhone className="text-blue-600" />
                <span><strong>Tel:</strong> +52 (868) 299 0165, +52 (868) 161 9773</span>
              </p>
              <p className="flex items-center gap-2">
                <MdOutlineAlternateEmail className="text-blue-600" />
                <span><strong>Email:</strong> tecnologiaindustrial.hco@gmail.com</span>
              </p>
            </div>
          </div>
          <form className="bg-gray-100 p-10 rounded-xl shadow space-y-6">
            <input
              type="text"
              placeholder="Nombre"
              className="w-full px-5 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue"
            />
            <input
              type="email"
              placeholder="Correo electrónico"
              className="w-full px-5 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue"
            />
            <textarea
              rows="5"
              placeholder="Mensaje"
              className="w-full px-5 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue text-white py-3 rounded font-semibold hover:bg-white hover:text-blue border border-blue transition"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </section>
      {/* Map Section */}
      <section className="my-10 px-6">
        <h2 className="text-2xl font-semibold text-center mb-6">Ubicación</h2>
        <div className="w-full h-64 max-w-4xl mx-auto justify-center flex flex-col gap-5">
          <iframe
            className="w-full h-full rounded shadow-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1514.7461686550155!2d-97.53372289190573!3d25.861935792701182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x866f939c341b717b%3A0x6938c700ff653bef!2sFraccionamiento%20Hacienda%20Quinta%20real!5e0!3m2!1ses-419!2smx!4v1749599637687!5m2!1ses-419!2smx"
            referrerPolicy="no-referrer-when-downgrade"
            sandbox="allow-same-origin allow-scripts allow-popups"
          ></iframe>
          <div className="flex align-middle justify-center ">
            <p>
              <strong>Dirección:</strong> Hacienda Quinta Real, H. Matamoros,
              Tam. MX. CP 87345
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default contactus;
