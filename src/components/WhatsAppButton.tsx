import WhatsAppLink from './WhatsAppLink'
import WhatsAppIcon from './WhatsAppIcon'

/** Botón flotante de WhatsApp, visible en móvil y escritorio. */
export default function WhatsAppButton() {
  return (
    <WhatsAppLink
      source="flotante"
      aria-label="Consultar por WhatsApp"
      className="fixed bottom-5 right-5 z-30 inline-flex items-center gap-2 rounded-full bg-brand p-4 font-bold text-navy shadow-[0_14px_40px_-10px_rgba(15,23,42,0.55)] ring-4 ring-white transition-transform hover:scale-105 sm:px-5 sm:py-3.5"
    >
      <WhatsAppIcon className="size-6" />
      <span className="hidden sm:inline">WhatsApp</span>
    </WhatsAppLink>
  )
}
