import { Link } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';
import { contacts, site } from '../data/site';
import Logo from './Logo';
import { analyticsConfigured } from '../lib/analytics';
import { openCookiePrefs } from '../lib/consent';

const Footer = () => (
  <footer className="border-t-2 border-cream/20 bg-coal py-12">
    <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 md:flex-row md:items-center md:justify-between md:px-10">
      <div className="flex items-center gap-5">
        <Logo small className="h-20 w-auto" />
        <p className="text-sm text-cream/70">{site.tagline}.<br />Minas Gerais</p>
      </div>
      <div className="flex flex-col gap-3 text-base font-semibold">
        <a href={contacts.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-gold"><FaInstagram size={20} /> {contacts.instagramHandle}</a>
        {contacts.email && <a href={`mailto:${contacts.email}`} className="hover:text-gold">{contacts.email}</a>}
        <Link to="/edicoes" className="hover:text-gold">Edições anteriores</Link>
        <Link to="/seja-expositor" className="text-gold hover:underline">Seja expositor ou patrocinador →</Link>
        <Link to="/privacidade" className="text-sm font-normal text-cream/70 hover:text-gold">Política de Privacidade</Link>
        {analyticsConfigured && <button onClick={openCookiePrefs} className="text-left text-sm font-normal text-cream/70 hover:text-gold">Preferências de cookies</button>}
      </div>
    </div>
    <p className="mx-auto mt-8 max-w-6xl px-5 text-xs text-cream/40 md:px-10">© {new Date().getFullYear()} Festival Origens Gastronômicas. Todos os direitos reservados.</p>
  </footer>
);

export default Footer;
