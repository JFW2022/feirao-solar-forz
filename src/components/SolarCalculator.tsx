import { useState } from 'react';
import { Calculator, ArrowRight, TrendingDown, Calendar } from 'lucide-react';
import { formatCurrencyBRL } from '../utils/formatters';

interface SolarCalculatorProps {
  onApplyToForm: (rangeLabel: string) => void;
}

function mapBillToRange(bill: number): string {
  if (bill <= 500) return 'R$ 300 a R$ 500';
  if (bill <= 1000) return 'R$ 500 a R$ 1.000';
  if (bill <= 2500) return 'R$ 1.000 a R$ 2.500';
  if (bill <= 5000) return 'R$ 2.500 a R$ 5.000';
  return 'Acima de R$ 5.000';
}

export function SolarCalculator({ onApplyToForm }: SolarCalculatorProps) {
  const [monthlyBill, setMonthlyBill] = useState(850);

  // Projeção conservadora realista: até 95% de economia descontando taxa mínima
  const monthlySavings = Math.round(monthlyBill * 0.92);
  const annualSavings = monthlySavings * 12;
  const savings25Years = annualSavings * 25;
  // Parcela estimada com 15% OFF no Feirão e prazo longo até 120x fica abaixo da conta atual
  const estimatedInstallment = Math.round(monthlyBill * 0.78);

  return (
    <section
      id="simulador"
      className="bg-[#041026] py-16 text-white sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#FFB800]/30 bg-[#FFB800]/10 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-[#FFB800]">
            <Calculator className="h-3.5 w-3.5" />
            Simulador Instantâneo do Feirão
          </div>
          <h2 className="font-display text-3xl font-black tracking-tight text-white sm:text-4xl">
            Calcule quanto você está deixando na mesa todo mês
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Arraste a barra abaixo para o valor médio da sua fatura de luz em
            Goiás ou no Distrito Federal e veja o impacto real do Feirão com{' '}
            <strong className="text-white">15% OFF</strong> e prazo de{' '}
            <strong className="text-white">até 120x</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 rounded-3xl border border-white/10 bg-[#071733] p-6 shadow-2xl sm:p-10 lg:grid-cols-12">
          {/* Slider Input */}
          <div className="flex flex-col justify-between lg:col-span-5">
            <div>
              <label
                htmlFor="solar-bill-range"
                className="text-sm font-bold uppercase tracking-wider text-slate-300"
              >
                Valor atual da sua conta de luz
              </label>
              <div className="mt-2 font-display text-4xl font-black text-[#FFB800] sm:text-5xl">
                {formatCurrencyBRL(monthlyBill)}
                <span className="text-lg font-semibold text-slate-400">
                  /mês
                </span>
              </div>

              <input
                id="solar-bill-range"
                type="range"
                min={300}
                max={6000}
                step={50}
                value={monthlyBill}
                onChange={(e) => setMonthlyBill(Number(e.target.value))}
                className="mt-6 h-3 w-full cursor-pointer appearance-none rounded-lg bg-[#041026] accent-[#FFB800]"
              />
              <div className="mt-2 flex justify-between text-xs font-semibold text-slate-400">
                <span>R$ 300</span>
                <span>R$ 3.000</span>
                <span>R$ 6.000+</span>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-[#0099FF]/30 bg-[#041026]/80 p-4">
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#38BDF8]">
                <span>Parcela estimada (até 120x)</span>
                <span className="rounded bg-[#FFB800] px-2 py-0.5 text-[10px] font-black text-[#041026]">
                  15% OFF APLICADO
                </span>
              </div>
              <p className="mt-1.5 font-display text-2xl font-black text-white">
                ~ {formatCurrencyBRL(estimatedInstallment)}/mês
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Menor que a sua fatura atual de{' '}
                {formatCurrencyBRL(monthlyBill)} — o sistema se paga sozinho.
              </p>
            </div>
          </div>

          {/* Resultados Calculados */}
          <div className="flex flex-col justify-between gap-5 lg:col-span-7">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-[#041026] p-5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
                  <TrendingDown className="h-4 w-4" />
                  Economia Mensal Estimada
                </div>
                <p className="mt-2 font-display text-3xl font-black text-white">
                  {formatCurrencyBRL(monthlySavings)}
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  Redução média de até 95% na fatura
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#041026] p-5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#38BDF8]">
                  <Calendar className="h-4 w-4" />
                  Economia em 12 Meses
                </div>
                <p className="mt-2 font-display text-3xl font-black text-white">
                  {formatCurrencyBRL(annualSavings)}
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  Dinheiro que volta para o seu bolso
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-[#FFB800]/30 bg-gradient-to-r from-[#003882]/60 to-[#041026] p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-[#FFB800]">
                Economia Acumulada em 25 Anos (Vida Útil Garantida)
              </p>
              <p className="mt-1 font-display text-4xl font-black text-white sm:text-5xl">
                {formatCurrencyBRL(savings25Years)}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                *Estimativa referencial considerando irradiação solar de GO/DF e
                eficiência de módulos Tier-1. Solicite sua engenharia exata no
                formulário.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onApplyToForm(mapBillToRange(monthlyBill))}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#FFB800] px-6 py-4 text-sm font-black uppercase tracking-wide text-[#041026] shadow-lg transition-all hover:bg-[#ffc933] active:translate-y-[1px] sm:text-base"
            >
              Garantir 15% OFF para conta de {formatCurrencyBRL(monthlyBill)}
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
