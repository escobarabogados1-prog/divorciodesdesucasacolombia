/**
 * Medición con consentimiento.
 * - No se carga ningún script de terceros si no hay identificadores válidos en variables de entorno
 *   Y el usuario no ha aceptado las cookies de medición.
 * - Eventos diferenciados: un clic en WhatsApp NO es un contacto real ni una venta.
 */

type Consent = 'granted' | 'denied'
const CONSENT_KEY = 'elg-consent-v1'

const env = import.meta.env
const GA4_ID = /^G-[A-Z0-9]{4,}$/.test(env.VITE_GA4_ID ?? '') ? env.VITE_GA4_ID! : ''
const ADS_ID = /^AW-\d{6,}$/.test(env.VITE_GOOGLE_ADS_ID ?? '') ? env.VITE_GOOGLE_ADS_ID! : ''
const ADS_WA_LABEL = env.VITE_GOOGLE_ADS_WHATSAPP_LABEL?.trim() ?? ''
const META_ID = /^\d{10,20}$/.test(env.VITE_META_PIXEL_ID ?? '') ? env.VITE_META_PIXEL_ID! : ''

export const analyticsConfigured = Boolean(GA4_ID || ADS_ID || META_ID)

export type TrackEvent =
  | 'whatsapp_click' // clic en un botón de WhatsApp (intención, no contacto)
  | 'email_click' // clic en el correo
  | 'form_start' // el usuario empezó a llenar el formulario corto
  | 'calculator_complete' // obtuvo un resultado orientativo
  | 'payment_confirmed' // SOLO tras confirmación verificada del servidor (pendiente)

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
    fbq?: ((...args: unknown[]) => void) & { queue?: unknown[]; callMethod?: unknown; loaded?: boolean; version?: string; push?: unknown }
    _fbq?: unknown
  }
}

let loaded = false

export function getConsent(): Consent | null {
  try {
    const v = localStorage.getItem(CONSENT_KEY)
    return v === 'granted' || v === 'denied' ? v : null
  } catch {
    return null
  }
}

export function setConsent(value: Consent) {
  try {
    localStorage.setItem(CONSENT_KEY, value)
  } catch {
    /* almacenamiento no disponible */
  }
  if (value === 'granted') initAnalytics()
  else if (loaded) window.location.reload() // descarga los scripts ya cargados
}

export function resetConsent() {
  try {
    localStorage.removeItem(CONSENT_KEY)
  } catch {
    /* noop */
  }
  window.location.reload()
}

function loadScript(src: string) {
  const s = document.createElement('script')
  s.async = true
  s.src = src
  document.head.appendChild(s)
}

export function initAnalytics() {
  if (loaded || !analyticsConfigured || getConsent() !== 'granted') return
  loaded = true

  if (GA4_ID || ADS_ID) {
    window.dataLayer = window.dataLayer || []
    window.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer!.push(arguments)
    }
    window.gtag('js', new Date())
    window.gtag('consent', 'default', { ad_storage: 'granted', analytics_storage: 'granted', ad_user_data: 'granted', ad_personalization: 'denied' })
    if (GA4_ID) window.gtag('config', GA4_ID, { anonymize_ip: true })
    if (ADS_ID) window.gtag('config', ADS_ID)
    loadScript(`https://www.googletagmanager.com/gtag/js?id=${GA4_ID || ADS_ID}`)
  }

  if (META_ID) {
    const fbq: NonNullable<Window['fbq']> = function (...args: unknown[]) {
      const f = fbq as unknown as { callMethod?: (...a: unknown[]) => void; queue: unknown[] }
      if (f.callMethod) f.callMethod(...args)
      else f.queue.push(args)
    } as unknown as NonNullable<Window['fbq']>
    fbq.queue = []
    fbq.loaded = true
    fbq.version = '2.0'
    fbq.push = fbq
    window.fbq = fbq
    window._fbq = fbq
    loadScript('https://connect.facebook.net/en_US/fbevents.js')
    fbq('init', META_ID)
    fbq('track', 'PageView')
  }
}

/** Registra un evento. Sin consentimiento o sin IDs, no envía nada a terceros. */
export function track(event: TrackEvent, params: Record<string, string | number> = {}) {
  if (import.meta.env.DEV) console.debug('[analytics]', event, params)
  if (!loaded) return

  window.gtag?.('event', event, params)
  if (event === 'whatsapp_click' && ADS_ID && ADS_WA_LABEL) {
    window.gtag?.('event', 'conversion', { send_to: `${ADS_ID}/${ADS_WA_LABEL}` })
  }

  if (window.fbq) {
    // Solo un pago confirmado se reporta como evento estándar de compra.
    if (event === 'payment_confirmed') window.fbq('track', 'Purchase', params)
    else window.fbq('trackCustom', event, params)
  }
}
