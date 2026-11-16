# Festival Origens Gastronômicas — site

React 19 + TypeScript + Vite + Tailwind 4 + React Router 7 (mesma arquitetura do `nathalia-verri`).
Site estático para GitHub Pages: no build, cada rota vira um HTML pronto (bom para o Google) e o React assume depois.

## Rodar

```bash
npm install
cp .env.example .env     # opcional em desenvolvimento
npm run dev
npm run build            # tsc + vite + HTML por rota + sitemap/robots/404/CNAME
```

## Onde editar o conteúdo

| Arquivo | O que controla |
|---|---|
| `src/data/editions/*.ts` | **uma edição por arquivo** (datas, local, programação, expositores, hotel). Veja `docs/NOVA-EDICAO.md` |
| `src/data/site.ts` | dados permanentes: tagline, textos, contatos (WhatsApp/e-mail hoje `null`), perguntas gerais |
| `src/data/legal.ts` | **dados do controlador (LGPD): preencher antes de publicar** |
| `src/seo.ts` | título/descrição das páginas (gerados a partir das edições) |

O site se ajusta **sozinho pela data**: próxima edição → acontecendo agora → site institucional pós-evento. Para publicar uma nova edição basta criar o arquivo dela e dar push.

## Fotos e vídeo

Coloque os arquivos em `src/assets/media/` (veja o `LEIAME.md` lá). Eles aparecem sozinhos: `hero.mp4`/`hero.webp` no topo, `gallery/` na galeria e `expositores/<slug>.webp` nos cartões. A logo (`public/logo.webp`, `logo-sm.webp`, `favicon.png`, `og.jpg`) foi gerada do arquivo em 1024 px enviado pelo organizador, com o fundo removido. Se vier um PNG/SVG transparente de origem, vale trocar.

## Variáveis (GitHub: Settings → Secrets and variables → Actions → **Variables**)

| Nome | Para quê |
|---|---|
| `VITE_SITE_URL` | domínio final, ex.: `https://seudominio.com.br` (canonical, sitemap, CNAME, imagem de compartilhamento) |
| `VITE_FORM_ENDPOINT` | endereço do Apps Script (veja `docs/FORMULARIO-GOOGLE.md`) |
| `VITE_GA_ID` | Google Analytics 4 (opcional; só mede se o visitante aceitar) |

## Domínio próprio no GitHub Pages

1. Repositório → Settings → Pages → *Custom domain* = seu domínio (o build já gera o arquivo `CNAME`). Ative *Enforce HTTPS*.
2. No registro do domínio (Registro.br etc.), aponte o DNS: quatro registros **A** para `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`, e um **CNAME** de `www` para `SEU-USUARIO.github.io`.
3. Crie a variável `VITE_SITE_URL` e faça um novo deploy.
4. Google Search Console: adicione o domínio, verifique por DNS (TXT) e envie `https://seudominio.com.br/sitemap.xml`.

## LGPD

Leia `docs/LGPD-CHECKLIST.md` (o que o site faz e o que o organizador precisa fazer). O build avisa no terminal enquanto faltarem dados em `legal.ts`, o endpoint do formulário ou o domínio.

## Rotas

`/` · `/programacao` · `/expositores` · `/edicoes` · `/edicoes/<id>` · `/seja-expositor` · `/privacidade` · `/links` (bio do Instagram, não indexada) · 404
