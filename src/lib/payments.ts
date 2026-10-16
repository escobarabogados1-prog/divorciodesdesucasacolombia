/**
 * Mercado Pago — INTEGRACIÓN PENDIENTE.
 *
 * Fase 1 (actual): solo se admite un enlace de pago real generado en el panel de Mercado Pago,
 * configurado en VITE_MERCADOPAGO_PAYMENT_LINK y activado explícitamente con VITE_PAYMENTS_ENABLED=true.
 * No se simulan pagos ni se exponen tokens privados.
 *
 * Fase 2 (futura): preferencias dinámicas y confirmación por webhook requieren una Netlify Function
 * con MERCADOPAGO_ACCESS_TOKEN (variable sin prefijo VITE_). Ver README.
 */

const ALLOWED_HOSTS = ['mpago.la', 'mpago.li', 'www.mercadopago.com.co', 'mercadopago.com.co', 'link.mercadopago.com.co']

function validLink(raw: string | undefined): string | null {
  if (!raw) return null
  try {
    const url = new URL(raw.trim())
    return url.protocol === 'https:' && ALLOWED_HOSTS.includes(url.hostname) ? url.toString() : null
  } catch {
    return null
  }
}

const link = validLink(import.meta.env.VITE_MERCADOPAGO_PAYMENT_LINK)
const enabled = import.meta.env.VITE_PAYMENTS_ENABLED === 'true'

export const PAYMENT = {
  /** true solo si hay un enlace válido Y el responsable activó los cobros. */
  active: Boolean(link && enabled),
  link: link && enabled ? link : null,
}
