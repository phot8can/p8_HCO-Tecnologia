import { useEffect, lazy, Suspense } from "react";
import BG_Gradient from "@assets/images/fx/BG_Grradient.webp";
import Noise from "@assets/images/fx/Ruido.webp";
import Mapa from "@assets/images/fx/Mapa.webp";

import AOS from "aos";
import "aos/dist/aos.css";

// Lazy loading del formulario para diferir la carga de scripts pesados (como reCAPTCHA)
const ContactUsForm = lazy(() => import("../components/contactUs_form"));

// Loader simple para el Suspense
const FormLoader = () => (
  <div className="w-full h-96 bg-gray-900/20 backdrop-blur-sm animate-pulse rounded-2xl flex items-center justify-center">
    <div className="text-white/50 font-medium">Cargando formulario...</div>
  </div>
);

function ContactUs() {
  useEffect(() => {
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return; // Respeta la preferencia del usuario
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className="relative isolate min-h-screen">
      <div
        className="absolute inset-0 -z-10 pointer-events-none select-none bg-black overflow-hidden"
        aria-hidden="true"
      >
        {/* Capa de gradiente con desenfoque optimizado */}
        <div className="absolute inset-0 -z-20">
          <img
            src={BG_Gradient}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-80"
            style={{ filter: "blur(54px)", transform: "scale(1.06)" }}
            decoding="async"
            loading="eager"
          />
        </div>

        {/* Capa de mapa con máscara de degradado mejorada */}
        <img
          src={Mapa}
          alt=""
          className="absolute object-cover z-10 opacity-40 blur-[0.5px] 
            [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%),linear-gradient(to_right,black_85%,transparent_100%)] 
            [mask-composite:intersect] 
            w-full max-w-none left-1/2 -translate-x-1/2 top-[-2rem]
            md:w-4/5 md:left-0 md:translate-x-0 md:top-[-4rem]
            lg:w-3/4 lg:-left-32 lg:top-[-6rem]"
          decoding="async"
          loading="lazy"
        />

        {/* Capa de ruido industrial */}
        <img
          src={Noise}
          alt=""
          className="absolute inset-0 w-full h-full object-cover z-10 opacity-40 mix-blend-overlay"
          decoding="async"
          loading="lazy"
        />
      </div>
      <div className="relative z-10 py-24 md:py-40">
        <h1 className="sr-only">Contáctanos</h1>
        {/* Contact Form */}
        <section
          className="my-8 sm:my-10 px-4 sm:px-6 md:px-8 lg:px-10 max-w-7xl mx-auto"
          data-aos="fade-up"
          aria-label="Formulario de contacto"
        >
          <Suspense fallback={<FormLoader />}>
            <ContactUsForm />
          </Suspense>
        </section>
        {/* Map Section */}
        <section
          className="mt-12 sm:mt-16 md:mt-20 z-20 px-4 sm:px-6 md:px-8 lg:px-10"
          role="region"
          aria-label="Mapa y dirección"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-white tracking-tight">
            Nuestra Ubicación
          </h2>
          <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-center bg-white/5 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl">
            <div className="lg:col-span-2 w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-inner border border-white/5 relative group">
              <iframe
                title="Mapa de ubicación de Photocan"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3590.2392607452985!2d-97.5351926!3d25.8616016!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x866f939c341b717b%3A0x6938c700ff653bef!2sFraccionamiento%20Hacienda%20Quinta%20real!5e0!3m2!1ses-419!2smx!4v1754662015974!5m2!1ses-419!2smx"
                width="100%"
                height="100%"
                className="w-full h-full filter grayscale contrast-125 opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-in-out"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="flex flex-col gap-6 text-white text-center lg:text-left h-full justify-center px-4">
              <div className="space-y-2">
                <span className="text-white font-bold tracking-widest text-xs uppercase">
                  Visítanos
                </span>
                <p className="text-lg sm:text-xl font-medium leading-relaxed">
                  <strong>Dirección:</strong>
                  <br />
                  Hacienda Quinta Real, H. Matamoros, Tam. MX. CP 87345
                </p>
              </div>

              <div className="flex justify-center lg:justify-start pt-4">
                <a
                  href="https://maps.app.goo.gl/Mr7fNbYmEyJzAEiU7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-blue hover:bg-blue hover:text-white transition-all duration-300 font-bold shadow-lg transform hover:-translate-y-1 active:scale-95"
                  aria-label="Abrir ubicación en Google Maps"
                >
                  <span>Abrir en Google Maps</span>
                  <div className="p-1 bg-blue group-hover:bg-white rounded-full transition-colors">
                    <svg
                      className="w-4 h-4  text-white group-hover:text-blue"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={4}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ContactUs;
