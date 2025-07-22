import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Enterprice_Values from "../components/enterprice_values";
import { FaUserTie, FaBuilding, FaCogs, FaTools } from "react-icons/fa";



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
      {/* Info Section */}
      <div className="mt-32"/>
      <section className="my-10 px-6 max-w-4xl mx-auto text-center" data-aos="fade-up">
        <h1 className="text-3xl font-bold text-center mb-12">
          ¿Quiénes somos?
        </h1>
        <p className="text-gray-700 text-lg">
          Somos una empresa orgullosamente mexicana, de Ingeniería especializada
          en automatización industrial, enfocada en el diseño y fabricación de
          estaciones automatizadas.
        </p>
      </section>
      {location.pathname === "/about" && <Enterprice_Values  />}

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
