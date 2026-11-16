import { Link } from 'react-router-dom';
import { MapPin, Navigation } from 'lucide-react';
import { site } from '../data/site';
import type { Edition } from '../data/types';
import { cn } from '../lib/cn';
import { getDays, locationLine, mapsUrlFor, todayIso } from '../lib/editions';
import { bigDays, formatRange, monthLabel, year } from '../lib/format';
import { heroImage, heroVideo } from '../lib/media';
import { trackEvent } from '../lib/analytics';
import { useSite } from '../lib/phase';
import Logo from './Logo';
import LiveStatus from './LiveStatus';
import Marquee from './Marquee';

const marqueeFor = (e: Edition | null): string[] => {
  if (!e) return [site.tagline, `${site.editionsHeld} edições`, 'Gastronomia', 'Música ao vivo'];
  return [
    e.free ? 'Entrada gratuita' : '',
    e.stations ? `+${e.stations} estações gastronômicas` : '',
    ...(e.amenities ?? []).filter((a) => !/estações/i.test(a)).slice(0, 4),
  ].filter(Boolean);
};

const Hero = () => {
  const { mode, edition, featured, now } = useSite();
  const isEvent = mode !== 'archive' && edition;
  const days = edition ? getDays(edition) : [];
  const today = edition && mode === 'live' ? todayIso(edition, now) : undefined;
  const items = marqueeFor(isEvent ? edition : null);
  const marquee = items.length >= 2 ? items : [site.tagline, `${site.editionsHeld} edições`, 'Gastronomia', 'Música ao vivo'];

  return (
    <section id="inicio" className="bg-coal">
      <div className="grill relative overflow-hidden pt-20 pb-10 md:pt-32 md:pb-20">
        {(heroVideo || heroImage) && (
          <>
            {heroVideo
              ? <video src={heroVideo} poster={heroImage} autoPlay muted loop playsInline preload="metadata" aria-hidden className="absolute inset-0 h-full w-full object-cover" />
              : <img src={heroImage} alt="" aria-hidden fetchPriority="high" className="absolute inset-0 h-full w-full object-cover" />}
            <div aria-hidden className="absolute inset-0 bg-coal/70" />
          </>
        )}
        <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-5 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:gap-12 md:px-10">
          <div className="order-2 md:order-1">
            {isEvent ? (
              <>
                <p className="inline-block -rotate-2 bg-cream px-3 py-1 font-display text-lg tracking-wide text-ink md:text-xl">{mode === 'before' ? 'Próxima edição · ' : ''}{edition.title}</p>
                <h1 className="mt-4 text-[clamp(4.6rem,24vw,11rem)] leading-[0.8] md:text-[clamp(5rem,11vw,9rem)]">
                  {bigDays(edition.start, edition.end)}
                  <span className="mt-1 block text-[0.62em] leading-[0.9] text-ember">{monthLabel(edition.start, edition.end)}</span>
                </h1>
                <p className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-lg font-semibold">
                  <span className="inline-flex items-center gap-1.5"><MapPin size={18} className="text-ember" />{locationLine(edition)}</span>
                  {edition.free && <span className="bg-ember px-2.5 py-0.5 font-display text-xl uppercase tracking-wide text-ink">Entrada gratuita</span>}
                </p>

                {days.some((d) => d.hours) && (
                  <div className="mt-6 grid max-w-md border-2 border-cream/40" style={{ gridTemplateColumns: `repeat(${Math.min(days.length, 4)}, minmax(0, 1fr))` }}>
                    {days.slice(0, 4).map((d) => (
                      <div key={d.iso} className={cn('border-r-2 border-cream/40 px-2 py-3 text-center last:border-r-0', today === d.iso && 'bg-ember text-ink')}>
                        <p className="font-display text-xl leading-none">{d.short} <span className="text-3xl">{d.date.slice(0, 2)}</span></p>
                        <p className={cn('mt-1 text-xs font-semibold', today === d.iso ? 'text-ink' : 'text-cream/70')}>{d.hours}</p>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-6"><LiveStatus edition={edition} live={mode === 'live'} now={now} /></div>

                {!edition.schedule?.length && <p className="mt-5 max-w-md text-cream/80">Mais informações em breve. Cadastre-se para ser avisado.</p>}

                <div className="mt-7 grid max-w-md gap-3">
                  <a href={mapsUrlFor(edition)} target="_blank" rel="noopener noreferrer" onClick={() => trackEvent('hero_local')} className="flex h-14 items-center justify-center gap-2 border-2 border-gold font-display text-xl uppercase tracking-wide text-gold transition active:translate-y-0.5 hover:bg-gold hover:text-ink">
                    <Navigation size={20} /> Ir para o local do evento
                  </a>
                  {mode === 'before' && !edition.schedule?.length && (
                    <a href="/#avise-me" className="flex h-14 items-center justify-center bg-ember font-display text-xl uppercase tracking-wide text-ink transition hover:bg-gold">Quero ser avisado</a>
                  )}
                </div>
              </>
            ) : (
              <>
                <p className="inline-block -rotate-2 bg-cream px-3 py-1 font-display text-lg tracking-wide text-ink md:text-xl">Edição encerrada</p>
                <h1 className="mt-4 text-[clamp(3.6rem,19vw,9rem)] leading-[0.82] md:text-[clamp(4rem,9vw,7.5rem)]">
                  Obrigado
                  {featured && <span className="mt-1 block text-[0.62em] leading-[0.9] text-ember">{featured.venue.city}</span>}
                </h1>
                <p className="mt-5 max-w-md font-semibold text-cream/90">{site.tagline}.</p>
                {featured && <p className="mt-2 max-w-md text-cream/75">{featured.title} aconteceu em {formatRange(featured.start, featured.end)} de {year(featured.start)}. Em breve, novidades da próxima edição.</p>}
                <div className="mt-7 grid max-w-md gap-3">
                  <a href="/#avise-me" className="flex h-14 items-center justify-center bg-ember font-display text-xl uppercase tracking-wide text-ink transition active:translate-y-0.5 hover:bg-gold">Quero saber da próxima</a>
                  <Link to="/edicoes" className="flex h-14 items-center justify-center border-2 border-cream font-display text-xl uppercase tracking-wide transition active:translate-y-0.5 hover:bg-cream hover:text-ink">Ver edições anteriores</Link>
                </div>
              </>
            )}
          </div>

          <div className="order-1 flex justify-center md:order-2">
            <Logo priority className="w-[52%] max-w-[22rem] drop-shadow-[0_18px_30px_rgba(0,0,0,0.6)] md:w-full md:max-w-md" />
          </div>
        </div>
      </div>
      <div className="-rotate-1 scale-[1.03]"><Marquee items={marquee} /></div>
    </section>
  );
};

export default Hero;
