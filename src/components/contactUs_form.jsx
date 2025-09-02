import { useEffect, useRef, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

function contactUs_form({ textColor = "text-white" }) {
  const apiFormKey = import.meta.env.VITE_API_FORM_KEY;
  const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY; // v2 Checkbox
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const honeypotRef = useRef(null);

  // Carga segura de reCAPTCHA si aún no está presente
  // useEffect(() => {
  //   if (
  //     document.querySelector(
  //       'script[src^="https://www.google.com/recaptcha/api.js"]'
  //     )
  //   )
  //     return;
  //   const s = document.createElement("script");
  //   s.src = "https://www.google.com/recaptcha/api.js";
  //   s.async = true;
  //   s.defer = true;
  //   document.body.appendChild(s);
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // 1) Clave de API presente
    if (!apiFormKey) {
      alert("Falta VITE_API_FORM_KEY. Agrega tu API key en el archivo .env.");
      return;
    }
    // 2) Honeypot vacío
    if (honeypotRef.current && honeypotRef.current.value.trim() !== "") {
      // Detén envío sospechoso
      return;
    }
    // 3) reCAPTCHA renderizado (el widget añade g-recaptcha-response automáticamente)
    if (!window.grecaptcha || !document.querySelector(".g-recaptcha")) {
      alert(
        "No se pudo cargar reCAPTCHA. Revisa tu conexión o tu clave de sitio."
      );
      return;
    }
    setSubmitting(true); // Previene doble envío
    // Check that captcha is solved
    // const captchaResponse = document.querySelector(
    //   'textarea[name="g-recaptcha-response"]'
    // )?.value;
    // if (!captchaResponse) {
    //   alert("Por favor, resuelve el captcha antes de enviar.");
    //   setSubmitting(false);
    //   return;
    // }
    const formData = new FormData(e.target);
    fetch("https://api.staticforms.xyz/submit", {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        if (res.ok) {
          setSuccess(true);
          // limpiar formulario
          e.target.reset();
          // resetear captcha
          if (window.grecaptcha) {
            window.grecaptcha.reset();
          }
          // ocultar el mensaje después de 5s
          setTimeout(() => setSuccess(false), 5000);
        } else {
          alert("Error al enviar el formulario. Inténtalo de nuevo.");
        }
      })
      .catch(() => {
        alert("Error de red. Inténtalo más tarde.");
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <>
      <div className="max-w-5xl mx-auto ">
        <h2 className={`text-5xl font-bold mb-2 ${textColor} text-center`}>
          Contáctanos
        </h2>
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
          <form
            id="contact-form"
            className="bg-gray bg-opacity-95 p-6 rounded-md shadow space-y-4"
            method="POST"
            onSubmit={handleSubmit}
            // En sitios estáticos es mejor dejar target _self
            target="_self"
          >
            {/* API key en hidden */}
            <input type="hidden" name="apiKey" value={apiFormKey} readOnly />

            {/* Reply-To: usa el campo email del usuario */}
            <input type="hidden" name="replyTo" value="@" />

            {/* Honeypot: oculto para humanos, visible para bots */}
            <input
              ref={honeypotRef}
              type="text"
              name="honeypot"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              style={{
                position: "absolute",
                left: "-10000px",
                top: "auto",
                width: "1px",
                height: "1px",
                overflow: "hidden",
              }}
            />

            {/* Campos con name correcto, validaciones y límites */}
            <input
              type="text"
              name="Nombre"
              placeholder="Nombre"
              autoComplete="name"
              required
              minLength={2}
              maxLength={100}
              pattern="^[A-Za-zÁÉÍÓÚáéíóúÑñ ]{2,100}$"
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue"
            />
            <input
              type="email"
              name="Correo"
              placeholder="Correo electrónico"
              autoComplete="email"
              inputMode="email"
              required
              maxLength={254}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue"
            />
            <input
              type="text"
              name="Compañia"
              placeholder="Compañía"
              autoComplete="organization"
              required
              maxLength={120}
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue"
            />
            <textarea
              name="Mensaje"
              rows="4"
              placeholder="Mensaje"
              required
              minLength={2}
              maxLength={2000}
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue"
            />

            {/* reCAPTCHA v2 (checkbox). StaticForms lo requiere. */}
            <div
              className="g-recaptcha justify-center flex"
              data-sitekey={recaptchaSiteKey}
            />
            {/* Fin reCAPTCHA */}

            <button
              type="submit"
              disabled={submitting}
              aria-busy={submitting ? "true" : "false"}
              className="w-full bg-blue text-white py-2 rounded font-semibold hover:bg-white hover:text-blue border border-blue transition disabled:opacity-60"
            >
              {submitting ? "Enviando…" : "Enviar"}
            </button>
            <script
              src="https://www.google.com/recaptcha/api.js"
              async
              defer
            ></script>
          </form>
        </div>
        {success && (
          <div className="mt-4 p-4 bg-green border border-green text-white rounded flex items-center space-x-2">
            <FaCheckCircle className="text-white text-xl" />
            <span>¡Tu mensaje ha sido enviado con éxito!</span>
          </div>
        )}
      </div>
    </>
  );
}

export default contactUs_form;
