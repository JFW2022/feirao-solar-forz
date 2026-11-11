import {
  Percent,
  CalendarClock,
  ShieldCheck,
  FileCheck2,
} from 'lucide-react';

const BENEFITS = [
  {
    icon: Percent,
    tag: 'Condição de Feirão',
    title: '15% OFF Direto no Projeto',
    description:
      'Desconto real exclusivo para cadastros realizados durante a janela do Feirão FORZ, válido para projetos residenciais, comerciais e rurais.',
  },
  {
    icon: CalendarClock,
    tag: 'Fluxo de Caixa Positivo',
    title: 'Parcelas em até 120x',
    description:
      'Financiamento facilitado em até 120 meses com parcelas planejadas para caber dentro da própria economia que você já deixa de pagar na conta de luz.',
  },
  {
    icon: FileCheck2,
    tag: 'Zero Dor de Cabeça',
    title: 'Homologação Rápida GO e DF',
    description:
      'Equipe de engenharia especialista nas normas da Equatorial Energia Goiás e Neoenergia Brasília para aprovação ágil do seu parecer de acesso.',
  },
  {
    icon: ShieldCheck,
    tag: 'Segurança Patrimonial',
    title: '25 Anos de Garantia de Fábrica',
    description:
      'Trabalhamos exclusivamente com painéis fotovoltaicos e inversores Tier-1 certificados pelo INMETRO, com monitoramento em tempo real pelo celular.',
  },
];

export function BenefitsSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#003882]">
            Por que fechar no Feirão FORZ?
          </span>
          <h2 className="mt-2 font-display text-3xl font-black tracking-tight text-[#041026] sm:text-4xl">
            Condições que não voltam depois que o lote encerrar
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 transition-all duration-150 hover:border-[#0066FF]/40 hover:shadow-md"
              >
                <div>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#041026] text-[#FFB800]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#0066FF]">
                    {item.tag}
                  </p>
                  <h3 className="mt-1.5 font-display text-xl font-black text-[#041026]">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
