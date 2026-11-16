import { Link } from 'react-router-dom';
import { CalendarDays, MapPin, Music, Navigation, UtensilsCrossed } from 'lucide-react';
import Logo from '../components/Logo';
import Marquee from '../components/Marquee';
import { site } from '../data/site';
import { locationLine, mapsUrlFor, withExhibitors } from '../lib/editions';
import { bigDays, monthLabel } from '../lib/format';
import { useSite } from '../lib/phase';

const cls = 'flex h-14 items-center justify-center gap-3 border-2 border-cream font-display text-xl uppercase tracking-wide transition active:translate-y-0.5 hover:bg-cream hover:text-ink';

const BioLink = () => {
  const s = useSite();
  const e = s.edition;
  return (
    <div className="grill min-h-screen bg-coal pt-10 text-center text-cream">
      <div className="mx-auto max-w-md px-5 pb-10">
        <Logo priority className="mx-auto w-56" />
        {e ? (
          <>
            <h1 className="mt-4 text-[5rem] leading-[0.8]">{bigDays(e.start, e.end)}<span className="block text-[0.62em] text-ember">{monthLabel(e.start, e.end)}</span></h1>
            <p className="mt-4 text-cream/80">{e.title}<br />{e.venue.name}, {locationLine(e)}</p>
            {e.free && <p className="mt-3 inline-block bg-ember px-3 py-1 font-display text-xl uppercase tracking-wide text-ink">Entrada gratuita</p>}
          </>
        ) : (
          <>
            <h1 className="mt-4 text-[4rem] leading-[0.85]">Festival<span className="block text-ember">Origens</span></h1>
            <p className="mt-4 text-cream/80">{site.tagline}</p>
          </>
        )}

        <div className="mt-8 space-y-3">
          {e?.schedule?.length ? <Link to="/programacao" className={cls}><Music size={20} /> Programação musical</Link> : null}
          {withExhibitors(s) ? <Link to="/expositores" className={cls}><UtensilsCrossed size={20} /> {e ? 'Expositores' : 'Quem participou'}</Link> : null}
          {e ? <a href="/#como-chegar" className={cls}><MapPin size={20} /> Como chegar</a> : null}
          <Link to="/edicoes" className={cls}><CalendarDays size={20} /> {e ? 'Todas as edições' : 'Edições'}</Link>
          <a href="/#avise-me" className={cls}>Quero ser avisado</a>
          {e && <a href={mapsUrlFor(e)} target="_blank" rel="noopener noreferrer" className="flex h-14 items-center justify-center gap-3 bg-ember font-display text-xl uppercase tracking-wide text-ink transition active:translate-y-0.5 hover:bg-gold"><Navigation size={20} /> Abrir no Google Maps</a>}
        </div>
      </div>
      <Marquee items={e ? ['Festival Origens Gastronômicas', site.tagline] : [site.tagline, `${site.editionsHeld} edições`, 'Gastronomia', 'Música ao vivo']} />
    </div>
  );
};

export default BioLink;
