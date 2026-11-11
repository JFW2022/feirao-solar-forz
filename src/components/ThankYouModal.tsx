import { useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  CheckCircle2,
  Users,
  MessageCircle,
  X,
  ArrowUpRight,
  Clock,
} from 'lucide-react';
import { LeadPayload } from '../types/lead';

interface ThankYouModalProps {
  lead: LeadPayload | null;
  onClose: () => void;
}

const WHATSAPP_NUMBER =
  import.meta.env.VITE_WHATSAPP_NUMBER?.trim() || '5562981209985';

export function ThankYouModal({ lead, onClose }: ThankYouModalProps) {
  useEffect(() => {
    if (!lead) return;

    confetti({
      particleCount: 90,
      spread: 75,
      origin: { y: 0.6 },
      colors: ['#FFB800', '#0099FF', '#10B981', '#FFFFFF'],
    });

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [lead, onClose]);

  if (!lead) return null;

  const firstName = lead.nome.split(' ')[0];

  const groupUrlEnv = import.meta.env.VITE_WHATSAPP_GROUP_URL?.trim();
  const groupMessage = encodeURIComponent(
    `Olá! Sou ${lead.nome} de ${lead.cidade}/${lead.estado}. Acabei de me cadastrar no Feirão FORZ Energia Solar (conta de ${lead.valorContaLuz}) e quero entrar no Grupo VIP do Feirão para garantir os 15% OFF!`
  );

  // If official WhatsApp Group invite link is configured, send directly to group; otherwise open direct WhatsApp requesting group access
  const groupButtonHref =
    groupUrlEnv && !groupUrlEnv.includes('placeholder')
      ? groupUrlEnv
      : `https://wa.me/${WHATSAPP_NUMBER}?text=${groupMessage}`;

  const directSpecialistHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Olá equipe FORZ! Me chamo ${lead.nome}, sou de ${lead.cidade} (${lead.estado}). Preenchi a simulação do Feirão com conta média de ${lead.valorContaLuz} e gostaria de falar com um especialista sobre o parcelamento em até 120x.`
  )}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#041026]/85 p-4 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-sucesso-titulo"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-3xl border border-[#FFB800]/40 bg-[#071733] p-6 text-white shadow-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar janela"
          className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/5 p-2 text-slate-300 transition-colors hover:bg-white/15 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-400">
          <CheckCircle2 className="h-8 w-8" />
        </div>

        <h3
          id="modal-sucesso-titulo"
          className="font-display text-2xl font-black tracking-tight text-white sm:text-3xl"
        >
          Cadastro confirmado, {firstName}!
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-slate-300 sm:text-base">
          Recebemos sua solicitação para{' '}
          <strong className="text-white">
            {lead.cidade}/{lead.estado}
          </strong>{' '}
          (faixa de{' '}
          <strong className="text-[#FFB800]">{lead.valorContaLuz}</strong>).
          Seu direito aos <strong className="text-white">15% OFF</strong> e
          condição em <strong className="text-white">até 120x</strong> já está
          pré-reservado.
        </p>

        {/* Destaque para entrar no Grupo VIP */}
        <div className="mt-6 rounded-2xl border border-emerald-400/30 bg-emerald-950/40 p-4">
          <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-300">
            <Clock className="h-4 w-4" />
            Passo Obrigatório do Feirão
          </div>
          <p className="mb-4 text-xs leading-relaxed text-slate-200 sm:text-sm">
            As tabelas promocionais com <strong>15% OFF</strong> e os lotes de
            aprovação prioritária são liberados primeiro dentro do nosso{' '}
            <strong>Grupo VIP do WhatsApp</strong>.
          </p>

          <a
            href={groupButtonHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2.5 rounded-xl bg-emerald-500 px-5 py-4 text-center text-sm font-black uppercase tracking-wide text-[#041026] shadow-lg shadow-emerald-500/25 transition-all hover:bg-emerald-400 active:translate-y-[1px] sm:text-base"
          >
            <Users className="h-5 w-5" />
            Entrar no Grupo do Feirão
            <ArrowUpRight className="h-5 w-5" />
          </a>
        </div>

        {/* Botão secundário para falar com especialista */}
        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
          <a
            href={directSpecialistHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-white/10 sm:text-sm"
          >
            <MessageCircle className="h-4 w-4 text-[#FFB800]" />
            Falar com Especialista Agora
          </a>
        </div>
      </div>
    </div>
  );
}
