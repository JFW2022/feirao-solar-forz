import {
  Percent,
  CalendarClock,
  ShieldCheck,
  FileCheck2,
} from 'lucide-react';

const BENEFITS = [
  {
    icon: Percent,
    tag: 'Condição Especial',
    title: 'Até 15% de Desconto Real',
    description:
      'Desconto real e exclusivo para quem estiver no Grupo VIP Mega Feirão Solar 12/12, com condições válidas para projetos em todo GO e DF.',
  },
  {
    icon: CalendarClock,
    tag: 'Sem Entrada',
    title: 'Até 120x com 120 Dias de Carência',
    description:
      'Prazo de até 120x sem entrada: até 120 dias de carência para o primeiro pagamento e parcelas fixas podendo ficar até 40% a menos que a sua conta atual de energia.',
  },
  {
    icon: FileCheck2,
    tag: 'Agilidade Total',
    title: 'Homologação e Instalação em até 30 Dias',
    description:
      'Homologação e instalação técnica ágil junto à Equatorial Goiás e Neoenergia DF: seu sistema funcionando no prazo máximo de 30 dias.',
  },
  {
    icon: ShieldCheck,
    tag: 'Segurança Máxima',
    title: 'Garantia de até 30 Anos',
    description:
      'Garantia de até 30 anos de eficiência energética dos painéis, equipamentos certificados pelo INMETRO, empresa registrada no CREA e pós-venda dedicado.',
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
