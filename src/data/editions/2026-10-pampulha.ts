import { defineEdition } from '../types';

export default defineEdition({
  id: '2026-10-pampulha',
  number: 9,
  title: 'A Grande Celebração — Encerramento de 2026',
  start: '2026-10-17T10:00:00-03:00',
  end: '2026-10-18T21:00:00-03:00',
  venue: { name: 'Aeroporto da Pampulha', city: 'Belo Horizonte', state: 'MG' },
  free: true,
  stations: 30,
  days: [
    { iso: '2026-10-17', hours: '10h às 22h' },
    { iso: '2026-10-18', hours: '10h às 21h' },
  ],
  amenities: ['Mais de 30 estações gastronômicas', 'Chopp Läut', 'Bar de drinks e vinhos', 'Espaço kids e touro mecânico', 'Amplas áreas cobertas'],
  schedule: [
    { iso: '2026-10-17', shows: [
      { time: '11h00', title: 'Banda Urbana 2', kind: 'show' },
      { time: '13h30', title: 'PutzGrilla', kind: 'show' },
      { time: '15h30', title: 'Banda Bullets', kind: 'show' },
      { time: '18h00', title: 'RockField', kind: 'show' },
      { time: '20h00', title: 'Velotrol', kind: 'show', headliner: true },
    ] },
    { iso: '2026-10-18', shows: [
      { time: '11h00', title: 'Like Five', kind: 'show' },
      { time: '14h00', title: 'Vitória Pinheiro', kind: 'show' },
      { time: '17h00', title: 'Bruna Lipiani', kind: 'show', headliner: true },
      { time: '19h00', title: 'Ângelo Reis', kind: 'show' },
    ] },
  ],
  summary: 'Sábado do Rock e Domingo do Sertanejo para celebrar o encerramento do ano no Aeroporto da Pampulha, com entrada gratuita.',
  verify: true,
});
