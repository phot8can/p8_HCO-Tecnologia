import React, { useState, useEffect } from "react";

function Showreel({ imagenes, duration = 4000, intervalo = 0 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % imagenes.length);
    }, Number(duration) + Number(intervalo*1000)); // Aseguramos que se use como número

    return () => clearInterval(interval);
  }, [imagenes.length, duration, intervalo]);

  const transitionStyle = {
    transition: `opacity ${duration}ms ease-in-out, transform ${duration}ms ease-in-out`,
  };

  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden">
      {imagenes.map((imagen, i) => (
        <img
          key={i}
          loading="lazy"
          src={imagen.route}
          alt={imagen.title}
          className={`h-full w-full object-cover absolute ${
            i === index ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
          style={transitionStyle}
        />
      ))}
    </div>
  );
}

export default Showreel;
