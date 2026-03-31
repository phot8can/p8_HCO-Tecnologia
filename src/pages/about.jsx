import { useEffect, Suspense, lazy } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Lazy loading del componente pesado de valores para mejorar el FCP (First Contentful Paint)
const EnterpriseValues = lazy(() => import("../components/enterprice_values"));

import FotoMision from "@assets/images/valores/5.png";
import FotoVision from "@assets/images/valores/8.png";
import BG_Gradient from "@assets/images/fx/BG_Grradient.webp";

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
    
    // Refrescar AOS cuando se monta para asegurar que las posiciones son correctas
    AOS.refresh();
  }, []);

  const location = useLocation();

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="relative isolate pb-16 md:pb-20">
        {/* Background Optimized */}
        <div className="absolute inset-0 -z-10 pointer-events-none select-none bg-black">
          <div className="absolute inset-0 -z-20 overflow-hidden transform-gpu">
            <img
              src={BG_Gradient}
              alt=""
              className="absolute inset-0 w-full h-full object-cover blur-[54px] scale-[1.06] opacity-70"
              draggable="false"
              onContextMenu={(e) => e.preventDefault()}
              loading="eager"
              decoding="async"
            />
          </div>
        </div>

        {/* Info Section */}
        <section
          className="relative z-10 pt-24 md:pt-40 max-w-7xl mx-auto px-4"
          data-aos="fade-up"
        >
          <div className="my-8 sm:my-10 px-4 sm:px-6 md:px-8 lg:px-10 max-w-5xl mx-auto text-white text-center">
            <div className="inline-block relative mb-8">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                ¿Quiénes somos?
              </h1>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-blue rounded-full transform scale-x-50 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
            <p className="text-gray-300 text-lg sm:text-2xl font-medium leading-relaxed max-w-4xl mx-auto">
              Somos una empresa orgullosamente mexicana de ingeniería
              especializada en automatización industrial, enfocada en el diseño
              y fabricación de estaciones automatizadas de alta precisión.
            </p>
          </div>
        </section>
      </div>

      {/* Misión - Animación Direccional */}
      <section
        className="py-20 sm:py-24 px-4 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center overflow-hidden"
      >
        <div
          className="flex justify-center items-center w-full transform-gpu"
          onContextMenu={(e) => e.preventDefault()}
          data-aos="fade-right"
        >
          <div className="relative group">
            <div className="absolute -inset-4 bg-blue/10 rounded-full blur-2xl group-hover:bg-blue/20 transition-colors duration-500" />
            <img
              src={FotoMision}
              alt="Misión HCO"
              loading="lazy"
              decoding="async"
              className="relative object-contain select-none w-full h-auto max-w-md sm:max-w-lg transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
        <div data-aos="fade-left">
          <div className="flex gap-2 flex-col">
            <span className="text-blue font-bold tracking-widest uppercase text-sm">Nuestro Propósito</span>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Nuestra misión
            </h2>
          </div>
          <p className="text-slate-600 text-lg sm:text-xl leading-relaxed">
            Impulsar la competitividad industrial mediante soluciones de 
            automatización confiables y soporte personalizado, desde el 
            diseño conceptual hasta la puesta en marcha final, garantizando 
            la excelencia operativa de nuestros socios comerciales.
          </p>
        </div>
      </section>

      {/* Visión - Animación Espejada */}
      <section
        className="py-20 sm:py-24 px-4 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center overflow-hidden"
      >
        <div className="order-2 md:order-1" data-aos="fade-right">
          <div className="flex gap-2 flex-col">
            <span className="text-blue font-bold tracking-widest uppercase text-sm">Hacia el Futuro</span>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Nuestra visión
            </h2>
          </div>
          <p className="text-slate-600 text-lg sm:text-xl leading-relaxed">
            En HCO buscamos expandir nuestra presencia global, 
            consolidándonos como el referente indiscutible de excelencia, 
            innovación técnica y compromiso inquebrantable con el éxito 
            y la satisfacción tecnológica de nuestros clientes.
          </p>
        </div>
        <div
          className="order-1 md:order-2 flex justify-center items-center w-full transform-gpu"
          onContextMenu={(e) => e.preventDefault()}
          data-aos="fade-left"
        >
          <div className="relative group">
            <div className="absolute -inset-4 bg-blue/10 rounded-full blur-2xl group-hover:bg-blue/20 transition-colors duration-500" />
            <img
              src={FotoVision}
              alt="Visión HCO"
              loading="lazy"
              decoding="async"
              className="relative object-contain select-none transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        <hr className="border-slate-200" />
      </div>

      {/* EnterpriseValues Lazy Loaded */}
      {location.pathname === "/about" && (
        <section className="my-20 sm:my-32">
          <Suspense fallback={
            <div className="flex justify-center py-20">
              <div className="w-12 h-12 border-4 border-blue border-t-transparent rounded-full animate-spin" />
            </div>
          }>
            <EnterpriseValues />
          </Suspense>
        </section>
      )}
    </main>
  );
}

export default About;

