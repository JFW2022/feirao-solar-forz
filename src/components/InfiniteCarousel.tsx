interface CarouselPhoto {
  src: string;
  alt: string;
  label: string;
}

const PHOTOS_COL_1: CarouselPhoto[] = [
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
    alt: 'Módulos fotovoltaicos de alta eficiência instalados em telhado',
    label: 'Condomínio — Águas Claras/DF',
  },
];

const PHOTOS_COL_2: CarouselPhoto[] = [
  {
    src: '/images/solar-3.jpg',
    alt: 'Projeto solar rural FORZ Energia Solar',
    label: 'Agronegócio — Anápolis/GO',
  },
  {
    src: '/images/solar-4.jpg',
    alt: 'Instalação residencial com geração limpa',
    label: 'Residencial — Lago Sul/DF',
  },
  {
    src: '/images/solar-1.jpg',
    alt: 'Cobertura com placas fotovoltaicas monocristalinas',
    label: 'Casa Solar — Valparaíso/GO',
  },
  {
    src: '/images/solar-2.jpg',
    alt: 'Galpão empresarial com energia solar',
    label: 'Empresarial — Taguatinga/DF',
  },
];

function PhotoTrack({
  photos,
  animationClass,
}: {
  photos: CarouselPhoto[];
  animationClass: string;
}) {
  // Duplicate array twice for seamless infinite loop
  const items = [...photos, ...photos];

  return (
    <div className="flex-1 overflow-hidden">
      <div className={`flex flex-col gap-4 ${animationClass}`}>
        {items.map((photo, idx) => (
          <div
            key={`${photo.src}-${idx}`}
            className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#071733] shadow-lg"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="eager"
              className="h-full w-full object-cover opacity-95"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#041026]/90 via-[#041026]/40 to-transparent p-3">
              <span className="inline-block rounded bg-[#041026]/80 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#FFB800]">
                {photo.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function InfiniteCarousel() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl"
      aria-hidden="true"
    >
      {/* Vertical dual-column infinite image stream passing behind the form */}
      <div className="hidden h-full w-full gap-4 p-2 sm:flex">
        <PhotoTrack photos={PHOTOS_COL_1} animationClass="animate-marquee-slow" />
        <PhotoTrack
          photos={PHOTOS_COL_2}
          animationClass="animate-marquee-slow-reverse"
        />
      </div>

      {/* Horizontal infinite stream on mobile behind form */}
      <div className="flex h-full w-full max-w-full items-stretch overflow-hidden sm:hidden">
        <div className="flex w-max animate-marquee-x gap-3">
          {[...PHOTOS_COL_1, ...PHOTOS_COL_1].map((photo, idx) => (
            <div
              key={`mob-${idx}`}
              className="relative h-full w-64 shrink-0 overflow-hidden rounded-2xl border border-white/10"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="h-full w-full object-cover opacity-85"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Gradient scrim for strong contrast and legibility under the floating form card */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#041026]/25 via-[#041026]/40 to-[#041026]/65 backdrop-blur-[1px]" />
    </div>
  );
}
