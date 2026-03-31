import { useState, useEffect, useMemo, memo } from "react";
import { useLocation } from "react-router-dom";
import navbar from "@data/navbar.json";
import services from "@data/services.json";
import Showreel from "@components/showreel";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  BadgeCheck,
  Box,
  Zap,
  ChevronDown,
  Activity,
  Layers,
  Terminal,
} from "lucide-react";
import testVideo from "@assets/video/test.webm";

// Componente de lista optimizado
const RenderList = memo(
  ({ items, className = "text-gray-700", dotClassName = "bg-blue" }) => {
    const listItems = useMemo(() => {
      if (Array.isArray(items)) return items;
      const s = (items ?? "").toString();
      const byNewline = s
        .split(/\r?\n/)
        .map((t) => t.trim())
        .filter(Boolean);
      if (byNewline.length > 1) return byNewline;
      const byComma = s
        .split(/\s*,\s*/)
        .map((t) => t.trim())
        .filter(Boolean);
      if (byComma.length > 1) return byComma;
      return s ? [s] : [];
    }, [items]);

    return (
      <ul className="mt-4 space-y-3">
        {listItems.map((it, i) => (
          <li key={i} className="flex items-start gap-3 group">
            <span
              className={`mt-2 h-1.5 w-1.5 rounded-full flex-shrink-0 transition-all group-hover:scale-125 ${dotClassName}`}
            />
            <span
              className={`${className} text-sm md:text-base transition-colors group-hover:text-slate-900`}
            >
              {it}
            </span>
          </li>
        ))}
      </ul>
    );
  },
);

RenderList.displayName = "RenderList";

