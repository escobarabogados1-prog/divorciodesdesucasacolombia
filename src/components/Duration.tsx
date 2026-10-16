import { CalendarClock, Scale, TriangleAlert } from 'lucide-react'
import { DURATION } from '../content/home'

export default function Duration() {
  return (
    <section id="duracion" aria-labelledby="duracion-title" className="py-20 sm:py-24">
      <div className="container-x">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10">
          <div className="max-w-2xl">
            <p className="eyebrow">Tiempos estimados</p>
            <h2 id="duracion-title" className="section-title">Duración del divorcio</h2>
            <p className="mt-4 text-lg text-slate-600">{DURATION.intro}</p>
          </div>

          <ul className="mt-10 grid gap-5 md:grid-cols-2">
            {DURATION.cases.map((c) => (
              <li key={c.title} className="rounded-2xl border border-slate-200 bg-canvas p-6">
                <div className="flex items-center gap-3">
                  <CalendarClock className="size-6 text-brand-dark" aria-hidden="true" />
                  <h3 className="font-bold text-navy">{c.title}</h3>
                </div>
                <p className="mt-4 text-3xl font-extrabold tracking-tight text-navy">{c.estimate}</p>
                <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{c.detail}</p>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex items-start gap-3 rounded-2xl bg-navy p-6 text-slate-200">
            <Scale className="mt-0.5 size-5 shrink-0 text-gold-light" aria-hidden="true" />
            <p className="text-[15px] leading-relaxed">{DURATION.defensor}</p>
          </div>

          <p className="mt-5 flex items-start gap-2 text-sm leading-relaxed text-slate-600">
            <TriangleAlert className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
            {DURATION.caveat}
          </p>
        </div>
      </div>
    </section>
  )
}
