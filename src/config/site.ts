/**
 * Datos institucionales y de contacto centralizados.
 * Cambia aquí cualquier dato de marca o contacto: el resto del sitio lo lee de este archivo.
 */

/** Marcador visible para datos que el responsable debe confirmar antes de publicar. */
export const PENDING = '[Pendiente de confirmar]'

export const SITE = {
  brand: 'ELITH LEX GROUP',
  product: 'Divorcios Express en Colombia',
  url: (import.meta.env.VITE_SITE_URL || 'https://divorciodesdesucasacolombia.pages.dev').replace(/\/$/, ''),
  experience: 'más de 15 años de experiencia',
  whatsapp: {
    number: '573167824217',
    display: '+57 316 782 4217',
    baseUrl: 'https://wa.me/573167824217',
  },
  email: 'elithlex@gmail.com',
  tagline: 'Firma de Abogados · B2B SaaS · Legal Tech',
  city: 'Bogotá, Colombia',
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

/**
 * Medios de pago suministrados por el responsable.
 * - Mercado Pago: enlace comercial público. Se abre tal cual, sin modificarlo ni agregar importes.
 * - Transferencias: solo instrucciones. No existe verificación automática: cada pago se confirma
 *   manualmente al revisar el ingreso en la cuenta.
 */
export const PAYMENTS = {
  mercadoPagoLink: 'https://link.mercadopago.com.co/elithlexiatech8',
  holder: 'Mauricio Escobar Pinzón / ELITH LEX GROUP',
  transfers: [
    { id: 'breb', label: 'Bre-B', kind: 'Llave Bre-B', value: '79396055' },
    { id: 'nequi', label: 'Nequi / Daviplata', kind: 'Número de celular', value: '3132922973' },
  ],
  /**
   * Cuota inicial para iniciar el servicio, en COP. Mantener en null hasta que el responsable
   * la defina y apruebe: mientras sea null, el sitio no muestra ninguna cifra.
   */
  initialFee: null as number | null,
} as const
