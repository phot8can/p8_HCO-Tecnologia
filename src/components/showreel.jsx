import React, { useState, useEffect, useCallback, memo } from "react";

const Showreel = memo(({ imagenes, duration = 1500, intervalo = 2.5 }) => {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [loadedIndices, setLoadedIndices] = useState(new Set());
  const [targetIndex, setTargetIndex] = useState(0); // El índice que queríamos mostrar
  const [isInitialFadeDone, setIsInitialFadeDone] = useState(false);

  const imagesCount = imagenes?.length || 0;
  const slideTimeTotal = Number(duration) + Number(intervalo * 1000);

  const handleLoad = useCallback(
    (idx) => {
      setLoadedIndices((prev) => {
        if (prev.has(idx)) return prev;
        const next = new Set(prev);
        next.add(idx);
        return next;
      });

      if (idx === 0) {
        setIsInitialFadeDone(true);
      }
    },
    [],
  );

  // Efecto reactivo: Cuando cambian los cargados o el objetivo, si ya está listo → transitar
  useEffect(() => {
    if (targetIndex !== index && loadedIndices.has(targetIndex)) {
      setPrevIndex(index);
      setIndex(targetIndex);
    }
  }, [targetIndex, index, loadedIndices]);

  useEffect(() => {
    if (imagesCount <= 1) return;

    const interval = setInterval(() => {
      setTargetIndex((prev) => (prev + 1) % imagesCount);
    }, slideTimeTotal);

    return () => clearInterval(interval);
  }, [imagesCount, slideTimeTotal]);

  if (imagesCount === 0) return null;

  const transitionStyle = {
    transition: `opacity ${duration}ms cubic-bezier(0.4, 0, 0.2, 1), transform ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
  };

  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden bg-slate-900 transform-gpu">
      {imagenes.map((imagen, i) => {
        const isCurrent = i === index;
        const isPrev = i === prevIndex;
        const isPreparing = i === (targetIndex % imagesCount);

        // Renderizamos actual, previa (para el crossfade), y la que estamos esperando/preparando
        const shouldRender = isCurrent || isPrev || isPreparing;

        if (!shouldRender) return null;

        const opacityClass =
          isCurrent && (i !== 0 || isInitialFadeDone)
            ? "opacity-100 scale-100 z-20"
            : isPrev
              ? "opacity-0 scale-105 z-10"
              : "opacity-0 scale-105 z-0";

        return (
          <img
            key={i}
            loading={i === 0 ? "eager" : "lazy"}
            {...(isPreparing ? { loading: "eager" } : {})}
            decoding="async"
            src={imagen.route}
            alt={imagen.title || "Showreel Industrial"}
            onLoad={() => handleLoad(i)}
            className={`h-full w-full object-cover absolute top-0 left-0 transition-all ${opacityClass}`}
            style={transitionStyle}
          />
        );
      })}
    </div>
  );
});

Showreel.displayName = "Showreel";

export default Showreel;
