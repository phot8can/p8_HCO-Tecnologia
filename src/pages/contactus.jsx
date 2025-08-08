import { useEffect } from "react";
import ContactUs_form from "../components/contactUs_form";
import BG_Gradient from "@assets/images/fx/BG_Grradient.webp";
import Noise from "@assets/images/fx/Ruido.webp";
import Mapa from "@assets/images/fx/Mapa.webp";

import AOS from "aos";
import "aos/dist/aos.css";

function contactus() {
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
      <div className="absolute inset-0 -z-10 pointer-events-none select-none bg-black">
        {/* Gradient layer (under noise), blurred internally with square edges */}
        <div className="absolute inset-0 -z-20 overflow-hidden">
          <img
            src={BG_Gradient}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover [filter:blur(54px)] [transform:scale(1.06)]"
            decoding="async"
            draggable="false"
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>

        {/* Map layer on top */}
        <img
          src={Mapa}
          alt=""
          aria-hidden="true"
          className="absolute object-cover z-10 opacity-45 blur-[1px] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_70%,transparent_100%),linear-gradient(to_right,rgba(0,0,0,1)_85%,transparent_100%)] [mask-composite:intersect] 
            w-[100%] max-w-none left-1/2 -translate-x-1/2 top-[-4rem]
            sm:w-full sm:left-1/2 sm:-translate-x-1/2 sm:top-[-6rem]
            md:w-4/5 md:left-0 md:translate-x-0 md:top-[-8rem]
            lg:w-3/4 lg:-left-64 lg:top-[-8rem]"
          draggable="false"
          onContextMenu={(e) => e.preventDefault()}
        />
        {/* Noise layer on top */}
        <img
          src={Noise}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover z-10 opacity-50"
          decoding="async"
          draggable="false"
          onContextMenu={(e) => e.preventDefault()}
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
          <ContactUs_form />
        </section>
        {/* Map Section */}
        <section
          className="mt-12 sm:mt-16 md:mt-20 z-20 px-4 sm:px-6 md:px-8 lg:px-10"
          role="region"
          aria-label="Mapa y dirección"
        >
          <h2 className="text-2xl font-semibold text-center mb-6 text-white">
            Ubicación
          </h2>
          <div className="w-full max-w-5xl mx-auto justify-center flex flex-col gap-4 sm:gap-5">
            <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[24rem]">
              <iframe
                title="Mapa de ubicación de Photocan"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3590.2392607452985!2d-97.5351926!3d25.8616016!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x866f939c341b717b%3A0x6938c700ff653bef!2sFraccionamiento%20Hacienda%20Quinta%20real!5e0!3m2!1ses-419!2smx!4v1754662015974!5m2!1ses-419!2smx"
                width="600"
                height="450"
                className="w-full h-full rounded-sm shadow-lg"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="flex align-middle justify-center text-white text-center text-sm sm:text-base">
              <p>
                <strong>Dirección:</strong> Hacienda Quinta Real, H. Matamoros,
                Tam. MX. CP 87345
              </p>
            </div>
            <div className="flex justify-center">
              <a
                href="https://maps.app.goo.gl/Mr7fNbYmEyJzAEiU7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white/10 text-white hover:bg-white/20 transition"
                aria-label="Abrir ubicación en Google Maps"
              >
                Abrir en Google Maps
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default contactus;
