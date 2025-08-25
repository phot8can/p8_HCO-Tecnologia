import { useEffect, useState } from "react";
import Showreel from "@components/showreel";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { IoChatbubblesOutline } from "react-icons/io5";
import ContactUs_form from "@components/contactUs_form";
import Providers from "@components/providers";
import HCO_new from "/LogoHCO_new.svg";
import Inteva_Logo from "@assets/images/clients_logos/inteva.svg";
import Merit_Logo from "@assets/images/clients_logos/Merit.svg";
import Noise from "@assets/images/fx/Ruido.webp";
import NoiseGradiant from "@assets/images/fx/Ruido_degradado.webp";

import { GiRobotGrab } from "react-icons/gi";
import { MdOutlineDesignServices } from "react-icons/md";
import { MdAutoMode } from "react-icons/md";
import { FaCogs, FaMicrochip, FaBolt, FaIndustry, FaCog } from "react-icons/fa";
import { FaScissors } from "react-icons/fa6";

import {
  FaCubes,
  FaDraftingCompass,
  FaDesktop,
  FaRobot,
  FaEye,
  FaBarcode,
  FaStream,
  FaChevronLeft,
  FaChevronRight,
  FaChartLine,
  FaShieldAlt,
  FaClock,
} from "react-icons/fa";
import { GiGears } from "react-icons/gi";

