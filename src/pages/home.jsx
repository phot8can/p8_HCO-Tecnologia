import { useState, useEffect } from "react";
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

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <div
        className="relative w-full h-144 align-middle justify-center flex mt-20"
        data-aos="fade-up"
      >
        <header className="inset-0 z-10 flex flex-col items-center justify-center p-10 text-center text-blue gap-10">
          <HCOLogo className="text-blue-600 h-44" />
          <div>
            <h1 className="text-4xl font-bold ">
              Bienvenido a Tecnología Industrial HCO
            </h1>
            <p className="text-lg ">
              Automatización de procesos industriales y de producción
            </p>
          </div>
          <button
            className="bg-blue px-5 py-2 rounded-full text-white hover:text-blue hover:bg-white transition-colors duration-150"
            onClick={() => document.getElementById("a")?.scrollIntoView({ behavior: "smooth" })}
          >
            Ver mas <span className="text-xs">&#9660;</span>
          </button>
        </header>
      </div>

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
      <section id="a">
        <About />
        <div className="overflow-hidden">
          <Showreel imagenes={imagenes} duration="1000" />
        </div>
      </section>
    </div>
  );
}

export default Home;
