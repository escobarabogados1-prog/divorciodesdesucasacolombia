/**
 * Datos institucionales y de contacto centralizados.
 * Cambia aquí cualquier dato de marca o contacto: el resto del sitio lo lee de este archivo.
 */

/** Marcador visible para datos que el responsable debe confirmar antes de publicar. */
export const PENDING = '[Pendiente de confirmar]'

export const SITE = {
  brand: 'ELITH LEX GROUP',
  product: 'Divorcios Express en Colombia',
  url: (import.meta.env.VITE_SITE_URL || 'https://divorce-services-colombia.netlify.app').replace(/\/$/, ''),
  experience: 'más de 15 años de experiencia',
  whatsapp: {
    number: '573167824217',
    display: '+57 316 782 4217',
    baseUrl: 'https://wa.me/573167824217',
  },
  email: 'elithlex@gmail.com',
  coverage: 'Trámites gestionados ante notarías de Bogotá, con atención a consultas desde otras ciudades de Colombia y desde el exterior.',
} as const

/**
 * Identificación del prestador. Los campos con PENDING deben completarse con
 * información verificada antes de lanzar campañas. No inventar estos datos.
 */
export const PROVIDER = {
  tradeName: 'ELITH LEX GROUP',
  legalName: PENDING,
  taxId: PENDING, // NIT o documento del titular
  legalRepresentative: PENDING,
  address: PENDING, // Domicilio para notificaciones
  city: 'Bogotá D.C., Colombia',
  dataProtectionEmail: 'elithlex@gmail.com',
  policyEffectiveDate: PENDING,
} as const

export const NAV = [
  { label: 'Inicio', href: '/#inicio' },
  { label: 'Tipos de divorcio', href: '/#servicios' },
  { label: 'Requisitos', href: '/#requisitos' },
  { label: 'Cómo funciona', href: '/#como-funciona' },
  { label: 'Quiénes somos', href: '/#quienes-somos' },
  { label: 'Preguntas frecuentes', href: '/#preguntas' },
] as const

export const LEGAL_LINKS = [
  { label: 'Política de tratamiento de datos', to: '/politica-de-datos' },
  { label: 'Aviso de privacidad', to: '/aviso-de-privacidad' },
  { label: 'Términos y condiciones', to: '/terminos-y-condiciones' },
  { label: 'Honorarios y gastos', to: '/honorarios-y-gastos' },
  { label: 'Identificación del prestador', to: '/prestador-del-servicio' },
] as const

export const GENERAL_WHATSAPP_MESSAGE =
  'Hola, deseo información sobre un trámite de divorcio. Quisiera conocer los requisitos y los siguientes pasos.'
