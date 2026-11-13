import { contacts } from '../data/event';

const endpoint = import.meta.env.VITE_FORM_ENDPOINT as string | undefined;

export const hasFormEndpoint = Boolean(endpoint);

/**
 * Envia para o Google Apps Script (planilha). O Apps Script não responde com CORS,
 * então usamos `no-cors` + text/plain: não dá para ler a resposta, só saber se a rede falhou.
 */
export async function submitForm(payload: Record<string, string>): Promise<boolean> {
  if (!endpoint) return false;
  const ctrl = new AbortController();
  const timer = window.setTimeout(() => ctrl.abort(), 12_000);
  try {
    await fetch(endpoint, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(payload), signal: ctrl.signal });
    return true;
  } catch {
    return false;
  } finally {
    window.clearTimeout(timer);
  }
}

/** Sem endpoint configurado, o contato segue pelo WhatsApp (se houver) ou pelo Instagram, sem gravar nada. */
export const fallbackContactUrl = (message: string) =>
  contacts.whatsapp ? `https://wa.me/${contacts.whatsapp}?text=${encodeURIComponent(message)}` : contacts.instagram;
