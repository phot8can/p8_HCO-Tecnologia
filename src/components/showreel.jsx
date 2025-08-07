import React, { useState, useEffect } from "react";

function Showreel({ imagenes, duration = 4000, intervalo = 0 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!imagenes || imagenes.length === 0) return;

    setIndex(0); // Reset index when images change

    if (imagenes.length === 1) return; // No need for slideshow

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % imagenes.length);
    }, Number(duration) + Number(intervalo * 1000));

    return () => clearInterval(interval);
  }, [imagenes, duration, intervalo]);

  const transitionStyle = {
    transition: `opacity ${duration}ms ease-in-out, transform ${duration}ms ease-in-out`,
  };

  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden">
      {imagenes.map((imagen, i) => {
        const isVisible = imagenes.length === 1 || i === index;
        return (
          <img
            key={i}
            loading="lazy"
            src={imagen.route}
            alt={imagen.title}
            className={`h-full w-full object-cover absolute ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
            style={transitionStyle}
          />
        );
      })}
    </div>
  );
}

export default Showreel;
