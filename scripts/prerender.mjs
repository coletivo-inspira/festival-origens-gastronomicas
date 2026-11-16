// Gera um HTML estático por rota (SEO) + 404 real, sitemap, robots e CNAME.
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { loadEnv } from 'vite';

const root = process.cwd();
const dist = path.join(root, 'dist');
const env = loadEnv('production', root, 'VITE_');
const siteUrl = (env.VITE_SITE_URL || '').trim().replace(/\/+$/, '');

// "Agora" do build: o HTML é gerado para este instante e o navegador começa com o mesmo valor (hidratação sem erro).
const buildNow = process.env.PRERENDER_NOW ? new Date(process.env.PRERENDER_NOW).getTime() : Date.now(); // PRERENDER_NOW só para testes
globalThis.__BUILD_NOW__ = buildNow;

const mod = await import(pathToFileURL(path.join(root, 'dist-ssr/entry-server.js')).href);
const state = mod.getSiteState(buildNow);
const routes = mod.getRoutes(state);
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const abs = (p) => (siteUrl ? `${siteUrl}${p}` : p);
const canonicalPath = (p) => (p === '/' ? '/' : `${p}/`);

function headFor(meta, { jsonld = false } = {}) {
  const url = abs(canonicalPath(meta.path));
  const tags = [
    `<title>${esc(meta.title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}" />`,
    meta.noindex ? '<meta name="robots" content="noindex, follow" />' : '',
    siteUrl && !meta.noindex ? `<link rel="canonical" href="${esc(url)}" />` : '',
    '<meta property="og:type" content="website" />',
    '<meta property="og:locale" content="pt_BR" />',
    `<meta property="og:site_name" content="${esc(mod.SITE_NAME)}" />`,
    `<meta property="og:title" content="${esc(meta.title)}" />`,
    `<meta property="og:description" content="${esc(meta.description)}" />`,
    siteUrl ? `<meta property="og:url" content="${esc(url)}" />` : '',
    `<meta property="og:image" content="${esc(abs('/og.jpg'))}" />`,
    '<meta property="og:image:width" content="1200" />',
    '<meta property="og:image:height" content="630" />',
    '<meta name="twitter:card" content="summary_large_image" />',
    `<script>window.__BUILD_NOW__=${buildNow}</script>`,
    jsonld ? `<script type="application/ld+json">${JSON.stringify(mod.buildJsonLd(siteUrl, state)).replace(/</g, '\\u003c')}</script>` : '',
  ];
  return tags.filter(Boolean).join('\n    ');
}

function write(file, html) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
}

const page = (meta, url, opts) =>
  template.replace('<!--app-head-->', headFor(meta, opts)).replace('<!--app-html-->', mod.render(url));

for (const meta of routes) {
  const out = meta.path === '/' ? path.join(dist, 'index.html') : path.join(dist, meta.path, 'index.html');
  write(out, page(meta, meta.path, { jsonld: meta.path === '/' }));
}
write(path.join(dist, '404.html'), page(mod.notFoundMeta, '/pagina-nao-encontrada'));

const indexable = routes.filter((r) => !r.noindex);
const today = new Date().toISOString().slice(0, 10);
if (siteUrl) {
  write(path.join(dist, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${indexable
      .map((r) => `  <url><loc>${abs(canonicalPath(r.path))}</loc><lastmod>${today}</lastmod></url>`).join('\n')}\n</urlset>\n`);
}
write(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n${siteUrl ? `Sitemap: ${siteUrl}/sitemap.xml\n` : ''}`);
if (siteUrl && !/\.github\.io$/.test(new URL(siteUrl).hostname)) write(path.join(dist, 'CNAME'), new URL(siteUrl).hostname + '\n');

fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true });

console.log(`\nprerender (${state.mode}${state.edition ? `: ${state.edition.id}` : ''}): ${routes.length} páginas + 404${siteUrl ? ' + sitemap' : ''}`);
if (!siteUrl) console.warn('⚠️  VITE_SITE_URL não definido: sem canonical, sitemap, CNAME e og:image absoluto. Defina o domínio (ex.: https://seudominio.com.br).');
if (!mod.controllerComplete) console.warn('⚠️  src/data/legal.ts ainda tem campos entre colchetes (razão social, CNPJ, endereço, e-mail do titular). Preencha antes de publicar.');
if (!env.VITE_FORM_ENDPOINT) console.warn('⚠️  VITE_FORM_ENDPOINT não definido: os formulários não gravam na planilha (usam o fallback Instagram/WhatsApp).');
