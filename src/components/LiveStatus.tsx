import { Link } from 'react-router-dom';
import { usePhase, useNowNext, useMounted } from '../lib/phase';
import Countdown from './Countdown';

const LiveStatus = () => {
  const phase = usePhase();
  const { current } = useNowNext();
  if (!useMounted()) return <div className="h-24" aria-hidden />;

  if (phase === 'before') {
    return (
      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gold">Faltam</p>
        <Countdown />
      </div>
    );
  }

  if (phase === 'after') {
    return (
      <div className="border-2 border-gold p-4">
        <p className="font-display text-3xl leading-none">Edição encerrada. Obrigado!</p>
        <Link to="/#avise-me" className="mt-2 inline-block text-sm font-semibold text-gold underline underline-offset-4">Quero saber da próxima →</Link>
      </div>
    );
  }

  return (
    <div className="max-w-md border-2 border-cream bg-coal/60">
      <p className="flex items-center gap-2 bg-flame px-4 py-1.5 text-xs font-bold uppercase tracking-widest">
        <span className="live-dot h-2 w-2 rounded-full bg-cream" /> Acontecendo agora
      </p>
      <div className="p-4">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-gold">Rolando</p>
        <p className="mt-1 font-display text-3xl leading-none md:text-4xl">{current?.title ?? '—'}</p>
        {current && <p className="mt-1 text-xs text-cream/60">desde {current.time}</p>}
      </div>
      <Link to="/programacao" className="flex items-center justify-between border-t-2 border-cream/20 px-4 py-3 text-sm font-semibold text-gold transition hover:bg-cream/10">
        Acompanhe a programação completa do dia <span aria-hidden>→</span>
      </Link>
    </div>
  );
};

export default LiveStatus;
