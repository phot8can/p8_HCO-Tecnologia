import React, { useState, useEffect } from "react";

function Showreel({ imagenes, duration }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % imagenes.length);
    }, 3000); // Cambia de imagen cada 3 segundos

    return () => clearInterval(interval);
  }, [imagenes.length]);

  return (
    <div className="relative w-full h-144 bg-gray-200  shadow-md overflow-hidden flex items-center justify-center text-gray-700">
      {imagenes.map((imagen, i) => (
        <img
          key={i}
          src={imagen.route}
          alt={imagen.title}
          className={`absolute object-cover  transition-all duration-${duration} ease-in-out transform ${
            i === index ? "opacity-100 translate-y-2" : "opacity-0 translate-y-0"
          }`}
        />
      ))}
    </div>
  );
}

export default Showreel;
