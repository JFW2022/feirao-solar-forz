import {
  MapPin,
  CheckCircle2,
  Award,
  Zap,
  Star,
  ArrowRight,
  TrendingDown,
  Building2,
  Home,
  Tractor,
  ShieldCheck,
} from 'lucide-react';

interface RegionalCoverageProps {
  onCtaClick: () => void;
}

const TESTIMONIALS = [
  {
    type: 'Residencial',
    icon: Home,
    tag: 'Goiânia • GO',
    concessionaria: 'Equatorial GO',
    client: 'Marcos Aurélio & Família',
    city: 'Residencial Alphaville • Goiânia - GO',
    image: '/images/solar-1.jpg',
    beforeBill: 'R$ 960/mês',
    afterBill: 'R$ 78/mês',
    savingsPercentage: '92% de economia',
    quote:
      'Instalação impecável em menos de 20 dias. A parcela do financiamento ficou mais barata do que eu já pagava para a Equatorial, e agora o ar-condicionado fica ligado sem susto no fim do mês.',
  },
  {
    type: 'Comercial',
    icon: Building2,
    tag: 'Taguatinga • DF',
    concessionaria: 'Neoenergia DF',
    client: 'Dra. Camila Vasconcelos',
    city: 'Clínica Odontológica • Taguatinga - DF',
    image: '/images/solar-2.jpg',
    beforeBill: 'R$ 3.450/mês',
    afterBill: 'R$ 175/mês',
    savingsPercentage: '95% de economia',
    quote:
      'A homologação com a Neoenergia no DF parecia burocrática com outras empresas, mas a engenharia da FORZ aprovou tudo direto. Economizo mais de R$ 38 mil por ano que agora reinvesto no consultório.',
  },
  {
    type: 'Rural / Agro',
    icon: Tractor,
    tag: 'Rio Verde • GO',
    concessionaria: 'Equatorial GO',
    client: 'Roberto Mendes',
    city: 'Fazenda Boa Esperança • Rio Verde - GO',
    image: '/images/solar-3.jpg',
    beforeBill: 'R$ 4.800/mês',
    afterBill: 'R$ 240/mês',
    savingsPercentage: '95% de economia',
    quote:
      'No agro a conta de luz é um custo pesado. O sistema da FORZ foi dimensionado com inversores robustos e acompanho tudo no celular. A própria economia já paga a parcela com folga.',
  },
];

const CITIES_GO = [
  'Goiânia',
  'Aparecida de Goiânia',
  'Anápolis',
  'Rio Verde',
  'Caldas Novas',
  'Valparaíso de Goiás',
  'Luziânia',
  'Senador Canedo',
  'Trindade',
  'Catalão',
];

const CITIES_DF = [
  'Brasília (Plano Piloto)',
  'Águas Claras',
  'Taguatinga',
  'Vicente Pires',
  'Lago Sul & Lago Norte',
  'Jardim Botânico',
  'Sobradinho',
  'Guará',
  'Ceilândia',
  'Park Way',
];

