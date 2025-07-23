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
    <div className="absolute inset-0 h-full w-full overflow-hidden">
      {imagenes.map((imagen, i) => (
        <img
          key={i}
          loading="lazy"
          src={imagen.route}
          alt={imagen.title}
          className={`h-full w-full object-cover absolute transition-all duration-${duration} ease-in-out transform ${
            i === index ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        />
      ))}
    </div>
  );
}

export default Showreel;
