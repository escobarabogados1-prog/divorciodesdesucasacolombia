/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_URL?: string
  readonly VITE_GA4_ID?: string
  readonly VITE_GOOGLE_ADS_ID?: string
  readonly VITE_GOOGLE_ADS_WHATSAPP_LABEL?: string
  readonly VITE_META_PIXEL_ID?: string
  readonly VITE_MERCADOPAGO_PAYMENT_LINK?: string
  readonly VITE_PAYMENTS_ENABLED?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
