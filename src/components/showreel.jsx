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

  if (!imagenes || imagenes.length === 0) return null;

  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden">
      {imagenes.map((imagen, i) => {
        // Only render the current image and the next one to optimize performance
        // This prevents the browser from trying to load all images in the showreel at once
        const isCurrent = i === index;
        const isNext = i === (index + 1) % imagenes.length;
        const isPrev = i === (index - 1 + imagenes.length) % imagenes.length;

        // Render current, next (for preloading and transition), and prev (for transition out)
        if (!isCurrent && !isNext && !isPrev && imagenes.length > 3) return null;

        return (
          <img
            key={i}
            loading={i === 0 ? "eager" : "lazy"}
            decoding="async"
            src={imagen.route}
            alt={imagen.title}
            className={`h-full w-full object-cover absolute ${
              isCurrent ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
            style={transitionStyle}
          />
        );
      })}
    </div>
  );
}

export default Showreel;
