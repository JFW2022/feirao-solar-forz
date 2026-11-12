interface CarouselPhoto {
  src: string;
  alt: string;
  label: string;
}

const HERO_CAROUSEL_PHOTOS: CarouselPhoto[] = [
  {
    src: '/images/solar-1.jpg',
    alt: 'Instalação solar residencial FORZ em Goiás',
    label: 'Residencial — Goiânia/GO',
  },
  {
    src: '/images/solar-2.jpg',
    alt: 'Sistema fotovoltaico comercial FORZ',
    label: 'Comercial — Brasília/DF',
  },
  {
    src: '/images/solar-3.jpg',
    alt: 'Usina solar rural em solo no Cerrado',
    label: 'Rural — Rio Verde/GO',
  },
  {
    src: '/images/solar-4.jpg',
    alt: 'Módulos fotovoltaicos instalados em telhado cerâmico',
    label: 'Residencial — Águas Claras/DF',
  },
];

export function InfiniteCarousel() {
  // Duplicate items twice for a seamless 0% -> -50% infinite horizontal loop
  const trackItems = [...HERO_CAROUSEL_PHOTOS, ...HERO_CAROUSEL_PHOTOS];

  return (
    <div
      className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden"
      aria-hidden="true"
    >
      {/* Full-section horizontal infinite image stream spanning entire Hero width and height */}
      <div className="flex h-full w-max animate-marquee-x gap-3 p-2 sm:gap-4 sm:p-3">
        {trackItems.map((photo, idx) => (
          <div
            key={`${photo.src}-${idx}`}
            className="relative h-full w-[320px] shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-[#071733] sm:w-[480px] lg:w-[640px]"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="eager"
              className="h-full w-full object-cover opacity-90"
            />
            <div className="absolute bottom-4 left-4 rounded-lg bg-[#041026]/80 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#FFB800] backdrop-blur-sm">
              {photo.label}
            </div>
          </div>
        ))}
      </div>

      {/* Directional dark navy scrim: keeps left headline super legible while letting scrolling solar roofs shine behind the entire section */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#041026]/90 via-[#041026]/72 to-[#041026]/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#041026]/55 via-transparent to-[#041026]/85" />
    </div>
  );
}
