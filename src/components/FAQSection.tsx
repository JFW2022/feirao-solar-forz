import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Como funciona o Mega Feirão Solar 12/12 e por que as vagas são limitadas?',
    answer:
      'O Mega Feirão Solar 12/12 é uma janela promocional exclusiva da FORZ Energia Solar em parceria direta com fabricantes globais de módulos Tier-1 e instituições financeiras. Negociamos lotes em grande escala para garantir até 15% de desconto real e carência de até 120 dias para o primeiro pagamento. Como os lotes promocionais têm cota máxima de equipamentos homologados, o link para garantir as condições será liberado exclusivamente no Grupo VIP silencioso do WhatsApp no dia 12/12.',
  },
  {
    question: 'Como funciona o parcelamento em até 120x sem entrada e com até 120 dias de carência?',
    answer:
      'Você não precisa pagar nada de entrada. O investimento pode ser financiado em até 120 parcelas fixas que já são calculadas pela engenharia da FORZ para ficarem até 40% menores do que o valor que você já paga todo mês na conta de luz. Além disso, com até 120 dias de carência, seu sistema solar já estará instalado e gerando economia máxima antes mesmo do vencimento da primeira parcela.',
  },
  {
    question: 'Como funcionam os créditos de energia na Equatorial Goiás e Neoenergia Brasília?',
    answer:
      'Toda energia excedente gerada durante o dia pelos painéis solares é injetada na rede da sua concessionária local (Equatorial GO ou Neoenergia DF) e convertida em créditos energéticos (kWh). Esses créditos são abatidos automaticamente do consumo noturno ou em dias de maior uso. Caso sobrem créditos no mês, eles ficam acumulados por até 60 meses e podem até ser utilizados para abater contas de outros imóveis no seu nome sob a mesma distribuidora.',
  },
  {
    question: 'Quanto tempo demora para meu sistema estar funcionando e gerando economia?',
    answer:
      'No Mega Feirão Solar 12/12 assumimos o compromisso formal de entrega ágil: seu sistema funcionando no prazo máximo de 30 dias. A instalação física no telhado leva apenas de 2 a 3 dias, e a equipe técnica da FORZ cuida de 100% da parte burocrática, vistorias e homologação documental junto à Equatorial GO ou Neoenergia DF.',
  },
  {
    question: 'O sistema de energia solar funciona em dias chuvosos ou nublados?',
    answer:
      'Sim, funciona normalmente. Os painéis solares geram energia através da radiação solar (incluindo a radiação difusa que atravessa as nuvens), e não apenas pelo calor direto. Nosso software de engenharia dimensiona a usina considerando a média climática anual da sua cidade em Goiás ou no DF, garantindo geração suficiente para cobrir seu consumo o ano inteiro.',
  },
  {
    question: 'Quais são as garantias reais dos equipamentos e da instalação da FORZ?',
    answer:
      'Trabalhamos exclusivamente com marcas Tier-1 globais com equipamentos auditados e certificados pelo INMETRO. Os módulos contam com garantia de até 30 anos de eficiência energética linear. A FORZ é uma empresa registrada no CREA, com engenheiro responsável técnico (ART) em cada projeto e suporte de pós-venda presencial dedicado em Goiás e no Distrito Federal.',
  },
  {
    question: 'Moro em imóvel alugado ou pretendo me mudar no futuro, posso colocar energia solar?',
    answer:
      'Sim. O sistema fotovoltaico é um patrimônio do titular, não do imóvel. Se você se mudar, nossa equipe técnica pode desinstalar e reinstalar os equipamentos no seu novo endereço em qualquer cidade atendida em GO ou DF. Além disso, você também pode deixar o sistema gerando energia e compensar a fatura de outros imóveis cadastrados sob o mesmo CPF ou CNPJ.',
  },
  {
    question: 'Como funciona o Grupo VIP do WhatsApp? Vou receber muitas mensagens?',
    answer:
      'Não. O Grupo VIP do Feirão é 100% silencioso e com envio de mensagens bloqueado para membros. Apenas os administradores oficiais da FORZ enviam avisos importantes, pré-aprovações de crédito e os links dos lotes com 15% OFF no dia 12/12. Você não receberá conversas paralelas e pode sair quando quiser.',
  },
  {
    question: 'Preciso pagar alguma mensalidade ou taxa recorrente para a FORZ após a instalação?',
    answer:
      'Zero mensalidades. A usina é 100% sua. Você não paga nenhuma assinatura ou taxa recorrente para a FORZ. Você acompanha a geração da sua usina em tempo real pelo aplicativo gratuito no celular e conta com nossa equipe de suporte sempre que precisar.',
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="duvidas" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center sm:text-left">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-[#003882]/10 px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-[#003882]">
            <HelpCircle className="h-4 w-4" />
            Tire Suas Dúvidas
          </div>
          <h2 className="font-display text-3xl font-black tracking-tight text-[#041026] sm:text-4xl">
            Perguntas Mais Frequentes sobre o Mega Feirão
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
            Tudo o que você precisa saber para tomar sua decisão com total segurança e clareza.
          </p>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-[#F8FAFC] transition-colors hover:border-[#0066FF]/30"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-display text-base font-bold text-[#041026] transition-colors hover:bg-slate-100/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066FF] sm:px-6 sm:py-5 sm:text-lg"
                >
                  <span className="pr-2">{item.question}</span>
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
