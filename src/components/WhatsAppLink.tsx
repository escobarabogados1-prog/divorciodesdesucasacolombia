import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { whatsappUrl } from '../lib/whatsapp'
import { track } from '../lib/analytics'

interface Props extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  message?: string
  /** Identifica el origen del clic para la medición (p. ej. "hero", "servicio:con-bienes"). */
  source: string
  children: ReactNode
}

/** Enlace a WhatsApp con mensaje predefinido. Solo abre WhatsApp tras el clic del usuario. */
export default function WhatsAppLink({ message, source, children, onClick, ...rest }: Props) {
  return (
    <a
      {...rest}
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        track('whatsapp_click', { source })
        onClick?.(e)
      }}
    >
      {children}
    </a>
  )
}
