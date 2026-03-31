import { useEffect, useState } from "react";
import Showreel from "@components/showreel";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import ContactUsForm from "@components/contactUs_form";
import Providers from "@components/providers";
import HCO_new from "/LogoHCO_new.svg";
import Noise from "@assets/images/fx/Ruido.webp";
import NoiseGradiant from "@assets/images/fx/Ruido_degradado.webp";

import {
  Cog,
  Cpu,
  Zap,
  Factory,
  Scissors,
  Boxes,
  Compass,
  Monitor,
  Bot,
  Eye,
  Barcode,
  Layers,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Shield,
  Clock,
  Settings,
  ChevronDown,
  MessageCircle,
} from "lucide-react";

function Home() {
  const navigate = useNavigate();

  const enterpriseSolutions = [
    {
      titleEs: "Ingeniería y diseño mecánico 3D (SolidWorks)",
      subTitle:
        "Desarrollo de maquinaria y componentes en 3D, optimizados para fabricación, ensamblaje y simulación en entornos industriales.",
      icon: <Boxes size={100} />,
    },
    {
      titleEs: "Ingeniería eléctrica y neumática 2D (AutoCAD)",
      subTitle:
        "Diseño de diagramas eléctricos y neumáticos con documentación técnica precisa para integración y mantenimiento industrial.",
      icon: <Compass size={100} />,
    },
    {
      titleEs: "Sistemas de control y programación HMI",
      subTitle:
        "Desarrollo de interfaces HMI intuitivas para monitoreo, control y automatización eficiente de procesos industriales.",
      icon: <Monitor size={100} />,
    },
    {
      titleEs: "Programación de robots",
      subTitle:
        "Configuración y programación de robots industriales para optimizar procesos de producción, precisión y repetibilidad.",
      icon: <Bot size={100} />,
    },
    {
      titleEs: "Programación de robocilindros",
      subTitle:
        "Control y parametrización de robocilindros para movimientos automatizados precisos en líneas de producción.",
      icon: <Settings size={100} />,
    },
    {
      titleEs: "Sistemas de visión",
      subTitle:
        "Implementación de sistemas de visión artificial para inspección, detección y control de calidad en tiempo real.",
      icon: <Eye size={100} />,
    },
    {
      titleEs: "Programación de escáneres",
      subTitle:
        "Integración y programación de escáneres para identificación, trazabilidad y control de productos en procesos industriales.",
      icon: <Barcode size={100} />,
    },
    {
      titleEs: "Programación de controladores PLC",
      subTitle:
        "Desarrollo de lógica de control en PLC para automatización confiable, escalable y segura de maquinaria industrial.",
      icon: <Cpu size={100} />,
    },
    {
      titleEs: "Programación de escalera (Ladder)",
      subTitle:
        "Implementación de lógica Ladder para control secuencial eficiente en sistemas automatizados industriales.",
      icon: <Layers size={100} />,
    },
  ];

  const capacity = [
    {
      titleEs: "Maquina Fresadora",
      icon: <Settings size={75} />,
    },
    { titleEs: "Maquina CNC", icon: <Cpu size={150} /> },
    {
      titleEs: "Maquina de Soldado",
      icon: <Zap size={65} />,
    },
    {
      titleEs: "Maquina Cortadora",
      icon: <Scissors size={65} />,
    },
    { titleEs: "Torno", icon: <Factory size={80} /> },
    { titleEs: "Rectificadora", icon: <Cog size={80} /> },
  ];

  const [showreelImg, setShowreelImg] = useState([]);
  const [currentSolution, setCurrentSolution] = useState(0);
  const [isSolutionPaused, setIsSolutionPaused] = useState(false);

  useEffect(() => {
    // SEO: Update document title and meta description dynamically
    document.title =
      "HCO Tecnología Industrial | Automatización y Soluciones Industriales";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "HCO es líder en la automatización de procesos industriales y de producción, ofreciendo soluciones integrales de ingeniería mecánica, eléctrica y control.",
      );
    }

    const loadImages = async () => {
      const importers = import.meta.glob("@assets/images/general/*.webp", {
        eager: false,
      });

      const images = await Promise.all(
        Object.values(importers).map((importFn) => importFn()),
      );

      setShowreelImg(
        images.map((mod, index) => ({
          title: `Imagen ${index + 1}`,
          route: mod.default,
        })),
      );
    };

    loadImages();

    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      if (!isSolutionPaused) {
        setCurrentSolution((prev) => (prev + 1) % enterpriseSolutions.length);
      }
    }, 3000);
    return () => clearInterval(id);
  }, [isSolutionPaused, enterpriseSolutions.length]);

  return (
    <main className="min-h-screen flex flex-col bg-bg selection:bg-blue selection:text-white">
      <h1 className="sr-only">
        HCO Tecnología Industrial - Automatización de Procesos Industriales
      </h1>

      {/* Hero */}
      <section className="relative h-screen overflow-hidden">
        <header
          className="relative flex h-full items-center justify-center"
          onContextMenu={(e) => e.preventDefault()}
        >
          {/* Background Elements */}
          <div className="absolute inset-0" data-aos="fade">
            {/* Technical Blueprint Grid */}
            <div className="absolute inset-0 industrial-grid opacity-30 z-20 pointer-events-none"></div>

            {/* <picture className="absolute inset-0 z-10 opacity-40">
              <img
                src={NoiseGradiant}
                alt="Textura industrial de fondo"
                className="w-full h-full object-cover"
                loading="eager"
                decoding="async"
              />
            </picture> */}

            <Showreel imagenes={showreelImg} duration={1500} intervalo={2.5} />

            {/* Dynamic Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue/70 via-blue/40 to-blue/90" />
          </div>

          {/* Hero Content */}
          <div
            className="relative z-30 flex flex-col items-center justify-center gap-8 px-6 text-center max-w-4xl mx-auto"
            data-aos="zoom-in"
          >
            <div className="relative group p-4 md:p-8">
              {/* Technical corner markers */}
              <div className="tech-corner-tl text-white opacity-40 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute top-5 right-5 w-6 h-6 border-t border-r border-white/40 group-hover:border-white/100 transition-opacity"></div>
              <div className="absolute bottom-5 left-5 w-6 h-6 border-b border-l border-white/40 group-hover:border-white/100 transition-opacity"></div>
              <div className="tech-corner-br text-white opacity-40 group-hover:opacity-100 transition-opacity"></div>

              <img
                src={HCO_new}
                alt="Logo HCO Tecnología Industrial"
                className="h-24 md:h-40 lg:h-52 w-auto max-w-full drop-shadow-2xl"
                loading="eager"
              />
            </div>

            <p className="text-xl md:text-2xl font-light tracking-wide text-white/90 drop-shadow-md">
              Automatización de procesos industriales y de producción
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-4">
              <button
                className="group relative bg-white hover:bg-blue border-2 border-white px-10 py-3 rounded-full font-bold text-blue hover:text-white transition-all duration-300 shadow-xl overflow-hidden flex items-center justify-center gap-3"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  navigate("/info");
                }}
              >
                <MessageCircle className="text-xl group-hover:rotate-12 transition-transform" />
                Contáctanos
              </button>

              <button
                className="group relative bg-transparent hover:bg-white/10 border-2 border-white/50 hover:border-white px-10 py-3 rounded-full font-bold text-white transition-all duration-300 flex items-center justify-center gap-3"
                onClick={() =>
                  document
                    .getElementById("solutions")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <ChevronDown className="group-hover:translate-y-1 transition-transform" />
                Ver más
              </button>
            </div>
          </div>

          {/* Bottom subtle indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 animate-bounce">
            <ChevronDown />
          </div>
        </header>
      </section>
      {/* Features - Solutions */}
      <section
        id="solutions"
        className="relative py-32 md:py-48 overflow-hidden"
        data-aos="fade-up"
        aria-label="Soluciones integrales de HCO"
      >
        <div className="absolute inset-0 -z-10 bg-white">
          <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1.5px,transparent_1.5px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-50"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-4xl md:text-6xl font-extrabold text-blue mb-6 tracking-tight">
              Soluciones Integrales
            </h2>
            <div className="w-24 h-1 bg-blue/20 mx-auto mb-8 rounded-full overflow-hidden">
              <div className="h-full bg-blue w-1/2 animate-pulse"></div>
            </div>
            <p className="text-lg md:text-xl text-gray-dark/80 mx-auto max-w-4xl leading-relaxed">
              Ofrecemos un servicio completo que abarca desde el diseño,
              fabricación de líneas de producción, hasta la integración de
              tecnologías innovadoras y la modificación de equipos existentes,
              complementado con instalación, puesta en marcha y soporte técnico
              continuo.
            </p>
          </div>

          <div
            className="relative w-full industrial-border bg-white rounded-2xl shadow-2xl overflow-hidden group/carrusel"
            role="region"
            aria-label="Carrusel de soluciones integrales"
            onMouseEnter={() => setIsSolutionPaused(true)}
            onMouseLeave={() => setIsSolutionPaused(false)}
          >
            {/* Technical background for carrusel */}
            <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-blue/10 pointer-events-none select-none uppercase tracking-widest hidden md:block">
              System ID: 00-HCO-ALPHA-26
            </div>

            <div
              className="flex transition-transform duration-1000 cubic-bezier(0.4, 0, 0.2, 1)"
              style={{ transform: `translateX(-${currentSolution * 100}%)` }}
            >
              {enterpriseSolutions.map((s, idx) => (
                <article
                  key={idx}
                  className="min-w-full grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-16 p-8 md:p-16"
                >
                  {/* Visual Area */}
                  <div className="flex items-center justify-center relative p-8">
                    <div className="absolute inset-0 industrial-grid opacity-10 rounded-2xl"></div>
                    <div className="relative w-full max-w-sm aspect-square flex items-center justify-center rounded-3xl bg-blue/5 border border-blue/10 shadow-inner group-hover:scale-105 transition-transform duration-500">
                      <div className="absolute inset-0 tech-corner-tl text-blue/20"></div>
                      <div className="absolute bottom-0 right-0 tech-corner-br text-blue/20 rotate-180"></div>

                      <div className="relative z-10 text-blue text-8xl md:text-9xl transition-all duration-500 drop-shadow-xl">
                        {s.icon}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-left space-y-6">
                    <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-blue/5 border border-blue/10 text-blue font-bold text-sm uppercase tracking-wider">
                      {/* <span className="w-2 h-2 rounded-full bg-blue animate-ping"></span> */}
                      Expertos en
                    </div>
                    <h3 className="text-3xl md:text-5xl font-bold text-blue leading-tight">
                      {s.titleEs}
                    </h3>
                    <p className="text-gray-dark/70 text-lg md:text-xl leading-relaxed border-l-2 border-blue/10 pl-3">
                      {s.subTitle}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            {/* Navigation Controls */}
            <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none px-4 md:px-8">
              <button
                type="button"
                className="group w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-white/80 hover:bg-blue  text-blue hover:text-white rounded-full transition-all duration-300 pointer-events-auto shadow-lg border border-blue/10 transform -translate-x-1/2 md:translate-x-0"
                aria-label="Solución anterior"
                onClick={() => {
                  setCurrentSolution(
                    (prev) =>
                      (prev - 1 + enterpriseSolutions.length) %
                      enterpriseSolutions.length,
                  );
                }}
              >
                <ChevronLeft className="text-xl group-hover:-translate-x-1 transition-transform" />
              </button>
              <button
                type="button"
                className="group w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-white/80 hover:bg-blue  text-blue hover:text-white rounded-full transition-all duration-300 pointer-events-auto shadow-lg border border-blue/10 transform translate-x-1/2 md:translate-x-0"
                aria-label="Siguiente solución"
                onClick={() => {
                  setCurrentSolution(
                    (prev) => (prev + 1) % enterpriseSolutions.length,
                  );
                }}
              >
                <ChevronRight className="text-xl group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Progress/Indicadores Industrial */}
            <div
              className="absolute bottom-8 left-0 right-0 flex items-center justify-center gap-3 px-6"
              aria-label="Indicadores de navegación"
            >
              {enterpriseSolutions.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`h-1.5 rounded-full transition-all duration-500 overflow-hidden ${
                    currentSolution === i
                      ? "w-16 bg-blue shadow-glow"
                      : "w-8 bg-blue/10 hover:bg-blue/30"
                  }`}
                  aria-label={`Ir a la solución ${i + 1}`}
                  aria-current={currentSolution === i}
                  onClick={() => setCurrentSolution(i)}
                >
                  {currentSolution === i && (
                    <div className="h-full bg-white/30 animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section
        className="relative py-32 md:py-48 px-6 bg-blue overflow-hidden"
        data-aos="fade-up"
      >
        {/* Abstract Background */}
        <picture className="absolute inset-0 opacity-20 flex scale-150 rotate-3 animate-pulse pointer-events-none">
          <img
            src={Noise}
            alt=""
            aria-hidden="true"
            decoding="async"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </picture>
        <div className="absolute inset-0 industrial-grid opacity-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-16 relative z-10">
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              Nuestros Clientes
            </h2>
            <div className="w-24 h-1 bg-white/20 mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed font-light">
              En HCO hemos desarrollado soluciones integrales que impactan de
              forma positiva en la productividad, calidad y eficiencia de
              nuestros clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {[
              {
                title: "J4U SWS",
                icon: <TrendingUp />,
                desc: "Desarrollamos una línea de ensamble automatizada con prensado, engrase, conexiones y atornillados automáticos, validados por sistemas de visión.",
              },
              {
                title: "GSP Paddle",
                icon: <Shield />,
                desc: "Integramos una estación de ensamble automatizada con mesa index, Poka-Yoke, prensado de alta precisión y marcado láser.",
              },
              {
                title: "GEN2",
                icon: <Clock />,
                desc: "Implementamos una estación de carga automática de componentes para estandarizar procesos y optimizar tiempos de ciclo.",
              },
            ].map((client, idx) => (
              <div
                key={idx}
                className="group relative bg-white/5 rounded-2xl p-8 border border-white/10 hover:bg-white/[0.12] hover:border-white/20 transition-all duration-500 hover:-translate-y-2 shadow-2xl overflow-hidden"
              >
                {/* Tech corner decoration */}
                <div className="absolute top-0 right-0 p-2 opacity-5">
                  <div className="w-12 h-12 border-t-2 border-r-2 border-white"></div>
                </div>

                <div className="relative z-10">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white text-2xl mb-6 group-hover:scale-110 group-hover:bg-white group-hover:text-blue transition-all duration-500 shadow-xl">
                    {client.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-white transition-colors">
                    {client.title}
                  </h3>
                  <p className="text-white/70 text-base leading-relaxed font-light">
                    {client.desc}
                  </p>
                </div>

                {/* Background ID number */}
                <div className="absolute bottom-4 right-6 font-mono text-[10px] text-white/25 tracking-tighter">
                  0{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Capacity */}
      <section
        className="relative py-32 md:py-48 px-6 bg-bg overflow-hidden"
        data-aos="fade-up"
      >
        {/* Technical Grid Pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] rotate-12 scale-110">
          <div className="industrial-grid w-full h-full"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-blue mb-6">
              Capacidad de Fabricación
            </h2>
            <div className="w-16 h-1 bg-blue/10 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-6 md:auto-rows-[250px]">
            {capacity.map((item, idx) => (
              <div
                key={idx}
                className={`group relative overflow-hidden rounded-2xl transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl flex ${
                  idx === 1 ? "md:col-span-4 md:row-span-2" : "md:col-span-2"
                } bg-blue hover:bg-[#0a2373]`}
              >
                {/* Visual Icon Layer */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10 text-white text-[12rem] transition-all duration-700 group-hover:scale-125 group-hover:rotate-6 group-hover:opacity-20 pointer-events-none">
                  {item.icon}
                </div>

                {/* Overlay Elements */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>

                {/* Tech styling items */}
                <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-white/30 group-hover:border-white/80 transition-colors"></div>
                <div className="absolute top-4 right-4 text-[10px] font-mono text-white/30 tracking-widest uppercase hidden group-hover:block transition-all">
                  Contamos con
                </div>

                {/* Content */}
                <div className="relative z-10 mt-auto p-8 text-left w-full">
                  <div className="flex items-center gap-3 mb-2 opacity-60">
                    <span className="w-4 h-[1px] bg-white"></span>
                    <span className="text-[10px] font-mono text-white tracking-widest">
                      HCO-ENG
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                    {item.titleEs}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Providers Section */}
      <section
        className="py-24 md:py-32 bg-white flex flex-col gap-12 border-y border-gray-light/30"
        data-aos="fade-up"
      >
        <div className="text-center px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black tracking-tight mb-4">
            Nuestros Proveedores
          </h2>
          <p className="text-gray/60 font-medium tracking-widest uppercase text-sm">
            Partners en Calidad e Innovación
          </p>
        </div>
        <div className="grayscale hover:grayscale-0 transition-all duration-1000 opacity-70 hover:opacity-100 px-4">
          <Providers colorFondo="rgba(240, 240, 240, 1)" />
        </div>
      </section>

      {/* Contact Form */}
      <section
        className="relative py-24 md:py-32 bg-bg overflow-hidden"
        data-aos="fade-up"
      >
        <div className="relative z-10">
          <ContactUsForm textColor="#000000" />
        </div>
      </section>
    </main>
  );
}

export default Home;
