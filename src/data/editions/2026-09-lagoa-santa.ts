import { defineEdition } from '../types';

export default defineEdition({
  id: '2026-09-lagoa-santa',
  number: 7,
  title: 'Texas Country Fest',
  start: '2026-09-11T17:00:00-03:00',
  end: '2026-09-13T20:00:00-03:00',
  venue: { name: 'Parque de Exposições de Lagoa Santa', city: 'Lagoa Santa', state: 'MG' },
  free: true,
  days: [
    { iso: '2026-09-11', hours: '17h às 23h' },
    { iso: '2026-09-12', hours: '12h às 23h' },
    { iso: '2026-09-13', hours: '10h às 20h' },
  ],
  amenities: ['Atrações ao vivo', 'Gastronomia de qualidade', 'Cervejas especiais', 'Espaço Kids', 'Ambiente texano'],
  summary: 'Edição inédita com clima country: três dias de gastronomia, música, cervejas especiais e espaço kids no Parque de Exposições de Lagoa Santa.',
  verify: true,
});
