import { Check, Info } from 'lucide-react'
import { Link } from 'react-router-dom'
import { FEES_DISCLAIMER, SERVICES } from '../content/services'
import WhatsAppLink from './WhatsAppLink'
import WhatsAppIcon from './WhatsAppIcon'

export default function ServicesGrid() {
  return (
    <section id="servicios" aria-labelledby="servicios-title" className="py-20 sm:py-24">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="eyebrow">Tipos de divorcio y precios</p>
          <h2 id="servicios-title" className="section-title">Elige la situación que más se parece a la tuya</h2>
          <p className="mt-4 text-lg text-slate-600">
            Publicamos honorarios cuando el trámite lo permite. Si tu caso necesita análisis, te lo decimos con claridad y lo cotizamos de forma individual.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <li
              key={s.id}
              className={`relative flex flex-col rounded-2xl border bg-white p-6 sm:p-7 ${
                s.highlight ? 'border-brand shadow-[0_20px_50px_-24px_rgba(16,185,129,0.55)] ring-1 ring-brand' : 'border-slate-200'
              }`}
            >
              {s.highlight && (
                <span className="absolute -top-3 left-6 rounded-full bg-navy px-3 py-1 text-[11px] font-bold tracking-wider text-white uppercase">Más solicitado</span>
              )}
              <div className="flex items-start gap-3">
                <span aria-hidden="true" className="grid size-9 shrink-0 place-items-center rounded-lg bg-slate-100 text-sm font-extrabold text-navy">{s.code}</span>
                <h3 className="text-[17px] leading-snug font-bold text-navy">{s.title}</h3>
              </div>

              <div className="mt-5 rounded-xl bg-canvas p-4">
                <p className={`font-extrabold tracking-tight text-navy ${s.fee ? 'text-3xl' : 'text-xl'}`}>{s.priceLabel}</p>
                <p className="mt-1 text-[13px] leading-snug text-slate-600">{s.priceNote}</p>
              </div>

              <p className="mt-5 text-[15px] leading-relaxed text-slate-600">{s.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <Check className="mt-0.5 size-4 shrink-0 text-brand-dark" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6">
                <WhatsAppLink source={`servicio:${s.id}`} message={s.whatsappMessage} className={`${s.highlight ? 'btn-wa' : 'btn-outline'} w-full text-sm`}>
                  <WhatsAppIcon className="size-4" />
                  {s.ctaLabel}
                </WhatsAppLink>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex items-start gap-3 rounded-2xl border border-gold/30 bg-amber-50 p-5 text-sm leading-relaxed text-amber-950">
          <Info className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden="true" />
          <p>
            {FEES_DISCLAIMER}{' '}
            <Link to="/honorarios-y-gastos" className="font-bold underline underline-offset-2">Ver detalle de honorarios y gastos</Link>.
          </p>
        </div>
      </div>
    </section>
  )
}
