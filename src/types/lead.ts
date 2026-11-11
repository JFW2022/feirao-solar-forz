export type EstadoAtendido = 'GO' | 'DF';

export type TipoImovel = 'Residencial' | 'Comercial' | 'Rural' | 'Industrial';

export interface UtmParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  fbclid?: string;
  gclid?: string;
}

export interface LeadFormValues {
  estado: EstadoAtendido;
  cidade: string;
  nome: string;
  whatsapp: string;
  email: string;
  valorContaLuz: string;
  tipoImovel: TipoImovel;
  aceitePrivacidade: boolean;
}

export interface LeadPayload {
  nome: string;
  email: string;
  whatsapp: string;
  whatsappLimpo: string;
  estado: EstadoAtendido;
  cidade: string;
  concessionaria: string;
  valorContaLuz: string;
  tipoImovel: TipoImovel;
  campanha: string;
  condicaoFeirao: string;
  utm: UtmParams;
  referrer: string;
  pageUrl: string;
  dataHora: string;
}
