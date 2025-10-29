## CBZBLAW — Guia de Estilo (Design Tokens)

Este documento consolida o padrão visual do site conforme a referência enviada.

### Paleta de Cores
- **primary-dark**: `#0A192F` — Fundo principal escuro (hero, header background)
- **primary-light**: `#F5F0E6` — Fundo claro (menu mobile, destaques)
- **text-dark**: `#0A192F` — Texto sobre fundos claros
- **text-light**: `#F5F0E6` — Texto sobre fundos escuros
- **divider**: `#BAB09A` — Linhas de divisão (borders, separadores)

Obs.: As cores estão disponíveis como classes do Tailwind v4 via tema:
- `bg-primary-dark`, `bg-primary-light`
- `text-text-dark`, `text-text-light`
- `border-divider`

### Tipografia
- **Títulos (serif)**: Playfair Display — variável CSS: `--font-playfair`
- **Texto/Interface (sans)**: Montserrat — variável CSS: `--font-montserrat`

Aplicação sugerida:
- Títulos de seções e headlines: `font-serif` com pesos fortes
- Navegação, parágrafos e UI: `font-sans` com `uppercase` onde apropriado

### Espaçamentos e Grids
- Página inicial (desktop): `grid` 2 colunas no hero (`md:grid md:grid-cols-2`)
- Container: largura máxima `max-w-7xl` com `px-4` a `px-16` conforme breakpoint
- Respiro vertical padrão de seções: `py-16` (mobile) a `py-24` (desktop)

### Componentes
- **Header**: navegação centralizada em desktop; hamburger no mobile; logotipo à esquerda e monograma à direita
- **MobileMenu**: overlay integral `fixed inset-0` com fundo `bg-primary-light` e texto `text-text-dark`; itens com separação `border-b border-divider`
- **Hero**: lado esquerdo com `bg-primary-dark` e copy; lado direito com imagem `public/hero.jpeg`; CTA botão "ghost"
- **Button (ghost)**: `border border-text-light text-text-light uppercase px-6 py-3 hover:bg-text-light hover:text-text-dark`

### Diretrizes Mobile (refinamentos)
- **Hero (mobile)**
  - Fundo: `bg-primary-dark` com watermark grande "ZBC" em `opacity-10` (preferir `absolute` + `font-serif`)
  - Hierarquia tipográfica: título `text-4xl`/`leading-tight`; subtítulo `text-base` com `text-text-light/85`
  - CTA: botão ghost com `px-6 py-3`, espaçamento superior `mt-8`
  - Social: links no rodapé do hero, `text-sm text-text-light/80`, espaçamento entre itens `gap-10`
- **Header (mobile)**
  - Ícone hamburger: 3 linhas com altura `0.5` e largura `w-7`, cor `text-text-light`
  - Monograma ZBC à esquerda, `font-serif` e cor `text-text-light`
- **Menu Mobile (overlay)**
  - Container: `fixed inset-0 z-50 bg-primary-light text-text-dark`
  - Header do menu: ZBC à esquerda; ícone "X" à direita
  - Lista de navegação: `flex flex-col text-3xl font-sans uppercase tracking-wide`
  - Separadores: `border-b border-divider` (usa `#BAB09A`)
  - Footer: bloco com endereço; linha final `border-t border-divider` e copyright

### Imagens
- Hero: `public/hero.jpeg` (imagem fornecida)
- Cobertura: `object-cover` para preencher a coluna à direita no desktop

### Acessibilidade
- Contraste alto entre `text-light` e `primary-dark`
- Tamanho de fonte mínimo recomendado para UI: `text-sm`/`text-base`

### Exemplos de Uso
```html
<!-- Linha divisória -->
<hr class="border-divider" />

<!-- Borda de cartão com a cor das linhas -->
<div class="border border-divider p-6">...</div>
```


