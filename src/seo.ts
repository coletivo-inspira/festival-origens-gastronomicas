import { site } from './data/site';
import { editions, withExhibitors, withSchedule, type SiteState } from './lib/editions';
import { formatRange, year } from './lib/format';

export const SITE_NAME = site.name;

export interface RouteMeta {
  path: string;
  title: string;
  description: string;
  noindex?: boolean;
}

export const notFoundMeta: RouteMeta = { path: '/404', title: `Página não encontrada | ${SITE_NAME}`, description: 'Página não encontrada.', noindex: true };

/** Títulos e descrições mudam conforme o momento (próxima edição x pós-evento) e geram uma página por edição. */
export function getRoutes(s: SiteState): RouteMeta[] {
  const e = s.edition;
  const sched = withSchedule(s);
  const ex = withExhibitors(s);

  const home: RouteMeta = e
    ? {
        path: '/',
        title: `${e.title} em ${e.venue.city} (${formatRange(e.start, e.end)}) | ${SITE_NAME}`,
        description: `${SITE_NAME} apresenta ${e.title}: ${formatRange(e.start, e.end)} de ${year(e.start)} em ${e.venue.name}, ${e.venue.city}/${e.venue.state}.${e.free ? ' Entrada gratuita.' : ''}${e.stations ? ` Mais de ${e.stations} estações gastronômicas.` : ''}`,
      }
    : { path: '/', title: `${SITE_NAME} | ${site.tagline}`, description: `${site.about} Cadastre-se para saber da próxima edição.` };

  const routes: RouteMeta[] = [
    home,
    { path: '/programacao', title: `${e ? 'Programação musical e horários' : 'Line-up da última edição'} | ${SITE_NAME}`, description: sched ? `Programação musical de ${sched.title}, em ${sched.venue.city}: ${formatRange(sched.start, sched.end)} de ${year(sched.start)}.` : 'A programação da próxima edição será divulgada em breve.' },
    { path: '/expositores', title: `${e ? 'Expositores e pratos' : 'Quem participou'} | ${SITE_NAME}`, description: ex ? `Expositores de ${ex.title}: churrasco, culinária mineira, massas, bebidas, doces e muito mais.` : 'Os expositores da próxima edição serão divulgados em breve.' },
    { path: '/edicoes', title: `Edições do festival | ${SITE_NAME}`, description: `Histórico do ${SITE_NAME}: edições em ${Array.from(new Set(editions.map((x) => x.venue.city))).join(', ')} e as próximas que estão chegando.` },
    { path: '/seja-expositor', title: `Seja expositor ou patrocinador | ${SITE_NAME}`, description: `Leve sua cozinha ou marca para o ${SITE_NAME}. Envie seu interesse para a organização.` },
    { path: '/privacidade', title: `Política de Privacidade | ${SITE_NAME}`, description: `Como o ${SITE_NAME} trata dados pessoais, em conformidade com a LGPD.` },
    { path: '/links', title: `Links | ${SITE_NAME}`, description: `Links rápidos do ${SITE_NAME}.`, noindex: true },
    ...editions.map((x) => ({
      path: `/edicoes/${x.id}`,
      title: `${x.title} — ${x.venue.city}, ${formatRange(x.start, x.end)} de ${year(x.start)} | ${SITE_NAME}`,
      description: x.summary ?? `${x.title}: ${formatRange(x.start, x.end)} de ${year(x.start)} em ${x.venue.name}, ${x.venue.city}/${x.venue.state}.`,
    })),
  ];
  return routes;
}

export const findMeta = (pathname: string, s: SiteState): RouteMeta => {
  const clean = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  return getRoutes(s).find((r) => r.path === clean) ?? notFoundMeta;
};
