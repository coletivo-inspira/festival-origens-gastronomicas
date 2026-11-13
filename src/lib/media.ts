// Mídia opcional: basta colocar os arquivos em src/assets/media/ e eles aparecem sozinhos no site.
//   hero.mp4 / hero.webp (ou .jpg)      -> fundo do topo (vídeo tem prioridade; poster = hero.webp)
//   gallery/01-qualquer-nome.webp ...   -> galeria (ordem alfabética)
//   expositores/<nome-do-expositor-em-slug>.webp -> foto no cartão (ex.: break-brasa.webp)
const files = import.meta.glob('../assets/media/**/*.{jpg,jpeg,png,webp,avif,mp4}', { eager: true, query: '?url', import: 'default' }) as Record<string, string>;

const entries = Object.entries(files).map(([k, url]) => ({ rel: k.replace('../assets/media/', ''), url }));
const byPrefix = (re: RegExp) => entries.find((e) => re.test(e.rel))?.url;

export const heroVideo = byPrefix(/^hero\.mp4$/);
export const heroImage = byPrefix(/^hero\.(webp|jpe?g|png|avif)$/);
export const gallery = entries.filter((e) => e.rel.startsWith('gallery/')).sort((a, b) => a.rel.localeCompare(b.rel)).map((e) => e.url);

export const slug = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
export const exhibitorImage = (name: string) => byPrefix(new RegExp(`^expositores/${slug(name)}\\.(webp|jpe?g|png|avif)$`));
