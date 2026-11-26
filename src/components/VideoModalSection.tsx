import { useState, useCallback, useEffect } from 'react';
import { ArrowRight, CheckCircle2, Play } from 'lucide-react';

interface VideoModalSectionProps {
  onGoToForm: () => void;
}

const ArrowDown = ({
  align = 'center',
}: {
  align?: 'left' | 'center' | 'right';
}) => {
  const justifyClass =
    align === 'right'
      ? 'justify-end pr-[22%]'
      : align === 'left'
        ? 'justify-start pl-[22%]'
        : 'justify-center';

  return (
    <div className={`flex w-full items-center py-1.5 ${justifyClass}`}>
      <svg
        width="18"
        height="34"
        viewBox="0 0 18 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle
          cx="9"
          cy="6"
          r="4.5"
          fill="#FFB800"
          stroke="#041026"
          strokeWidth="2.5"
        />
        <line
          x1="9"
          y1="10.5"
          x2="9"
          y2="27"
          stroke="#003882"
          strokeWidth="2.5"
        />
        <polygon points="4,25 9,34 14,25" fill="#003882" />
      </svg>
    </div>
  );
};

const ArrowHorizontal = ({ direction }: { direction: 'right' | 'left' }) => (
  <div className="mx-1 flex shrink-0 items-center justify-center sm:mx-2">
    {direction === 'right' ? (
      <svg
        width="44"
        height="18"
        viewBox="0 0 48 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle
          cx="6"
          cy="9"
          r="4.5"
          fill="#FFB800"
          stroke="#041026"
          strokeWidth="2.5"
        />
        <line
          x1="10.5"
          y1="9"
          x2="38"
          y2="9"
          stroke="#003882"
          strokeWidth="2.5"
        />
        <polygon points="36,4 45,9 36,14" fill="#003882" />
      </svg>
    ) : (
      <svg
        width="44"
        height="18"
        viewBox="0 0 48 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle
          cx="42"
          cy="9"
          r="4.5"
          fill="#FFB800"
          stroke="#041026"
          strokeWidth="2.5"
        />
        <line
          x1="37.5"
          y1="9"
          x2="10"
          y2="9"
          stroke="#003882"
          strokeWidth="2.5"
        />
        <polygon points="12,4 3,9 12,14" fill="#003882" />
      </svg>
    )}
  </div>
);

interface StepCardProps {
  step: string;
  badge?: string;
  text: string;
}

const StepCard = ({ step, badge, text }: StepCardProps) => (
  <div className="flex min-h-[110px] flex-1 min-w-0 flex-col justify-start rounded-2xl border border-slate-200 bg-white p-3.5 sm:p-4 text-left shadow-sm transition-all hover:border-[#0066FF]/40 hover:shadow-md">
    <div className="mb-2 flex flex-wrap items-center gap-1.5">
      <span className="rounded-md bg-[#003882] px-2 py-0.5 text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-white">
        {step}
      </span>
      {badge && (
        <span className="rounded-md bg-[#FFB800]/20 px-2 py-0.5 text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-[#041026]">
          {badge}
        </span>
      )}
    </div>
    <p className="text-xs sm:text-[13px] font-semibold leading-relaxed text-slate-700">
      {text}
    </p>
  </div>
);

