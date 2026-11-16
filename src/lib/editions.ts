import type { Edition, Exhibitor } from '../data/types';
import { dayList, isoDay, weekday, dateLabel } from './format';

const mods = import.meta.glob(['../data/editions/*.ts', '!../data/editions/_*.ts'], { eager: true, import: 'default' }) as Record<string, Edition>;

/** Todas as edições, da mais recente para a mais antiga. */
export const editions: Edition[] = Object.values(mods).sort((a, b) => +new Date(b.start) - +new Date(a.start));

export const findEdition = (id: string) => editions.find((e) => e.id === id);
export const startMs = (e: Edition) => new Date(e.start).getTime();
export const endMs = (e: Edition) => new Date(e.end).getTime();

export type Mode = 'before' | 'live' | 'archive';

export interface SiteState {
  mode: Mode; // before = próxima edição ainda não começou · live = acontecendo · archive = sem edição futura
  edition: Edition | null; // a próxima/atual
  featured: Edition | null; // a edição em destaque: a próxima/atual, senão a mais recente
  past: Edition[]; // edições encerradas, da mais recente para a mais antiga
}

export function getSiteState(now: number): SiteState {
  const upcoming = editions.filter((e) => endMs(e) >= now).sort((a, b) => startMs(a) - startMs(b))[0] ?? null;
  const past = editions.filter((e) => endMs(e) < now);
  const mode: Mode = upcoming ? (startMs(upcoming) <= now ? 'live' : 'before') : 'archive';
  return { mode, edition: upcoming, featured: upcoming ?? past[0] ?? null, past };
}

export interface Day { iso: string; hours?: string; label: string; short: string; date: string }

/** Dias da edição (usa `days`; sem ele, todos os dias entre início e fim). */
export function getDays(e: Edition): Day[] {
  const base = e.days?.length ? e.days : dayList(e.start, e.end).map((iso) => ({ iso, hours: undefined as string | undefined }));
  return base.map((d) => ({ iso: d.iso, hours: d.hours, label: weekday(d.iso), short: weekday(d.iso, true), date: dateLabel(d.iso) }));
}

export interface Slot { iso: string; time: string; title: string; kind: 'show' | 'info'; headliner?: boolean; at: number }

export function getSlots(e: Edition): Slot[] {
  return (e.schedule ?? []).flatMap((d) => d.shows.map((s) => ({ ...s, iso: d.iso, at: new Date(`${d.iso}T${s.time.replace('h', ':')}:00-03:00`).getTime() })));
}

export function currentSlot(e: Edition, now: number): Slot | undefined {
  return [...getSlots(e)].reverse().find((s) => s.at <= now);
}

export const todayIso = (e: Edition, now: number) => currentSlot(e, now)?.iso ?? (now >= startMs(e) ? isoDay(new Date(now - 3 * 3600_000).toISOString()) : undefined);

/** Edição com programação/expositores: a próxima/atual se tiver; senão a mais recente que tiver. */
export function withSchedule(s: SiteState): Edition | null {
  return (s.edition?.schedule?.length ? s.edition : null) ?? s.past.find((e) => e.schedule?.length) ?? null;
}
export function withExhibitors(s: SiteState): Edition | null {
  return (s.edition?.exhibitors?.length ? s.edition : null) ?? s.past.find((e) => e.exhibitors?.length) ?? null;
}

export const categoriesOf = (list: Exhibitor[]) => Array.from(new Set(list.map((x) => x.category)));

export const locationLine = (e: Edition) => `${e.venue.city}/${e.venue.state}`;

export const mapsUrlFor = (e: Edition) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent([e.venue.name, e.venue.address, e.venue.city, e.venue.state].filter(Boolean).join(', '))}`;
export const wazeUrlFor = (e: Edition) =>
  `https://waze.com/ul?q=${encodeURIComponent([e.venue.name, e.venue.address, e.venue.city, e.venue.state].filter(Boolean).join(', '))}&navigate=yes`;

export const editionStatus = (e: Edition, now: number): 'Em breve' | 'Acontecendo agora' | 'Encerrada' =>
  endMs(e) < now ? 'Encerrada' : startMs(e) <= now ? 'Acontecendo agora' : 'Em breve';
