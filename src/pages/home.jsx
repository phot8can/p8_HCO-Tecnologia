import { useEffect, useState } from "react";
import Showreel from "@components/showreel";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { IoChatbubblesOutline } from "react-icons/io5";
import Enterprice_values from "@components/enterprice_values";
import ContactUs_form from "@components/contactUs_form";
import Providers from "@components/providers";

import HCOLogo from "@components/HCOLogo";
import Inteva_Logo from "@assets/images/clients_logos/inteva.svg";
import Merit_Logo from "@assets/images/clients_logos/Merit.svg";

import { GiRobotGrab } from "react-icons/gi";
import { MdOutlineDesignServices } from "react-icons/md";
import { MdAutoMode } from "react-icons/md";

function Home() {
  const navigate = useNavigate();

  const features = [
    {
      title: "Automatización industrial",
      icon: <MdAutoMode />,
      description:
        "Estaciones automáticas y manuales que incrementan la productividad.",
    },
    {
      title: "Diseño e ingeniería",
      icon: <MdOutlineDesignServices />,
      description:
        "Desarrollamos maquinaria y proyectos personalizados a la medida.",
    },
    {
      title: "Programación y control",
      icon: <GiRobotGrab />,
      description:
        "Integramos PLC y HMI para un control eficiente de tus procesos.",
    },
  ];

  const [showreelImg, setShowreelImg] = useState([]);

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

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero */}
      <div className="relative h-screen text-white">
        <header className=" bg-blue flex h-full">
          <div className="absolute inset-0 -z-9" data-aos="fade-up">
            <Showreel imagenes={showreelImg} duration="1000" />
            <div className="absolute inset-0 bg-blue opacity-80" />
          </div>
          <div className="z-0 relative flex flex-col items-center justify-center gap-6 px-4 text-center w-full">
            <HCOLogo className="h-24 md:h-40 w-auto max-w-full text-white" />
            <h1 className="text-4xl font-bold">Tecnología Industrial HCO</h1>
            <p className="text-lg max-w-xl">
              Automatización de procesos industriales y de producción
            </p>
          </div>
          <div className="bottom-20 absolute w-full flex justify-center items-center gap-10">
            <button
              className="bg-white hover:bg-blue border hover:border-white px-6 py-2 rounded-full font-semibold hover:text-white text-blue transition text-center flex items-center justify-center gap-2"
              onClick={() => navigate("/info")}
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
      <section className="py-16 bg-bg" data-aos="fade-up">
        <div className="absolute h-full w-full bg-#fff -z-10">
          <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-blue mb-10">
            Soluciones Integrales
          </h2>
          <p className="text-lg text-center mx-auto mb-8">
            Ofrecemos un servicio completo que abarca desde el diseño,
            fabricación de líneas de producción, hasta la integración de
            tecnologías innovadoras y la modificación de equipos existentes,
            complementado con instalación, puesta en marcha y soporte técnico
            continuo.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f, idx) => (
              <div
                key={idx}
                className="bg-slate-50 p-6 rounded-lg shadow text-center"
              >
                <div className="flex flex-col justify-center align-middle">
                  <div className="text-blue text-3xl mb-2 flex justify-center">
                    {f.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-blue ">
                    {f.title}
                  </h3>
                </div>
                <p className="text-gray-700 text-sm">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Enterprice_values />

      <section className="my-10 px-6 bg-bl" data-aos="fade-up">
        <h2 className="text-4xl font-semibold text-center">
          Nuestros Clientes
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-40 my-10">
          <div className="flex flex-col items-center gap-10">
            <img
              alt="JeepLogo"
              className="w-40 h-24 md:w-64 md:h-40"
              src={Inteva_Logo}
              loading="lazy"
            />
          </div>
          <div className="flex flex-col items-center gap-10">
            <img
              alt="AlphaRomeoLogo"
              className="w-40 h-24 md:w-64 md:h-40"
              src={Merit_Logo}
              loading="lazy"
            />
          </div>
        </div>
      </section>
      <section>
        <Providers colorFondo="rgba(255, 255, 255, 1)" />
      </section>
      <section className="py-16 bg-white text-blue" data-aos="fade-up">
        <ContactUs_form />
      </section>
    </div>
  );
}

export default Home;
