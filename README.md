# Health Influence Day · hid.scienceplay.com

Página estática pronta para GitHub Pages.

## Publicar (Vercel + GitHub)
**Substitua o conteúdo inteiro do repositório** por esta pasta. Se subir só o `index.html`, o CSS antigo continua valendo.
Para conferir se a versão nova está no ar: abra o site, `Ver código-fonte` e procure `og-online.jpg` (versão da transmissão).

### Alternativa GitHub Pages
1. Crie o repositório (ex.: `health-influence-day`) e suba TODO o conteúdo desta pasta na raiz: `index.html`, `obrigado/`, `assets/`, `img/`, `404.html`, `CNAME`.
2. GitHub > Settings > Pages > Source: **Deploy from a branch** > `main` / `/ (root)`.
3. Custom domain: `hid.scienceplay.com` (o arquivo CNAME já faz isso). Marque **Enforce HTTPS** quando liberar.

## DNS (no provedor do scienceplay.com)
| Tipo  | Nome | Valor                      |
|-------|------|----------------------------|
| CNAME | hid  | SEU-USUARIO.github.io      |

Se usar Cloudflare, deixe a nuvem **cinza** (DNS only) até o GitHub emitir o certificado.

## Rotas
| Página | Rota | Observação |
|---|---|---|
| Transmissão ao vivo (online) | `/` | Formulário RD embutido em `#inscricao`; venda da gravação (Hotmart) |
| Obrigado da transmissão | `/obrigado/` | `noindex`; dispara Lead (Meta); oferta da gravação |
| Encontro presencial | `/presencial/` | Lista presencial encerrada; leva para a transmissão |
| Checklist fundo preto | `/fundo-preto/` | Isca da palavra FUNDO |
| Imagens dos e-mails | `/img/emails/` | Usadas pelos e-mails da campanha; não apagar |
| Erro | `/404.html` | |

## Redirecionamento após envio (obrigatório)
No RD Station, edite o formulário `formulario-aplicacao-hid` > Configurações > Ação após conversão > **Redirecionar para URL**:
`https://hid.scienceplay.com/obrigado/`

## Formulário
Embed oficial do RD Station (`formulario-aplicacao-hid-9331237108acf9518650`). Campos, mensagem de sucesso e redirecionamento são editados no próprio RD; a página só aplica o visual.

## Pixel / GA (opcional)
Cole o snippet do Meta Pixel e/ou GA4 dentro do `<head>`.

## Compartilhamento social
- Preview de link (WhatsApp, LinkedIn, Facebook, iMessage): `img/og.jpg` (1200x630), já configurada nas meta tags.
- Se o WhatsApp mostrar a imagem antiga, cole o link no Facebook Sharing Debugger e clique em "Scrape again" para limpar o cache.
- Peças para feed (1080x1350) e story (1080x1920) estão na pasta `hid-social/`, fora do site.
