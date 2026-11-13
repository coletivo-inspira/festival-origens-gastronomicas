export const SITE_NAME = 'Festival Origens Gastronômicas';

export interface RouteMeta {
  path: string;
  title: string;
  description: string;
  noindex?: boolean;
}

export const routes: RouteMeta[] = [
  { path: '/', title: 'Festival Origens Gastronômicas | Churrasco Fest Brasil em Lagoa Santa', description: 'Churrasco Fest Brasil, de 13 a 15 de novembro, no Parque de Exposições de Lagoa Santa (MG). Mais de 30 estações gastronômicas, shows ao vivo, espaço kids e entrada gratuita.' },
  { path: '/programacao', title: 'Programação musical e horários | Festival Origens Gastronômicas', description: 'Veja os horários dos shows de sexta, sábado e domingo no Churrasco Fest Brasil, em Lagoa Santa: Locomotiva Rock, Gabi Soares, Velotrol e mais.' },
  { path: '/expositores', title: 'Expositores e pratos | Festival Origens Gastronômicas', description: 'Conheça os expositores do festival: churrasco, fogo de chão, culinária mineira, massas, pescados, pastéis e sobremesas. Mais de 30 estações gastronômicas.' },
  { path: '/edicoes', title: 'Edições do festival | Festival Origens Gastronômicas', description: 'Histórico do Festival Origens Gastronômicas: edições em Belo Horizonte (Aeroporto da Pampulha) e em Lagoa Santa.' },
  { path: '/seja-expositor', title: 'Seja expositor ou patrocinador | Festival Origens Gastronômicas', description: 'Leve sua cozinha ou marca para o Festival Origens Gastronômicas. Envie seu interesse para a organização.' },
  { path: '/privacidade', title: 'Política de Privacidade | Festival Origens Gastronômicas', description: 'Como o Festival Origens Gastronômicas trata dados pessoais, em conformidade com a LGPD.' },
  { path: '/links', title: 'Links | Festival Origens Gastronômicas', description: 'Links rápidos do Festival Origens Gastronômicas.', noindex: true },
];

export const notFoundMeta: RouteMeta = { path: '/404', title: 'Página não encontrada | Festival Origens Gastronômicas', description: 'Página não encontrada.', noindex: true };

export const findMeta = (pathname: string): RouteMeta => {
  const clean = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  return routes.find((r) => r.path === clean) ?? notFoundMeta;
};
