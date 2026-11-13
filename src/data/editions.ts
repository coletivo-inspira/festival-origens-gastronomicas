export interface Edition {
  id: string;
  title: string;
  dates: string;
  venue: string;
  city: string;
  highlight?: string;
  verify?: boolean; // dado lido de imagem; confirmar com o organizador
}

// ⚠️ O Instagram tem destaques da 1ª à 10ª edição, mas só as edições abaixo
// tiveram data e local identificados. Complete este arquivo para formar o arquivo histórico.
export const editions: Edition[] = [
  { id: 'lagoa-santa-2026-11', title: 'Churrasco Fest Brasil', dates: '13, 14 e 15 de novembro de 2026', venue: 'Parque de Exposições João de Paula Cota', city: 'Lagoa Santa/MG', highlight: 'Edição atual · entrada gratuita' },
  { id: 'pampulha-2026-10', title: 'A Grande Celebração — Encerramento de 2026', dates: '17 e 18 de outubro de 2026', venue: 'Aeroporto da Pampulha', city: 'Belo Horizonte/MG', highlight: 'Sábado do Rock e Domingo do Sertanejo, com Bruna Lipiani. Entrada gratuita.' },
  { id: 'pampulha-2026-09', title: 'Já que Minas não tem mar', dates: '19 e 20 de setembro de 2026', venue: 'Aeroporto da Pampulha', city: 'Belo Horizonte/MG', highlight: 'Comidas de buteco, shows ao vivo e entrada gratuita', verify: true },
];
