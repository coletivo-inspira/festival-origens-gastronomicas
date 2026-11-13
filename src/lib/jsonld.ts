import { contacts, event } from '../data/event';
import { schedule } from '../data/schedule';
import { SITE_NAME } from '../seo';

/** Dados estruturados para o Google (evento + organização). Atualize `event.ts` a cada edição. */
export function buildJsonLd(siteUrl: string) {
  const performers = Array.from(new Set(schedule.flatMap((d) => d.shows).filter((s) => s.kind === 'show' && s.title !== 'DJ').map((s) => s.title)));
  const url = siteUrl ? `${siteUrl}/` : undefined;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Event',
        name: `${event.edition} — ${SITE_NAME}`,
        description: `${event.tagline}. Mais de ${event.stations} estações gastronômicas, shows ao vivo e entrada gratuita.`,
        startDate: event.start,
        endDate: event.end,
        eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        isAccessibleForFree: true,
        ...(url ? { url, image: [`${siteUrl}/og.jpg`] } : {}),
        location: {
          '@type': 'Place',
          name: event.venue.name,
          address: { '@type': 'PostalAddress', streetAddress: event.venue.address, addressLocality: event.city, addressRegion: event.state, addressCountry: 'BR' },
        },
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'BRL', availability: 'https://schema.org/InStock', ...(url ? { url } : {}) },
        performer: performers.map((name) => ({ '@type': 'PerformingGroup', name })),
        organizer: { '@type': 'Organization', name: SITE_NAME, url: contacts.instagram },
      },
      { '@type': 'Organization', name: SITE_NAME, ...(url ? { url, logo: `${siteUrl}/logo.webp` } : {}), sameAs: [contacts.instagram, contacts.threads] },
    ],
  };
}
