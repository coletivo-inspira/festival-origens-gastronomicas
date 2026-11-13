import type { ReactNode } from 'react';
import { cn } from '../lib/cn';

type Tone = 'coal' | 'char' | 'paper' | 'flame';

const tones: Record<Tone, string> = {
  coal: 'bg-coal text-cream',
  char: 'bg-char text-cream',
  paper: 'bg-paper text-ink',
  flame: 'bg-flame text-cream',
};

interface Props {
  id?: string;
  kicker?: string;
  title: string;
  intro?: string;
  children: ReactNode;
  tone?: Tone;
  className?: string;
}

const Section = ({ id, kicker, title, intro, children, tone = 'coal', className }: Props) => (
  <section id={id} className={cn('py-14 md:py-24', tones[tone], className)}>
    <div className="mx-auto max-w-6xl px-5 md:px-10">
      <header className="mb-8 md:mb-12">
        {kicker && (
          <p className={cn('mb-2 inline-block px-2 py-0.5 font-display text-base tracking-wide', tone === 'paper' ? 'bg-ink text-paper' : 'bg-ember text-ink')}>{kicker}</p>
        )}
        <h2 className="text-[clamp(2.75rem,11vw,6rem)] leading-[0.9]">{title}</h2>
        {intro && <p className={cn('mt-4 max-w-xl text-base leading-relaxed md:text-lg', tone === 'paper' ? 'text-ink/75' : 'text-cream/75')}>{intro}</p>}
      </header>
      {children}
    </div>
  </section>
);

export default Section;
