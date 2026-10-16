import { useId, useState } from 'react'
import { AlertTriangle, Calculator, RotateCcw } from 'lucide-react'
import { CALCULATOR_OPTIONS, formatCOP, getService } from '../content/services'
import { track } from '../lib/analytics'
import WhatsAppLink from './WhatsAppLink'
import WhatsAppIcon from './WhatsAppIcon'

/**
 * Calculadora orientativa. Solo muestra honorarios publicados (categorías A y B).
 * No recopila datos personales: el resumen solo incluye el tipo de trámite elegido.
 */
export default function DivorceCalculator() {
  const [selected, setSelected] = useState<string | null>(null)
  const groupId = useId()
  const option = CALCULATOR_OPTIONS.find((o) => o.id === selected)
  const service = option ? getService(option.serviceId) : null

  const summary = option
    ? [
        'Hola, usé la calculadora orientativa de ELITH LEX GROUP.',
        `Tipo de trámite: ${option.label}.`,
        service?.fee
          ? `Honorarios publicados: ${formatCOP(service.fee)} más gastos notariales y otros aplicables.`
          : 'Entiendo que mi caso requiere valoración.',
        'Quisiera confirmar requisitos, honorarios y siguientes pasos.',
      ].join('\n')
    : ''

  return (
    <section id="calculadora" aria-labelledby="calc-title" className="bg-white py-20 sm:py-24">
      <div className="container-x grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="eyebrow">Calculadora orientativa</p>
          <h2 id="calc-title" className="section-title">¿Cuánto podría costar tu divorcio?</h2>
          <p className="mt-4 text-lg text-slate-600">
            Selecciona tu situación y te mostramos los honorarios publicados o si tu caso necesita valoración. No pedimos datos personales.
          </p>
          <p className="mt-6 flex items-start gap-2 text-sm text-slate-500">
            <AlertTriangle className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
            Resultado orientativo: no es una cotización vinculante, ni una asesoría definitiva, ni un cálculo oficial de gastos notariales.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-canvas p-5 sm:p-8">
          <fieldset>
            <legend className="flex items-center gap-2 text-sm font-bold text-navy">
              <Calculator className="size-4 text-brand-dark" aria-hidden="true" />
              ¿Cuál describe mejor tu caso?
            </legend>
            <div className="mt-4 grid gap-2.5">
              {CALCULATOR_OPTIONS.map((o) => {
                const checked = selected === o.id
                return (
                  <label
                    key={o.id}
                    className={`flex cursor-pointer items-start gap-3 rounded-xl border bg-white p-4 transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-gold ${
                      checked ? 'border-brand ring-1 ring-brand' : 'border-slate-200 hover:border-slate-400'
                    }`}
                  >
                    <input
                      type="radio"
                      name={groupId}
                      value={o.id}
                      checked={checked}
                      onChange={() => {
                        setSelected(o.id)
                        track('calculator_complete', { option: o.id })
                      }}
                      className="mt-1 size-4 accent-emerald-600"
                    />
                    <span>
                      <span className="block font-bold text-navy">{o.label}</span>
                      <span className="mt-0.5 block text-sm text-slate-600">{o.detail}</span>
                    </span>
                  </label>
                )
              })}
            </div>
          </fieldset>

          <div aria-live="polite" className="mt-6">
            {option && service && (
              <div className="rounded-2xl bg-navy p-6 text-white">
                <p className="text-xs font-bold tracking-[0.16em] text-slate-400 uppercase">Resultado orientativo</p>
                {service.fee ? (
                  <>
                    <p className="mt-2 text-3xl font-extrabold">{formatCOP(service.fee)}</p>
                    <p className="mt-1 text-sm text-slate-300">Honorarios jurídicos publicados + gastos notariales y otros gastos aplicables (no incluidos).</p>
                  </>
                ) : (
                  <>
                    <p className="mt-2 text-2xl font-extrabold">Requiere valoración</p>
                    <p className="mt-1 text-sm text-slate-300">
                      Este tipo de caso depende de sus circunstancias. Un abogado revisará la situación antes de indicar honorarios.
                    </p>
                  </>
                )}

                <div className="mt-5 rounded-xl bg-white/5 p-4 text-sm text-slate-300">
                  <p className="font-bold text-white">Resumen que enviarás por WhatsApp</p>
                  <p className="mt-2 whitespace-pre-line">{summary}</p>
                </div>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <WhatsAppLink source="calculadora" message={summary} className="btn-wa flex-1 text-sm">
                    <WhatsAppIcon className="size-4" />
                    Enviar resumen por WhatsApp
                  </WhatsAppLink>
                  <button type="button" onClick={() => setSelected(null)} className="btn-ghost-dark text-sm">
                    <RotateCcw className="size-4" aria-hidden="true" />
                    Reiniciar
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
