import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import navbar from "@data/navbar.json";
import services from "@data/services.json";
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
  const [subtitulo, setSubtitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [oferta, setOferta] = useState("");
  const [beneficios, setBeneficios] = useState("");
  const [aplicaciones, setAplicaciones] = useState("");

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
    const matchedService = deepSearch(services, categoriaParam);

    if (matchedItem) {
      setTitle(matchedItem.title);
      setDescription(matchedItem.description);
      setRuta(matchedItem.sources);
      setSubtitulo(
        Array.isArray(matchedService?.subtitle)
          ? matchedService.subtitle.join(", ")
          : typeof matchedService?.subtitle === "object"
          ? Object.values(matchedService.subtitle).join(", ")
          : matchedService?.subtitle || "Subtitulo no disponible"
      );
      setDescripcion(
        Array.isArray(matchedService?.overview)
          ? matchedService.overview.join(", ")
          : typeof matchedService?.overview === "object"
          ? Object.values(matchedService.overview).join(", ")
          : matchedService?.overview || "Descripción no disponible"
      );
      setOferta(
        Array.isArray(matchedService?.offerings)
          ? matchedService.offerings.join(", ")
          : typeof matchedService?.offerings === "object"
          ? Object.values(matchedService.offerings).join(", ")
          : matchedService?.offerings || "Oferta no disponible"
      );
      setBeneficios(
        Array.isArray(matchedService?.benefits)
          ? matchedService.benefits.join(", ")
          : typeof matchedService?.benefits === "object"
          ? Object.values(matchedService.benefits).join(", ")
          : matchedService?.benefits || "Beneficios no disponibles"
      );
      setAplicaciones(
        Array.isArray(matchedService?.applications)
          ? matchedService.applications.join(", ")
          : typeof matchedService?.applications === "object"
          ? Object.values(matchedService.applications).join(", ")
          : matchedService?.applications || "Aplicaciones no disponibles"
      );
    } else {
      setTitle("Cargando Titulo...");
      setDescription("Cargando Descripción...");
      setRuta("");
      setSubtitulo("Subtitulo no disponible");
      setDescripcion("Descripción no disponible");
      setOferta("Oferta no disponible");
      setBeneficios("Beneficios no disponibles");
      setAplicaciones("Aplicaciones no disponibles");
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

  const toLines = (val) => {
    if (Array.isArray(val)) return val;
    const s = (val ?? "").toString();
    // Primero intenta detectar saltos de línea reales "\n"
    const byNewline = s.split(/\r?\n/).map(t => t.trim()).filter(Boolean);
    if (byNewline.length > 1) return byNewline;
    // Si no hay, intenta separar por comas
    const byComma = s.split(/\s*,\s*/).map(t => t.trim()).filter(Boolean);
    if (byComma.length > 1) return byComma;
    // Retorna el string tal cual en un arreglo para render uniforme
    return s ? [s] : [];
  };

  const RenderList = ({ items }) => (
    <ul className="mt-3 space-y-2">
      {toLines(items).map((it, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="mt-2 h-2 w-2 rounded-full bg-blue-600 flex-shrink-0" />
          <span className="text-gray-700">{it}</span>
        </li>
      ))}
    </ul>
  );

  const RenderParagraphs = ({ text }) => (
    <div className="space-y-3">
      {toLines(text).map((t, i) => (
        <p key={i} className="text-gray-700 leading-relaxed">{t}</p>
      ))}
    </div>
  );

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
      <hr className="my-10"/>
        <section className="mx-auto max-w-6xl px-4 md:px-6 my-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Resumen */}
            <article className="lg:col-span-3 rounded-2xl border border-gray-200 bg-white/70 backdrop-blur p-6 md:p-8 shadow-sm">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900">{subtitulo || "Resumen del servicio"}</h2>
              <div className="mt-4">
                <RenderParagraphs text={descripcion} />
              </div>
            </article>

            {/* Oferta */}
            <article className="rounded-2xl border border-gray-200 bg-white/70 backdrop-blur p-6 md:p-8 shadow-sm">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">Oferta</h3>
              <RenderList items={oferta} />
            </article>

            {/* Beneficios */}
            <article className="rounded-2xl border border-gray-200 bg-white/70 backdrop-blur p-6 md:p-8 shadow-sm">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">Beneficios</h3>
              <RenderList items={beneficios} />
            </article>

            {/* Aplicaciones */}
            <article className="rounded-2xl border border-gray-200 bg-white/70 backdrop-blur p-6 md:p-8 shadow-sm">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">Aplicaciones</h3>
              <RenderList items={aplicaciones} />
            </article>
          </div>
        </section>
      {/* <hr className="my-10"/> */}
    </>
  );
}

export default Services;
