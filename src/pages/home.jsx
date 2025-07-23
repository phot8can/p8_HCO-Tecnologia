import { useEffect, useState } from "react";
import Showreel from "@components/showreel";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { IoChatbubblesOutline } from "react-icons/io5";
import Enterprice_values from "@components/enterprice_values";

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
        <div className="absolute inset-0 z-0 " data-aos="fade-up">
          <Showreel imagenes={showreelImg} duration="1000" />
          <div className="absolute inset-0 bg-blue opacity-80" />
        </div>
        <header className="relative z-10 flex flex-col items-center justify-center h-full gap-6 px-4 text-center">
          <HCOLogo className="h-40 text-white" />
          <h1 className="text-4xl font-bold">Tecnología Industrial HCO</h1>
          <p className="text-lg max-w-xl">
            Automatización de procesos industriales y de producción
          </p>
          <div className="bottom-20 absolute w-full flex justify-center items-center gap-10">
            <button
              className="bg-white hover:bg-blue border hover:border-white px-6 py-2 rounded-full font-semibold hover:text-white text-blue transition text-center flex items-center justify-center gap-2"
              onClick={() => navigate("/info")}
            >
              <IoChatbubblesOutline /> Contactanos
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
        <div class="absolute h-full w-full bg-#fff -z-10">
          <div class="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
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

      <section className="my-10 px-6" data-aos="fade-up">
        <h2 className="text-4xl font-semibold text-center">
          Nuestros Clientes
        </h2>
        <div className="flex items-center justify-center gap-40 my-10">
          <div className="flex flex-col items-center gap-10">
            <img
              alt="JeepLogo"
              className="size-64"
              src={Inteva_Logo}
              loading="lazy"
            />
          </div>
          <div className="flex flex-col items-center gap-10">
            <img
              alt="AlphaRomeoLogo"
              className="size-64"
              src={Merit_Logo}
              loading="lazy"
            />
            {/* <button
              className="bg-white px-5 py-2 rounded-full text-blue"
              onClick={() =>
                navigate("/services?categoria=clientes&item=alhpa_romeo")
              }
            >
              Ver mas <span className="text-xs">&#9660;</span>
            </button> */}
          </div>
        </div>
      </section>
      <section className="py-16 bg-white text-blue" data-aos="fade-up">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Contáctanos</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">
                ¿Tienes un proyecto en mente?
              </h3>
              <p className="text-gray-700">
                Estamos listos para ayudarte a automatizar tus procesos
                industriales. Completa el formulario o envíanos un mensaje
                directo.
              </p>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>
                  <strong>Teléfono:</strong>{" "}
                  <a
                    href="tel:+528682990165"
                    className="text-blue hover:underline"
                  >
                    +52 (868) 299 0165
                  </a>
                  {" , "}
                  <a
                    href="tel:+528681619773"
                    className="text-blue hover:underline"
                  >
                    +52 (868) 161 9773
                  </a>
                </li>
                <li>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:tecnologiaindustrial.hco@gmail.com"
                    className="text-blue hover:underline"
                  >
                    tecnologiaindustrial.hco@gmail.com
                  </a>
                </li>
                <li>
                  <strong>Dirección:</strong>{" "}
                  <a
                    href="https://maps.app.goo.gl/Mr7fNbYmEyJzAEiU7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue hover:underline"
                  >
                    Hacienda Quinta Real, H. Matamoros, Tam. MX. CP 87345
                  </a>
                </li>
              </ul>
            </div>
            <form className="bg-gray-100 p-6 rounded-lg shadow space-y-4">
              <input
                type="text"
                placeholder="Nombre"
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue"
              />
              <input
                type="email"
                placeholder="Correo electrónico"
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue"
              />
              <textarea
                rows="4"
                placeholder="Mensaje"
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue text-white py-2 rounded font-semibold hover:bg-white hover:text-blue border border-blue transition"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
