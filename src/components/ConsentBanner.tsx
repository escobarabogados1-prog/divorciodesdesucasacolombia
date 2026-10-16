import { useState } from 'react'
import { Link } from 'react-router-dom'
import { analyticsConfigured, getConsent, setConsent } from '../lib/analytics'

/** Aviso de cookies no invasivo. Solo aparece si hay herramientas de medición configuradas. */
export default function ConsentBanner() {
  const [visible, setVisible] = useState(() => analyticsConfigured && getConsent() === null)
  if (!visible) return null

  const choose = (v: 'granted' | 'denied') => {
    setConsent(v)
    setVisible(false)
  }

  return (
    <div role="region" aria-label="Preferencias de cookies" className="fixed inset-x-3 bottom-24 z-40 mx-auto max-w-xl rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl sm:bottom-6 sm:left-6 sm:right-auto">
      <p className="text-sm text-slate-700">
        Usamos cookies de medición para saber qué secciones resultan útiles y mejorar nuestras campañas. Solo se activan si las aceptas.{' '}
        <Link to="/aviso-de-privacidad" className="font-semibold underline underline-offset-2">Más información</Link>.
      </p>
      <div className="mt-4 flex gap-2">
        <button type="button" onClick={() => choose('granted')} className="btn-wa !min-h-10 !px-5 !py-2 text-sm">Aceptar</button>
        <button type="button" onClick={() => choose('denied')} className="btn-outline !min-h-10 !px-5 !py-2 text-sm">Rechazar</button>
      </div>
    </div>
  )
}
