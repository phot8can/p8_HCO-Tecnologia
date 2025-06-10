import { useState } from "react";
import About from "./about";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="bg-blue-800 text-white p-10 text-center pt-40">
        <div className="flex justify-center items-center space-x-4 mb-4"></div>
        <h1 className="text-4xl font-bold text-blue">
          Bienvenido a Tecnología Industrial HCO
        </h1>
        <p className="mt-2 text-lg text-blue">
          Automatización de procesos industriales y de producción
        </p>
      </header>

      {/* Carousel Section */}
      <section className="my-10 px-6">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Nuestros Proyectos
        </h2>
        <div className="relative w-full max-w-4xl mx-auto h-64 bg-gray-200 rounded-lg shadow-md overflow-hidden flex items-center justify-center text-gray-700">
          {/* Reemplazar con un componente de carrusel real si se desea */}
          <p>(Aquí va el carrusel de imágenes que vamos a poner xd)</p>
        </div>
      </section>
      <About />
    </div>
  );
}

export default Home;
