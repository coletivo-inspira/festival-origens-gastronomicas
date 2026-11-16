import { defineEdition } from '../types';

export default defineEdition({
  id: '2026-03-praca-liberdade',
  number: 1,
  title: 'Edição Brasilidades',
  start: '2026-03-07T12:00:00-03:00',
  end: '2026-03-08T18:00:00-03:00',
  venue: { name: 'Praça José Mendes Júnior (ao lado da Praça da Liberdade)', city: 'Belo Horizonte', state: 'MG' },
  days: [
    { iso: '2026-03-07', hours: '12h às 22h' },
    { iso: '2026-03-08', hours: '10h às 18h' },
  ],
  amenities: ['Pratos típicos de todo o Brasil'],
  summary: 'A edição Brasilidades ocupou a Praça José Mendes Júnior, ao lado da Praça da Liberdade, no coração de Belo Horizonte, com a gastronomia de cada canto do Brasil.',
  verify: true,
});
