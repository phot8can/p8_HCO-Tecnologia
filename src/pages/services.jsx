import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import navbar from "@data/navbar.json";
import Showreel from "@components/showreel";
import AOS from "aos";
import "aos/dist/aos.css";

function Services() {
  const [showreelImg, setShowreelImg] = useState([]);
  const location = useLocation();
  const [queryParams, setQueryParams] = useState("");

  const [title, setTitle] = useState("Cargando Titulo...");
  const [description, setDescription] = useState("Cargando Descripción...");
  const [ruta, setRuta] = useState("");

  useEffect(() => {
    const categoriaParam =
      new URLSearchParams(location.search).get("categoria") || "";
    setQueryParams(categoriaParam);

    function deepSearch(obj, key) {
      if (typeof obj !== "object" || obj === null) return null;
      if (
        Object.values(obj).some(
          (val) =>
            typeof val === "string" &&
            val.toLowerCase().includes(key.toLowerCase())
        )
      ) {
        return obj;
      }
      for (const value of Object.values(obj)) {
        if (Array.isArray(value)) {
          for (const item of value) {
            const found = deepSearch(item, key);
            if (found) return found;
          }
        } else if (typeof value === "object") {
          const found = deepSearch(value, key);
          if (found) return found;
        }
      }
      return null;
    }

    const matchedItem = deepSearch(navbar, categoriaParam);

    if (matchedItem) {
      setTitle(matchedItem.title);
      setDescription(matchedItem.description);
      setRuta(matchedItem.sources);
    } else {
      setTitle("Cargando Titulo...");
      setDescription("Cargando Descripción...");
      setRuta("");
    }
  }, [location]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    if (!ruta) {
      setShowreelImg([]);
      return;
    }

    const loadImages = async () => {
      try {
        const importers = import.meta.glob("/src/assets/images/servicios/**", {
          eager: false,
        });

        const filteredImporters = Object.entries(importers).filter(([path]) =>
          path.includes(`/src/assets/images/servicios/${ruta}/`)
        );

        const images = await Promise.all(
          filteredImporters.map(([_, importFn]) => importFn())
        );

        const formattedImages = images.map((mod, index) => ({
          title: `Imagen ${index + 1}`,
          route: mod.default,
        }));

        console.log(formattedImages);
        setShowreelImg(formattedImages);
      } catch (error) {
        console.error("Error loading images:", error);
        setShowreelImg([]);
      }
    };

    loadImages();
  }, [ruta]);

  return (
    <>
      <div className="relative h-screen text-white">
        <header
          className=" flex h-full"
          onContextMenu={(e) => e.preventDefault()}
        >
          <div className="absolute inset-0 -z-9" data-aos="fade-up">
            <Showreel imagenes={showreelImg} duration={1500} intervalo={2} />
            <div className="absolute inset-0 bg-blue opacity-40" />
          </div>
          <div className="z-0 relative flex flex-col items-center justify-center text-center w-full h-full">
            {/* <HCOLogo className="h-24 md:h-40 w-auto max-w-full text-red-500" /> */}
            <div className=" flex flex-col max-w-2xl justify-center align-middle text-center">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6 text-white drop-shadow-lg  break-words">
                {title}
              </h1>
              <p className="text-base md:text-lg text-gray-300 max-w-xl mx-auto drop-shadow-sm line-clamp-2 break-words">
                {description}
              </p>
              <div className="space-y-8 w-full"></div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default Services;
