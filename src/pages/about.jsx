import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Enterprice_Values from "../components/enterprice_values";
import { FaUserTie, FaBuilding, FaCogs, FaTools } from "react-icons/fa";
import { FaCompass } from "react-icons/fa6";
import { TbTargetArrow } from "react-icons/tb";

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
      <div className="absolute h-full w-full bg-#fff">
        <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>
      {/* Info Section */}
      <div className="my-48" />
      <section
        className="my-10 px-6 max-w-4xl mx-auto text-center"
        data-aos="fade-up"
      >
        <h1 className="text-3xl font-bold text-center mb-12">
          ¿Quiénes somos?
        </h1>
        <p className="text-gray-700 text-lg">
          Somos una empresa orgullosamente mexicana, de Ingeniería especializada
          en automatización industrial, enfocada en el diseño y fabricación de
          estaciones automatizadas.
        </p>
      </section>
           {/* Misión */}
      <section
        className="my-20 px-6 lg:px-16 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center"
        data-aos="fade-up"
      >
        <div className="flex justify-center items-center w-full h-full">
          <FaCompass className="text-blue-900 text-8xl  text-slate-500" />
        </div>
        <div>
          <h2 className="text-4xl font-bold text-blue-900 mb-6  text-slate-500">
            Nuestra misión
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Nuestra misión es impulsar la competitividad industrial mediante
            soluciones de automatización confiables y soporte personalizado,
            desde el diseño hasta la puesta en marcha.
          </p>
        </div>
      </section>

      {/* Visión */}
      <section
        className="my-20 px-6 lg:px-16 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center"
        data-aos="fade-up"
      >
        <div>
          <h2 className="text-4xl font-bold text-blue-900 mb-6 text-slate-500">
            Nuestra visión
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            En HCO, buscamos expandir nuestra presencia en el mercado,
            consolidándonos como un referente de excelencia, innovación y
            compromiso con la satisfacción total de nuestros clientes.
          </p>
        </div>
        <div className="flex justify-center items-center w-full h-full">
          <TbTargetArrow className="text-blue-900 text-9xl  text-slate-500" />
        </div>
      </section>
      {location.pathname === "/about" && <Enterprice_Values />}

      <hr className="text-gray-light" />

      {/* Nuestro Equipo */}
      <section className="py-16 bg-bg text-blue mb-20" data-aos="fade-up">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nuestro Equipo
          </h2>

          <div className="space-y-12">
            {/* Dirección General */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <FaUserTie className="text-blue" /> Dirección General
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded shadow">
                  <h4 className="font-bold">Jorge Cantú Zúñiga</h4>
                  <p>Gestor de Proyectos de Manufactura</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                  <h4 className="font-bold">Maximiliano Cantú Zúñiga</h4>
                  <p>Ingeniero de Control</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                  <h4 className="font-bold">Miriam Ortiz Morales</h4>
                  <p>Administración Empresarial</p>
                </div>
              </div>
            </div>

            {/* Departamento de Administración */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <FaBuilding className="text-blue" /> Departamento de
                Administración
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded shadow">
                  <h4 className="font-bold">Martha Cano Solís</h4>
                  <p>Agente Aduanal</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                  <h4 className="font-bold">Gerardo de Alba</h4>
                  <p>Contador Público</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                  <h4 className="font-bold">Osvaldo García Mares</h4>
                  <p>Ingeniero de Control</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                  <h4 className="font-bold">Adriana Santiago Fernández</h4>
                  <p>Administración Empresarial</p>
                </div>
              </div>
            </div>

            {/* Departamento de Ingeniería */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <FaCogs className="text-blue" /> Departamento de Ingeniería
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded shadow">
                  <h4 className="font-bold">Luis López Torres</h4>
                  <p>Ingeniero de Control</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                  <h4 className="font-bold">Luis Zúñiga Garza</h4>
                  <p>Ingeniero de Control</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                  <h4 className="font-bold">Daniel González Vega</h4>
                  <p>Ingeniero de Control</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                  <h4 className="font-bold">Carlos García Mares</h4>
                  <p>Ingeniero de Control</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                  <h4 className="font-bold">Saul Miranda Mayo</h4>
                  <p>Ingeniero de Control</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                  <h4 className="font-bold">Daniel Ibarra Hernández</h4>
                  <p>Ingeniero de Control</p>
                </div>
              </div>
            </div>

            {/* Departamento de Producción */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <FaTools className="text-blue" /> Departamento de Producción
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded shadow">
                  <h4 className="font-bold">Kevin Peña Maldonado</h4>
                  <p>Técnico Electromecánico</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                  <h4 className="font-bold">Daniel Hernández</h4>
                  <p>Técnico Electromecánico</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default about;
