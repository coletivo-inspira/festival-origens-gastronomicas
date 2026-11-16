import { defineEdition } from '../types';

export default defineEdition({
  id: '2026-08-pampulha',
  number: 6,
  title: 'Frutas do Mundo',
  start: '2026-08-15T10:00:00-03:00',
  end: '2026-08-16T20:00:00-03:00',
  venue: { name: 'Aeroporto da Pampulha', city: 'Belo Horizonte', state: 'MG' },
  free: true,
  stations: 40,
  days: [
    { iso: '2026-08-15', hours: '10h às 22h' },
    { iso: '2026-08-16', hours: '10h às 20h' },
  ],
  amenities: ['Mais de 40 expositores', 'Pratos especiais com frutas', 'Drinks e sucos artesanais', 'Espaço Kids', 'Música ao vivo', 'Feira de produtores', 'Apresentações culturais'],
  summary: 'Todos os expositores apresentaram ao menos um prato com fruta no preparo, com música ao vivo e entrada gratuita no Aeroporto da Pampulha.',
  verify: true,
});
