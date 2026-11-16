import { Link, useLocation } from 'react-router-dom';
import { Bell, CalendarDays, House, MapPin, Music, UtensilsCrossed } from 'lucide-react';
import { cn } from '../lib/cn';
import { bottomItems } from '../lib/nav';
import { useSite } from '../lib/phase';

const icons = { home: House, music: Music, food: UtensilsCrossed, map: MapPin, calendar: CalendarDays, bell: Bell } as const;

/** Atalhos fixos no celular. Mudam conforme o momento do festival (evento x pós-evento). */
const BottomNav = () => {
  const { pathname: raw } = useLocation();
  const pathname = raw.length > 1 ? raw.replace(/\/+$/, '') : raw; // /programacao/ (GitHub Pages) = /programacao
  const { mode, edition, featured, past } = useSite();
  const items = bottomItems({ mode, edition, featured, past });
  return (
    <nav aria-label="Atalhos" className="fixed inset-x-0 bottom-0 z-50 border-t-2 border-cream/25 bg-coal pb-[env(safe-area-inset-bottom)] md:hidden">
      <ul className="grid" style={{ gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))` }}>
        {items.map(({ label, to, icon }) => {
          const Icon = icons[icon];
          const active = to === pathname;
          const cls = cn('flex h-[4.25rem] flex-col items-center justify-center gap-1 text-[11px] font-bold uppercase tracking-wide', active ? 'bg-ember text-ink' : 'text-cream/80');
          return (
            <li key={label}>
              {to.includes('#')
                ? <a href={to} className={cls}><Icon size={22} />{label}</a>
                : <Link to={to} className={cls} aria-current={active ? 'page' : undefined}><Icon size={22} />{label}</Link>}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default BottomNav;
