import { Link } from 'react-router-dom';
import type { Edition } from '../data/types';
import { currentSlot } from '../lib/editions';
import { useMounted } from '../lib/phase';
import Countdown from './Countdown';

interface Props { edition: Edition; live: boolean; now: number }

/** Antes do início: contagem regressiva. Durante: "acontecendo agora" + o que está rolando. */
const LiveStatus = ({ edition, live, now }: Props) => {
  if (!useMounted()) return <div className="h-24" aria-hidden />;

  if (!live) {
    return (
      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gold">Faltam</p>
        <Countdown to={edition.start} />
      </div>
    );
  }

  const current = currentSlot(edition, now);
  return (
    <div className="max-w-md border-2 border-cream bg-coal/60">
      <p className="flex items-center gap-2 bg-flame px-4 py-1.5 text-xs font-bold uppercase tracking-widest">
        <span className="live-dot h-2 w-2 rounded-full bg-cream" /> Acontecendo agora
      </p>
      {current ? (
        <>
          <div className="p-4">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-gold">Rolando</p>
            <p className="mt-1 font-display text-3xl leading-none md:text-4xl">{current.title}</p>
            <p className="mt-1 text-xs text-cream/60">desde {current.time}</p>
          </div>
          <Link to="/programacao" className="flex items-center justify-between border-t-2 border-cream/20 px-4 py-3 text-sm font-semibold text-gold transition hover:bg-cream/10">
            Acompanhe a programação completa do dia <span aria-hidden>→</span>
          </Link>
        </>
      ) : (
        <p className="p-4 text-lg font-semibold">Aproveite o festival!</p>
      )}
    </div>
  );
};

export default LiveStatus;
