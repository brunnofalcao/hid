# Health Influence Day · hid.scienceplay.com

Página estática pronta para GitHub Pages.

## Publicar
1. Crie o repositório (ex.: `health-influence-day`) e suba TODO o conteúdo desta pasta na raiz: `index.html`, `CNAME`, `img/`, `README.md`.
2. GitHub > Settings > Pages > Source: **Deploy from a branch** > `main` / `/ (root)`.
3. Custom domain: `hid.scienceplay.com` (o arquivo CNAME já faz isso). Marque **Enforce HTTPS** quando liberar.

## DNS (no provedor do scienceplay.com)
| Tipo  | Nome | Valor                      |
|-------|------|----------------------------|
| CNAME | hid  | SEU-USUARIO.github.io      |

Se usar Cloudflare, deixe a nuvem **cinza** (DNS only) até o GitHub emitir o certificado.

## Formulário
Embed oficial do RD Station (`formulario-aplicacao-hid-9331237108acf9518650`). Campos, mensagem de sucesso e redirecionamento são editados no próprio RD; a página só aplica o visual.

## Pixel / GA (opcional)
Cole o snippet do Meta Pixel e/ou GA4 dentro do `<head>`.
