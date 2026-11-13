import { useState } from 'react';
import { Check, Copy, Navigation } from 'lucide-react';
import { event, mapsUrl, wazeUrl } from '../data/event';
import { trackEvent } from '../lib/analytics';
import Section from './Section';

const Location = () => {
  const [copied, setCopied] = useState(false);
  const copyCode = async () => {
    try { await navigator.clipboard.writeText(event.hotel.code); setCopied(true); setTimeout(() => setCopied(false), 2000); } catch { /* sem permissão de clipboard */ }
  };

  return (
    <Section id="como-chegar" kicker="Como chegar" title="Local e hospedagem" tone="char">
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <p className="font-display text-4xl leading-none md:text-5xl">{event.venue.name}</p>
          <p className="mt-3 text-lg text-cream/80">{event.venue.address}<br />{event.venue.city}</p>
          <p className="mt-2 text-sm font-semibold text-gold">Estacionamento no local.</p>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:max-w-md">
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer" onClick={() => trackEvent('maps')} className="flex h-14 items-center justify-center gap-2 bg-ember font-display text-xl uppercase tracking-wide text-ink transition active:translate-y-0.5 hover:bg-gold"><Navigation size={18} /> Maps</a>
            <a href={wazeUrl} target="_blank" rel="noopener noreferrer" onClick={() => trackEvent('waze')} className="flex h-14 items-center justify-center border-2 border-cream font-display text-xl uppercase tracking-wide transition active:translate-y-0.5 hover:bg-cream hover:text-ink">Waze</a>
          </div>
        </div>

        {/* cupom do hotel */}
        <div className="relative border-2 border-dashed border-gold bg-bark p-6">
          <span aria-hidden className="absolute -left-3 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-char" />
          <span aria-hidden className="absolute -right-3 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-char" />
          <p className="text-xs font-bold uppercase tracking-widest text-gold">Hotel oficial · {event.hotel.discount}</p>
          <p className="mt-2 font-display text-4xl leading-none">{event.hotel.name}</p>
          <p className="mt-2 text-sm text-cream/75">{event.hotel.note}</p>
          <button onClick={copyCode} aria-label={`Copiar código ${event.hotel.code}`} className="mt-5 flex h-14 w-full items-center justify-between border-2 border-gold bg-coal px-4 font-display text-2xl tracking-widest text-gold transition active:translate-y-0.5 hover:bg-gold hover:text-ink">
            {event.hotel.code} {copied ? <Check size={20} /> : <Copy size={20} />}
          </button>
          <p aria-live="polite" className="mt-2 h-4 text-xs text-cream/60">{copied ? 'Código copiado!' : 'Toque para copiar o código'}</p>
          <a href={event.hotel.url} target="_blank" rel="noopener noreferrer" onClick={() => trackEvent('hotel')} className="mt-1 inline-block text-sm font-semibold text-gold underline underline-offset-4">Reservar pelo hotel →</a>
        </div>
      </div>
    </Section>
  );
};

export default Location;
