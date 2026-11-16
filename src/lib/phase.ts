import { useEffect, useState, useSyncExternalStore } from 'react';
import { getSiteState, type SiteState } from './editions';

const noopSubscribe = () => () => {};
/** false no HTML pré-gerado e na primeira renderização no navegador (evita divergência na hidratação). */
export const useMounted = () => useSyncExternalStore(noopSubscribe, () => true, () => false);

/**
 * O HTML é gerado no build com um "agora" fixo (`__BUILD_NOW__`, injetado pelo prerender).
 * O navegador começa com o MESMO instante (hidratação sem erro) e logo depois passa para a hora real.
 */
const baseNow = (): number => {
  const w = typeof window !== 'undefined' ? (window as unknown as { __BUILD_NOW__?: number }) : (globalThis as unknown as { __BUILD_NOW__?: number });
  return w.__BUILD_NOW__ ?? Date.now();
};

export function useNow(intervalMs = 1000) {
  const mounted = useMounted();
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), intervalMs);
    return () => window.clearInterval(id);
  }, [intervalMs]);
  const [base] = useState(baseNow);
  return mounted ? now : base;
}

export interface SiteView extends SiteState { now: number }

/** Estado do site agora: próxima edição, edição em destaque e passadas. Atualiza sozinho com o relógio. */
export function useSite(): SiteView {
  const now = useNow(30_000);
  return { ...getSiteState(now), now };
}
