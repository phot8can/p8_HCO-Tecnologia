import p8_logo from "@assets/p8_logo.webp";

function Footer() {
  return (
    <>
      <footer className="bg-blue text-white px-8 py-10 border-t border-blue-900 shadow-inner w-full mt-auto">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-center md:text-left">
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

        <div className="text-center text-sm mt-8">
          <p className="cursor-default">
            &copy; {new Date().getFullYear()} HCO Tecnologías. Todos los
            derechos reservados.
          </p>
          <div className="text-[8px] cursor-default text-white flex flex-col md:flex-row justify-center md:justify-end items-center gap-1 mt-4 md:mt-0">
            <p>POWERED BY</p>
              <div className="w-10 h-full flex items-center justify-center">
                <img
                  src={p8_logo}
                  className="w-full h-auto object-contain cursor-pointer "
                  alt="P8 Logo"
                  onClick={() => {
                    window.open(
                      "https://www.facebook.com/Photocan.mx",
                      "_blank"
                    );
                  }}
                />
            </div>
            <p>2025</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