export function RegionalCoverage({ onCtaClick }: RegionalCoverageProps) {
  return (
    <section id="cobertura" className="bg-[#071733] py-16 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Topo da Seção - Provas Sociais */}
        <div className="mb-12 max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-emerald-300">
            <Award className="h-4 w-4" />
            Casos Reais • Prova Social Comprovada
          </div>
          <h2 className="font-display text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            Quem já fechou com a FORZ{' '}
            <span className="text-[#FFB800]">não volta a pagar caro</span> na
            conta de luz
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300">
            Veja como clientes em Goiás e no Distrito Federal transformaram a
            fatura mensal da distribuidora em patrimônio próprio com até 95% de
            redução.
          </p>
        </div>

        {/* Grade de 3 Depoimentos / Casos Reais */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.client}
                className="flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#041026] shadow-xl transition-all hover:border-[#0099FF]/40 hover:-translate-y-1"
              >
                <div>
                  {/* Foto da Usina Instalada */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <img
                      src={item.image}
                      alt={`Projeto solar ${item.type} da FORZ em ${item.tag}`}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#041026] via-transparent to-transparent" />
                    <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-[#041026]/85 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wide text-[#FFB800] backdrop-blur-sm">
                      <Icon className="h-3.5 w-3.5" />
                      {item.type} • {item.tag}
                    </span>
                  </div>

                  {/* Conteúdo do Card */}
                  <div className="p-6">
                    {/* Estrelas */}
                    <div className="mb-3 flex items-center gap-1 text-[#FFB800]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-[#FFB800]" />
                      ))}
                      <span className="ml-1.5 text-xs font-bold text-slate-300">
                        5.0 • Avaliação Verificada
                      </span>
                    </div>

                    {/* Comparativo de Fatura (Antes vs Depois) */}
                    <div className="mb-4 rounded-2xl border border-emerald-400/25 bg-emerald-950/30 p-3.5">
                      <div className="flex items-center justify-between text-xs font-bold text-slate-300">
                        <span>Fatura Anterior:</span>
                        <span className="line-through text-rose-400">
                          {item.beforeBill}
                        </span>
                      </div>
                      <div className="mt-1.5 flex items-center justify-between text-sm font-black text-emerald-300">
                        <span className="flex items-center gap-1">
                          <TrendingDown className="h-4 w-4" />
                          Nova Fatura:
                        </span>
                        <span className="text-base text-white">
                          {item.afterBill}
                        </span>
                      </div>
                      <p className="mt-1 text-right text-[11px] font-extrabold uppercase tracking-wider text-[#FFB800]">
                        {item.savingsPercentage}
                      </p>
                    </div>

                    {/* Depoimento */}
                    <p className="text-xs sm:text-sm font-medium leading-relaxed text-slate-300 italic">
                      "{item.quote}"
                    </p>
                  </div>
                </div>

                {/* Rodapé do Depoimento */}
                <div className="border-t border-white/10 bg-[#071733]/60 px-6 py-3.5">
                  <p className="text-sm font-extrabold text-white">
                    {item.client}
                  </p>
                  <p className="text-xs text-slate-400">
                    {item.city} • {item.concessionaria}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Faixa de Métricas Consolidadas */}
        <div className="my-12 grid grid-cols-2 gap-4 rounded-3xl border border-[#0099FF]/25 bg-[#041026] p-6 text-center shadow-lg sm:grid-cols-4 sm:p-8">
          <div>
            <p className="font-display text-3xl font-black text-[#FFB800] sm:text-4xl">
              +700
            </p>
            <p className="mt-1 text-xs font-extrabold uppercase tracking-wider text-slate-300">
              Clientes Atendidos
            </p>
            <p className="text-[11px] text-slate-400">Em Goiás e Distrito Federal</p>
          </div>

          <div>
            <p className="font-display text-3xl font-black text-emerald-400 sm:text-4xl">
              Até 95%
            </p>
            <p className="mt-1 text-xs font-extrabold uppercase tracking-wider text-slate-300">
              Redução na Conta
            </p>
            <p className="text-[11px] text-slate-400">Economia real todo mês</p>
          </div>

          <div>
            <p className="font-display text-3xl font-black text-[#38BDF8] sm:text-4xl">
              Até 30 Anos
            </p>
            <p className="mt-1 text-xs font-extrabold uppercase tracking-wider text-slate-300">
              Garantia de Painéis
            </p>
            <p className="text-[11px] text-slate-400">Eficiência linear assegurada</p>
          </div>

          <div>
            <p className="font-display text-3xl font-black text-white sm:text-4xl">
              100%
            </p>
            <p className="mt-1 text-xs font-extrabold uppercase tracking-wider text-slate-300">
              Engenharia no CREA
            </p>
            <p className="text-[11px] text-slate-400">Homologação ágil garantida</p>
          </div>
        </div>

        {/* Seção de Cobertura Regional & Concessionárias */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Informações Técnicas das Concessionárias */}
          <div className="lg:col-span-6">
            <span className="rounded-full bg-[#003882] px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-[#FFB800]">
              Presença Regional Confirmada
            </span>

            <h3 className="mt-3 font-display text-2xl font-black tracking-tight text-white sm:text-3xl">
              Homologação expressa em toda a rede de GO e DF
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
              Diferente de instaladores genéricos, a equipe de engenharia da FORZ
              domina todos os procedimentos técnicos locais, garantindo aprovação
              rápida de parecer de acesso e troca de medidor sem complicação.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#0099FF]/30 bg-[#041026] p-5">
                <div className="mb-2 flex items-center gap-2 text-sm font-black text-[#FFB800]">
                  <Zap className="h-4 w-4" />
                  Equatorial Energia GO
                </div>
                <p className="text-xs leading-relaxed text-slate-300">
                  Projetos dimensionados para o padrão Equatorial Goiás com
                  rápida vistoria técnica e ligação do medidor bidirecional.
                </p>
              </div>

              <div className="rounded-2xl border border-[#0099FF]/30 bg-[#041026] p-5">
                <div className="mb-2 flex items-center gap-2 text-sm font-black text-[#38BDF8]">
                  <Zap className="h-4 w-4" />
                  Neoenergia Brasília (DF)
                </div>
                <p className="text-xs leading-relaxed text-slate-300">
                  Homologação especializada para condomínios, residências e
                  comércios dentro das normas vigentes do Distrito Federal.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onCtaClick}
              className="mt-8 flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl bg-[#FFB800] px-7 py-4 text-sm font-black uppercase tracking-wide text-[#041026] shadow-lg shadow-[#FFB800]/25 transition-all hover:bg-[#ffc933] active:translate-y-[1px]"
            >
              GARANTIR MINHA VAGA NO GRUPO VIP
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Lista de Praças e Cidades Atendidas */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl border border-white/10 bg-[#041026] p-6 sm:p-8">
              <div className="mb-5 flex items-center gap-2 border-b border-white/10 pb-4">
                <ShieldCheck className="h-5 w-5 text-emerald-400" />
                <span className="text-xs font-black uppercase tracking-wider text-white">
                  Instalação e Pós-Venda com Equipe Própria
                </span>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <h4 className="mb-3 flex items-center gap-2 text-sm font-black uppercase tracking-wider text-[#FFB800]">
                    <MapPin className="h-4 w-4" />
                    Praças Atendidas • GO
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-300">
                    {CITIES_GO.map((city) => (
                      <li key={city} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                        <span>{city}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="mb-3 flex items-center gap-2 text-sm font-black uppercase tracking-wider text-[#38BDF8]">
                    <MapPin className="h-4 w-4" />
                    Regiões Atendidas • DF
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-300">
                    {CITIES_DF.map((city) => (
                      <li key={city} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                        <span>{city}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
