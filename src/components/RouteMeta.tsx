import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { findMeta } from '../seo';

/** Mantém título e descrição corretos durante a navegação no navegador (o HTML estático já vem certo para o Google). */
const RouteMeta = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    const m = findMeta(pathname);
    document.title = m.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', m.description);
  }, [pathname]);
  return null;
};

export default RouteMeta;
