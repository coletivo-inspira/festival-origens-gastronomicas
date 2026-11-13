import { Link } from 'react-router-dom';
import { CalendarDays, MapPin, Music, Navigation, UtensilsCrossed } from 'lucide-react';
import { event, mapsUrl } from '../data/event';
import Logo from '../components/Logo';
import Marquee from '../components/Marquee';

const items = [
  { to: '/programacao', icon: Music, label: 'Programação musical' },
  { to: '/expositores', icon: UtensilsCrossed, label: 'Expositores' },
  { to: '/#como-chegar', icon: MapPin, label: 'Como chegar e hotel oficial', plain: true },
  { to: '/edicoes', icon: CalendarDays, label: 'Edições anteriores' },
] as const;

const cls = 'flex h-14 items-center justify-center gap-3 border-2 border-cream font-display text-xl uppercase tracking-wide transition active:translate-y-0.5 hover:bg-cream hover:text-ink';

const BioLink = () => (
  <div className="grill min-h-screen bg-coal pt-10 text-center text-cream">
    <div className="mx-auto max-w-md px-5 pb-10">
      <Logo priority className="mx-auto w-56" />
      <h1 className="mt-4 text-[5rem] leading-[0.8]">13·14·15<span className="block text-[0.62em] text-ember">Novembro</span></h1>
      <p className="mt-4 text-cream/80">{event.edition}<br />{event.venue.name}, {event.city}/{event.state}</p>
      <p className="mt-3 inline-block bg-ember px-3 py-1 font-display text-xl uppercase tracking-wide text-ink">Entrada gratuita</p>

      <div className="mt-8 space-y-3">
        {items.map((it) => {
          const inner = <><it.icon size={20} /> {it.label}</>;
          return 'plain' in it ? <a key={it.label} href={it.to} className={cls}>{inner}</a> : <Link key={it.label} to={it.to} className={cls}>{inner}</Link>;
        })}
        <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="flex h-14 items-center justify-center gap-3 bg-ember font-display text-xl uppercase tracking-wide text-ink transition active:translate-y-0.5 hover:bg-gold"><Navigation size={20} /> Abrir no Google Maps</a>
      </div>
    </div>
    <Marquee />
  </div>
);

export default BioLink;
