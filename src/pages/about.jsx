import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Enterprice_Values from "../components/enterprice_values";
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
      <div className="mt-32" />
      <section className="my-10 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">¿Quiénes somos?</h2>
        <p className="text-gray-700">
          {/* En HCO Tecnologías, nos especializamos en la automatización de
          procesos industriales y de producción. Ofrecemos soluciones
          tecnológicas personalizadas que mejoran la eficiencia operativa,
          reducen costos y optimizan la productividad de nuestros clientes.
          Nuestro compromiso es brindar innovación, calidad y soporte técnico
          especializado en cada proyecto. */}
          Somos una empresa orgullosamente mexicana, de Ingeniería especializada
          en automatización industrial, enfocada en el diseño y fabricación de
          estaciones automatizadas.
        </p>
      </section>
      {location.pathname === "/about" && <Enterprice_Values />}
    </>
  );
}

export default about;
