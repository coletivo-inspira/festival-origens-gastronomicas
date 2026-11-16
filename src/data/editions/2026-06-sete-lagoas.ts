import { defineEdition } from '../types';

export default defineEdition({
  id: '2026-06-sete-lagoas',
  number: 4,
  title: 'Festa Junina',
  start: '2026-06-05T17:00:00-03:00',
  end: '2026-06-07T20:00:00-03:00',
  venue: { name: 'Shopping Sete Lagoas (estacionamento)', city: 'Sete Lagoas', state: 'MG' },
  days: [
    { iso: '2026-06-05', hours: '17h às 23h' },
    { iso: '2026-06-06', hours: '11h às 23h' },
    { iso: '2026-06-07', hours: '11h às 20h' },
  ],
  amenities: ['Comidas típicas e doces juninos', 'Bar de drinks e vinhos', 'Chopp Krug Bier', 'Touro mecânico e brincadeiras juninas', 'Música ao vivo', 'Espaço para toda a família'],
  summary: 'Festa junina gastronômica no estacionamento do Shopping Sete Lagoas, com um pedacinho da Volta ao Mundo, música ao vivo e diversão para a família.',
  verify: true,
});
