// Datas lidas da própria string ISO ('2026-11-13T17:00:00-03:00'), sem depender do fuso do navegador/servidor.
const MONTHS = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
const WEEKDAYS = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

export const isoDay = (s: string) => s.slice(0, 10);
const parts = (s: string) => { const [y, m, d] = isoDay(s).split('-').map(Number); return { y, m, d }; };

export const year = (s: string) => parts(s).y;
export const dayNumber = (s: string) => String(parts(s).d);
export const monthName = (s: string) => MONTHS[parts(s).m - 1];
export const dateLabel = (s: string) => { const { m, d } = parts(s); return `${String(d).padStart(2, '0')}/${String(m).padStart(2, '0')}`; };
export const weekday = (s: string, short = false) => {
  const { y, m, d } = parts(s);
  const name = WEEKDAYS[new Date(Date.UTC(y, m - 1, d, 12)).getUTCDay()];
  return short ? name.slice(0, 3) : name;
};

/** Todas as datas (AAAA-MM-DD) entre início e fim, inclusive. */
export function dayList(start: string, end: string): string[] {
  const a = parts(start), b = parts(end);
  const out: string[] = [];
  const cur = new Date(Date.UTC(a.y, a.m - 1, a.d));
  const last = Date.UTC(b.y, b.m - 1, b.d);
  while (cur.getTime() <= last && out.length < 40) {
    out.push(cur.toISOString().slice(0, 10));
    cur.setUTCDate(cur.getUTCDate() + 1);
  }
  return out;
}

/** '13, 14 e 15 de novembro' · '17 e 18 de outubro' · '13 a 20 de novembro' · '28 de novembro a 2 de dezembro' */
export function formatRange(start: string, end: string): string {
  const a = parts(start), b = parts(end);
  if (a.y === b.y && a.m === b.m) {
    const days = dayList(start, end).map((d) => String(Number(d.slice(8))));
    if (days.length === 1) return `${days[0]} de ${monthName(start)}`;
    if (days.length <= 3) return `${days.slice(0, -1).join(', ')} e ${days[days.length - 1]} de ${monthName(start)}`;
    return `${days[0]} a ${days[days.length - 1]} de ${monthName(start)}`;
  }
  return `${a.d} de ${monthName(start)} a ${b.d} de ${monthName(end)}`;
}

/** Texto grande do topo: '13·14·15' */
export function bigDays(start: string, end: string): string {
  const days = dayList(start, end).map((d) => String(Number(d.slice(8))));
  const a = parts(start), b = parts(end);
  if (a.m !== b.m) return `${a.d}→${b.d}`;
  return days.length <= 4 ? days.join('·') : `${days[0]}–${days[days.length - 1]}`;
}

export function monthLabel(start: string, end: string): string {
  const a = monthName(start), b = monthName(end);
  return a === b ? a : `${a.slice(0, 3)}–${b.slice(0, 3)}`;
}

export const plural = (n: number, one: string, many: string) => `${n} ${n === 1 ? one : many}`;
export const listPt = (items: string[]) => (items.length <= 1 ? items.join('') : `${items.slice(0, -1).join(', ')} e ${items[items.length - 1]}`);
