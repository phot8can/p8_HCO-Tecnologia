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
      setOferta(matchedService?.offerings || ["Oferta no disponible"]
      );
      setBeneficios( matchedService?.benefits || ["Beneficios no disponibles"]
      );
      setAplicaciones(matchedService?.applications || ["Aplicaciones no disponibles"]
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

  const RenderParagraphs = ({ text, className = "text-gray-700" }) => (
    <div className="space-y-3">
      {toLines(text).map((t, i) => (
        <p key={i} className={`${className} leading-relaxed`}>
          {t}
        </p>
      ))}
    </div>
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
            <div className="bottom-40 absolute w-full flex justify-center items-center">
              <div className="flex items-center gap-3">
                <button
                  className="bg-white/80 border px-5 py-2 rounded-full font-semibold text-blue transition text-center flex items-center justify-center gap-2 hover:bg-white"
                  onClick={() => scrollToInfo(140)}
                  title="Subir ligeramente más"
                >
                  <FaChevronDown /> Ver más
                </button>
              </div>
            </div>
          </div>
        </header>
      </div>
      <section
        className="mx-auto max-w-6xl px-4 md:px-6 my-20 scroll-mt-24"
        id="info"
      >
        {/* Industrial header strip */}
        <div className="relative mb-8">
          <div className="h-2 w-full bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 rounded-full" />
          <div className="absolute -top-3 left-0 flex items-center gap-2 px-3 py-1 bg-slate-900 text-slate-100 rounded-md shadow">
            <HiOutlineBolt className="h-5 w-5" />
            <span className="text-sm font-semibold tracking-wide uppercase">
              Ficha técnica
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Resumen */}
          <article className="lg:col-span-3 relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-900/90 text-slate-100 p-6 md:p-8 shadow-2xl">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_30%_10%,rgba(148,163,184,0.12),transparent)]" />
            <div className="relative flex items-start gap-4" data-aos="fade-up">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-slate-600 bg-slate-800 shadow-inner">
                <HiOutlineClipboardList className="h-6 w-6" />
              </div>
              <div className="min-w-0">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                  {subtitulo || "Resumen del servicio"}
                </h2>
                <div className="mt-4">
                  <div className="space-y-3">
                    <p className={`"text-slate-300" leading-relaxed`}>
                      {descripcion}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Oferta */}
          <article
            className="relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 text-slate-100 p-6 md:p-8 shadow-xl"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            <div className="absolute inset-0 opacity-20 bg-[linear-gradient(120deg,transparent_0%,transparent_40%,rgba(100,116,139,0.15)_40%,rgba(100,116,139,0.15)_60%,transparent_60%,transparent_100%)]" />
            <div className="relative flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-600 bg-slate-800">
                <HiOutlineBolt className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold">Oferta</h3>
            </div>
            <RenderList
              items={oferta}
              className="text-slate-300"
              dotClassName="bg-emerald-500"
            />
          </article>

          {/* Beneficios */}
          <article
            className="relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 text-slate-100 p-6 md:p-8 shadow-xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="absolute inset-0 opacity-20 bg-[linear-gradient(120deg,transparent_0%,transparent_40%,rgba(100,116,139,0.15)_40%,rgba(100,116,139,0.15)_60%,transparent_60%,transparent_100%)]" />
            <div className="relative flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-600 bg-slate-800">
                <HiOutlineBadgeCheck className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold">Beneficios</h3>
            </div>
            <RenderList
              items={beneficios}
              className="text-slate-300"
              dotClassName="bg-sky-500"
            />
          </article>

          {/* Aplicaciones */}
          <article
            className="relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 text-slate-100 p-6 md:p-8 shadow-xl"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <div className="absolute inset-0 opacity-20 bg-[linear-gradient(120deg,transparent_0%,transparent_40%,rgba(100,116,139,0.15)_40%,rgba(100,116,139,0.15)_60%,transparent_60%,transparent_100%)]" />
            <div className="relative flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-600 bg-slate-800">
                <HiOutlineCube className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold">Aplicaciones</h3>
            </div>
            <RenderList
              items={aplicaciones}
              className="text-slate-300"
              dotClassName="bg-amber-500"
            />
          </article>
        </div>
      </section>
      {/* <hr className="my-10"/> */}
    </>
  );
}

export default Services;
