import { useState, useCallback, useEffect } from 'react';
import { HeroSection } from './components/HeroSection';
import { BenefitsSection } from './components/BenefitsSection';
import { SolarCalculator } from './components/SolarCalculator';
import { VideoModalSection } from './components/VideoModalSection';
import { RegionalCoverage } from './components/RegionalCoverage';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { ThankYouModal } from './components/ThankYouModal';
import { WhatsAppFloating } from './components/WhatsAppFloating';
import { LeadPayload } from './types/lead';

export default function App() {
  const [selectedBillRange, setSelectedBillRange] = useState<string | undefined>(
    undefined
  );
  const [submittedLead, setSubmittedLead] = useState<LeadPayload | null>(null);
  const [showThankYouModal, setShowThankYouModal] = useState(false);
  const [hasSubmittedForm, setHasSubmittedForm] = useState(false);

  // Check if visitor already submitted in this session so floating button remains accessible
  useEffect(() => {
    try {
      const saved = localStorage.getItem('forz_feirao_last_lead');
      const submittedFlag = sessionStorage.getItem('forz_feirao_submitted');
      if (submittedFlag === '1' && saved) {
        setSubmittedLead(JSON.parse(saved) as LeadPayload);
        setHasSubmittedForm(true);
      }
    } catch {
      // Ignore storage access errors
    }
  }, []);

  const scrollToForm = useCallback(() => {
    const formEl = document.getElementById('formulario-feirao');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      const firstInput = formEl.querySelector('input');
      if (firstInput) {
        setTimeout(() => firstInput.focus(), 450);
      }
    }
  }, []);

  const handleApplyCalculatorRange = useCallback(
    (rangeLabel: string) => {
      setSelectedBillRange(rangeLabel);
      scrollToForm();
    },
    [scrollToForm]
  );

  const handleFormSuccess = useCallback((payload: LeadPayload) => {
    setSubmittedLead(payload);
    setHasSubmittedForm(true);
    setShowThankYouModal(true);
    try {
      sessionStorage.setItem('forz_feirao_submitted', '1');
    } catch {
      // Ignore storage access errors
    }
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#041026] text-slate-900">
      <main>
        <HeroSection
          selectedBillRange={selectedBillRange}
          onFormSuccess={handleFormSuccess}
        />

        <BenefitsSection />

        <SolarCalculator onApplyToForm={handleApplyCalculatorRange} />

        <VideoModalSection onGoToForm={scrollToForm} />

        <RegionalCoverage onCtaClick={scrollToForm} />

        <FAQSection />
      </main>

      <Footer onCtaClick={scrollToForm} />

      {/* Modal pós-conversão com botão "Entrar no Grupo do Feirão" */}
      <ThankYouModal
        lead={showThankYouModal ? submittedLead : null}
        onClose={() => setShowThankYouModal(false)}
      />

      {/* Botão flutuante de WhatsApp: aparece SOMENTE após preencher e enviar o formulário */}
      <WhatsAppFloating isVisible={hasSubmittedForm} lead={submittedLead} />
    </div>
  );
}
