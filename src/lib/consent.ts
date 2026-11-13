// Preferência de cookies de medição (Google Analytics). Padrão: NÃO medir até o visitante aceitar.
export type Consent = 'granted' | 'denied' | null;

const KEY = 'origens:analytics-consent';
export const OPEN_EVENT = 'origens:open-cookie-prefs';
export const CHANGE_EVENT = 'origens:consent-change';

export function getConsent(): Consent {
  try {
    const v = localStorage.getItem(KEY);
    return v === 'granted' || v === 'denied' ? v : null;
  } catch {
    return null;
  }
}

export function setConsent(value: Exclude<Consent, null>) {
  try { localStorage.setItem(KEY, value); } catch { /* armazenamento indisponível */ }
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export const openCookiePrefs = () => window.dispatchEvent(new Event(OPEN_EVENT));
