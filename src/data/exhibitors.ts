export type Category = 'Carnes e churrasco' | 'Culinária mineira' | 'Pescados' | 'Massas' | 'Doces e sobremesas' | 'Cafés e queijos' | 'Pastéis e petiscos';

export interface Exhibitor {
  name: string;
  category: Category;
  specialties: string[];
  image?: string; // opcional: /images/expositores/<arquivo>
}

// Expositores já divulgados no Instagram. O festival informa "mais de 30 estações".
export const exhibitors: Exhibitor[] = [
  { name: 'Break Brasa', category: 'Carnes e churrasco', specialties: ['Roda gigante de costela', 'Cortes nobres na parrilha', 'Arroz de costela'] },
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
  { name: 'Renata Neves Confeitaria', category: 'Doces e sobremesas', specialties: ['Festival de fatias', 'Fondue'] },
];
