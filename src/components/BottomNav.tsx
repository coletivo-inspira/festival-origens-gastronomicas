import { Link, useLocation } from 'react-router-dom';
import { House, MapPin, Music, UtensilsCrossed } from 'lucide-react';
import { cn } from '../lib/cn';

const items = [
  { label: 'Início', to: '/', icon: House },
  { label: 'Programação', to: '/programacao', icon: Music },
  { label: 'Comer', to: '/expositores', icon: UtensilsCrossed },
  { label: 'Mapa', to: '/#como-chegar', icon: MapPin },
] as const;

/** Atalhos fixos no celular: o que o público mais procura (horários, expositores, mapa). */
const BottomNav = () => {
  const { pathname: raw } = useLocation();
  const pathname = raw.length > 1 ? raw.replace(/\/+$/, '') : raw; // /programacao/ (GitHub Pages) = /programacao
  return (
    <nav aria-label="Atalhos" className="fixed inset-x-0 bottom-0 z-50 border-t-2 border-cream/25 bg-coal pb-[env(safe-area-inset-bottom)] md:hidden">
      <ul className="grid grid-cols-4">
        {items.map(({ label, to, icon: Icon }) => {
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
