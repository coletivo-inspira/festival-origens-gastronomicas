import { useEffect, useState, useSyncExternalStore } from 'react';
import { event } from '../data/event';
import { schedule, type Show } from '../data/schedule';

export type Phase = 'before' | 'live' | 'after';

const startMs = new Date(event.start).getTime();
const endMs = new Date(event.end).getTime();

export const getPhase = (now = Date.now()): Phase =>
  now < startMs ? 'before' : now <= endMs ? 'live' : 'after';

const noopSubscribe = () => () => {};
/** false no HTML pré-gerado e na primeira renderização no navegador (evita divergência na hidratação). */
export const useMounted = () => useSyncExternalStore(noopSubscribe, () => true, () => false);

export function useNow(intervalMs = 1000) {
  const mounted = useMounted();
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), intervalMs);
    return () => window.clearInterval(id);
  }, [intervalMs]);
  // Antes de montar usamos um instante fixo (antes do evento): o HTML estático nunca fica "velho".
  return mounted ? now : startMs - 1;
}

export const usePhase = () => getPhase(useNow(30_000));
export const eventStartMs = startMs;

/* ---- "agora / a seguir" a partir dos horários divulgados ---- */
const dayDate: Record<string, string> = { sex: '2026-11-13', sab: '2026-11-14', dom: '2026-11-15' };

export interface Slot extends Show { dayId: string; at: number }

export const slots: Slot[] = schedule.flatMap((d) =>
  d.shows.map((s) => ({ ...s, dayId: d.id, at: new Date(`${dayDate[d.id]}T${s.time.replace('h', ':')}:00-03:00`).getTime() })),
);

export function getNowNext(now: number) {
  const current = [...slots].reverse().find((s) => s.at <= now);
  const next = slots.find((s) => s.at > now);
  return { current, next };
}

export const useNowNext = () => getNowNext(useNow(30_000));
