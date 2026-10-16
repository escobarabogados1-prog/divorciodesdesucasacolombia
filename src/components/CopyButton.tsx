import { useState } from 'react'
import { Check, Copy } from 'lucide-react'

/** Copia un valor al portapapeles y confirma visualmente. No envía nada a ningún servidor. */
export default function CopyButton({ value, label, onCopy }: { value: string; label: string; onCopy?: () => void }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value)
    } catch {
      // Respaldo para navegadores sin API de portapapeles (o sin contexto seguro).
      const area = document.createElement('textarea')
      area.value = value
      area.setAttribute('readonly', '')
      area.style.position = 'fixed'
      area.style.opacity = '0'
      document.body.appendChild(area)
      area.select()
      document.execCommand('copy')
      area.remove()
    }
    setCopied(true)
    onCopy?.()
    window.setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Copiar ${label}`}
      className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full border border-slate-300 bg-white px-4 text-sm font-bold text-navy transition-colors hover:border-navy"
    >
      {copied ? <Check className="size-4 text-brand-dark" aria-hidden="true" /> : <Copy className="size-4" aria-hidden="true" />}
      <span aria-live="polite">{copied ? 'Copiado' : 'Copiar'}</span>
    </button>
  )
}
