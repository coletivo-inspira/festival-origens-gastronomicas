import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import WhatsAppButton from './components/WhatsAppButton';
import BottomNav from './components/BottomNav';
import CookieBanner from './components/CookieBanner';
import type { ReactNode } from 'react';

/** Layout compartilhado: navbar, conteúdo e rodapé. */
const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen bg-coal font-sans text-cream">
    <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-gold focus:px-4 focus:py-2 focus:text-ink">Ir para o conteúdo</a>
    <Navbar />
    <main id="conteudo">{children}</main>
    <Footer />
    <ScrollToTopButton />
    <WhatsAppButton />
    <BottomNav />
    <CookieBanner />
  </div>
);

export default Layout;
