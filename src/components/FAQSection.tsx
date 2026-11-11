import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Como funcionam os créditos de energia gerados pelo sistema?',
    answer:
      'Toda energia excedente que seus painéis geram durante o dia é injetada na rede da Equatorial Goiás ou Neoenergia Brasília e vira créditos energéticos (kWh) na sua conta. À noite ou em meses de consumo maior, esses créditos abatem automaticamente o que você utilizou da distribuidora, reduzindo a fatura em até 95%.',
  },
  {
    question: 'O sistema de energia solar funciona em dias nublados ou chuvosos?',
    answer:
      'Sim! Os módulos fotovoltaicos geram energia através da radiação solar (inclusive radiação difusa que atravessa as nuvens), e não apenas pelo calor direto. Além disso, o projeto da FORZ já considera a média climática anual de Goiás e do DF para garantir que a geração atenda sua necessidade o ano inteiro.',
  },
  {
    question: 'Quais são as garantias de fábrica dos equipamentos e da instalação?',
    answer:
      'Os painéis solares Tier-1 utilizados pela FORZ contam com garantia de fábrica de 25 anos de eficiência linear. Os inversores possuem garantia estendida de fábrica conforme a marca homologada, e você ainda conta com garantia técnica da própria FORZ sobre a instalação e suporte presencial local.',
  },
  {
    question: 'Como funciona o desconto de 15% OFF e o parcelamento em até 120x no Feirão?',
    answer:
      'Ao preencher o formulário e entrar no Grupo VIP do Feirão, nossa equipe dimensiona sua usina já aplicando 15% de desconto sobre o valor de tabela. Você pode parcelar em até 120x através de linhas de crédito parceiras, estruturadas para que o valor da parcela seja igual ou menor do que você já paga mensalmente na conta de luz.',
  },
  {
    question: 'Quanto tempo demora para instalar e homologar na concessionária?',
    answer:
      'A instalação física em telhados residenciais ou comerciais leva em média de 2 a 4 dias após a entrega dos equipamentos. Todo o processo documental e protocolo de homologação junto à Equatorial GO ou Neoenergia DF é conduzido integralmente por nossos engenheiros.',
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="duvidas" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#003882]">
            Dúvidas Frequentes
          </span>
          <h2 className="mt-2 font-display text-3xl font-black tracking-tight text-[#041026] sm:text-4xl">
            Tudo que você precisa saber antes de fechar no Feirão
          </h2>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-[#F8FAFC] transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-display text-base font-bold text-[#041026] transition-colors hover:bg-slate-100/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066FF] sm:px-6 sm:py-5 sm:text-lg"
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-[#003882] transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-slate-200/80 bg-white px-5 py-4 text-sm leading-relaxed text-slate-600 sm:px-6 sm:py-5 sm:text-base">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
