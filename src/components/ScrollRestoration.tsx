import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPage } from '../lib/analytics';

const ScrollRestoration = () => {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) { el.scrollIntoView(); return; }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  useEffect(() => { trackPage(pathname + search); }, [pathname, search]);

  return null;
};

export default ScrollRestoration;
