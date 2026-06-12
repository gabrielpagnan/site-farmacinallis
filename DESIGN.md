# Design

Sistema visual da FarmaCinallis. A paleta deriva diretamente do logotipo (verde-floresta + verde-folha); qualquer variação deve preservar essa identidade.

## Theme

Tema claro único. Estratégia de cor **committed**: o verde-floresta profundo carrega hero, painéis de destaque e rodapé; o verde-folha é o acento de conversão e dos detalhes; o restante da página respira em off-white com tint verde sutil.

## Colors

Definidas em HSL como CSS custom properties em `src/index.css` (compatível com shadcn).

- `--forest: 145 48% 16%` — verde-floresta do logo ("Farma"). Hero, painéis, footer, botões primários.
- `--forest-deep: 150 52% 10%` — extremo escuro de gradientes e rodapé.
- `--forest-soft: 145 32% 24%` — variação suave.
- `--leaf: 90 50% 47%` — verde-folha do logo ("Cinallis"). CTAs sobre fundo escuro, badges.
- `--leaf-bright: 88 55% 55%` — hover do leaf e texto-acento sobre forest (itálico do slogan).
- `--leaf-dark: 95 55% 28%` — acento legível sobre fundos claros (ícones, links).
- `--leaf-tint: 95 42% 93%` — superfície tingida para chips de ícone e painéis suaves.
- `--background: 110 25% 98%` / `--foreground: 150 42% 11%`.
- `--secondary: 120 24% 94%` — fundo alternado de seções (`bg-secondary/60`).
- `--muted-foreground: 150 14% 30%` — corpo secundário (contraste ≥ 4.5:1 garantido).
- Gradiente de marca: `--gradient-hero` (forest → forest-deep, 160°).
- Sombras tingidas com o verde da marca: `--shadow-soft/medium/strong`.

Regras: nunca usar esmeralda genérico; texto leaf sobre branco somente em `leaf-dark`; sobre forest, usar `leaf-bright` ou branco.

## Typography

- **Display**: Petrona (serifa robusta, ecoa o logotipo) — `font-display`. Títulos h1–h4, números de destaque, itálico do slogan.
- **Body**: Hanken Grotesk — `font-sans`. Corpo 17px / 1.65.
- Headings com `clamp()` fluido: h1 `clamp(2.4rem, 5.5vw, 4.25rem)`; h2 de seção `clamp(2rem, 4vw, 3rem)`; `text-wrap: balance`, letter-spacing −0.015em.
- Slogan "Cuidar é a nossa essência" sempre em Petrona itálico, cor leaf.
- Carregadas via Google Fonts no `index.html` (preconnect + display=swap).

## Components

- **Botões**: rounded-full. Primário em fundo claro = forest sólido; primário em fundo forest = leaf com texto forest-deep (`hover:bg-leaf-bright`); secundário = outline.
- **CTA de WhatsApp**: sempre com o glifo real (`WhatsAppIcon`), nunca MessageCircle; links via `waLink()` (`src/lib/whatsapp.ts`) com mensagem pré-preenchida contextual.
- **Tiles/cards**: `bg-card rounded-2xl border border-border/70`, hover com `shadow-medium` + borda `leaf/50`. Ícones em chip `bg-leaf-tint` com `text-leaf-dark`.
- **Painéis de destaque**: `rounded-3xl bg-gradient-hero text-white` com `LeafMotif` decorativo (folha do logo) em `text-leaf/10`.
- **Faixas de fatos**: listas com hairline (`border-t border-border`), ícone leaf-dark + título Petrona — sem grades de cards idênticos.
- **Imagens**: arco de botica no hero (`rounded-t-[14rem] rounded-b-3xl`), demais em `rounded-3xl`; plaquinhas flutuantes com dados reais ("25+", "Desde 2000").

## Layout

- Container 1280px, padding 1.25rem.
- Seções `py-20 md:py-28`, alternando `bg-background` e `bg-secondary/60`.
- Cabeçalhos de seção à esquerda (título + intro), não centralizados; sem eyebrows uppercase.
- `scroll-padding-top: 5.5rem` no html para âncoras sob o header sticky.
- Z-index semântico: `--z-sticky: 40` (header), `--z-float: 45` (WhatsApp), `--z-overlay: 50`.

## Motion

- Hero: coreografia de entrada em cascata (`.hero-enter`, keyframe `rise-in`, ease `cubic-bezier(0.22,1,0.36,1)`, delays 100–580ms).
- Scroll: componente `Reveal` (IntersectionObserver) — conteúdo visível por padrão, animação só ao entrar no viewport; stagger ≤ 2 passos em listas.
- Nav: sublinhado animado leaf (`.nav-link`).
- `prefers-reduced-motion: reduce` zera todas as animações e o smooth scroll.
