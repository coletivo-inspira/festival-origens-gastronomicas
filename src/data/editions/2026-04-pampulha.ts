import { defineEdition } from '../types';

export default defineEdition({
  id: '2026-04-pampulha',
  number: 2,
  title: 'Volta ao Mundo',
  start: '2026-04-18T12:00:00-03:00',
  end: '2026-04-19T18:00:00-03:00',
  venue: { name: 'Aeroporto da Pampulha', city: 'Belo Horizonte', state: 'MG' },
  days: [
    { iso: '2026-04-18', hours: '12h às 22h' },
    { iso: '2026-04-19', hours: '10h às 18h' },
  ],
  amenities: ['Pratos típicos de diversos países'],
  summary: 'Edição especial com pratos típicos de diversos países, em frente ao terminal de passageiros do Aeroporto da Pampulha.',
  verify: true,
});