function Home() {
  const navigate = useNavigate();


  const enterpriseSolutions = [
    {
      titleEs: "Ingeniería y diseño mecánico 3D (SolidWorks)",
      titleEn:
        "Engineering and design focused on SolidWorks 3D mechanical systems.",
      icon: <FaCubes />,
    },
    {
      titleEs: "Ingeniería eléctrica y neumática 2D (AutoCAD)",
      titleEn:
        "Engineering and design of electrical and pneumatic systems in AutoCAD 2D.",
      icon: <FaDraftingCompass />,
    },
    {
      titleEs: "Sistemas de control y programación HMI",
      titleEn:
        "Engineering and design of control systems and HMI screen programming.",
      icon: <FaDesktop />,
    },
    {
      titleEs: "Programación de robots",
      titleEn: "Robot programming.",
      icon: <FaRobot />,
    },
    {
      titleEs: "Programación de robocilindros",
      titleEn: "Robocylinders programming.",
      icon: <GiGears />,
    },
    {
      titleEs: "Sistemas de visión",
      titleEn: "Programming and detection of vision systems.",
      icon: <FaEye />,
    },
    {
      titleEs: "Programación de escáneres",
      titleEn: "Scanners programming.",
      icon: <FaBarcode />,
    },
    {
      titleEs: "Programación de controladores PLC",
      titleEn: "PLC controller programming.",
      icon: <FaMicrochip />,
    },
    {
      titleEs: "Programación de escalera (Ladder)",
      titleEn: "Ladder programming.",
      icon: <FaStream />,
    },
  ];

  const capacity = [
    {
      titleEs: "Maquina Fresadora",
      titleEn: "Milling Machine",
      icon: <FaCogs />,
    },
    { titleEs: "Maquina CNC", titleEn: "CNC Machine", icon: <FaMicrochip /> },
    {
      titleEs: "Maquina de Soldado",
      titleEn: "Welding Machine",
      icon: <FaBolt />,
    },
    {
      titleEs: "Maquina Cortadora",
      titleEn: "Cutting Machine",
      icon: <FaScissors />,
    },
    { titleEs: "Torno", titleEn: "Lathe", icon: <FaIndustry /> },
    { titleEs: "Rectificadora", titleEn: "Grinding Machine", icon: <FaCog /> },
  ];

  const [showreelImg, setShowreelImg] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSolution, setCurrentSolution] = useState(0);
  const [isSolutionPaused, setIsSolutionPaused] = useState(false);

  useEffect(() => {
    const loadImages = async () => {
      const importers = import.meta.glob(
        "@assets/images/general/*.{jpg,jpeg,png,svg,webp}",
        { eager: false }
      );

      const images = await Promise.all(
        Object.values(importers).map((importFn) => importFn())
      );

      setShowreelImg(
        images.map((mod, index) => ({
          title: `Imagen ${index + 1}`,
          route: mod.default,
        }))
      );
    };

    loadImages();

    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 2); // 2 slides
    }, 5000);
    return () => clearInterval(interval);
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
    <div className="min-h-screen flex flex-col cursor-default">
      {/* Hero */}
      <div className="relative h-screen text-white">
        <header
          className=" bg-blue flex h-full"
          onContextMenu={(e) => e.preventDefault()}
        >
          <div className="absolute inset-0 -z-9" data-aos="fade-up">
            <picture className="absolute inset-0 z-10">
              <img
                src={NoiseGradiant}
                alt="Texture"
                className="w-full h-full"
              />
            </picture>
            <Showreel imagenes={showreelImg} duration={1500} intervalo={2.5} />
            <div className="absolute inset-0 bg-blue opacity-30" />
          </div>
          <div className="z-0 relative flex flex-col items-center justify-center gap-6 px-4 text-center w-full">
            <img
              src={HCO_new}
              alt="aaa"
              className="h-24 md:h-40 lg:h-52 w-auto max-w-full text-red-500"
            />
            {/* <HCOLogo className="h-24 md:h-40 w-auto max-w-full text-red-500" /> */}
            <p className="text-lg max-w-xl text-white">
              Automatización de procesos industriales y de producción
            </p>
          </div>
          <div className="bottom-20 absolute w-full flex justify-center items-center gap-10">
            <button
              className="bg-white hover:bg-blue border hover:border-white px-6 py-2 rounded-full font-semibold hover:text-white text-blue transition text-center flex items-center justify-center gap-2"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                navigate("/info");
              }}
            >
              <IoChatbubblesOutline /> Contáctanos
            </button>
            <button
              className="bg-white hover:bg-blue border hover:border-white px-6 py-2 rounded-full font-semibold hover:text-white text-blue transition text-center flex items-center justify-center gap-2"
              onClick={() =>
                document
                  .getElementById("solutions")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <FaChevronDown /> Ver mas
            </button>
          </div>
        </header>
      </div>
      {/* Features */}
      <div id="solutions"></div>
      <section
        className="relative py-40"
        data-aos="fade-up"
        aria-label="Soluciones integrales de HCO"
      >
        <div className="absolute h-full w-full bg-#fff -z-10">
          <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className=" mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-blue mb-2 ">
            Soluciones Integrales
          </h2>
          <p className="text-xl text-gray-700 mb-12">Integral solutions</p>
          <p className="text-lg text-center mx-auto mb-8 max-w-3xl">
            Ofrecemos un servicio completo que abarca desde el diseño,
            fabricación de líneas de producción, hasta la integración de
            tecnologías innovadoras y la modificación de equipos existentes,
            complementado con instalación, puesta en marcha y soporte técnico
            continuo.
          </p>
          <div
            className="relative w-full mx-auto overflow-hidden"
            role="region"
            aria-label="Carrusel de soluciones integrales"
            onMouseEnter={() => setIsSolutionPaused(true)}
            onMouseLeave={() => setIsSolutionPaused(false)}
          >
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSolution * 100}%)` }}
            >
              {enterpriseSolutions.map((s, idx) => (
                <div
                  key={idx}
                  className="min-w-full grid grid-cols-1 md:grid-cols-2 items-center gap-5 p-6 md:p-10"
                >
                  {/* Área visual grande (icono como imagen grande) */}
                  <div className="flex items-center justify-center">
                    <div className="relative w-full max-w-xl aspect-[4/3] flex items-center justify-center">
                      <div
                        className="absolute inset-0 rounded-2xl bg-blue/10"
                        aria-hidden="true"
                      ></div>
                      <div className="relative z-10 text-blue text-7xl md:text-8xl">
                        {s.icon}
                      </div>
                    </div>
                  </div>
                  {/* Contenido */}
                  <div className="text-left max-w-xl mx-auto">
                    <h3 className="text-3xl md:text-4xl font-bold text-blue mb-3">
                      {s.titleEs}
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {s.titleEn}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 h-full left-0 right-0 z-30 pointer-events-none px-2 sm:px-4 md:px-8">
              <div className="flex items-center justify-between h-full">
                <button
                  type="button"
                  className="bg-blue/0 hover:bg-blue/5 text-blue hover:text-blue/80 px-5 text-4xl justify-center transition pointer-events-auto inline-flex items-center h-full rounded-sm"
                  aria-label="Anterior"
                  onClick={() => {
                    setCurrentSolution(
                      (prev) =>
                        (prev - 1 + enterpriseSolutions.length) %
                        enterpriseSolutions.length
                    );
                  }}
                >
                  <FaChevronLeft />
                </button>
                <button
                  type="button"
                  className="bg-blue/0 hover:bg-blue/5 text-blue hover:text-blue/80 px-5 text-4xl justify-center transition pointer-events-auto inline-flex items-center h-full rounded-sm"
                  aria-label="Siguiente"
                  onClick={() => {
                    setCurrentSolution(
                      (prev) => (prev + 1) % enterpriseSolutions.length
                    );
                  }}
                >
                  <FaChevronRight />
                </button>
              </div>
            </div>
            {/* Indicadores */}
            <div
              className="flex items-center justify-center gap-2 mt-6"
              aria-label="Indicadores de carrusel"
            >
              {enterpriseSolutions.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`h-2 rounded-full transition-all ${
                    currentSolution === i
                      ? "w-20 bg-blue"
                      : "w-10 bg-blue/40 hover:bg-blue/70"
                  }`}
                  aria-label={`Ir a la solución ${i + 1}`}
                  aria-current={currentSolution === i}
                  onClick={() => setCurrentSolution(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <hr className="text-[#d6d6d6]" />

      <section className="px-6 bg-bl bg-blue py-44" data-aos="fade-up">
        <picture className="absolute inset-0 -z-10">
          <img
            src={Noise}
            alt=""
            aria-hidden="true"
            decoding="async"
            className="w-full h-full object-cover"
          />
        </picture>
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white">
            Nuestros Clientes
          </h2>
          <p className="text-base md:text-lg text-white/90 max-w-3xl text-center">
            En HCO hemos desarrollado soluciones integrales que impactan de
            forma positiva en la productividad, calidad y eficiencia de nuestros
            clientes, adaptándonos a sus necesidades específicas y garantizando
            resultados medibles.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 text-left">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 shadow-lg border border-white/10 hover:bg-white/[0.14] transition">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full  text-white">
                  <FaChartLine aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    J4U SWS
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Desarrollamos una línea de ensamble automatizada con
                    prensado, engrase, conexiones y atornillados automáticos,
                    todos validados por sistemas de visión y alimentados por
                    bowl feeders, optimizando rendimiento y eficiencia.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 shadow-lg border border-white/10 hover:bg-white/[0.14] transition">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white">
                  <FaShieldAlt aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    GSP Paddle
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Integramos una estación de ensamble automatizada con mesa
                    index, Poka-Yoke, prensado de alta precisión, validación con
                    visión, descarga inteligente y marcado láser, garantizando
                    continuidad operativa y calidad en cada etapa.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 shadow-lg border border-white/10 hover:bg-white/[0.14] transition">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white">
                  <FaClock aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    GEN2
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Implementamos una estación de carga automática de
                    componentes para sustituir una operación manual,
                    estandarizando procesos, optimizando tiempos de ciclo y
                    eliminando la intervención humana en una etapa crítica.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 w-full">
            <div className="flex flex-wrap items-center justify-center gap-20 opacity-90">
              <img
                src={Inteva_Logo}
                alt="Inteva"
                className="h-12 md:h-14 object-contain "
                loading="lazy"
                decoding="async"
              />
              <img
                src={Merit_Logo}
                alt="Merit Automotive"
                className="h-20 md:h-20 object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      <hr className="text-[#d6d6d6]" />

      {/* Manufacturing Capacity */}
      <section className="relative py-28 px-6" data-aos="fade-up">
        <div className="absolute inset-0 -z-10">
          <div className="h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-blue mb-2">
            Capacidad de fabricación
          </h2>
          <p className="text-xl text-gray-700 mb-12">Manufacturing capacity</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 md:auto-rows-[220px] lg:auto-rows-[260px]">
            {capacity.map((item, idx) => (
              <div
                key={idx}
                className={`relative overflow-hidden rounded-xl shadow group flex ${
                  idx === 1 ? "md:col-span-4 md:row-span-2" : "md:col-span-2"
                } bg-blue/90`}
              >
                {/* Background icon as texture */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10 text-white text-8xl md:text-9xl lg:text-[10rem] transition-transform duration-300 group-hover:scale-105">
                  {item.icon}
                </div>
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/30 to-transparent pointer-events-none"></div>
                {/* Content */}
                <div className="relative z-10 mt-auto p-6 md:p-8 text-left text-white w-full">
                  <h3 className="text-2xl md:text-3xl font-semibold mb-1">
                    {item.titleEs}
                  </h3>
                  <p className="text-sm md:text-base text-white/80">
                    {item.titleEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <hr className="text-[#d6d6d6]" />
      <section className="py-32 flex gap-10 flex-col" data-aos="fade-up">
        <h2 className="text-5xl font-bold text-center text-black ">
          Nuestros Proveedores
        </h2>
        <Providers colorFondo="rgba(255, 255, 255, 1)" />
      </section>
      <hr className="text-[#d6d6d6]" />
      <section className="py-16 bg-white text-blue" data-aos="fade-up">
        <ContactUs_form textColor="#0000" />
      </section>
    </div>
  );
}

export default Home;
