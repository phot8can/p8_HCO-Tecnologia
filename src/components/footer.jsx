import p8_logo from "@assets/p8_logo.webp";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

import NoiseGradiant from "@assets/images/fx/Ruido_degradado.webp";

function Footer() {
  return (
    <>
      <footer className="bg-blue text-white w-full mt-auto border-t border-blue-900/60 relative isolate">
        <div className="absolute inset-0 -z-10 pointer-events-none select-none" aria-hidden="true">

          {/* Noise layer on top */}
          <div
            className="absolute inset-0 w-full h-full bg-no-repeat bg-top bg-[length:100%_auto] z-10 opacity-50"
            style={{
              backgroundImage: `url(${NoiseGradiant})`,
            }}
            draggable="false"
            onContextMenu={(e) => e.preventDefault()}
            aria-hidden="true"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
          {/* Top grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-sm">
            {/* About */}
            <div>
              <h4 className="text-base font-semibold mb-3 tracking-wide">
                Sobre HCO Tecnologías
              </h4>
              <p className="text-white/80 leading-relaxed">
                Automatización de procesos industriales y desarrollo de
                soluciones tecnológicas para empresas.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-base font-semibold mb-3 tracking-wide">
                Contacto
              </h4>
              <ul className="space-y-2 text-white/80">
                <li className="flex items-start gap-3">
                  <FaMapMarkerAlt className="mt-1 shrink-0" />{" "}
                  <a
                    href="https://maps.app.goo.gl/Mr7fNbYmEyJzAEiU7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={` hover:underline`}
                  >
                    H. Matamoros, Tam. MX.
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <FaPhone className="mt-1 shrink-0" />{" "}
                  <div>
                    <a href="tel:+528682990165" className={`hover:underline`}>
                      +52 (868) 299 0165
                    </a>
                    <span className="mx-2" aria-hidden="true">•</span>
                    <a href="tel:+528681619773" className={` hover:underline`}>
                      +52 (868) 161 9773
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FaEnvelope className="mt-1 shrink-0" />{" "}
                  <a
                    href="mailto:tecnologiaindustrial.hco@gmail.com"
                    className={`hover:underline`}
                  >
                    tecnologiaindustrial.hco@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-base font-semibold mb-3 tracking-wide">
                Enlaces
              </h4>
              <ul className="space-y-2 text-white/80">
                <li>
                  <a
                    href="/aviso-de-privacidad"
                    className="hover:text-blue-200"
                  >
                    Aviso de privacidad
                  </a>
                </li>
                <li>
                  <a href="/contacto" className="hover:text-blue-200">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-base font-semibold mb-3 tracking-wide">
                Síguenos
              </h4>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/Photocan.mx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.linkedin.com/company/phot8can/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <hr className="border-white/10 my-10" />

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-md text-white/80">
            <p className="order-2 md:order-1">
              &copy; {new Date().getFullYear()} HCO Tecnologías. Todos los
              derechos reservados.
            </p>
            <div className="order-1 md:order-2 flex items-center gap-1">
              <span className="text-xs tracking-wide text-white/75">
                POWERED BY
              </span>
              <button
                type="button"
                aria-label="Abrir Photocan en Facebook"
                className="w-14 h-5 flex items-center justify-center opacity-75 hover:opacity-100 transition"
                onClick={() => {
                  window.open("https://www.facebook.com/Photocan.mx", "_blank");
                }}
              >
                <img
                  src={p8_logo}
                  className="w-full h-auto object-contain"
                  alt="P8 Logo"
                  loading="lazy"
                />
              </button>
              <span className="text-xs text-white/75">2025</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
