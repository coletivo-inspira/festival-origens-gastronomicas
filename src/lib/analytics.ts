import ReactGA from 'react-ga4';
import { getConsent } from './consent';

const id = import.meta.env.VITE_GA_ID as string | undefined;
let started = false;

/** Só existe medição se houver ID configurado. */
export const analyticsConfigured = Boolean(id);

/** Inicia o GA4 somente com consentimento explícito. */
export function syncAnalytics() {
  if (!id) return;
  if (getConsent() === 'granted') {
    if (!started) {
      ReactGA.initialize(id, { gaOptions: { anonymize_ip: true } });
      started = true;
    }
  } else if (started) {
    // Revogou: para de enviar eventos e remove os cookies do GA.
    started = false;
    document.cookie.split(';').forEach((c) => {
      const name = c.split('=')[0].trim();
      if (name.startsWith('_ga')) document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${location.hostname}`;
    });
  }
}

export const trackPage = (path: string) => { if (started) ReactGA.send({ hitType: 'pageview', page: path }); };
export const trackEvent = (action: string, label?: string) => { if (started) ReactGA.event({ category: 'cta', action, label }); };
