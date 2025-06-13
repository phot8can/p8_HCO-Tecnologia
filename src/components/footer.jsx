import React from "react";

function Footer() {
  return (
    <footer className="bg-blue text-white px-8 py-10 border-t border-blue-900 shadow-inner w-full mt-auto">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm text-center sm:text-left">
        {/* About */}
        <div>
          <h4 className="font-semibold mb-2">Sobre HCO Tecnologías</h4>
          <p>
            Automatización de procesos industriales y desarrollo de soluciones
            tecnológicas para empresas.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold mb-2">Enlaces</h4>
          <ul>
            <li>
              <a href="/aviso-de-privacidad" className="hover:text-blue-300">
                Aviso de privacidad
              </a>
            </li>
            <li>
              <a href="/contacto" className="hover:text-blue-300">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="font-semibold mb-2">Redes Sociales</h4>
          <ul className="flex justify-center sm:justify-start space-x-4">
            <li>
              <a
                href="https://www.facebook.com/Photocan.mx/"
                target="blank"
                className="hover:text-gray-dark transition-all duration-300"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/phot8can/"
                target="blank"
                className="hover:text-gray-dark transition-all duration-300"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-dark">
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs mt-8">
        <p>
          &copy; {new Date().getFullYear()} HCO Tecnologías. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
