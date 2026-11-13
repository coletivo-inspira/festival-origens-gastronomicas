// Fonte única dos dados da edição atual. Atualize aqui a cada edição.
// Itens com `null` ainda não foram informados pelo organizador.

export const event = {
  name: 'Festival Origens Gastronômicas',
  edition: 'Churrasco Fest Brasil',
  tagline: 'O maior e melhor festival gastronômico de Minas',
  city: 'Lagoa Santa',
  state: 'MG',
  // Datas em horário de Brasília (-03:00)
  start: '2026-11-13T17:00:00-03:00',
  end: '2026-11-15T21:00:00-03:00',
  free: true,
  stations: 30, // "mais de 30 estações gastronômicas"
  hours: [
    { day: 'Sexta-feira', date: '13 de novembro', time: '17h às 00h' },
    { day: 'Sábado', date: '14 de novembro', time: '12h às 00h' },
    { day: 'Domingo', date: '15 de novembro', time: '10h às 21h' },
  ],
  venue: {
    name: 'Parque de Exposições João de Paula Cota',
    address: 'Av. São Sebastião, 795 – Campinho de Baixo',
    city: 'Lagoa Santa/MG',
  },
  amenities: [
    'Mais de 30 estações gastronômicas',
    'Chopp Läut gelado',
    'Bar de drinks, vinhos e bebidas sem álcool',
    'Shows ao vivo todos os dias',
    'Espaço kids',
    'Ambiente coberto, com centenas de mesas e cadeiras',
    'Estacionamento no local',
  ],
  hotel: {
    name: 'Transamerica Lagoa Santa',
    note: 'Hotel oficial do evento, a cerca de 15 minutos do festival.',
    code: 'FESTIVALORIGENS',
    discount: '25% OFF na hospedagem',
    url: 'https://www.instagram.com/transamericalagoasanta/',
  },
  sponsors: ['Churrasco Fest Brasil', 'Chopp Läut', 'Transamerica Lagoa Santa'],
} as const;

export const contacts = {
  instagram: 'https://www.instagram.com/festivalorigensgastronomicasbh/',
  instagramHandle: '@festivalorigensgastronomicasbh',
  threads: 'https://www.threads.net/@festivalorigensgastronomicasbh',
  // ⚠️ A preencher pelo organizador. Enquanto `null`, o botão de WhatsApp fica oculto.
  whatsapp: null as string | null, // formato: '5531999999999'
  email: null as string | null,
};

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${event.venue.name}, ${event.venue.address}, ${event.venue.city}`,
)}`;
export const wazeUrl = `https://waze.com/ul?q=${encodeURIComponent(
  `${event.venue.name}, ${event.venue.address}, ${event.venue.city}`,
)}&navigate=yes`;
