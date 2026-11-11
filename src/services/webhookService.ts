import { LeadFormValues, LeadPayload } from '../types/lead';
import { captureUtmParams } from '../utils/utm';
import { cleanPhoneDigits } from '../utils/formatters';

const DEFAULT_WEBHOOK_URL = 'https://webhook.waelo.com.br/webhook/feiraoforz';

export function buildLeadPayload(values: LeadFormValues): LeadPayload {
  const utm = captureUtmParams();
  const concessionaria =
    values.estado === 'GO'
      ? 'Equatorial Energia Goiás'
      : 'Neoenergia Distribuição Brasília';

  return {
    nome: values.nome.trim(),
    email: values.email.trim(),
    whatsapp: values.whatsapp.trim(),
    whatsappLimpo: cleanPhoneDigits(values.whatsapp),
    estado: values.estado,
    cidade: values.cidade.trim(),
    concessionaria,
    valorContaLuz: values.valorContaLuz,
    tipoImovel: values.tipoImovel,
    campanha: 'Feirão do Ano FORZ Energia Solar',
    condicaoFeirao: '15% OFF no Feirão + Até 120x',
    utm,
    referrer: typeof document !== 'undefined' ? document.referrer || 'direto' : 'direto',
    pageUrl: typeof window !== 'undefined' ? window.location.href : '',
    dataHora: new Date().toISOString(),
  };
}

export async function sendLeadToWebhook(values: LeadFormValues): Promise<{
  ok: boolean;
  payload: LeadPayload;
  error?: string;
}> {
  const webhookUrl =
    import.meta.env.VITE_WEBHOOK_URL?.trim() || DEFAULT_WEBHOOK_URL;
  const payload = buildLeadPayload(values);

  try {
    localStorage.setItem('forz_feirao_last_lead', JSON.stringify(payload));
  } catch {
    // Ignore localStorage failure
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 8500);

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      return {
        ok: false,
        payload,
        error: `Status HTTP ${response.status}`,
      };
    }

    return { ok: true, payload };
  } catch (err) {
    clearTimeout(timeoutId);
    // Fallback with no-cors keepalive beacon in case target webhook restricts CORS preflight
    try {
      await fetch(webhookUrl, {
        method: 'POST',
        mode: 'no-cors',
        keepalive: true,
        headers: {
          'Content-Type': 'text/plain;charset=UTF-8',
        },
        body: JSON.stringify(payload),
      });
      return { ok: true, payload };
    } catch {
      return {
        ok: false,
        payload,
        error: err instanceof Error ? err.message : 'Erro ao enviar os dados',
      };
    }
  }
}
