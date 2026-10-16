import { GENERAL_WHATSAPP_MESSAGE, SITE } from '../config/site'

/** Construye el enlace wa.me con un mensaje predefinido. Nunca envía nada automáticamente. */
export function whatsappUrl(message: string = GENERAL_WHATSAPP_MESSAGE) {
  return `${SITE.whatsapp.baseUrl}?text=${encodeURIComponent(message)}`
}

export const mailtoUrl = (subject = 'Consulta sobre trámite de divorcio') =>
  `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}`
