import { defineEdition } from '../types';

export default defineEdition({
  id: '2026-05-pedro-leopoldo',
  number: 3,
  title: 'Brasilidades em Pedro Leopoldo',
  start: '2026-05-15T12:00:00-03:00',
  end: '2026-05-17T18:00:00-03:00',
  venue: { name: 'Praça da Estação', city: 'Pedro Leopoldo', state: 'MG' },
  days: [
    { iso: '2026-05-15' },
    { iso: '2026-05-16' },
    { iso: '2026-05-17' },
  ],
  amenities: ['Mais de 40 expositores', 'Chopp Krug Bier', 'Shows ao vivo durante todo o evento', 'Espaço Kids', 'Bares de drinks e vinhos'],
  summary: 'Uma viagem gastronômica pelo Brasil na Praça da Estação, com mais de 40 expositores, shows ao vivo e espaço kids.',
  verify: true,
});
