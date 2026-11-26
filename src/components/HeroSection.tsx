import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
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
          {/* Lado Esquerdo: Apenas Logo + Relógio + Texto Oficial */}
          <div className="flex min-w-0 flex-col items-start justify-center gap-6 text-left lg:col-span-6">
            {/* Logo Oficial FORZ */}
            <div className="flex items-center gap-3">
              <img
                src="/images/logo-forz.png"
                alt="FORZ Energia Solar"
                className="h-12 w-auto object-contain drop-shadow-lg sm:h-16"
              />
            </div>

            {/* Relógio de Contagem Regressiva */}
            <div>
              <CountdownBadge />
            </div>

            {/* Texto Oficial */}
            <h1 className="font-display text-4xl font-black uppercase leading-[1.08] tracking-tight text-white drop-shadow-xl sm:text-5xl lg:text-6xl xl:text-7xl">
              MEGA FEIRÃO <br />
              <span className="text-[#FFB800]">SOLAR FORZ</span> <br />
              <span className="text-[#38BDF8]">12/12</span>
            </h1>
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
