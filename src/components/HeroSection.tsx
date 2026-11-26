import { useState, useEffect } from 'react';
import {
  Clock,
  CheckCircle2,
  MapPin,
  Users,
  ShieldCheck,
  BadgeCheck,
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
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      // Data oficial: 12/12/2026 às 09h00 (Horário de Brasília UTC-3)
      const target = new Date('2026-12-12T09:00:00-03:00').getTime();
      const now = new Date().getTime();
      const difference = Math.max(0, target - now);

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <div className="inline-flex flex-col gap-2 rounded-2xl border border-[#FFB800]/40 bg-[#041026]/90 px-4 py-3 shadow-md backdrop-blur-md">
      <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#FFB800]">
        <Clock className="h-4 w-4 shrink-0 text-[#FFB800]" />
        <span>O Mega Feirão Solar 12/12 começa em:</span>
      </div>
      <div className="flex items-center gap-1.5 font-mono text-sm font-black text-white sm:text-base">
        <span className="rounded bg-[#003882] px-2 py-1">{timeLeft.days}d</span>
        <span className="text-[#FFB800] font-bold">:</span>
        <span className="rounded bg-[#003882] px-2 py-1">{pad(timeLeft.hours)}h</span>
        <span className="text-[#FFB800] font-bold">:</span>
        <span className="rounded bg-[#003882] px-2 py-1">{pad(timeLeft.minutes)}m</span>
        <span className="text-[#FFB800] font-bold">:</span>
        <span className="rounded bg-[#FFB800] px-2 py-1 text-[#041026]">
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
      className="relative flex min-h-[820px] items-center overflow-hidden bg-[#041026] py-8 sm:py-12 lg:py-16"
    >
      {/* Carrossel infinito preenchendo TODA a seção Hero */}
      <InfiniteCarousel />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Lado Esquerdo: Logo + Cronômetro + Selo + Headline + Benefícios + Autoridade */}
          <div className="min-w-0 text-left lg:col-span-6">
            {/* Logo e Assinatura Oficial */}
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <img
                src="/images/logo-forz.png"
                alt="FORZ Energia Solar"
                className="h-12 w-auto object-contain drop-shadow-lg sm:h-14"
              />
              <span className="rounded-full border border-white/15 bg-[#041026]/70 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-300 backdrop-blur-sm">
                Uma realização oficial FORZ Energia Solar
              </span>
            </div>

            {/* 1. Cronômetro de Contagem Regressiva */}
            <div className="mb-3">
              <CountdownBadge />
            </div>

            {/* 2. Selo de Localização */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0099FF]/40 bg-[#041026]/85 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#38BDF8] backdrop-blur-sm sm:text-sm">
              <MapPin className="h-4 w-4 shrink-0 text-[#0099FF]" />
              <span>Feirão válido para todo o Estado de Goiás e Distrito Federal</span>
            </div>

            {/* 3. Título Principal (Headline) */}
            <h1 className="font-display text-2xl font-black leading-[1.14] tracking-tight text-white drop-shadow-sm sm:text-4xl lg:text-[2.65rem]">
              Mega Feirão Solar 12/12:{' '}
              <span className="text-[#FFB800]">Até 15% OFF</span> e parcelamento
              bancário em <span className="text-[#38BDF8]">até 120x S/Entrada</span>,
              com até 120 dias de carência para começar a pagar.
            </h1>

            {/* 4. Subtítulo (Subheadline) */}
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-100 sm:text-lg">
              Reduza em até <strong className="text-white">95%</strong> a sua conta
              de energia elétrica com parcelas que se pagam com a própria economia
              gerada todo mês através do sistema solar.
            </p>

            {/* 5. Lista de Benefícios Principais */}
            <ul className="mt-6 space-y-3.5 text-sm font-medium text-slate-100 sm:text-base">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#FFB800]" />
                <span>
                  <strong className="text-white">Até 15% de desconto real e exclusivo</strong>{' '}
                  para quem estiver no Grupo VIP Mega Feirão Solar 12/12.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#FFB800]" />
                <span>
                  <strong className="text-white">Prazo de até 120x sem entrada</strong>:{' '}
                  até 120 dias de carência para o primeiro pagamento e parcelas
                  fixas podendo ficar até 40% a menos que a sua conta atual de energia.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#FFB800]" />
                <span>
                  <strong className="text-white">Homologação e instalação técnica ágil</strong>:{' '}
                  seu sistema funcionando no prazo máximo de 30 dias.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#FFB800]" />
                <span>
                  <strong className="text-white">Garantia de até 30 anos</strong>{' '}
                  de eficiência energética dos painéis e pós-venda dedicado.
                </span>
              </li>
            </ul>

            {/* 6. Selos de Autoridade */}
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-2xl border border-emerald-400/40 bg-[#041026]/85 p-3.5 backdrop-blur-md">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500 text-[#041026]">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-extrabold uppercase tracking-wide text-emerald-300">
                    +700 Clientes Atendidos
                  </p>
                  <p className="text-xs font-medium text-slate-300">
                    Economia comprovada em GO e DF
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-[#041026]/85 p-3.5 backdrop-blur-md">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#003882] text-[#FFB800]">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-white">
                    Equipamentos auditados
                  </p>
                  <p className="text-xs font-medium text-slate-300">
                    Certificados pelo INMETRO
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-[#38BDF8]/30 bg-[#041026]/85 p-3.5 backdrop-blur-md sm:col-span-2">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0099FF]/20 text-[#38BDF8]">
                  <BadgeCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-white sm:text-sm">
                    Empresa Registrada no CREA
                  </p>
                  <p className="text-xs font-medium text-slate-300">
                    Engenharia técnica responsável e segurança jurídica total
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
