import { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Providers({ colorFondo }) {
  colorFondo = colorFondo || "rgba(255,255,255,1)";
  const [showreelImg, setShowreelImg] = useState([]);

  const sliderRef = useRef(null);

  useEffect(() => {
    const loadImages = async () => {
      const importers = import.meta.glob(
        "@assets/images/proveedores/*.{jpg,jpeg,png,svg,webp}",
        { eager: false }
      );

      const images = await Promise.all(
        Object.values(importers).map((importFn) => importFn())
      );

      setShowreelImg(
        images.map((mod, index) => ({
          title: `Imagen ${index + 1}`,
          route: mod.default,
        }))
      );
    };

    loadImages();

    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <section className="max-w-5xl mx-auto px-6 my-10" data-aos="fade-up">
        <h2 className="text-4xl font-semibold text-center">
          Nuestros Proveedores
        </h2>
        <div className="relative w-full overflow-hidden my-10">
          <div
            className="absolute left-0 top-0 h-full w-32 pointer-events-none z-10"
            style={{ backgroundImage: `linear-gradient(to right, ${colorFondo}, transparent)` }}
          />
          <div
            className="absolute right-0 top-0 h-full w-32 pointer-events-none z-10"
            style={{ backgroundImage: `linear-gradient(to left, ${colorFondo}, transparent)` }}
          />
          <div
            ref={sliderRef}
            className="flex gap-10 w-max animate-slow-scroll py-10"
          >
            {showreelImg.map((img, index) => (
              <img
                key={index}
                src={img.route}
                alt={img.title}
                className="w-40 h-24 object-contain select-none"
                style={{
                  WebkitUserDrag: "none",
                  KhtmlUserDrag: "none",
                  MozUserDrag: "none",
                  OUserDrag: "none",
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Providers;
