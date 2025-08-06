import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import products from "../data/products.json";
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

    setShowreelImg([]);

    const allImporters = import.meta.glob(
      "@assets/images/proveedores/*/*.{jpg,jpeg,png,svg,webp}",
      { eager: false }
    );

    const importers = Object.entries(allImporters).filter(([path]) =>
      path.includes(`/proveedores/${ruta}/`)
    );

    const loadImages = async () => {
      for (const [, importFn] of importers) {
        const mod = await importFn();
        setShowreelImg((prev) => [
          ...prev,
          {
            title: `Imagen ${prev.length + 1}`,
            route: mod.default,
          },
        ]);
      }
    };
    loadImages();
  }, [location.search]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <div className="relative h-screen text-white">
        <header
          className=" flex h-full"
          onContextMenu={(e) => e.preventDefault()}
        >
          <div className="absolute inset-0 -z-9" data-aos="fade-up">
            <Showreel imagenes={showreelImg} duration={1500} intervalo={4} />
            <div className="absolute inset-0 bg-blue opacity-100" />
          </div>
          <div className="z-0 relative flex flex-col items-center justify-center gap-6 px-4 text-center w-full">
            {/* <HCOLogo className="h-24 md:h-40 w-auto max-w-full text-red-500" /> */}
            <div className="my-32 mb-96 flex flex-col max-w-80 justify-center align-middle text-center">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6 text-white drop-shadow-lg line-clamp-2 break-words">
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
