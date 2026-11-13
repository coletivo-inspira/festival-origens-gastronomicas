import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

// Só no desktop; no celular a barra inferior já cobre a navegação.
const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const on = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  if (!visible) return null;
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Voltar ao topo" className="fixed bottom-6 right-6 z-40 hidden h-12 w-12 items-center justify-center bg-ember text-ink transition hover:bg-gold md:flex">
      <ArrowUp size={22} strokeWidth={3} />
    </button>
  );
};

export default ScrollToTopButton;
