import { Zap, Calculator, PlayCircle, HelpCircle } from 'lucide-react';

interface HeaderProps {
  onCtaClick: () => void;
}

export function Header({ onCtaClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#041026]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#topo"
          className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB800] rounded-lg"
          aria-label="FORZ Energia Solar - Início"
        >
          <img
            src="/images/logo-forz.png"
            alt="FORZ Energia Solar"
            className="h-10 w-auto object-contain sm:h-12"
          />
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Navegação principal">
          <a
            href="#como-funciona"
            className="flex items-center gap-1.5 text-sm font-semibold text-slate-200 transition-colors hover:text-[#FFB800]"
          >
            <PlayCircle className="h-4 w-4 text-[#0099FF]" />
            Como funciona
          </a>
          <a
            href="#simulador"
            className="flex items-center gap-1.5 text-sm font-semibold text-slate-200 transition-colors hover:text-[#FFB800]"
          >
            <Calculator className="h-4 w-4 text-[#0099FF]" />
            Simulador
          </a>
          <a
            href="#cobertura"
            className="flex items-center gap-1.5 text-sm font-semibold text-slate-200 transition-colors hover:text-[#FFB800]"
          >
            <Zap className="h-4 w-4 text-[#0099FF]" />
            GO e DF
          </a>
          <a
            href="#duvidas"
            className="flex items-center gap-1.5 text-sm font-semibold text-slate-200 transition-colors hover:text-[#FFB800]"
          >
            <HelpCircle className="h-4 w-4 text-[#0099FF]" />
            Dúvidas
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden rounded-full border border-[#FFB800]/30 bg-[#FFB800]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#FFB800] sm:inline-flex">
            15% OFF • Até 120x
          </span>
          <button
            type="button"
            onClick={onCtaClick}
            className="rounded-lg bg-[#FFB800] px-4 py-2 text-xs font-extrabold uppercase tracking-wide text-[#041026] shadow-sm transition-all hover:bg-[#ffc933] active:translate-y-[1px] active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:px-5 sm:py-2.5 sm:text-sm"
          >
            Simular Desconto
          </button>
        </div>
      </div>
    </header>
  );
}
