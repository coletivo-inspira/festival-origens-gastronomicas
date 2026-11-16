export interface Show {
  time: string; // '19h40'
  title: string;
  kind: 'show' | 'info';
  headliner?: boolean;
}

export interface ScheduleDay {
  iso: string; // 'AAAA-MM-DD'
  shows: Show[];
}

export interface Exhibitor {
  name: string;
  category: string;
  specialties: string[]; // vazio = cardápio ainda não informado
  stands?: number; // nº de estações/barracas (padrão 1)
}

export interface Hotel {
  name: string;
  note: string;
  code?: string;
  discount?: string;
  url?: string;
}

/**
 * Uma edição do festival. Cada arquivo em src/data/editions/ descreve UMA edição.
 * Só `id`, `title`, `start`, `end` e `venue` são obrigatórios: o site mostra o que existir.
 */
export interface Edition {
  id: string; // vira o endereço: /edicoes/<id>
  number?: number; // ex.: 10 (10ª edição)
  title: string; // ex.: 'Churrasco Fest Brasil'
  start: string; // início, com fuso: '2026-11-13T17:00:00-03:00'
  end: string; // fim,    com fuso: '2026-11-15T21:00:00-03:00'
  venue: { name: string; address?: string; city: string; state: string };
  free?: boolean; // entrada gratuita
  ticketsUrl?: string; // link de ingressos, se houver
  stations?: number; // "mais de N estações"
  days?: { iso: string; hours?: string }[]; // horários por dia, ex.: { iso: '2026-11-13', hours: '17h às 00h' }
  amenities?: string[]; // lista "o que tem"
  schedule?: ScheduleDay[]; // programação musical
  exhibitors?: Exhibitor[];
  hotel?: Hotel;
  summary?: string; // texto curto (cartão e retrospectiva)
  faq?: { q: string; a: string }[]; // perguntas específicas desta edição
  verify?: boolean; // dado lido de imagem: confirmar com o organizador
}

export const defineEdition = (e: Edition): Edition => e;
