import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { findMeta } from '../seo';
import { useSite } from '../lib/phase';

/** Mantém título e descrição corretos durante a navegação no navegador (o HTML estático já vem certo para o Google). */
const RouteMeta = () => {
  const { pathname } = useLocation();
  const { mode, edition, featured, past } = useSite();
  useEffect(() => {
    const m = findMeta(pathname, { mode, edition, featured, past });
    document.title = m.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', m.description);
  }, [pathname, mode, edition, featured, past]);
  return null;
};

export default RouteMeta;
