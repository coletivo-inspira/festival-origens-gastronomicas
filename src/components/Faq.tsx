import { useMemo, useState } from 'react';
import { Plus } from 'lucide-react';
import { cn } from '../lib/cn';
import { buildFaq } from '../lib/faq';
import { useSite } from '../lib/phase';
import Section from './Section';

const Faq = () => {
  const { mode, edition, featured, past } = useSite();
  const items = useMemo(() => buildFaq({ mode, edition, featured, past }), [mode, edition, featured, past]);
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section id="faq" kicker="Informações úteis" title="O que você precisa saber" tone="coal">
      <div className="max-w-3xl border-t-2 border-cream/30">
        {items.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.q} className="border-b-2 border-cream/15">
              <h3 className="font-sans text-base normal-case tracking-normal">
                <button aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : i)} className="flex min-h-14 w-full items-center justify-between gap-4 py-3 text-left text-lg font-semibold hover:text-gold">
                  {item.q}
                  <Plus size={22} className={cn('shrink-0 text-ember transition', isOpen && 'rotate-45')} strokeWidth={3} />
                </button>
              </h3>
              <div className={cn('grid transition-all duration-300', isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')}>
                <div className="overflow-hidden"><p className="pb-4 leading-relaxed text-cream/75">{item.a}</p></div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Faq;
