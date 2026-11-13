import { Check } from 'lucide-react';
import { event } from '../data/event';
import Section from './Section';

const stats = [
  { big: '3', label: 'dias de festival' },
  { big: `+${event.stations}`, label: 'estações gastronômicas' },
  { big: 'R$ 0', label: 'de entrada' },
];

const About = () => (
  <Section id="sobre" kicker="O festival" title="Fogo, comida e música" tone="char" intro="O Festival Origens Gastronômicas reúne cozinhas de todo tipo, música ao vivo e a família inteira num só lugar. Em Lagoa Santa, ele apresenta o Churrasco Fest Brasil.">
    <dl className="grid grid-cols-3 border-y-2 border-cream/30">
      {stats.map((s) => (
        <div key={s.label} className="border-r-2 border-cream/30 px-2 py-6 text-center last:border-r-0">
          <dt className="font-display text-[clamp(2.2rem,9vw,4.5rem)] leading-none text-ember">{s.big}</dt>
          <dd className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-cream/70 md:text-sm">{s.label}</dd>
        </div>
      ))}
    </dl>

    <ul className="mt-8 grid gap-x-10 gap-y-3 sm:grid-cols-2">
      {event.amenities.map((a) => (
        <li key={a} className="flex items-start gap-3 border-b border-cream/15 pb-3 text-base md:text-lg">
          <Check size={20} className="mt-0.5 shrink-0 text-ember" strokeWidth={3} /> {a}
        </li>
      ))}
    </ul>
  </Section>
);

export default About;
