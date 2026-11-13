import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { analyticsConfigured, syncAnalytics } from '../lib/analytics';
import { getConsent, OPEN_EVENT, setConsent } from '../lib/consent';
import { useMounted } from '../lib/phase';

/** Só aparece se houver medição configurada (VITE_GA_ID). Recusar é tão fácil quanto aceitar. */
const CookieBanner = () => {
  const mounted = useMounted();
  const [dismissed, setDismissed] = useState(false);
  const [forced, setForced] = useState(false);

  useEffect(() => {
    if (!analyticsConfigured) return;
    syncAnalytics();
    const show = () => { setForced(true); setDismissed(false); };
    window.addEventListener(OPEN_EVENT, show);
    return () => window.removeEventListener(OPEN_EVENT, show);
  }, []);

  const open = mounted && analyticsConfigured && (forced || (!dismissed && getConsent() === null));
  if (!open) return null;

  const choose = (v: 'granted' | 'denied') => { setConsent(v); syncAnalytics(); setDismissed(true); setForced(false); };

  return (
    <div role="dialog" aria-label="Preferências de cookies" className="fixed inset-x-3 bottom-[5.25rem] z-[60] border-2 border-cream bg-coal p-4 shadow-[6px_6px_0_var(--color-ember)] md:inset-x-auto md:bottom-6 md:left-6 md:max-w-md">
      <p className="text-sm leading-snug">
        Usamos cookies de medição (Google Analytics) para entender como o site é usado. Eles só são ativados se você aceitar. Veja a <Link to="/privacidade" className="font-semibold underline underline-offset-2">Política de Privacidade</Link>.
      </p>
      <div className="mt-3 grid grid-cols-2 gap-2">
        <button onClick={() => choose('denied')} className="h-12 border-2 border-cream font-display text-lg uppercase tracking-wide hover:bg-cream hover:text-ink">Recusar</button>
        <button onClick={() => choose('granted')} className="h-12 bg-ember font-display text-lg uppercase tracking-wide text-ink hover:bg-gold">Aceitar</button>
      </div>
    </div>
  );
};

export default CookieBanner;
