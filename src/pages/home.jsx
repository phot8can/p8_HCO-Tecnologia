import { useEffect } from "react";
import About from "./about";
import Showreel from "../components/showreel";
import img01 from "../assets/images/machines/1S5A0138.jpeg";
import img02 from "../assets/images/production/1S5A0155.jpeg";
import img03 from "../assets/images/products/1S5A0224.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

import HCOLogo from "../components/HCOLogo";
import JeepLogo from "../assets/images/clients_logos/jeep-7.svg";
import Romoeo from "../assets/images/clients_logos/alfaromeo.svg";

function Home() {
  const navigate = useNavigate();
  const imagenes = [
    {
      title: "Maquina 01",
      route: img01,
    },
    {
      title: "Produccion",
      route: img02,
    },
    {
      title: "Producto",
      route: img03,
    },
  ];

  const features = [
    {
      title: "Automatización industrial",
      description:
        "Estaciones automáticas y manuales que incrementan la productividad.",
    },
    {
      title: "Diseño e ingeniería",
      description:
        "Desarrollamos maquinaria y proyectos personalizados a la medida.",
    },
    {
      title: "Programación y control",
      description:
        "Integramos PLC y HMI para un control eficiente de tus procesos.",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero */}
      <div
        className="relative h-screen flex items-center justify-center text-center text-white"
        style={{ backgroundImage: `url(${img02})` }}
        data-aos="fade-up"
      >
        <div className="absolute inset-0 bg-blue opacity-80" />
        <header className="relative z-10 flex flex-col items-center gap-6 px-4">
          <HCOLogo className="h-40 text-white" />
          <h1 className="text-4xl font-bold">Tecnología Industrial HCO</h1>
          <p className="text-lg max-w-xl">
            Automatización de procesos industriales y de producción
          </p>
          <div className="flex gap-4 mt-4">
            <button
              className="bg-white text-blue px-6 py-2 rounded-full font-semibold hover:bg-blue hover:text-white transition"
              onClick={() => navigate("/services")}
            >
              Servicios
            </button>
            <button
              className="bg-blue border border-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-blue transition"
              onClick={() => document.getElementById("info")?.scrollIntoView({ behavior: "smooth" })}
            >
              Contáctanos
            </button>
          </div>
        </header>
      </div>
      {/* Features */}
      <section className="py-16 bg-bg" data-aos="fade-up">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue mb-10">
            Soluciones Integrales
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow text-center"
              >
                <h3 className="text-lg font-semibold mb-2 text-blue">
                  {f.title}
                </h3>
                <p className="text-gray-700 text-sm">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="my-10 px-6" data-aos="fade-up">
        <h2 className="text-2xl font-semibold text-center">
          Nuestros Clientes
        </h2>
        <div className="flex items-center justify-center gap-40 my-10">
          <div className="flex flex-col items-center gap-10">
            <img src={JeepLogo} alt="JeepLogo" className="size-32" />
            <button
              className="bg-white px-5 py-2 rounded-full text-blue"
              onClick={() => navigate("/services?categoria=clientes&item=jeep")}
            >
              Ver mas <span className="text-xs">&#9660;</span>
            </button>
          </div>
          <div className="flex flex-col items-center gap-10">
            <img src={Romoeo} alt="AlphaRomeoLogo" className="size-32" />
            <button
              className="bg-white px-5 py-2 rounded-full text-blue"
              onClick={() => navigate("/services?categoria=clientes&item=alhpa_romeo")}
            >
              Ver mas <span className="text-xs">&#9660;</span>
            </button>
          </div>
        </div>
      </section> */}
      <section id="info">
        <About />
        <div className="overflow-hidden">
          <Showreel imagenes={imagenes} duration="1000" />
        </div>
      </section>
    </div>
  );
}

export default Home;
