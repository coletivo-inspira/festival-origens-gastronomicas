import { withExhibitors, type SiteState } from './editions';

export interface NavItem { name: string; to?: string; href?: string }

export function navItems(s: SiteState): NavItem[] {
  if (s.mode === 'archive') {
    return [
      { name: 'Sobre', href: '/#sobre' },
      ...(withExhibitors(s) ? [{ name: 'Quem participou', to: '/expositores' }] : []),
      { name: 'Edições', to: '/edicoes' },
      { name: 'FAQ', href: '/#faq' },
    ];
  }
  const e = s.edition!;
  return [
    ...(e.schedule?.length ? [{ name: 'Programação', to: '/programacao' }] : []),
    ...(e.exhibitors?.length ? [{ name: 'Expositores', to: '/expositores' }] : []),
    { name: 'Como chegar', href: '/#como-chegar' },
    { name: 'Edições', to: '/edicoes' },
    { name: 'FAQ', href: '/#faq' },
  ];
}

export interface BottomItem { label: string; to: string; icon: 'home' | 'music' | 'food' | 'map' | 'calendar' | 'bell' }

export function bottomItems(s: SiteState): BottomItem[] {
  const items: BottomItem[] = [{ label: 'Início', to: '/', icon: 'home' }];
  if (s.mode === 'archive') {
    items.push({ label: 'Edições', to: '/edicoes', icon: 'calendar' });
    if (withExhibitors(s)) items.push({ label: 'Expositores', to: '/expositores', icon: 'food' });
    items.push({ label: 'Avise-me', to: '/#avise-me', icon: 'bell' });
    return items;
  }
  const e = s.edition!;
  if (e.schedule?.length) items.push({ label: 'Programação', to: '/programacao', icon: 'music' });
  if (e.exhibitors?.length) items.push({ label: 'Comer', to: '/expositores', icon: 'food' });
  items.push({ label: 'Mapa', to: '/#como-chegar', icon: 'map' });
  if (items.length < 4) items.push({ label: 'Edições', to: '/edicoes', icon: 'calendar' });
  return items;
}
