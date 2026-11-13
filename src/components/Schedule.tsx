import { useState } from 'react';
import { Link } from 'react-router-dom';
import { schedule } from '../data/schedule';
import { cn } from '../lib/cn';
import { getPhase, getNowNext, useNow } from '../lib/phase';
import Section from './Section';

interface Props { standalone?: boolean }

const Schedule = ({ standalone = false }: Props) => {
  const now = useNow(30_000);
  const live = getPhase(now) === 'live';
  const current = live ? getNowNext(now).current : undefined;
  const [picked, setPicked] = useState<string | null>(null);
  const activeId = picked ?? current?.dayId ?? schedule[0].id;
  const day = schedule.find((d) => d.id === activeId) ?? schedule[0];

  return (
    <Section id="programacao" kicker="Programação musical" title="Quem sobe ao palco" tone="coal" className={standalone ? 'pt-28 md:pt-36' : ''}>
      <div role="tablist" aria-label="Dias do festival" className="sticky top-16 z-20 -mx-5 mb-6 grid grid-cols-3 gap-2 bg-coal/95 px-5 py-3 backdrop-blur md:static md:mx-0 md:max-w-xl md:bg-transparent md:px-0 md:py-0">
        {schedule.map((d) => (
          <button key={d.id} role="tab" aria-selected={d.id === activeId} onClick={() => setPicked(d.id)}
            className={cn('h-14 border-2 font-display text-xl uppercase leading-none transition active:translate-y-0.5', d.id === activeId ? 'border-ember bg-ember text-ink' : 'border-cream/40 text-cream hover:border-gold')}>
            {d.label.slice(0, 3)} <span className="text-2xl">{d.date.slice(0, 2)}</span>
          </button>
        ))}
      </div>

      <ol className="border-t-2 border-cream/30">
        {day.shows.map((s) => {
          const isNow = current && current.dayId === day.id && current.time === s.time;
          return (
            <li key={s.time + s.title} className={cn('flex items-center gap-4 border-b-2 border-cream/15 py-4', s.headliner && 'bg-bark px-3 -mx-3 md:mx-0 md:px-4', isNow && 'bg-flame px-3 -mx-3 md:mx-0 md:px-4')}>
              <span className={cn('w-[4.5rem] shrink-0 font-display text-3xl leading-none md:w-24 md:text-5xl', s.kind === 'show' ? 'text-gold' : 'text-cream/40')}>{s.time}</span>
              <div className="min-w-0">
                <p className={cn(s.kind === 'show' ? 'font-display text-[1.7rem] leading-none md:text-5xl' : 'text-sm font-semibold uppercase tracking-widest text-cream/50')}>{s.title}</p>
                {isNow && <p className="mt-1 text-xs font-bold uppercase tracking-widest">Rolando agora</p>}
                {s.headliner && !isNow && <p className="mt-1 text-[11px] font-bold uppercase tracking-widest text-ember">Atração principal</p>}
              </div>
            </li>
          );
        })}
      </ol>
      <p className="mt-4 text-xs text-cream/50">Horários divulgados pela organização; podem mudar. Acompanhe o Instagram do festival.</p>
      {!standalone && <Link to="/programacao" className="mt-6 flex h-14 items-center justify-center border-2 border-cream font-display text-xl uppercase tracking-wide transition hover:bg-cream hover:text-ink md:inline-flex md:px-8">Abrir programação completa</Link>}
    </Section>
  );
};

export default Schedule;
