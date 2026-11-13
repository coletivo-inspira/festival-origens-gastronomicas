import { event } from './event';

// Respostas baseadas somente no que o festival divulgou.
export const faq = [
  { q: 'A entrada é paga?', a: 'Não. A entrada é gratuita nos três dias. Consumo nas estações e bares é pago à parte.' },
  { q: 'Quais os dias e horários?', a: event.hours.map((h) => `${h.day} (${h.date}): ${h.time}`).join(' · ') + '.' },
  { q: 'Onde fica o festival?', a: `${event.venue.name}, ${event.venue.address}, ${event.venue.city}.` },
  { q: 'Tem estacionamento?', a: 'Sim, há estacionamento no local.' },
  { q: 'Tem espaço para crianças?', a: 'Sim, o evento tem espaço kids e é pensado para toda a família.' },
  { q: 'E se chover?', a: 'O festival tem ambientes cobertos e uma estrutura ampla, com centenas de mesas e cadeiras.' },
  { q: 'O que tem para beber?', a: 'Chopp Läut, bar de drinks, vinhos e bebidas não alcoólicas.' },
  { q: 'Tem hospedagem com desconto?', a: `Sim. O ${event.hotel.name} é o hotel oficial. Use o código ${event.hotel.code} e ganhe ${event.hotel.discount}.` },
] as const;
