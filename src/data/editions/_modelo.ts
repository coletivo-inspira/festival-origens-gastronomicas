// MODELO de edição. Para criar uma nova:
//   1) copie este arquivo para src/data/editions/AAAA-MM-cidade.ts (sem o "_" no começo)
//   2) preencha o que souber, apague o que não souber
//   3) faça commit e push: o site passa a mostrar "próxima edição" sozinho.
// Arquivos que começam com "_" são ignorados pelo site.
import { defineEdition } from '../types';

export default defineEdition({
  id: '2026-12-cidade', // único; vira /edicoes/2026-12-cidade
  title: 'Nome da edição',
  start: '2026-12-12T12:00:00-03:00',
  end: '2026-12-13T21:00:00-03:00',
  venue: { name: 'Nome do local', address: 'Rua tal, 123 – Bairro', city: 'Cidade', state: 'MG' },
  free: true,
  stations: 30,
  days: [
    { iso: '2026-12-12', hours: '12h às 00h' },
    { iso: '2026-12-13', hours: '10h às 21h' },
  ],
  amenities: ['Estacionamento no local', 'Espaço kids'],
  schedule: [
    { iso: '2026-12-12', shows: [
      { time: '12h00', title: 'Abertura do evento', kind: 'info' },
      { time: '20h00', title: 'Atração principal', kind: 'show', headliner: true },
    ] },
  ],
  exhibitors: [
    { name: 'Nome do expositor', category: 'Carnes e churrasco', specialties: ['Prato 1', 'Prato 2'] },
  ],
  summary: 'Uma frase sobre a edição.',
});
