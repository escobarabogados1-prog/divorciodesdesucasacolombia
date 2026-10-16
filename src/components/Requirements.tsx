import { FileCheck2, Lock } from 'lucide-react'
import { REQUIREMENTS } from '../content/home'
import WhatsAppLink from './WhatsAppLink'

export default function Requirements() {
  return (
    <section id="requisitos" aria-labelledby="req-title" className="py-20 sm:py-24">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow">Requisitos y documentación</p>
          <h2 id="req-title" className="section-title">Documentos que suelen solicitarse</h2>
          <p className="mt-4 text-lg text-slate-600">{REQUIREMENTS.intro}</p>
          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-600">
            <Lock className="mt-0.5 size-5 shrink-0 text-brand-dark" aria-hidden="true" />
            <p>{REQUIREMENTS.documentsChannel}</p>
          </div>
          <WhatsAppLink
            source="requisitos"
            message="Hola, quisiera confirmar qué documentos necesito para mi trámite de divorcio y los siguientes pasos."
            className="btn-outline mt-6 text-sm"
          >
            Confirmar mis documentos por WhatsApp
          </WhatsAppLink>
        </div>

        <ol className="grid gap-3">
          {REQUIREMENTS.items.map((item, i) => (
            <li key={item.title} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5">
              <span aria-hidden="true" className="grid size-10 shrink-0 place-items-center rounded-xl bg-emerald-50 text-brand-dark">
                <FileCheck2 className="size-5" />
              </span>
              <div>
                <h3 className="font-bold text-navy">
                  <span className="sr-only">Documento {i + 1}: </span>
                  {item.title}
                </h3>
                <p className="mt-1 text-[15px] leading-relaxed text-slate-600">{item.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
