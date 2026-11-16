import { useState } from 'react';
import { Check, Copy, Navigation } from 'lucide-react';
import type { Edition } from '../data/types';
import { mapsUrlFor, wazeUrlFor } from '../lib/editions';
import { trackEvent } from '../lib/analytics';
import Section from './Section';

const Location = ({ edition }: { edition: Edition }) => {
  const [copied, setCopied] = useState(false);
  const hotel = edition.hotel;
  const copyCode = async () => {
    if (!hotel?.code) return;
    try { await navigator.clipboard.writeText(hotel.code); setCopied(true); setTimeout(() => setCopied(false), 2000); } catch { /* sem permissão de clipboard */ }
  };
  const parking = edition.amenities?.some((a) => /estacionamento/i.test(a));

  return (
    <Section id="como-chegar" kicker="Como chegar" title={hotel ? 'Local e hospedagem' : 'Como chegar'} tone="char">
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <p className="font-display text-4xl leading-none md:text-5xl">{edition.venue.name}</p>
          <p className="mt-3 text-lg text-cream/80">{edition.venue.address && <>{edition.venue.address}<br /></>}{edition.venue.city}/{edition.venue.state}</p>
          {parking && <p className="mt-2 text-sm font-semibold text-gold">Estacionamento no local.</p>}
          <div className="mt-6 grid grid-cols-2 gap-3 sm:max-w-md">
            <a href={mapsUrlFor(edition)} target="_blank" rel="noopener noreferrer" onClick={() => trackEvent('maps')} className="flex h-14 items-center justify-center gap-2 bg-ember font-display text-xl uppercase tracking-wide text-ink transition active:translate-y-0.5 hover:bg-gold"><Navigation size={18} /> Maps</a>
            <a href={wazeUrlFor(edition)} target="_blank" rel="noopener noreferrer" onClick={() => trackEvent('waze')} className="flex h-14 items-center justify-center border-2 border-cream font-display text-xl uppercase tracking-wide transition active:translate-y-0.5 hover:bg-cream hover:text-ink">Waze</a>
          </div>
        </div>

        {hotel && (
          <div className="relative border-2 border-dashed border-gold bg-bark p-6">
            <span aria-hidden className="absolute -left-3 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-char" />
            <span aria-hidden className="absolute -right-3 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-char" />
            <p className="text-xs font-bold uppercase tracking-widest text-gold">Hotel oficial{hotel.discount ? ` · ${hotel.discount}` : ''}</p>
            <p className="mt-2 font-display text-4xl leading-none">{hotel.name}</p>
            <p className="mt-2 text-sm text-cream/75">{hotel.note}</p>
            {hotel.code && (
              <>
                <button onClick={copyCode} aria-label={`Copiar código ${hotel.code}`} className="mt-5 flex h-14 w-full items-center justify-between border-2 border-gold bg-coal px-4 font-display text-2xl tracking-widest text-gold transition active:translate-y-0.5 hover:bg-gold hover:text-ink">
                  {hotel.code} {copied ? <Check size={20} /> : <Copy size={20} />}
                </button>
                <p aria-live="polite" className="mt-2 h-4 text-xs text-cream/60">{copied ? 'Código copiado!' : 'Toque para copiar o código'}</p>
              </>
            )}
            {hotel.url && <a href={hotel.url} target="_blank" rel="noopener noreferrer" onClick={() => trackEvent('hotel')} className="mt-1 inline-block text-sm font-semibold text-gold underline underline-offset-4">Reservar pelo hotel →</a>}
          </div>
        )}
      </div>
    </Section>
  );
};

export default Location;
