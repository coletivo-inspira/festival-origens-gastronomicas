import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import type { Edition } from '../data/types';
import { cn } from '../lib/cn';
import { categoriesOf } from '../lib/editions';
import { exhibitorImage } from '../lib/media';
import Section from './Section';

interface Props { edition: Edition; archive?: boolean; standalone?: boolean; limit?: number; moreHref?: string }

const Exhibitors = ({ edition, archive = false, standalone = false, limit, moreHref }: Props) => {
  const all = useMemo(() => edition.exhibitors ?? [], [edition]);
  const categories = useMemo(() => ['Todos', ...categoriesOf(all)], [all]);
  const [cat, setCat] = useState('Todos');
  const [q, setQ] = useState('');
  if (!all.length) return null;

  const list = all
    .filter((e) => cat === 'Todos' || e.category === cat)
    .filter((e) => (e.name + ' ' + e.specialties.join(' ')).toLowerCase().includes(q.trim().toLowerCase()));
  const shown = limit ? list.slice(0, limit) : list;

  const intro = edition.stations
    ? `Mais de ${edition.stations} estações gastronômicas.${archive ? '' : ' Estes são os expositores já divulgados; os demais entram aqui conforme forem anunciados.'}`
    : undefined;

  return (
    <Section id="expositores" kicker={archive ? `Expositores · ${edition.title}` : 'Expositores'} title={archive ? 'Quem participou' : 'O que tem pra comer'} tone="paper" className={standalone ? 'pt-28 md:pt-36' : ''} intro={intro}>
      {standalone && (
        <div className="mb-8 space-y-3">
          <label className="block">
            <span className="sr-only">Buscar expositor ou prato</span>
            <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Buscar expositor ou prato…" className="h-14 w-full border-2 border-ink bg-white px-4 text-base text-ink placeholder:text-ink/40 focus:border-flame focus:outline-none" />
          </label>
          <div className="-mx-5 flex snap-x gap-2 overflow-x-auto px-5 pb-1 md:mx-0 md:flex-wrap md:px-0" role="group" aria-label="Filtrar por categoria">
            {categories.map((c) => (
              <button key={c} onClick={() => setCat(c)} aria-pressed={c === cat} className={cn('h-11 shrink-0 snap-start border-2 border-ink px-4 text-sm font-semibold transition', c === cat ? 'bg-ink text-paper' : 'bg-transparent text-ink hover:bg-ink/10')}>{c}</button>
            ))}
          </div>
        </div>
      )}

      {shown.length === 0 ? (
        <p className="text-ink/70">Nenhum expositor encontrado.</p>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((e, i) => (
            <li key={e.name} className="relative overflow-hidden border-2 border-ink bg-white shadow-[5px_5px_0_var(--color-ink)]">
              {exhibitorImage(e.name) && <img src={exhibitorImage(e.name)} alt={`Pratos de ${e.name}`} loading="lazy" decoding="async" className="aspect-[16/10] w-full border-b-2 border-ink object-cover" />}
              <div className="relative p-5">
                <span className="absolute right-4 top-3 font-display text-4xl leading-none text-ink/15">{String(i + 1).padStart(2, '0')}</span>
                <p className="mb-2 inline-block bg-flame px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider text-cream">{e.category}</p>
                <h3 className="pr-10 text-[2rem] leading-[0.95] text-ink">{e.name}</h3>
                <p className="mt-3 text-[15px] leading-snug text-ink/80">{e.specialties.length ? e.specialties.join(' · ') : 'Cardápio em breve'}</p>
                {(e.stands ?? 1) > 1 && <p className="mt-2 text-xs font-bold uppercase tracking-wider text-flame">{e.stands} estações</p>}
              </div>
            </li>
          ))}
        </ul>
      )}

      {moreHref && !standalone && <Link to={moreHref} className="mt-8 flex h-14 items-center justify-center border-2 border-ink bg-ink font-display text-xl uppercase tracking-wide text-paper transition active:translate-y-0.5 hover:bg-flame md:inline-flex md:px-8">Ver todos os expositores</Link>}
      {archive && (
        <div className="mt-10 border-2 border-ink bg-white p-6 shadow-[5px_5px_0_var(--color-ink)]">
          <p className="font-display text-3xl leading-none text-ink">Quer expor na próxima edição?</p>
          <Link to="/seja-expositor" className="mt-4 inline-flex h-12 items-center bg-ink px-6 font-display text-lg uppercase tracking-wide text-paper hover:bg-flame">Seja expositor</Link>
        </div>
      )}
    </Section>
  );
};

export default Exhibitors;
