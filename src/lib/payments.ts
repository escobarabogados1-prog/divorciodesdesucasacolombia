/**
 * Mercado Pago — enlace comercial público.
 *
 * El enlace del responsable está en PAYMENTS.mercadoPagoLink (src/config/site.ts). Puede reemplazarse con
 * VITE_MERCADOPAGO_PAYMENT_LINK y desactivarse con VITE_PAYMENTS_ENABLED=false. Solo se aceptan enlaces
 * https de dominios de Mercado Pago, y se abren sin modificarlos ni agregar importes.
 *
 * No hay cobros dinámicos, webhooks ni confirmación automática: un pago se considera recibido solo
 * cuando el equipo verifica el ingreso. Para cobros dinámicos se necesitaría una Netlify Function con
 * MERCADOPAGO_ACCESS_TOKEN (variable sin prefijo VITE_). Ver README.
 */
import { PAYMENTS } from '../config/site'

const ALLOWED_HOSTS = ['mpago.la', 'mpago.li', 'www.mercadopago.com.co', 'mercadopago.com.co', 'link.mercadopago.com.co']

function validLink(raw: string | undefined): string | null {
  if (!raw) return null
  try {
    const url = new URL(raw.trim())
    return url.protocol === 'https:' && ALLOWED_HOSTS.includes(url.hostname) ? raw.trim() : null
  } catch {
    return null
  }
}

const link = validLink(import.meta.env.VITE_MERCADOPAGO_PAYMENT_LINK) ?? validLink(PAYMENTS.mercadoPagoLink)
const enabled = import.meta.env.VITE_PAYMENTS_ENABLED !== 'false'

export const PAYMENT = {
  /** true si hay un enlace válido y los cobros no se desactivaron explícitamente. */
  active: Boolean(link && enabled),
  link: link && enabled ? link : null,
}
