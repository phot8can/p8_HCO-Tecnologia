import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Enterprice_Values from "../components/enterprice_values";
// import { FaUserTie, FaBuilding, FaCogs, FaTools } from "react-icons/fa";
// import { FaCompass } from "react-icons/fa6";
// import { TbTargetArrow } from "react-icons/tb";
import FotoMision from "@assets/images/valores/integridad.webp";
import FotoVision from "@assets/images/valores/8.webp";
import BG_Gradient from "@assets/images/fx/BG_Grradient.webp";
import Noise from "@assets/images/fx/Ruido.webp";

function about() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const location = useLocation();
  return (
    <>
      <div className="relative isolate min-h-screen pb-16 md:pb-20">
        <div className="absolute inset-0 -z-10 pointer-events-none select-none bg-black">
          {/* Gradient layer (under noise), blurred internally with square edges */}
          <div className="absolute inset-0 -z-20 overflow-hidden">
            <img
              src={BG_Gradient}
              alt=""
              className="absolute inset-0 w-full h-full object-cover [filter:blur(54px)] [transform:scale(1.06)]"
              draggable="false"
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>

          {/* Noise layer on top */}
          <div
            alt=""
            className="absolute inset-0 w-full object-[top_left] bg-repeat z-10 opacity-50"
            style={{
              backgroundImage: `url(${Noise})`,
              backgroundRepeat: "repeat-y",
              backgroundSize: "auto 100%",
            }}
            draggable="false"
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>
        {/* Info Section */}
        <section
          className="relative z-10 pt-24 md:pt-40 max-w-5xl mx-auto"
          data-aos="fade-up"
        >
          <div className="my-8 sm:my-10 px-4 sm:px-6 md:px-8 lg:px-10 max-w-7xl mx-auto text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-10 md:mb-12">
              ¿Quiénes somos?
            </h1>
            <p className="text-gray-300 text-base sm:text-2xl text-center max-w-6xl font-semibold mx-auto">
              Somos una empresa orgullosamente mexicana, de Ingeniería
              especializada en automatización industrial, enfocada en el diseño
              y fabricación de estaciones automatizadas.
            </p>
          </div>
        </section>
        {/* Misión */}
        <section
          className="py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 lg:px-16 max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-10 items-center"
          data-aos="fade-up"
        >
          <div
            className="flex justify-center items-center w-full h-full overflow-hidden"
            onContextMenu={(e) => e.preventDefault()}
          >
            {/* <FaCompass className="text-blue-900 text-8xl  text-slate-500" /> */}
            <img
              src={FotoMision}
              alt="Mision"
              className="object-contain select-none w-full h-auto max-w-[28rem] sm:max-w-[32rem]"
              style={{
                WebkitUserDrag: "none",
                KhtmlUserDrag: "none",
                MozUserDrag: "none",
                OUserDrag: "none",
              }}
            />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
              Nuestra misión
            </h2>
            <p className="text-white text-base sm:text-lg leading-relaxed mb-4">
              Nuestra misión es impulsar la competitividad industrial mediante
              soluciones de automatización confiables y soporte personalizado,
              desde el diseño hasta la puesta en marcha.
            </p>
          </div>
        </section>

        {/* Visión */}
        <section
          className="py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 lg:px-16 max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-10 items-center"
          data-aos="fade-up"
        >
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
              Nuestra visión
            </h2>
            <p className="text-white text-base sm:text-lg leading-relaxed mb-4">
              En HCO, buscamos expandir nuestra presencia en el mercado,
              consolidándonos como un referente de excelencia, innovación y
              compromiso con la satisfacción total de nuestros clientes.
            </p>
          </div>
          <div
            className="flex justify-center items-center w-full h-full overflow-hidden"
            onContextMenu={(e) => e.preventDefault()}
          >
            {/* <TbTargetArrow className="text-blue-900 text-9xl  text-slate-500" /> */}
            <img
              src={FotoVision}
              alt="Vision"
              className="object-contain select-none"
              style={{
                WebkitUserDrag: "none",
                KhtmlUserDrag: "none",
                MozUserDrag: "none",
                OUserDrag: "none",
              }}
            />
          </div>
        </section>
      </div>
      {location.pathname === "/about" && (
        <div className="my-16 sm:my-24 md:my-32 ">
          <Enterprice_Values />
        </div>
      )}
    </>
  );
}

export default about;
