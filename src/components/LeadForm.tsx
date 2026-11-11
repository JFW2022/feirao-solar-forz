import { useState, useEffect } from 'react';
import {
  Loader2,
  ShieldCheck,
  ArrowRight,
  AlertCircle,
  Zap,
} from 'lucide-react';
import {
  EstadoAtendido,
  LeadFormValues,
  LeadPayload,
  TipoImovel,
} from '../types/lead';
import { formatWhatsAppMask } from '../utils/formatters';
import { sendLeadToWebhook } from '../services/webhookService';

interface LeadFormProps {
  selectedBillRange?: string;
  onSuccess: (payload: LeadPayload) => void;
}

const FAIXAS_CONTA = [
  'R$ 300 a R$ 500',
  'R$ 500 a R$ 1.000',
  'R$ 1.000 a R$ 2.500',
  'R$ 2.500 a R$ 5.000',
  'Acima de R$ 5.000',
];

const TIPOS_IMOVEL: TipoImovel[] = [
  'Residencial',
  'Comercial',
  'Rural',
  'Industrial',
];

export function LeadForm({ selectedBillRange, onSuccess }: LeadFormProps) {
  const [estado, setEstado] = useState<EstadoAtendido>('GO');
  const [cidade, setCidade] = useState('');
  const [nome, setNome] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [valorContaLuz, setValorContaLuz] = useState(
    selectedBillRange || FAIXAS_CONTA[1]
  );
  const [tipoImovel, setTipoImovel] = useState<TipoImovel>('Residencial');
  const [aceitePrivacidade, setAceitePrivacidade] = useState(true);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (selectedBillRange) {
      setValorContaLuz(selectedBillRange);
    }
  }, [selectedBillRange]);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWhatsapp(formatWhatsAppMask(e.target.value));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    const phoneDigits = whatsapp.replace(/\D/g, '');
    if (nome.trim().length < 2) {
      setErrorMessage('Informe seu nome completo para prepararmos a proposta.');
      return;
    }
    if (phoneDigits.length < 10) {
      setErrorMessage('Informe um WhatsApp válido com DDD.');
      return;
    }
    if (cidade.trim().length < 2) {
      setErrorMessage('Informe sua cidade em GO ou DF.');
      return;
    }
    if (!aceitePrivacidade) {
      setErrorMessage('Confirme o aceite para receber sua simulação.');
      return;
    }

    setIsSubmitting(true);

    const formValues: LeadFormValues = {
      estado,
      cidade,
      nome,
      whatsapp,
      email,
      valorContaLuz,
      tipoImovel,
      aceitePrivacidade,
    };

    const result = await sendLeadToWebhook(formValues);
    setIsSubmitting(false);

    if (result.ok) {
      onSuccess(result.payload);
    } else {
      setErrorMessage(
        'Não foi possível concluir o envio agora. Verifique sua conexão e tente novamente.'
      );
    }
  };

  return (
    <div
      id="formulario-feirao"
      className="relative z-10 w-full rounded-2xl border border-[#0099FF]/35 bg-white p-5 shadow-2xl sm:p-7"
    >
      {/* Header do Card */}
      <div className="mb-5 border-b border-slate-100 pb-4">
        <div className="mb-1.5 inline-flex items-center gap-1.5 rounded-full bg-[#041026] px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#FFB800]">
          <Zap className="h-3.5 w-3.5 fill-[#FFB800] text-[#FFB800]" />
          15% OFF Exclusivo • Até 120x
        </div>
        <h2 className="font-display text-xl font-black tracking-tight text-[#041026] sm:text-2xl">
          Garanta sua condição do Feirão
        </h2>
        <p className="mt-1 text-xs font-medium text-slate-600 sm:text-sm">
          Preencha em 30 segundos e libere o acesso ao{' '}
          <strong className="text-[#003882]">Grupo VIP do Feirão</strong>.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3.5" noValidate>
        {/* Estado GO / DF */}
        <div>
          <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-700">
            Onde será instalado?
          </span>
          <div className="grid grid-cols-2 gap-2.5" role="group" aria-label="Estado da instalação">
            <button
              type="button"
              onClick={() => setEstado('GO')}
              className={`flex items-center justify-center gap-2 rounded-lg border py-2.5 text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066FF] ${
                estado === 'GO'
                  ? 'border-[#003882] bg-[#003882] text-white shadow-sm'
                  : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300'
              }`}
            >
              Goiás (GO)
            </button>
            <button
              type="button"
              onClick={() => setEstado('DF')}
              className={`flex items-center justify-center gap-2 rounded-lg border py-2.5 text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066FF] ${
                estado === 'DF'
                  ? 'border-[#003882] bg-[#003882] text-white shadow-sm'
                  : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300'
              }`}
            >
              Distrito Federal (DF)
            </button>
          </div>
          <p className="mt-1 text-[11px] font-medium text-slate-500">
            Homologação direta na{' '}
            <span className="font-semibold text-slate-700">
              {estado === 'GO'
                ? 'Equatorial Energia Goiás'
                : 'Neoenergia Distribuição Brasília'}
            </span>
          </p>
        </div>

        {/* Cidade e Tipo de Imóvel */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div>
            <label
              htmlFor="lead-cidade"
              className="mb-1 block text-xs font-bold text-slate-700"
            >
              Cidade *
            </label>
            <input
              id="lead-cidade"
              type="text"
              required
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
              placeholder={
                estado === 'GO' ? 'Ex: Goiânia, Anápolis...' : 'Ex: Brasília, Águas Claras...'
              }
              className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0066FF] focus:outline-none focus:ring-2 focus:ring-[#0066FF]/20"
            />
          </div>

          <div>
            <label
              htmlFor="lead-tipo"
              className="mb-1 block text-xs font-bold text-slate-700"
            >
              Tipo de imóvel *
            </label>
            <select
              id="lead-tipo"
              value={tipoImovel}
              onChange={(e) => setTipoImovel(e.target.value as TipoImovel)}
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 focus:border-[#0066FF] focus:outline-none focus:ring-2 focus:ring-[#0066FF]/20"
            >
              {TIPOS_IMOVEL.map((tipo) => (
                <option key={tipo} value={tipo}>
                  {tipo}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Nome completo */}
        <div>
          <label
            htmlFor="lead-nome"
            className="mb-1 block text-xs font-bold text-slate-700"
          >
            Nome completo *
          </label>
          <input
            id="lead-nome"
            type="text"
            required
            autoComplete="name"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Como gostaria de ser chamado"
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0066FF] focus:outline-none focus:ring-2 focus:ring-[#0066FF]/20"
          />
        </div>

        {/* WhatsApp e Email */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div>
            <label
              htmlFor="lead-whatsapp"
              className="mb-1 block text-xs font-bold text-slate-700"
            >
              WhatsApp com DDD *
            </label>
            <input
              id="lead-whatsapp"
              type="tel"
              required
              autoComplete="tel"
              value={whatsapp}
              onChange={handlePhoneChange}
              placeholder="(62) 99999-9999"
              className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0066FF] focus:outline-none focus:ring-2 focus:ring-[#0066FF]/20"
            />
          </div>

          <div>
            <label
              htmlFor="lead-email"
              className="mb-1 block text-xs font-bold text-slate-700"
            >
              E-mail *
            </label>
            <input
              id="lead-email"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0066FF] focus:outline-none focus:ring-2 focus:ring-[#0066FF]/20"
            />
          </div>
        </div>

        {/* Valor médio da conta */}
        <div>
          <label
            htmlFor="lead-conta"
            className="mb-1 block text-xs font-bold text-slate-700"
          >
            Qual o valor médio da sua conta de luz por mês? *
          </label>
          <select
            id="lead-conta"
            value={valorContaLuz}
            onChange={(e) => setValorContaLuz(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-sm font-semibold text-[#041026] focus:border-[#0066FF] focus:outline-none focus:ring-2 focus:ring-[#0066FF]/20"
          >
            {FAIXAS_CONTA.map((faixa) => (
              <option key={faixa} value={faixa}>
                {faixa}
              </option>
            ))}
          </select>
        </div>

        {/* Consentimento LGPD */}
        <div className="pt-1">
          <label className="flex cursor-pointer items-start gap-2.5 text-xs leading-snug text-slate-600">
            <input
              type="checkbox"
              checked={aceitePrivacidade}
              onChange={(e) => setAceitePrivacidade(e.target.checked)}
              className="mt-0.5 h-4 w-4 rounded border-slate-300 text-[#003882] focus:ring-[#0066FF]"
            />
            <span>
              Concordo em receber minha simulação personalizada e o acesso ao
              Grupo VIP do Feirão FORZ via WhatsApp, conforme a LGPD.
            </span>
          </label>
        </div>

        {/* Erro de Validação/Envio */}
        {errorMessage && (
          <div
            role="alert"
            className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2.5 text-xs font-medium text-red-700"
          >
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Botão de Envio */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#FFB800] px-5 py-3.5 text-sm font-black uppercase tracking-wide text-[#041026] shadow-lg shadow-[#FFB800]/25 transition-all hover:bg-[#ffc933] active:translate-y-[1px] active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#041026] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70 sm:text-base"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Gerando simulação...
            </>
          ) : (
            <>
              Quero 15% OFF no Feirão
              <ArrowRight className="h-5 w-5" />
            </>
          )}
        </button>

        <div className="flex items-center justify-center gap-1.5 pt-1 text-[11px] font-medium text-slate-500">
          <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
          <span>Simulação gratuita e sem compromisso</span>
        </div>
      </form>
    </div>
  );
}
