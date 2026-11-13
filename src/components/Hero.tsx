import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { event } from '../data/event';
import { cn } from '../lib/cn';
import { slots, getPhase, useNow } from '../lib/phase';
import Logo from './Logo';
import LiveStatus from './LiveStatus';
import Marquee from './Marquee';
import { heroImage, heroVideo } from '../lib/media';

const days = [
  { id: 'sex', short: 'Sex', n: '13', time: event.hours[0].time },
  { id: 'sab', short: 'Sáb', n: '14', time: event.hours[1].time },
  { id: 'dom', short: 'Dom', n: '15', time: event.hours[2].time },
];

const Hero = () => {
  const now = useNow(30_000);
  const live = getPhase(now) === 'live';
  const today = live ? [...slots].reverse().find((s) => s.at <= now)?.dayId : undefined;

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
        <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-5 md:grid-cols-[1.15fr_0.85fr] md:gap-12 md:px-10">
          <div className="order-2 md:order-1">
            <p className="inline-block -rotate-2 bg-cream px-3 py-1 font-display text-lg tracking-wide text-ink md:text-xl">{event.edition}</p>
            <h1 className="mt-4 text-[clamp(4.6rem,24vw,11rem)] leading-[0.8]">
              13·14·15
              <span className="mt-1 block text-[0.62em] leading-[0.9] text-ember">Novembro</span>
            </h1>
            <p className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-lg font-semibold">
              <span className="inline-flex items-center gap-1.5"><MapPin size={18} className="text-ember" />{event.city}/{event.state}</span>
              <span className="bg-ember px-2.5 py-0.5 font-display text-xl uppercase tracking-wide text-ink">Entrada gratuita</span>
            </p>

            <div className="mt-6 grid max-w-md grid-cols-3 border-2 border-cream/40">
              {days.map((d) => (
                <div key={d.id} className={cn('border-r-2 border-cream/40 px-2 py-3 text-center last:border-r-0', today === d.id && 'bg-ember text-ink')}>
                  <p className="font-display text-xl leading-none">{d.short} <span className="text-3xl">{d.n}</span></p>
                  <p className={cn('mt-1 text-xs font-semibold', today === d.id ? 'text-ink' : 'text-cream/70')}>{d.time}</p>
                </div>
              ))}
            </div>

            <div className="mt-6"><LiveStatus /></div>

            <div className="mt-7 grid max-w-md grid-cols-2 gap-3">
              <Link to="/programacao" className="flex h-14 items-center justify-center bg-ember font-display text-xl uppercase tracking-wide text-ink transition active:translate-y-0.5 hover:bg-gold">Programação</Link>
              <Link to="/expositores" className="flex h-14 items-center justify-center border-2 border-cream font-display text-xl uppercase tracking-wide transition active:translate-y-0.5 hover:bg-cream hover:text-ink">Expositores</Link>
            </div>
          </div>

          <div className="order-1 flex justify-center md:order-2">
            <Logo priority className="w-[52%] max-w-[22rem] drop-shadow-[0_18px_30px_rgba(0,0,0,0.6)] md:w-full md:max-w-md" />
          </div>
        </div>
      </div>
      <div className="-rotate-1 scale-[1.03]"><Marquee /></div>
    </section>
  );
};

export default Hero;
