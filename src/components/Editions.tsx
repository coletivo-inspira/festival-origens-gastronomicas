import { Link } from 'react-router-dom';
import { editions } from '../data/editions';
import Section from './Section';

interface Props { standalone?: boolean }

const Editions = ({ standalone = false }: Props) => (
  <Section id="edicoes" kicker="Histórico" title="Edições do festival" tone="char" className={standalone ? 'pt-28 md:pt-36' : ''} intro="O festival já soma dez edições. Estas são as mais recentes.">
    <ol className="border-t-2 border-cream/30">
      {editions.map((e) => (
        <li key={e.id} className="grid gap-1 border-b-2 border-cream/15 py-5 md:grid-cols-[16rem_1fr] md:gap-8">
          <p className="font-display text-2xl leading-tight text-gold md:text-3xl">{e.dates.replace(' de 2026', '')}</p>
          <div>
            <h3 className="font-display text-3xl leading-none md:text-4xl">{e.title}</h3>
            <p className="mt-2 text-cream/75">{e.venue} · {e.city}</p>
            {e.highlight && <p className="mt-1 text-sm text-cream/60">{e.highlight}</p>}
          </div>
        </li>
      ))}
    </ol>
    {!standalone && <Link to="/edicoes" className="mt-6 inline-block text-sm font-semibold text-gold underline underline-offset-4">Ver página de edições →</Link>}
  </Section>
);

export default Editions;
