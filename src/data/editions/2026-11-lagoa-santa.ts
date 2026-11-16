import { defineEdition } from '../types';

export default defineEdition({
  id: '2026-11-lagoa-santa',
  number: 10,
  title: 'Churrasco Fest Brasil',
  start: '2026-11-13T17:00:00-03:00',
  end: '2026-11-15T21:00:00-03:00',
  venue: { name: 'Parque de Exposições João de Paula Cota', address: 'Av. São Sebastião, 795 – Campinho de Baixo', city: 'Lagoa Santa', state: 'MG' },
  free: true,
  stations: 30, // "mais de 30 estações gastronômicas"
  days: [
    { iso: '2026-11-13', hours: '17h às 00h' },
    { iso: '2026-11-14', hours: '12h às 00h' },
    { iso: '2026-11-15', hours: '10h às 21h' },
  ],
  amenities: [
    'Mais de 30 estações gastronômicas',
    'Chopp Läut gelado',
    'Bar de drinks, vinhos e bebidas sem álcool',
    'Shows ao vivo todos os dias',
    'Espaço kids',
    'Ambiente coberto, com centenas de mesas e cadeiras',
    'Estacionamento no local',
  ],
  schedule: [
    { iso: '2026-11-13', shows: [
      { time: '17h00', title: 'Abertura do evento', kind: 'info' },
      { time: '17h30', title: 'DJ', kind: 'show' },
      { time: '19h40', title: 'Locomotiva Rock', kind: 'show', headliner: true },
      { time: '23h00', title: 'Encerramento do evento', kind: 'info' },
    
    ] },
    { iso: '2026-11-14', shows: [
      { time: '12h00', title: 'Abertura do evento', kind: 'info' },
      { time: '13h00', title: 'Dom Preto', kind: 'show' },
      { time: '15h30', title: 'Like Five', kind: 'show' },
      { time: '18h00', title: 'Vitória Pinheiro', kind: 'show' },
      { time: '20h00', title: 'Gabi Soares', kind: 'show', headliner: true },
      { time: '23h30', title: 'Encerramento do evento', kind: 'info' },
    
    ] },
    { iso: '2026-11-15', shows: [
      { time: '10h00', title: 'Abertura do evento', kind: 'info' },
      { time: '11h00', title: 'Ângelo Reis', kind: 'show' },
      { time: '13h30', title: 'Banda Bullets', kind: 'show' },
      { time: '16h00', title: 'Velotrol', kind: 'show', headliner: true },
      { time: '19h30', title: 'Carol Rodrigues', kind: 'show' },
      { time: '21h00', title: 'Encerramento do evento', kind: 'info' },
    
    ] },
  ],
  hotel: {
    name: 'Transamerica Lagoa Santa',
    note: 'Hotel oficial do evento, a cerca de 15 minutos do festival.',
    code: 'FESTIVALORIGENS',
    discount: '25% OFF na hospedagem',
    url: 'https://www.instagram.com/transamericalagoasanta/',
  },
  summary: 'Festival Origens Gastronômicas apresenta o Churrasco Fest Brasil: três dias de gastronomia, shows ao vivo e entrada gratuita no Parque de Exposições de Lagoa Santa.',
  faq: [
    { q: 'Tem estacionamento?', a: 'Sim, há estacionamento no local.' },
    { q: 'Tem espaço para crianças?', a: 'Sim, o evento tem espaço kids e é pensado para toda a família.' },
    { q: 'E se chover?', a: 'O festival tem ambientes cobertos e uma estrutura ampla, com centenas de mesas e cadeiras.' },
    { q: 'O que tem para beber?', a: 'Chopp Läut, bar de drinks, vinhos e bebidas não alcoólicas.' },
  ],
  exhibitors: [
  { name: 'Break Brasa', category: 'Carnes e churrasco', specialties: ['Roda gigante de costela', 'Cortes nobres na parrilha', 'Arroz de costela'], stands: 2 },
  { name: 'Masmorras Carnes', category: 'Carnes e churrasco', specialties: ['Hambúrguer de costela defumado', 'Cortes nobres na parrilha', 'Costelão gaúcho'] },
  { name: 'Rancho Gaúcho', category: 'Carnes e churrasco', specialties: ['Sanduíche de costela gaúcha no fogo de chão'] },
  { name: 'Churrascos na Chapa', category: 'Carnes e churrasco', specialties: ['Espetos', 'Fígado com jiló'] },
  { name: 'Família Simão', category: 'Culinária mineira', specialties: ['Tropeiro', 'Arroz de costela', 'Arroz de galinha'] },
  { name: 'Costa Jr. Gastronomia Artesanal', category: 'Culinária mineira', specialties: ['Empório mineiro'] },
  { name: 'Pastel das Manas', category: 'Pastéis e petiscos', specialties: ['Pastéis', 'Pastéis temáticos', 'Porções de mini pastéis'] },
  { name: 'Deliciê & Cia', category: 'Culinária mineira', specialties: ['Torresmo de rolo com mandioca'] },
  { name: 'Cozinha Mineira', category: 'Culinária mineira', specialties: ['Tropeiro', 'Culinária mineira'] },
  { name: 'Maré', category: 'Pescados', specialties: ['Tilápia com fritas'] },
  { name: 'Va Bene', category: 'Massas', specialties: ['Massas artesanais'] },
  { name: 'Vasto Sabores de Origens', category: 'Cafés e queijos', specialties: ['Cafés especiais', 'Queijos', 'Doces'] },
  { name: 'B&L Sweet Roll', category: 'Doces e sobremesas', specialties: ['Sorvete na chapa'] },
  { name: 'Renata Neves Confeitaria', category: 'Doces e sobremesas', specialties: ['Festival de fatias', 'Fondue'], stands: 2 },
  // Entraram pela lista da organização; categoria e cardápio a complementar quando houver detalhes.
  { name: 'Acarajé do Kiel', category: 'Pastéis e petiscos', specialties: [] },
  { name: 'Símil Gastro', category: 'Gastronomia', specialties: [] },
  { name: 'Tacomtudo', category: 'Gastronomia', specialties: [] },
  { name: 'Cozinha da Gi', category: 'Gastronomia', specialties: [] },
  { name: 'Sabores da Fruta', category: 'Gastronomia', specialties: [] },
  { name: 'Amor e Açaí', category: 'Doces e sobremesas', specialties: [] },
  { name: 'Laut Chopp', category: 'Bebidas', specialties: ['Chopp'], stands: 4 },
  { name: 'Chopp de Vinhos Wine', category: 'Bebidas', specialties: ['Chopp de vinho'], stands: 2 },
  { name: 'Adega Wine', category: 'Bebidas', specialties: ['Vinhos'] },
  { name: 'Bebidas Não Alcoólicas', category: 'Bebidas', specialties: ['Bebidas sem álcool'], stands: 2 },
  ],
});
