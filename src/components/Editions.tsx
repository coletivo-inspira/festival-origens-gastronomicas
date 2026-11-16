import { Link } from 'react-router-dom';
import { site } from '../data/site';
import { editions, editionStatus, startMs } from '../lib/editions';
import { formatRange, year } from '../lib/format';
import { cn } from '../lib/cn';
import { useSite } from '../lib/phase';
import Section from './Section';

interface Props { standalone?: boolean }

const Editions = ({ standalone = false }: Props) => {
  const { now } = useSite();
  // próximas primeiro (mais perto), depois as encerradas (mais recentes primeiro)
  const upcoming = editions.filter((e) => editionStatus(e, now) !== 'Encerrada').sort((a, b) => startMs(a) - startMs(b));
  const past = editions.filter((e) => editionStatus(e, now) === 'Encerrada');
  const list = [...upcoming, ...past];

  return (
    <Section id="edicoes" kicker="Histórico" title="Edições do festival" tone="char" className={standalone ? 'pt-28 md:pt-36' : ''} intro={`O festival já soma ${site.editionsHeld} edições. Veja as mais recentes e as que estão chegando.`}>
      <ol className="border-t-2 border-cream/30">
        {list.map((e) => {
          const status = editionStatus(e, now);
          return (
            <li key={e.id} className="border-b-2 border-cream/15">
              <Link to={`/edicoes/${e.id}`} className="grid gap-1 py-5 transition hover:bg-cream/5 md:grid-cols-[16rem_1fr] md:gap-8">
                <p className="font-display text-2xl leading-tight text-gold md:text-3xl">{formatRange(e.start, e.end)} <span className="text-cream/50">{year(e.start)}</span></p>
                <div>
                  <p className={cn('mb-1 inline-block px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider', status === 'Encerrada' ? 'bg-cream/15 text-cream/70' : 'bg-ember text-ink')}>{status}</p>
                  <h3 className="font-display text-3xl leading-none md:text-4xl">{e.title}</h3>
                  <p className="mt-2 text-cream/75">{e.venue.name} · {e.venue.city}/{e.venue.state}</p>
                  {e.summary && <p className="mt-1 text-sm text-cream/60">{e.summary}</p>}
                  <p className="mt-2 text-sm font-semibold text-gold">Ver detalhes →</p>
                </div>
              </Link>
            </li>
          );
        })}
      </ol>
      {!standalone && <Link to="/edicoes" className="mt-6 inline-block text-sm font-semibold text-gold underline underline-offset-4">Ver página de edições →</Link>}
    </Section>
  );
};

export default Editions;
