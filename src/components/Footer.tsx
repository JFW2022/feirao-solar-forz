export function Footer({ onCtaClick }: { onCtaClick: () => void }) {
  return (
    <footer className="border-t border-white/10 bg-[#041026] py-12 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 border-b border-white/10 pb-8 md:flex-row md:items-center">
          <div>
            <img
              src="/images/logo-forz.png"
              alt="FORZ Energia Solar"
              className="h-12 w-auto object-contain"
            />
            <p className="mt-3 max-w-md text-sm text-slate-400">
              Soluções completas em energia fotovoltaica residencial, comercial,
              rural e industrial. +80 clientes atendidos em Goiás e Distrito
              Federal.
            </p>
          </div>

          <div className="flex flex-col items-start gap-3 md:items-end">
            <p className="text-xs font-bold uppercase tracking-wider text-[#FFB800]">
              Feirão de Energia Solar FORZ — 15% OFF • Até 120x
            </p>
            <button
              type="button"
              onClick={onCtaClick}
              className="rounded-lg bg-[#FFB800] px-5 py-2.5 text-sm font-black uppercase tracking-wide text-[#041026] transition-colors hover:bg-[#ffc933]"
            >
              Fazer Simulação Gratuita
            </button>
          </div>
        </div>

        <div className="mt-6 flex flex-col justify-between gap-3 text-xs text-slate-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} FORZ Energia Solar. Todos os direitos
            reservados.
          </p>
          <p>
            Atendimento especializado: Goiás (Equatorial GO) e Distrito Federal
            (Neoenergia DF).
          </p>
        </div>
      </div>
    </footer>
  );
}
