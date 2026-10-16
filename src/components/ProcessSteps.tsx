import { MapPin } from 'lucide-react'
import { PROCESS } from '../content/home'

export default function ProcessSteps() {
  return (
    <section id="como-funciona" aria-labelledby="proceso-title" className="bg-navy py-20 text-white sm:py-24">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="eyebrow">Cómo funciona</p>
          <h2 id="proceso-title" className="mt-3 text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">Cuatro etapas, comunicación directa</h2>
        </div>

        <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {PROCESS.steps.map((step, i) => (
            <li key={step.title} className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <span className="text-5xl font-extrabold text-brand/80" aria-hidden="true">0{i + 1}</span>
              <h3 className="mt-4 text-lg font-bold">
                <span className="sr-only">Etapa {i + 1}: </span>
                {step.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-slate-300">{step.detail}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex flex-col gap-3 rounded-2xl border border-gold/30 bg-gold/10 p-6 sm:flex-row sm:items-start">
          <MapPin className="size-6 shrink-0 text-gold-light" aria-hidden="true" />
          <div>
            <p className="font-semibold text-white">{PROCESS.coverage}</p>
            <p className="mt-2 text-sm text-slate-300">{PROCESS.caveat}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
