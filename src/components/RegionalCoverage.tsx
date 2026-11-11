import { MapPin, CheckCircle2, Award, Zap } from 'lucide-react';

interface RegionalCoverageProps {
  onCtaClick: () => void;
}

const CITIES_GO = [
  'Goiânia',
  'Aparecida de Goiânia',
  'Anápolis',
  'Rio Verde',
  'Caldas Novas',
  'Valparaíso de Goiás',
  'Luziânia',
  'Senador Canedo',
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
];

export function RegionalCoverage({ onCtaClick }: RegionalCoverageProps) {
  return (
    <section id="cobertura" className="bg-[#071733] py-16 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Informações de Autoridade Regional */}
          <div className="lg:col-span-6">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-emerald-300">
              <Award className="h-4 w-4" />
              +80 Clientes Atendidos com Sucesso
            </div>

            <h2 className="font-display text-3xl font-black tracking-tight text-white sm:text-4xl">
              Presença local e homologação expressa em{' '}
              <span className="text-[#FFB800]">Goiás e Distrito Federal</span>
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-300">
              Diferente de empresas genéricas de fora, a FORZ conhece cada
              exigência técnica das concessionárias da nossa região — garantindo
              aprovação rápida e pós-venda presencial.
            </p>

            {/* Concessionárias */}
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#0099FF]/30 bg-[#041026] p-5">
                <div className="mb-2 flex items-center gap-2 text-sm font-black text-[#FFB800]">
                  <Zap className="h-4 w-4" />
                  Equatorial Energia GO
                </div>
                <p className="text-xs leading-relaxed text-slate-300">
                  Projetos dimensionados para o padrão Equatorial Goiás com
                  rápida vistoria e troca de medidor bidirecional.
                </p>
              </div>

              <div className="rounded-2xl border border-[#0099FF]/30 bg-[#041026] p-5">
                <div className="mb-2 flex items-center gap-2 text-sm font-black text-[#38BDF8]">
                  <Zap className="h-4 w-4" />
                  Neoenergia Brasília (DF)
                </div>
                <p className="text-xs leading-relaxed text-slate-300">
                  Homologação técnica especializada para condomínios, residências
                  e comércios dentro das normas do Distrito Federal.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onCtaClick}
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#FFB800] px-6 py-3.5 text-sm font-black uppercase tracking-wide text-[#041026] shadow-lg transition-all hover:bg-[#ffc933] active:translate-y-[1px]"
            >
              Verificar disponibilidade na minha cidade
            </button>
          </div>

          {/* Card de Praças Atendidas + Mosaico Visual */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl border border-white/10 bg-[#041026] p-6 sm:p-8">
              <div className="grid grid-cols-2 gap-3 pb-6">
                <img
                  src="/images/solar-1.jpg"
                  alt="Projeto residencial FORZ em Goiás"
                  className="aspect-[16/10] w-full rounded-xl object-cover"
                />
                <img
                  src="/images/solar-2.jpg"
                  alt="Projeto comercial FORZ no Distrito Federal"
                  className="aspect-[16/10] w-full rounded-xl object-cover"
                />
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <h3 className="mb-3 flex items-center gap-2 text-sm font-black uppercase tracking-wider text-[#FFB800]">
                    <MapPin className="h-4 w-4" />
                    Principais Praças — GO
                  </h3>
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
                  <h3 className="mb-3 flex items-center gap-2 text-sm font-black uppercase tracking-wider text-[#38BDF8]">
                    <MapPin className="h-4 w-4" />
                    Regiões Atendidas — DF
                  </h3>
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
