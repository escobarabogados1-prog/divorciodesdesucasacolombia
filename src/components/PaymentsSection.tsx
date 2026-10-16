import { useEffect, useId, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Banknote, CreditCard, ExternalLink, Info, ShieldAlert } from 'lucide-react'
import { PAYMENTS, SITE } from '../config/site'
import { PAYMENTS_COPY as COPY } from '../content/payments'
import { formatCOP, SERVICES, type ServiceId } from '../content/services'
import { PAYMENT } from '../lib/payments'
import { track } from '../lib/analytics'
import CopyButton from './CopyButton'
import WhatsAppLink from './WhatsAppLink'
import WhatsAppIcon from './WhatsAppIcon'

type ConceptId = (typeof COPY.concepts)[number]['id']

const isService = (id: string | null): id is ServiceId => SERVICES.some((s) => s.id === id)

/**
 * Pagos: resumen previo (servicio, concepto, importe) + enlace público de Mercado Pago,
 * y datos de transferencia con botón para copiar. No procesa ni confirma pagos.
 */
export default function PaymentsSection() {
  const [params] = useSearchParams()
  const requested = params.get('servicio')
  const [serviceId, setServiceId] = useState<ServiceId>(isService(requested) ? requested : SERVICES[0].id)
  const [concept, setConcept] = useState<ConceptId>('honorarios')
  const [confirmed, setConfirmed] = useState(false)
  const id = useId()

  useEffect(() => {
    if (isService(requested)) setServiceId(requested)
  }, [requested])

  const service = SERVICES.find((s) => s.id === serviceId)!
  const conceptLabel = COPY.concepts.find((c) => c.id === concept)!.label
  const amount =
    concept === 'cuota-inicial'
      ? PAYMENTS.initialFee
        ? formatCOP(PAYMENTS.initialFee)
        : COPY.amountInitialPending
      : service.fee
        ? formatCOP(service.fee)
        : COPY.amountByQuote
  const hasFigure = /\$/.test(amount)

  const receiptMessage = `Hola, envío el comprobante de pago. Servicio: ${service.shortTitle}. Concepto: ${conceptLabel}. Valor: ${amount}. Nombre del titular del pago: `

  const field = 'mt-1.5 block w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-navy outline-none focus:border-brand focus:ring-2 focus:ring-brand/30'

  return (
    <section id="pagos" aria-labelledby="pagos-title" className="border-t border-slate-200 py-20 sm:py-24">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="eyebrow">Pagos</p>
          <h2 id="pagos-title" className="section-title">{COPY.title}</h2>
          <p className="mt-4 text-lg text-slate-600">{COPY.intro}</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Mercado Pago */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-xl bg-navy text-white"><CreditCard className="size-5" aria-hidden="true" /></span>
              <h3 className="text-lg font-bold text-navy">Mercado Pago</h3>
            </div>

            <div className="mt-6 grid gap-4">
              <label className="block text-sm font-semibold text-navy">
                Servicio
                <select value={serviceId} onChange={(e) => setServiceId(e.target.value as ServiceId)} className={field}>
                  {SERVICES.map((s) => <option key={s.id} value={s.id}>{s.shortTitle}</option>)}
                </select>
              </label>
              <fieldset>
                <legend className="text-sm font-semibold text-navy">Concepto de cobro</legend>
                <div className="mt-1.5 grid gap-2 sm:grid-cols-2">
                  {COPY.concepts.map((c) => (
                    <label key={c.id} className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-sm font-semibold ${concept === c.id ? 'border-brand bg-emerald-50 text-navy' : 'border-slate-300 text-slate-700'}`}>
                      <input type="radio" name={`${id}-concepto`} value={c.id} checked={concept === c.id} onChange={() => setConcept(c.id)} className="size-4 accent-emerald-600" />
                      {c.label}
                    </label>
                  ))}
                </div>
              </fieldset>
            </div>

            <dl aria-live="polite" className="mt-6 divide-y divide-slate-200 rounded-2xl bg-canvas px-5 text-sm">
              <div className="flex flex-col gap-1 py-3 sm:flex-row sm:justify-between sm:gap-4">
                <dt className="text-slate-500">Servicio</dt>
                <dd className="font-semibold text-navy sm:text-right">{service.title}</dd>
              </div>
              <div className="flex flex-col gap-1 py-3 sm:flex-row sm:justify-between sm:gap-4">
                <dt className="text-slate-500">Concepto</dt>
                <dd className="font-semibold text-navy sm:text-right">{conceptLabel}</dd>
              </div>
              <div className="flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <dt className="text-slate-500">Importe</dt>
                <dd className={`text-navy sm:text-right ${hasFigure ? 'text-2xl font-extrabold' : 'font-semibold'}`}>{amount}</dd>
              </div>
            </dl>
            {concept === 'honorarios' && service.fee && <p className="mt-2 text-xs text-slate-500">{COPY.feesNote}</p>}

            {PAYMENT.active && PAYMENT.link ? (
              <>
                <label className="mt-6 flex items-start gap-3 text-sm text-slate-700">
                  <input type="checkbox" checked={confirmed} onChange={(e) => setConfirmed(e.target.checked)} className="mt-0.5 size-4 accent-emerald-600" />
                  {COPY.confirmLabel}
                </label>
                <a
                  href={confirmed ? PAYMENT.link : undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-disabled={!confirmed}
                  onClick={(e) => {
                    if (!confirmed) {
                      e.preventDefault()
                      return
                    }
                    track('payment_checkout_open', { service: service.id, concept })
                  }}
                  className={`btn-wa mt-4 w-full ${confirmed ? '' : 'pointer-events-none cursor-not-allowed opacity-50 shadow-none'}`}
                >
                  Pagar en línea con Mercado Pago
                  <ExternalLink className="size-4" aria-hidden="true" />
                </a>
                <p className="mt-3 text-xs leading-relaxed text-slate-500">{COPY.checkoutNote}</p>
              </>
            ) : (
              <p className="mt-6 rounded-xl border border-slate-200 p-4 text-sm text-slate-600">{COPY.inactive}</p>
            )}

            <p className="mt-5 flex items-start gap-2 text-sm leading-relaxed text-slate-600">
              <Info className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
              {COPY.methodsNote}
            </p>
          </div>

          {/* Transferencias */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-xl bg-brand text-navy"><Banknote className="size-5" aria-hidden="true" /></span>
              <h3 className="text-lg font-bold text-navy">{COPY.transfersTitle}</h3>
            </div>
            <p className="mt-4 text-sm text-slate-600">
              {COPY.transfersIntro} <strong className="text-navy">{PAYMENTS.holder}</strong>.
            </p>

            <ul className="mt-5 grid gap-3">
              {PAYMENTS.transfers.map((t) => (
                <li key={t.id} className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-canvas p-4">
                  <div>
                    <p className="text-sm font-bold text-navy">{t.label}</p>
                    <p className="text-xs text-slate-500">{t.kind}</p>
                    <p className="mt-1 font-mono text-xl font-bold tracking-wider text-navy">{t.value}</p>
                  </div>
                  <CopyButton value={t.value} label={`${t.label} ${t.value}`} onCopy={() => track('payment_detail_copy', { method: t.id })} />
                </li>
              ))}
            </ul>

            <ol className="mt-6 space-y-2 text-sm text-slate-700">
              {COPY.transferSteps.map((step, i) => (
                <li key={step} className="flex gap-3">
                  <span aria-hidden="true" className="grid size-6 shrink-0 place-items-center rounded-full bg-navy text-xs font-bold text-white">{i + 1}</span>
                  {step}
                </li>
              ))}
            </ol>

            <WhatsAppLink source="pagos:comprobante" message={receiptMessage} className="btn-outline mt-6 w-full text-sm">
              <WhatsAppIcon className="size-4" />
              Enviar comprobante al {SITE.whatsapp.display}
            </WhatsAppLink>

            <p className="mt-5 text-sm leading-relaxed text-slate-600">{COPY.verificationNote}</p>
            <p className="mt-4 flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-900">
              <ShieldAlert className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              {COPY.securityNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
