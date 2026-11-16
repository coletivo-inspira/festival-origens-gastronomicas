import { generalFaq, site } from '../data/site';
import { editions, getDays, type SiteState } from './editions';
import { formatRange, listPt, year } from './format';

export interface FaqItem { q: string; a: string }

/** Perguntas do site conforme o momento: da edição atual/próxima (se houver) + gerais. */
export function buildFaq(s: SiteState): FaqItem[] {
  const out: FaqItem[] = [];
  const e = s.edition;
  if (e) {
    if (e.free) out.push({ q: 'A entrada é paga?', a: 'Não. A entrada é gratuita. Consumo nas estações e bares é pago à parte.' });
    const days = getDays(e).filter((d) => d.hours);
    if (days.length) out.push({ q: 'Quais os dias e horários?', a: days.map((d) => `${d.label} (${d.date}): ${d.hours}`).join(' · ') + '.' });
    out.push({ q: 'Onde fica o festival?', a: [e.venue.name, e.venue.address, `${e.venue.city}/${e.venue.state}`].filter(Boolean).join(', ') + '.' });
    out.push(...(e.faq ?? []));
    if (e.hotel?.code) out.push({ q: 'Tem hospedagem com desconto?', a: `Sim. O ${e.hotel.name} é o hotel oficial. Use o código ${e.hotel.code}${e.hotel.discount ? ` e ganhe ${e.hotel.discount}` : ''}.` });
  } else if (s.featured) {
    const f = s.featured;
    out.push({ q: 'Quando e onde foi a última edição?', a: `${f.title}, em ${formatRange(f.start, f.end)} de ${year(f.start)}, no ${f.venue.name} (${f.venue.city}/${f.venue.state}).` });
  }
  const cities = listPt(Array.from(new Set(editions.map((x) => x.venue.city))));
  out.push(...generalFaq.map((g) => ({ q: g.q, a: g.a.replace('{n}', String(site.editionsHeld)).replace('{cities}', cities) })));
  return out;
}
