import { defineEdition } from '../types';

export default defineEdition({
  id: '2026-07-pampulha',
  number: 5,
  title: 'Frio & Fogo — Festival de Inverno',
  start: '2026-07-18T10:00:00-03:00',
  end: '2026-07-19T20:00:00-03:00',
  venue: { name: 'Aeroporto da Pampulha', city: 'Belo Horizonte', state: 'MG' },
  free: true,
  days: [
    { iso: '2026-07-18', hours: '10h às 22h' },
    { iso: '2026-07-19', hours: '10h às 20h' },
  ],
  amenities: ['Estações de vinhos, drinks e chopp', 'Comidas típicas de inverno', 'Música ao vivo durante todo o evento', 'Espaço Kids', 'Ampla estrutura com tendas, mesas e cadeiras'],
  summary: 'O inverno mais saboroso de BH no Aeroporto da Pampulha: comidas típicas de inverno, vinhos, drinks, chopp e música ao vivo, com entrada gratuita.',
  verify: true,
});
