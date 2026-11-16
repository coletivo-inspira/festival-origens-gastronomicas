import { contacts, site } from '../data/site';
import { SITE_NAME } from '../seo';
import { getSlots, type SiteState } from './editions';

/** Dados estruturados para o Google: organização sempre; evento somente quando existe uma edição a caminho/acontecendo. */
export function buildJsonLd(siteUrl: string, s: SiteState) {
  const url = siteUrl ? `${siteUrl}/` : undefined;
  const graph: Record<string, unknown>[] = [
    { '@type': 'Organization', name: SITE_NAME, description: site.tagline, ...(url ? { url, logo: `${siteUrl}/logo.webp` } : {}), sameAs: [contacts.instagram, contacts.threads] },
  ];
  const e = s.edition;
  if (e) {
    const performers = Array.from(new Set(getSlots(e).filter((x) => x.kind === 'show' && x.title !== 'DJ').map((x) => x.title)));
    graph.push({
      '@type': 'Event',
      name: `${e.title} — ${SITE_NAME}`,
      description: e.summary ?? `${SITE_NAME}: ${e.title}.`,
      startDate: e.start,
      endDate: e.end,
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      ...(e.free ? { isAccessibleForFree: true } : {}),
      ...(url ? { url, image: [`${siteUrl}/og.jpg`] } : {}),
      location: {
        '@type': 'Place',
        name: e.venue.name,
        address: { '@type': 'PostalAddress', ...(e.venue.address ? { streetAddress: e.venue.address } : {}), addressLocality: e.venue.city, addressRegion: e.venue.state, addressCountry: 'BR' },
      },
      ...(e.free ? { offers: { '@type': 'Offer', price: '0', priceCurrency: 'BRL', availability: 'https://schema.org/InStock', ...(url ? { url } : {}) } } : {}),
      ...(performers.length ? { performer: performers.map((name) => ({ '@type': 'PerformingGroup', name })) } : {}),
      organizer: { '@type': 'Organization', name: SITE_NAME, url: contacts.instagram },
    });
  }
  return { '@context': 'https://schema.org', '@graph': graph };
}
