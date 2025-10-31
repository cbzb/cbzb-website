// Animações reutilizáveis usando Framer Motion
// Use estas variantes em qualquer componente do site

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
}

export const slideUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 }
}

export const slideDown = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

export const slideLeft = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 }
}

export const slideRight = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 }
}

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 }
}

export const scaleUp = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 }
}

export const slideInFromRight = {
  initial: { opacity: 0, x: 100, scale: 0.95 },
  animate: { opacity: 1, x: 0, scale: 1 },
  exit: { opacity: 0, x: 100, scale: 0.95 }
}

// Transições comuns
export const springTransition = {
  type: "spring",
  stiffness: 300,
  damping: 30
}

export const smoothTransition = {
  duration: 0.3,
  ease: [0.4, 0, 0.2, 1]
}

export const bounceTransition = {
  type: "spring",
  stiffness: 400,
  damping: 17
}

// Transição rápida
export const quickTransition = {
  duration: 0.2,
  ease: "easeOut"
}

// Transição lenta
export const slowTransition = {
  duration: 0.6,
  ease: [0.4, 0, 0.2, 1]
}