export function VideoModalSection({ onGoToForm }: VideoModalSectionProps) {
  const [showVideo, setShowVideo] = useState(false);

  const openVideo = useCallback(() => setShowVideo(true), []);
  const closeVideo = useCallback(() => setShowVideo(false), []);

  useEffect(() => {
    if (!showVideo) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeVideo();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [showVideo, closeVideo]);

  const videoUrl = import.meta.env.VITE_VIDEO_URL?.trim() || '';
  const isDirectMp4 =
    videoUrl.endsWith('.mp4') ||
    videoUrl.endsWith('.webm') ||
    videoUrl.includes('.mp4?');

  return (
    <section
      id="como-funciona"
      className="w-full bg-[#F1F5F9] py-16 sm:py-24"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 sm:px-6 lg:flex-row lg:px-8">
        {/* Esquerda - Fluxo do Processo (Formato Oficial Erro-Zero) */}
        <div className="flex w-full flex-1 flex-col items-start gap-4">
          <span className="rounded-full bg-[#003882]/10 px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-[#003882]">
            Passo a Passo Oficial
          </span>
          <h2 className="font-display text-3xl font-black tracking-tight text-[#041026] sm:text-4xl lg:text-5xl">
            Como vai funcionar o Mega Feirão Solar 12/12
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Siga os 4 passos simples abaixo para garantir as condições do nosso feirão:
          </p>

          {/* Desktop / Tablet Serpentine Grid */}
          <div className="mt-2 hidden sm:flex w-full max-w-[580px] flex-col">
            {/* Linha 1: Passo 01 -> Passo 02 */}
            <div className="flex w-full items-stretch">
              <StepCard
                step="Passo 01"
                text="Preencha o formulário no topo desta página e entre gratuitamente no nosso Grupo VIP silencioso do WhatsApp."
              />
              <ArrowHorizontal direction="right" />
              <StepCard
                step="Passo 02"
                text="Assim que entrar no nosso grupo VIP, nossa equipe de engenharia analisa o perfil da sua conta de luz para deixar sua proposta pré-aprovada."
              />
            </div>

            <ArrowDown align="right" />

            {/* Linha 2: Passo 04 <- Passo 03 */}
            <div className="flex w-full items-stretch">
              <StepCard
                step="Passo 04"
                text="Fechou sua condição no feirão? Cuidamos de toda a homologação junto à concessionária local da sua energia e entregamos seu sistema gerando economia em no máximo 30 dias."
              />
              <ArrowHorizontal direction="left" />
              <StepCard
                step="Passo 03"
                badge="Liberação no dia 12/12"
                text="No dia 12, dia do mega feirão, vamos liberar exclusivamente no grupo os lotes com até 15% OFF."
              />
            </div>

            <ArrowDown align="left" />

            {/* Conclusão */}
            <div className="flex min-h-[68px] w-full flex-col items-center justify-center gap-1 rounded-xl border border-emerald-400/30 bg-[#041026] p-4 text-center text-white shadow-md">
              <p className="text-sm font-black uppercase tracking-wider text-emerald-400">
                Resultado: Usina gerando energia e economia real todo mês
              </p>
              <p className="text-xs font-medium text-slate-300">
                Você livre dos aumentos das distribuidoras com monitoramento direto no celular
              </p>
            </div>
          </div>

          {/* Mobile Stacked Flow */}
          <div className="mt-2 flex sm:hidden w-full flex-col gap-2.5">
            <StepCard
              step="Passo 01"
              text="Preencha o formulário no topo desta página e entre gratuitamente no nosso Grupo VIP silencioso do WhatsApp."
            />
            <ArrowDown align="center" />
            <StepCard
              step="Passo 02"
              text="Assim que entrar no nosso grupo VIP, nossa equipe de engenharia analisa o perfil da sua conta de luz para deixar sua proposta pré-aprovada."
            />
            <ArrowDown align="center" />
            <StepCard
              step="Passo 03"
              badge="Liberação no dia 12/12"
              text="No dia 12, dia do mega feirão, vamos liberar exclusivamente no grupo os lotes com até 15% OFF."
            />
            <ArrowDown align="center" />
            <StepCard
              step="Passo 04"
              text="Fechou sua condição no feirão? Cuidamos de toda a homologação junto à concessionária local da sua energia e entregamos seu sistema gerando economia em no máximo 30 dias."
            />
            <ArrowDown align="center" />
            <div className="flex w-full flex-col items-center justify-center gap-1 rounded-xl border border-emerald-400/30 bg-[#041026] p-4 text-center text-white shadow-md">
              <p className="text-xs font-black uppercase tracking-wider text-emerald-400">
                Resultado: Usina gerando energia e economia todo mês
              </p>
              <p className="text-[11px] font-medium text-slate-300">
                Você livre dos aumentos da conta de luz com monitoramento no celular
              </p>
            </div>
          </div>
        </div>

        {/* Direita - Card de Vídeo Vertical 3:4 (Padrão exato Erro-Zero) */}
        <div className="flex w-full flex-1 flex-col items-center justify-center gap-4">
          {/* Acima do vídeo */}
          <div className="flex items-center gap-2 rounded-full bg-[#003882] px-4 py-2 text-xs font-black uppercase tracking-wider text-[#FFB800] shadow-md">
            <Play className="h-4 w-4 fill-[#FFB800] text-[#FFB800]" />
            <span>ASSISTA AO VÍDEO E ENTENDA O PROCESSO</span>
          </div>

          {/* Player do Vídeo / Card 3:4 Vertical */}
          <button
            type="button"
            onClick={openVideo}
            aria-label="Assistir ao vídeo explicativo do Mega Feirão Solar 12/12"
            className="group relative block aspect-[3/4] w-full max-w-[290px] cursor-pointer overflow-hidden rounded-3xl border-4 border-[#041026] bg-[#041026] shadow-2xl transition-transform hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0066FF] sm:max-w-[330px] md:max-w-[380px]"
          >
            <img
              src="/images/video-cover.jpg"
              alt="FORZ Energia Solar - Como funciona o Feirão"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#041026]/35 transition-colors group-hover:bg-[#041026]/45">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#FFB800] shadow-xl transition-transform duration-300 group-hover:scale-110">
                <svg
                  className="ml-1 h-7 w-8"
                  viewBox="0 0 32 36"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="M32 18L0 36V0L32 18Z" fill="#041026" />
                </svg>
              </div>
              <span className="mt-4 rounded-full bg-[#041026]/85 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                Toque para assistir
              </span>
            </div>
          </button>

          {/* Botão abaixo do vídeo */}
          <button
            type="button"
            onClick={onGoToForm}
            className="flex w-full max-w-[380px] cursor-pointer items-center justify-center gap-2.5 rounded-xl bg-[#FFB800] px-6 py-4 text-center font-black uppercase tracking-wide text-[#041026] shadow-lg shadow-[#FFB800]/25 transition-all hover:bg-[#ffc933] active:translate-y-[1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066FF]"
          >
            <span className="text-xs sm:text-sm md:text-base">
              GARANTIR MINHA VAGA NO GRUPO VIP
            </span>
            <ArrowRight className="h-5 w-5 shrink-0" />
          </button>
        </div>
      </div>

      {/* Video Modal - Estrutura fiel ao Erro-Zero */}
      {showVideo && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={closeVideo}
          role="dialog"
          aria-modal="true"
          aria-label="Vídeo explicativo Feirão FORZ Energia Solar"
        >
          {/* Botão Fechar - topo direito sempre visível */}
          <button
            type="button"
            onClick={closeVideo}
            aria-label="Fechar vídeo"
            className="absolute right-4 top-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-2xl font-bold text-white transition-colors hover:bg-white/40 sm:right-6 sm:top-6"
          >
            ✕
          </button>

          {/* Container vertical restrito por largura e altura (formato 9:16 Erro-Zero) */}
          <div
            className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#041026] shadow-2xl"
            style={{ width: 'min(90vw, 400px)', height: 'min(80vh, 680px)' }}
            onClick={(e) => e.stopPropagation()}
          >
            {videoUrl ? (
              isDirectMp4 ? (
                <video
                  src={videoUrl}
                  controls
                  autoPlay
                  playsInline
                  className="h-full w-full object-cover"
                />
              ) : (
                <iframe
                  src={videoUrl}
                  className="h-full w-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="FORZ Energia Solar - Como funciona o Feirão"
                />
              )
            ) : (
              /* Apresentação vertical interativa caso o link final do vídeo ainda esteja sendo carregado */
              <div className="flex h-full w-full flex-col justify-between bg-[#041026] p-6 text-white">
                <div>
                  <img
                    src="/images/feirao-do-ano.jpg"
                    alt="Feirão do Ano FORZ"
                    className="h-44 w-full rounded-xl object-cover shadow-md"
                  />
                  <h3 className="mt-5 font-display text-2xl font-black text-white">
                    Feirão FORZ em 1 Minuto
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    Aproveite o maior feirão de energia solar de Goiás e DF com
                    condições inéditas:
                  </p>
                  <ul className="mt-4 space-y-2.5 text-sm font-medium text-slate-100">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#FFB800]" />
                      15% OFF direto no projeto do Feirão
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#FFB800]" />
                      Parcelas em até 120x menores que a conta atual
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#FFB800]" />
                      Homologação Equatorial GO e Neoenergia DF
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#FFB800]" />
                      Mais de 700 clientes atendidos com garantia total
                    </li>
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    closeVideo();
                    onGoToForm();
                  }}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#FFB800] px-4 py-3.5 text-sm font-black uppercase text-[#041026] transition-colors hover:bg-[#ffc933]"
                >
                  Garantir minha vaga no Grupo VIP
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={closeVideo}
            className="mt-4 text-sm font-semibold text-white/75 transition-colors hover:text-white"
          >
            ← Voltar para a página
          </button>
        </div>
      )}
    </section>
  );
}
