# CBZBLAW - Website Institucional

Website institucional do escritório CBZBLAW desenvolvido com Next.js, React e Tailwind CSS.

## 🚀 Tecnologias

- **Next.js 14** - Framework React
- **React 18** - Biblioteca UI
- **Tailwind CSS 4** - Framework CSS
- **Framer Motion** - Biblioteca de animações
- **Nodemailer** - Envio de emails

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar produção
npm start
```

## ⚙️ Configuração de Email

O formulário de contato requer configuração SMTP. Crie um arquivo `.env` na raiz do projeto:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=seu-email@gmail.com
SMTP_PASS=sua-senha-de-app
SMTP_TO=cbzb.tech@gmail.com
```

### Configuração Gmail

Para usar Gmail, você precisará:
1. Ativar autenticação de 2 fatores na sua conta Google
2. Gerar uma senha de app em [Conta Google > Segurança > Senhas de app](https://myaccount.google.com/apppasswords)
3. Usar essa senha no campo `SMTP_PASS`

**⚠️ Importante:** Nunca faça commit do arquivo `.env` no repositório!

## 📁 Estrutura do Projeto

```
cbzb/
├── components/          # Componentes React
├── src/app/            # Páginas e rotas
│   ├── api/           # API routes
│   ├── sobre/         # Página sobre
│   ├── advogados/     # Página advogados
│   ├── servicos/      # Página serviços
│   └── contato/       # Página contato
├── public/            # Arquivos estáticos
└── copy.md           # Conteúdo do site
```

## 🎨 Design

Design moderno com tema escuro (primary-dark: #0a192f) e tipografia elegante (Playfair Display + Montserrat).

### Responsividade

- Mobile: `px-10`
- Desktop: `pl-28 pr-[80px]`

## 📧 Formulário de Contato

O formulário de contato permite seleção de área de interesse e envia email via SMTP configurado.

## 🗺️ Mapa

Integração com Google Maps para localização do escritório.

## ✨ Animações

O projeto usa **Framer Motion** para animações suaves e profissionais. 

Animações reutilizáveis estão disponíveis em `components/animations.js`:

- `fadeIn` - Fade in/out simples
- `slideUp`, `slideDown`, `slideLeft`, `slideRight` - Slides em diferentes direções
- `scaleIn`, `scaleUp` - Animações de escala
- `slideInFromRight` - Slide animado da direita (usado em notificações)

Transições pré-configuradas:
- `springTransition` - Transição com spring (suave e natural)
- `smoothTransition` - Transição suave
- `bounceTransition` - Transição com bounce
- `quickTransition` - Transição rápida
- `slowTransition` - Transição lenta

### Exemplo de uso:

```jsx
import { motion } from "framer-motion"
import { fadeIn, smoothTransition } from "../components/animations"

<motion.div
  initial={fadeIn.initial}
  animate={fadeIn.animate}
  exit={fadeIn.exit}
  transition={smoothTransition}
>
  Conteúdo animado
</motion.div>
```

## 👥 Time

Desenvolvido com ❤️ por [Coruss](http://coruss.com.br)
