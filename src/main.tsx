import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import AppRoutes from './AppRoutes';
import RouteMeta from './components/RouteMeta';
import ScrollRestoration from './components/ScrollRestoration';

const root = document.getElementById('root')!;
const app = (
  <StrictMode>
    <BrowserRouter basename="/">
      <RouteMeta />
      <ScrollRestoration />
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>
);

// Em produção o HTML já vem pré-gerado (SEO); no `npm run dev` a raiz está vazia.
if (root.hasChildNodes()) hydrateRoot(root, app);
else createRoot(root).render(app);
