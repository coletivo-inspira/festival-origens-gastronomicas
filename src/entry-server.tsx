/* eslint-disable react-refresh/only-export-components -- entrada de servidor, não participa do fast refresh */
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';

export const render = (url: string) =>
  renderToString(
    <StaticRouter location={url}>
      <AppRoutes />
    </StaticRouter>,
  );

export { routes, notFoundMeta, SITE_NAME } from './seo';
export { buildJsonLd } from './lib/jsonld';
export { controllerComplete } from './data/legal';
