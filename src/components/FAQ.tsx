import { useId, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { FAQS } from '../content/home'

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)
  const baseId = useId()

  return (
    <section id="preguntas" aria-labelledby="faq-title" className="py-20 sm:py-24">
      <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="eyebrow">Preguntas frecuentes</p>
          <h2 id="faq-title" className="section-title">Respuestas claras antes de empezar</h2>
          <p className="mt-4 text-slate-600">Información general. Cada caso se confirma con la revisión jurídica correspondiente.</p>
        </div>

        <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
          {FAQS.map((item, i) => {
            const isOpen = open === i
            const btnId = `${baseId}-b${i}`
            const panelId = `${baseId}-p${i}`
            return (
              <div key={item.q}>
                <h3>
                  <button
                    id={btnId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-bold text-navy sm:px-6"
                  >
                    {item.q}
                    <ChevronDown className={`size-5 shrink-0 text-slate-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                  </button>
                </h3>
                <div id={panelId} role="region" aria-labelledby={btnId} hidden={!isOpen} className="px-5 pb-6 text-[15px] leading-relaxed text-slate-600 sm:px-6">
                  {item.a}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
