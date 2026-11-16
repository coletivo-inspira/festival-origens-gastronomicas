import { Check } from 'lucide-react';
import { site } from '../data/site';
import { dayList } from '../lib/format';
import { useSite } from '../lib/phase';
import Section from './Section';

const About = () => {
  const { mode, edition, featured } = useSite();
  const e = mode !== 'archive' ? edition : featured;
  const stats = [
    { big: String(site.editionsHeld), label: 'edições realizadas' },
    ...(e?.stations ? [{ big: `+${e.stations}`, label: 'estações gastronômicas' }] : []),
    ...(e ? [{ big: String(dayList(e.start, e.end).length), label: mode === 'archive' ? 'dias na última edição' : 'dias de festival' }] : []),
  ];
  const showList = mode !== 'archive' && e?.amenities?.length;

  return (
    <Section id="sobre" kicker="O festival" title="Fogo, comida e música" tone="char" intro={site.about}>
      <dl className="grid border-y-2 border-cream/30" style={{ gridTemplateColumns: `repeat(${stats.length}, minmax(0, 1fr))` }}>
        {stats.map((s) => (
          <div key={s.label} className="border-r-2 border-cream/30 px-2 py-6 text-center last:border-r-0">
            <dt className="font-display text-[clamp(2.2rem,9vw,4.5rem)] leading-none text-ember">{s.big}</dt>
            <dd className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-cream/70 md:text-sm">{s.label}</dd>
          </div>
        ))}
      </dl>

      {showList && (
        <ul className="mt-8 grid gap-x-10 gap-y-3 sm:grid-cols-2">
          {e.amenities!.map((a) => (
            <li key={a} className="flex items-start gap-3 border-b border-cream/15 pb-3 text-base md:text-lg">
              <Check size={20} className="mt-0.5 shrink-0 text-ember" strokeWidth={3} /> {a}
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
};

export default About;