function Services() {
  const [showreelImg, setShowreelImg] = useState([]);
  const location = useLocation();
  const [isFading, setIsFading] = useState(false);
  const [videoSrc, setVideoSrc] = useState(testVideo);

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

    function deepSearch(obj, key) {
      if (typeof obj !== "object" || obj === null) return null;
      if (
        Object.values(obj).some(
          (val) =>
            typeof val === "string" &&
            val.toLowerCase().includes(key.toLowerCase()),
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
      setSubtitulo(matchedService?.subtitle || "Especificación Técnica");
      setDescripcion(
        matchedService?.overview || "Información del proceso detallada.",
      );
      setOferta(matchedService?.offerings || []);
      setBeneficios(matchedService?.benefits || []);
      setAplicaciones(matchedService?.applications || []);

      if (matchedService?.video) {
        const realPath = matchedService.video.replace("@assets", "/src/assets");
        const videoModules = import.meta.glob("/src/assets/**/*.{mp4,webm}");
        if (videoModules[realPath]) {
          videoModules[realPath]()
            .then((mod) => setVideoSrc(mod.default))
            .catch(() => setVideoSrc(testVideo));
        } else setVideoSrc(testVideo);
      } else setVideoSrc(testVideo);
    }
  }, [location.search]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
      mirror: false,
    });
  }, []);

  useEffect(() => {
    // Iniciar desvanecimiento al cambiar de ruta
    setIsFading(true);
    const timerFade = setTimeout(() => setIsFading(false), 150);

    // Refrescar AOS para detectar nuevos elementos después de un pequeño retraso
    const timerAos = setTimeout(() => {
      AOS.refresh();
    }, 100);
    return () => {
      clearTimeout(timerFade);
      clearTimeout(timerAos);
    };
  }, [location.search, title]);

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
          path.includes(`/src/assets/images/servicios/${ruta}/`),
        );
        const images = await Promise.all(
          filteredImporters.map(([, importFn]) => importFn()),
        );
        setShowreelImg(
          images.map((mod, index) => ({
            title: `ID-${index + 1}`,
            route: mod.default,
          })),
        );
      } catch {
        setShowreelImg([]);
      }
    };
    loadImages();
  }, [ruta]);

  const scrollToInfo = () => {
    const el = document.getElementById("info");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main
      className={`relative min-h-screen bg-white overflow-x-hidden transition-opacity duration-500 ${isFading ? "opacity-0" : "opacity-100 animate-fade-in"}`}
    >
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background / Showreel Layer */}
        <div
          className="absolute inset-0 bg-slate-900 transform-gpu"
          onContextMenu={(e) => e.preventDefault()}
        >
          <div className="absolute inset-0 h-full w-full">
            <Showreel imagenes={showreelImg} duration={2000} intervalo={3} />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-transparent" />
          <div className="absolute inset-0 industrial-grid opacity-20" />
        </div>

        <div
          className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20 "
          data-aos="fade-up"
        >
          {/* Hero Content */}
          <div className="relative text-white z-20 space-y-8 animate-fade-in order-2 lg:order-1">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] drop-shadow-lg">
                {title}
              </h1>
              <div className="h-1 w-24 bg-blue rounded-full shadow-glow" />
            </div>

            <p className="text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed font-medium">
              {description}
            </p>

            <button
              onClick={scrollToInfo}
              className="group flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-full font-bold transition-all hover:bg-blue hover:text-white shadow-xl hover:shadow-blue/50 transform-gpu hover:-translate-y-1"
            >
              <span>Ver Ficha Técnica</span>
              <ChevronDown className="h-5 w-5" />
            </button>
          </div>

          {/* Video Section / Technical Monitor */}
          <div
            className="relative order-1 lg:order-2 z-20 w-full transform-gpu"
            data-aos="zoom-in"
            data-aos-delay="200"
            onContextMenu={(e) => e.preventDefault()}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] industrial-border bg-slate-900 p-1 group">
              <div className="absolute top-4 left-4 z-30 flex items-center gap-2 px-3 py-1 bg-white/60 backdrop-blur-md rounded border border-white/10 text-[10px] font-mono text-blue uppercase tracking-tighter">
                <Activity className="h-3 w-3 animate-pulse" />
                <span>Video Demo</span>
              </div>
              <video
                key={videoSrc}
                src={videoSrc}
                autoPlay
                muted
                disablePictureInPicture
                loop
                playsInline
                preload="metadata"
                className="w-full aspect-[16/9] object-cover scale-105"
                controlsList="nodownload"
              />
              <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10 rounded-2xl" />
            </div>
            {/* Technical Detail Corner */}
            <div className="absolute -bottom-6 -right-6 h-32 w-32 industrial-grid opacity-20 -z-10" />
          </div>
        </div>
      </section>

      {/* Main Details Section */}
      <section id="info" className="relative py-24 sm:py-32 scroll-mt-20">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Header Strip */}
          <div className="flex flex-col md:flex-row items-end gap-6 mb-20">
            <div className="w-full md:w-auto flex items-center gap-4 px-6 py-3 bg-slate-900 text-white rounded-tr-3xl industrial-border shadow-2xl skew-x-[-10deg]">
              <div className="skew-x-[10deg] flex items-center gap-3">
                <Layers className="h-6 w-6 text-white" />
                <h2 className="text-xl font-bold tracking-widest uppercase">
                  Ficha Técnica
                </h2>
              </div>
            </div>
            <div className="h-px flex-grow bg-slate-200 mb-4" />
          </div>

          {/* Content Block 1 */}
          <div
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-32"
            onContextMenu={(e) => e.preventDefault()}
          >
            <div className="lg:col-span-7" data-aos="fade-right">
              <div className="relative group rounded-3xl overflow-hidden shadow-2xl bg-slate-200 transition-transform duration-500 hover:scale-[1.02]">
                <div
                  className="aspect-video bg-center bg-cover scale-105 transition-transform duration-1000 group-hover:scale-100"
                  style={{
                    backgroundImage: showreelImg?.[0]?.route
                      ? `url(${showreelImg[0].route})`
                      : undefined,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white font-mono text-xs tracking-widest opacity-60">
                  VISTA DETALLADA
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6" data-aos="fade-left">
              <div className="space-y-4">
                <span className="text-blue font-bold tracking-widest text-sm uppercase">
                  Resumen de Ingeniería
                </span>
                <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                  {subtitulo}
                </h3>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                {descripcion}
              </p>
            </div>
          </div>

          {/* Details Grid */}
          <div className="space-y-12">
            <div className="flex items-center gap-4">
              <div className="h-8 w-1 bg-blue rounded-full" />
              <h4 className="text-3xl font-bold text-slate-900">
                Especificaciones detalladas
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Oferta", data: oferta, icon: Zap, color: "emerald" },
                {
                  title: "Beneficios",
                  data: beneficios,
                  icon: BadgeCheck,
                  color: "sky",
                },
                {
                  title: "Aplicaciones",
                  data: aplicaciones,
                  icon: Box,
                  color: "amber",
                },
              ].map((card, i) => (
                <article
                  key={card.title}
                  className="relative group bg-white rounded-3xl p-8 border border-slate-100 shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-blue/20 transform-gpu hover:-translate-y-2"
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="h-12 w-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center transition-all group-hover:bg-blue group-hover:border-blue">
                      <card.icon className="h-6 w-6 text-slate-700 transition-colors group-hover:text-white" />
                    </div>
                    <h5 className="text-xl font-bold text-slate-900">
                      {card.title}
                    </h5>
                  </div>
                  <RenderList
                    items={card.data}
                    dotClassName={`bg-${card.color}-500`}
                  />
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-10 font-mono text-4xl font-black transition-opacity pointer-events-none">
                    0{i + 1}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Services;
