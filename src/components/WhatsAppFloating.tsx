import { MessageCircle } from 'lucide-react';
import { LeadPayload } from '../types/lead';

interface WhatsAppFloatingProps {
  isVisible: boolean;
  lead: LeadPayload | null;
}

const WHATSAPP_NUMBER =
  import.meta.env.VITE_WHATSAPP_NUMBER?.trim() || '5562981209985';

export function WhatsAppFloating({ isVisible, lead }: WhatsAppFloatingProps) {
  // REGRA ESTRITA DO PLANO: Somente visível após o preenchimento do formulário
  if (!isVisible) return null;

  const text = lead
    ? `Olá equipe FORZ! Me chamo ${lead.nome} (${lead.cidade}/${lead.estado}). Acabei de enviar o formulário do Feirão Solar (conta de ${lead.valorContaLuz}) e gostaria de atendimento imediato.`
    : 'Olá equipe FORZ! Acabei de me cadastrar no Feirão de Energia Solar e gostaria de atendimento.';

  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

  return (
    <div className="fixed bottom-5 right-5 z-40 animate-bounce [animation-duration:3s]">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com um especialista da FORZ no WhatsApp"
        className="group flex items-center gap-2.5 rounded-full border border-emerald-300/40 bg-emerald-500 px-5 py-3.5 text-sm font-extrabold text-[#041026] shadow-2xl shadow-emerald-500/35 transition-all hover:bg-emerald-400 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <MessageCircle className="h-5 w-5 fill-[#041026] text-[#041026]" />
        <span>Fale com um Especialista</span>
      </a>
    </div>
  );
}
