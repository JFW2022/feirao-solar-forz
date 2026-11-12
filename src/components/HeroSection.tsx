import { useState, useEffect } from 'react';
import {
  Clock,
  CheckCircle2,
  MapPin,
  Users,
  ShieldCheck,
  Percent,
} from 'lucide-react';
import { LeadForm } from './LeadForm';
import { InfiniteCarousel } from './InfiniteCarousel';
import { LeadPayload } from '../types/lead';

interface HeroSectionProps {
  selectedBillRange?: string;
  onFormSuccess: (payload: LeadPayload) => void;
}

function CountdownBadge() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 14,
    minutes: 38,
    seconds: 42,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        }
        if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        }
        if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <div className="inline-flex flex-wrap items-center gap-2.5 rounded-xl border border-[#FFB800]/40 bg-[#041026]/85 px-3.5 py-2 shadow-sm backdrop-blur-md">
      <div className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#FFB800]">
        <Clock className="h-4 w-4 shrink-0" />
        <span>Lote do Feirão encerra em:</span>
      </div>
      <div className="flex items-center gap-1 font-mono text-sm font-black text-white">
        <span className="rounded bg-[#003882] px-1.5 py-0.5">{pad(timeLeft.hours)}h</span>
        <span>:</span>
        <span className="rounded bg-[#003882] px-1.5 py-0.5">{pad(timeLeft.minutes)}m</span>
        <span>:</span>
        <span className="rounded bg-[#FFB800] px-1.5 py-0.5 text-[#041026]">
          {pad(timeLeft.seconds)}s
        </span>
      </div>
    </div>
  );
}

export function HeroSection({
  selectedBillRange,
  onFormSuccess,
}: HeroSectionProps) {
  return (
    <section
      id="topo"
      className="relative flex min-h-[820px] items-center overflow-hidden bg-[#041026] py-10 sm:py-14 lg:py-16"
    >
      {/* Carrossel infinito preenchendo TODA a seção Hero (atrás da headline e do formulário) */}
      <InfiniteCarousel />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Lado Esquerdo: Logo FORZ + Copy Estratégica + Autoridade */}
          <div className="min-w-0 text-left lg:col-span-6">
            <div className="mb-6">
              <img
                src="/images/logo-forz.png"
                alt="FORZ Energia Solar"
                className="h-14 w-auto object-contain drop-shadow-lg sm:h-16"
              />
            </div>

            <div className="mb-4 flex flex-wrap items-center gap-3">
              <CountdownBadge />
            </div>

            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#0099FF]/40 bg-[#041026]/80 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#38BDF8] backdrop-blur-sm">
              <MapPin className="h-3.5 w-3.5 shrink-0" />
              Atendimento em todo Goiás e Distrito Federal
            </div>

            <h1 className="font-display text-3xl font-black leading-[1.08] tracking-tight text-white drop-shadow-sm sm:text-5xl lg:text-[3.35rem]">
              Feirão de Energia Solar FORZ:{' '}
              <span className="text-[#FFB800]">15% OFF</span> e parcelamento em
              até <span className="text-[#38BDF8]">120x</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-100 sm:text-lg">
              Reduza em até <strong className="text-white">95%</strong> a sua
              conta de energia elétrica com parcelas que se pagam com a própria
              economia gerada todo mês no seu telhado.
            </p>

            {/* Benefícios chave */}
            <ul className="mt-6 space-y-3 text-sm font-medium text-slate-100 sm:text-base">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#FFB800]" />
                <span>
                  <strong className="text-white">15% de desconto real</strong>{' '}
                  exclusivo para cadastros durante o Feirão do Ano
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#FFB800]" />
                <span>
                  <strong className="text-white">Prazo em até 120x</strong>:
                  troque a conta da distribuidora por um patrimônio próprio
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#FFB800]" />
                <span>
                  <strong className="text-white">Homologação técnica ágil</strong>{' '}
                  junto à Equatorial Goiás e Neoenergia Brasília
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#FFB800]" />
                <span>
                  <strong className="text-white">Garantia de 25 anos</strong> de
                  eficiência energética e suporte local dedicado
                </span>
              </li>
            </ul>

            {/* Selo de Prova Social */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-3 rounded-2xl border border-emerald-400/40 bg-[#041026]/85 px-4 py-3 backdrop-blur-md">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-[#041026]">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-extrabold uppercase tracking-wide text-emerald-300">
                    +80 Clientes Atendidos
                  </p>
                  <p className="text-xs font-medium text-slate-300">
                    Economia comprovada em GO e DF
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 rounded-2xl border border-white/15 bg-[#041026]/85 px-4 py-3 backdrop-blur-md">
                <Percent className="h-5 w-5 text-[#FFB800]" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-white">
                    Equipamentos Tier-1
                  </p>
                  <p className="flex items-center gap-1 text-[11px] text-slate-300">
                    <ShieldCheck className="h-3.5 w-3.5 text-[#0099FF]" />
                    Certificados INMETRO
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Lado Direito: Formulário Suspenso sobre o Carrossel Infinito da Seção */}
          <div className="relative min-w-0 lg:col-span-6">
            <div className="mx-auto w-full max-w-xl shadow-[0_25px_70px_-15px_rgba(0,0,0,0.8)]">
              <LeadForm
                selectedBillRange={selectedBillRange}
                onSuccess={onFormSuccess}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
