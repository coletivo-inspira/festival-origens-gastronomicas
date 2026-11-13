import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';
import { contacts } from '../data/event';
import { cn } from '../lib/cn';
import Logo from './Logo';

const links = [
  { name: 'Programação', to: '/programacao' },
  { name: 'Expositores', to: '/expositores' },
  { name: 'Como chegar', href: '/#como-chegar' },
  { name: 'Edições', to: '/edicoes' },
  { name: 'FAQ', href: '/#faq' },
] as const;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  // Só a Home tem topo escuro e liso; nas demais páginas (ex.: Expositores, fundo claro) o menu fica sempre sólido.
  const solid = scrolled || pathname !== '/';
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 10);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  return (
    <header className={cn('fixed inset-x-0 top-0 z-50 transition-colors', solid ? 'border-b-2 border-cream/20 bg-coal/95 backdrop-blur' : 'bg-transparent')}>
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-10" aria-label="Principal">
        <Link to="/" aria-label="Festival Origens Gastronômicas — início"><Logo small priority className="h-11 w-auto md:h-12" /></Link>
        <a href={contacts.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram do festival" className="flex h-11 w-11 items-center justify-center border-2 border-cream/60 md:hidden"><FaInstagram size={22} /></a>
        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => 'to' in l
            ? <Link key={l.name} to={l.to} className="text-sm font-semibold text-cream/80 transition hover:text-gold">{l.name}</Link>
            : <a key={l.name} href={l.href} className="text-sm font-semibold text-cream/80 transition hover:text-gold">{l.name}</a>)}
          <Link to="/seja-expositor" className="border-2 border-gold px-4 py-2 font-display text-base uppercase tracking-wide text-gold transition hover:bg-gold hover:text-ink">Seja expositor</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
