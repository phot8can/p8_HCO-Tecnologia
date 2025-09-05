import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import navbar from "@data/navbar.json";
import services from "@data/services.json";
import Showreel from "@components/showreel";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  HiOutlineClipboardList,
  HiOutlineBadgeCheck,
  HiOutlineCube,
} from "react-icons/hi";
import { HiOutlineBolt } from "react-icons/hi2";
import { FaChevronDown } from "react-icons/fa";
import testVideo from "@assets/video/test.mp4";

function Services() {
  const [showreelImg, setShowreelImg] = useState([]);
  const location = useLocation();
  const [queryParams, setQueryParams] = useState("");

  const [title, setTitle] = useState("Cargando Titulo...");
  const [description, setDescription] = useState("Cargando Descripción...");
  const [ruta, setRuta] = useState("");
  const [subtitulo, setSubtitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [oferta, setOferta] = useState([]);
  const [beneficios, setBeneficios] = useState([]);
  const [aplicaciones, setAplicaciones] = useState([]);

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
      setSubtitulo(matchedService?.subtitle || "Subtitulo no disponible");
      setDescripcion(matchedService?.overview || "Descripción no disponible");
      setOferta(matchedService?.offerings || ["Oferta no disponible"]);
      setBeneficios(matchedService?.benefits || ["Beneficios no disponibles"]);
      setAplicaciones(
        matchedService?.applications || ["Aplicaciones no disponibles"]
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
    const byNewline = s
      .split(/\r?\n/)
      .map((t) => t.trim())
      .filter(Boolean);
    if (byNewline.length > 1) return byNewline;
    // Si no hay, intenta separar por comas
    const byComma = s
      .split(/\s*,\s*/)
      .map((t) => t.trim())
      .filter(Boolean);
    if (byComma.length > 1) return byComma;
    // Retorna el string tal cual en un arreglo para render uniforme
    return s ? [s] : [];
  };

  const RenderList = ({
    items,
    className = "text-gray-700",
    dotClassName = "bg-blue-600",
  }) => (
    <ul className="mt-3 space-y-2">
      {toLines(items).map((it, i) => (
        <li key={i} className="flex items-start gap-3">
          <span
            className={`mt-2 h-2 w-2 rounded-full flex-shrink-0 ${dotClassName}`}
          />
          <span className={className}>{it}</span>
        </li>
      ))}
    </ul>
  );

  const scrollToInfo = (offset = 0) => {
    const el = document.getElementById("info");
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <>
      <div className="relative h-screen text-white">
        <header
          className=" flex h-full"
          onContextMenu={(e) => e.preventDefault()}
        >
          <div>
            <div className="absolute inset-0 -z-9 max-h-56" data-aos="fade-up">
              <Showreel imagenes={showreelImg} duration={1500} intervalo={2} />
              <div className="absolute inset-0 bg-blue opacity-40" />
            </div>
            <div
              className="grid grid-cols-1 md:grid-cols-2 w-full h-full items-center gap-8 px-10"
              data-aos="fade-up"
            >
              <div className="block">
                <div className="mb-8">
                  <div className="h-2 w-full bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 rounded-full" />
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-black">
                  {title}
                </h1>
                <p className="text-base md:text-lg drop-shadow-sm break-words text-black/50">
                  {description}
                </p>
              </div>
              <div className="flex items-center justify-center px-4">
                <div className="w-full max-w-3xl aspect-video rounded-xl overflow-hidden shadow-2xl ring-1 ring-black/10">
                  <video
                    src={testVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                    // controls
                    preload="metadata"
                    className="h-full w-full object-cover"
                    controlsList="nodownload noplaybackrate"
                  >
                    Tu navegador no soporta la etiqueta de video.
                  </video>
                </div>
              </div>
            </div>
          </div>
          {/* <HCOLogo className="h-24 md:h-40 w-auto max-w-full text-red-500" /> */}
          <div className="bottom-32 absolute w-full flex justify-center items-center">
            <div className="flex items-center gap-3">
              <button
                className="bg-white/90 border px-5 py-2 rounded-full font-semibold text-blue transition text-center flex items-center justify-center gap-2 hover:bg-white"
                onClick={() => scrollToInfo(140)}
                title="Subir ligeramente más"
              >
                <FaChevronDown /> Ver más
              </button>
            </div>
          </div>
        </header>
      </div>
      <hr className="text-[#d6d6d6]" />
      <section
        className="mx-auto max-w-7xl px-6 md:px-8 my-24 scroll-mt-24"
        id="info"
      >
        {/* Industrial header strip */}
        <div className="relative mb-12">
          <div className="h-2 w-full bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 rounded-full" />
          <div className="absolute -top-3 left-0 flex items-center gap-2 px-3 py-1 bg-blue text-slate-100 rounded-md shadow">
            <HiOutlineBolt className="h-5 w-5" />
            <span className="text-sm font-semibold tracking-wide uppercase">
              Ficha técnica
            </span>
          </div>
        </div>

        {/* Bloque 1: Imagen izquierda / texto derecha */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          {/* Imagen */}
          <div className="lg:col-span-6 order-1">
            <div
              className="aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/10 bg-slate-800/40 bg-center bg-cover"
              style={{
                backgroundImage: showreelImg?.[0]?.route
                  ? `url(${showreelImg[0].route})`
                  : undefined,
              }}
            >
              {!showreelImg?.[0]?.route && (
                <div className="h-full w-full bg-[radial-gradient(60%_40%_at_30%_10%,rgba(148,163,184,0.12),transparent)]" />
              )}
            </div>
          </div>

          {/* Texto */}
          <div className="lg:col-span-6 order-2 flex flex-col items-start justify-start text-left">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-3">
              {subtitulo || "Resumen del servicio"}
            </h2>
            <p className="text-slate-500 font-semibold mb-6">Overview</p>
            <p className="text-lg leading-relaxed text-slate-700">
              {descripcion}
            </p>
          </div>
        </div>

        {/* Bloque 2: Texto izquierda / imagen derecha */}
        <div className="block gap-10 items-start mb-8">
          {/* Texto */}
          <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col items-start justify-start text-left">
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-6">
              Detalles del servicio
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {/* Oferta */}
              <article className="group rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-lg">
                <div className="relative aspect-[4/3] bg-slate-100">
                  <div
                    className="absolute inset-0 bg-center bg-cover"
                    style={{
                      backgroundImage: showreelImg?.[2]?.route
                        ? `url(${showreelImg[2].route})`
                        : undefined,
                    }}
                  />
                  {!showreelImg?.[2]?.route && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-16 w-16 rounded-xl border border-slate-300 bg-white/90 shadow-md flex items-center justify-center">
                        <HiOutlineBolt className="h-10 w-10 text-slate-700" />
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-300 bg-white">
                      <HiOutlineBolt className="h-4 w-4 text-slate-700" />
                    </div>
                    <h4 className="text-lg font-semibold text-slate-900">
                      Oferta
                    </h4>
                  </div>
                  <RenderList
                    items={oferta}
                    className="text-slate-700"
                    dotClassName="bg-emerald-500"
                  />
                </div>
              </article>

              {/* Beneficios */}
              <article className="group rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-lg">
                <div className="relative aspect-[4/3] bg-slate-100">
                  <div
                    className="absolute inset-0 bg-center bg-cover"
                    style={{
                      backgroundImage: showreelImg?.[3]?.route
                        ? `url(${showreelImg[3].route})`
                        : undefined,
                    }}
                  />
                  {!showreelImg?.[3]?.route && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-16 w-16 rounded-xl border border-slate-300 bg-white/90 shadow-md flex items-center justify-center">
                        <HiOutlineBadgeCheck className="h-10 w-10 text-slate-700" />
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-300 bg-white">
                      <HiOutlineBadgeCheck className="h-4 w-4 text-slate-700" />
                    </div>
                    <h4 className="text-lg font-semibold text-slate-900">
                      Beneficios
                    </h4>
                  </div>
                  <RenderList
                    items={beneficios}
                    className="text-slate-700"
                    dotClassName="bg-sky-500"
                  />
                </div>
              </article>

              {/* Aplicaciones */}
              <article className="group rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-lg">
                <div className="relative aspect-[4/3] bg-slate-100">
                  <div
                    className="absolute inset-0 bg-center bg-cover"
                    style={{
                      backgroundImage: showreelImg?.[4]?.route
                        ? `url(${showreelImg[4].route})`
                        : undefined,
                    }}
                  />
                  {!showreelImg?.[4]?.route && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-16 w-16 rounded-xl border border-slate-300 bg-white/90 shadow-md flex items-center justify-center">
                        <HiOutlineCube className="h-10 w-10 text-slate-700" />
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-300 bg-white">
                      <HiOutlineCube className="h-4 w-4 text-slate-700" />
                    </div>
                    <h4 className="text-lg font-semibold text-slate-900">
                      Aplicaciones
                    </h4>
                  </div>
                  <RenderList
                    items={aplicaciones}
                    className="text-slate-700"
                    dotClassName="bg-amber-500"
                  />
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
      {/* <hr className="my-10"/> */}
    </>
  );
}

export default Services;
