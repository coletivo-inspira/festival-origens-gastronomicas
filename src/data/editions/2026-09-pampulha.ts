import { defineEdition } from '../types';

export default defineEdition({
  id: '2026-09-pampulha',
  number: 8,
  title: 'Já que Minas não tem mar',
  start: '2026-09-19T10:00:00-03:00',
  end: '2026-09-20T21:00:00-03:00',
  venue: { name: 'Aeroporto da Pampulha', city: 'Belo Horizonte', state: 'MG' },
  free: true,
  days: [
    { iso: '2026-09-19', hours: '10h às 22h' },
    { iso: '2026-09-20', hours: '10h às 20h' },
  ],
  amenities: ['Botecos renomados de BH e região', 'Chopp Läut gelado', 'Drinks e vinhos', 'Shows ao vivo', 'Espaço Kids', 'Ampla área coberta', 'Muitas mesas e cadeiras'],
  summary: 'Edição "Comidas de Boteco" com botecos renomados de BH e região no Aeroporto da Pampulha, com shows ao vivo e entrada gratuita.',
  verify: true,
});
