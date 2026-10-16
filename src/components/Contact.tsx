import { useRef, useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Send } from 'lucide-react'
import { SITE } from '../config/site'
import { SERVICES } from '../content/services'
import { mailtoUrl, whatsappUrl } from '../lib/whatsapp'
import { track } from '../lib/analytics'
import WhatsAppLink from './WhatsAppLink'
import WhatsAppIcon from './WhatsAppIcon'
import PaymentPanel from './PaymentPanel'

const CHANNELS = ['WhatsApp', 'Correo electrónico', 'Llamada telefónica'] as const

/**
 * Formulario corto: no guarda datos en este sitio. Al enviarlo, abre WhatsApp
 * (o el correo) con un mensaje que el usuario revisa y envía por sí mismo.
 */
function ShortForm() {
  const started = useRef(false)
  const [error, setError] = useState('')

  const onStart = () => {
    if (started.current) return
    started.current = true
    track('form_start', { form: 'contacto-corto' })
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('nombre') ?? '').trim()
    const channel = String(data.get('canal') ?? '')
    const serviceId = String(data.get('tramite') ?? '')
    if (!name || !channel || !serviceId || !data.get('autorizacion')) {
      setError('Completa los campos y acepta la política de datos para continuar.')
      return
    }
    setError('')
    const service = SERVICES.find((s) => s.id === serviceId)
    const message = `Hola, mi nombre es ${name}. Deseo información sobre: ${service?.shortTitle ?? 'un trámite de divorcio'}. Prefiero ser contactado por: ${channel}.`

    if (channel === 'Correo electrónico') {
      track('email_click', { source: 'formulario' })
      window.location.href = `${mailtoUrl('Consulta sobre trámite de divorcio')}&body=${encodeURIComponent(message)}`
    } else {
      track('whatsapp_click', { source: 'formulario' })
      window.open(whatsappUrl(message), '_blank', 'noopener,noreferrer')
    }
  }

  const field = 'mt-1.5 block w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-navy outline-none focus:border-brand focus:ring-2 focus:ring-brand/30'

  return (
    <form onSubmit={onSubmit} onFocus={onStart} noValidate className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
      <h3 className="text-lg font-bold text-navy">Déjanos tu consulta en 30 segundos</h3>
      <p className="mt-1 text-sm text-slate-600">Sin detalles personales del conflicto. Nada se guarda en este sitio: se abrirá tu WhatsApp o tu correo para que revises y envíes el mensaje.</p>

      <div className="mt-6 grid gap-4">
        <label className="block text-sm font-semibold text-navy">
          Nombre
          <input name="nombre" type="text" autoComplete="given-name" required maxLength={60} className={field} />
        </label>
        <label className="block text-sm font-semibold text-navy">
          Medio de contacto preferido
          <select name="canal" required defaultValue="" className={field}>
            <option value="" disabled>Selecciona una opción</option>
            {CHANNELS.map((c) => <option key={c}>{c}</option>)}
          </select>
        </label>
        <label className="block text-sm font-semibold text-navy">
          Tipo de trámite
          <select name="tramite" required defaultValue="" className={field}>
            <option value="" disabled>Selecciona una opción</option>
            {SERVICES.map((s) => <option key={s.id} value={s.id}>{s.shortTitle}</option>)}
          </select>
        </label>
        <label className="flex items-start gap-3 text-sm text-slate-600">
          <input name="autorizacion" type="checkbox" required className="mt-0.5 size-4 accent-emerald-600" />
          <span>
            Autorizo el tratamiento de mis datos para atender esta consulta, conforme a la{' '}
            <Link to="/politica-de-datos" className="font-semibold text-navy underline underline-offset-2">Política de tratamiento de datos</Link>.
          </span>
        </label>
      </div>

      {error && <p role="alert" className="mt-4 text-sm font-semibold text-red-700">{error}</p>}

      <button type="submit" className="btn-wa mt-6 w-full">
        <Send className="size-4" aria-hidden="true" />
        Continuar
      </button>
    </form>
  )
}

export default function Contact() {
  return (
    <section id="contacto" aria-labelledby="contacto-title" className="bg-white py-20 sm:py-24">
      <div className="container-x grid gap-10 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Contacto</p>
          <h2 id="contacto-title" className="section-title">Habla directamente con nuestro equipo</h2>
          <p className="mt-4 text-lg text-slate-600">Cuéntanos de forma general qué necesitas. Te respondemos con los requisitos, los honorarios aplicables y los siguientes pasos.</p>

          <div className="mt-8 grid gap-3">
            <WhatsAppLink source="contacto" className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-canvas p-5 transition-colors hover:border-brand">
              <span className="grid size-12 place-items-center rounded-xl bg-brand text-navy"><WhatsAppIcon className="size-6" /></span>
              <span>
                <span className="block text-sm text-slate-500">WhatsApp</span>
                <span className="block text-lg font-bold text-navy">{SITE.whatsapp.display}</span>
              </span>
            </WhatsAppLink>
            <a href={mailtoUrl()} onClick={() => track('email_click', { source: 'contacto' })} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-canvas p-5 transition-colors hover:border-navy">
              <span className="grid size-12 place-items-center rounded-xl bg-navy text-white"><Mail className="size-6" aria-hidden="true" /></span>
              <span>
                <span className="block text-sm text-slate-500">Correo electrónico</span>
                <span className="block text-lg font-bold break-all text-navy">{SITE.email}</span>
              </span>
            </a>
          </div>

          <div className="mt-6">
            <PaymentPanel />
          </div>
        </div>

        <ShortForm />
      </div>
    </section>
  )
}
