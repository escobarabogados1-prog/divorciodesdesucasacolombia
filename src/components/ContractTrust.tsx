import { FileSignature } from 'lucide-react'
import { CONTRACT } from '../content/home'

export default function ContractTrust() {
  return (
    <section id="contrato" aria-labelledby="contrato-title" className="bg-white py-20 sm:py-24">
      <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <p className="eyebrow">Confianza y transparencia</p>
          <h2 id="contrato-title" className="section-title">{CONTRACT.title}</h2>
          <p className="mt-4 text-lg text-slate-600">{CONTRACT.body}</p>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {CONTRACT.items.map((item) => (
            <li key={item.title} className="flex gap-4 rounded-2xl border border-slate-200 bg-canvas p-5">
              <span aria-hidden="true" className="grid size-10 shrink-0 place-items-center rounded-xl bg-emerald-50 text-brand-dark">
                <FileSignature className="size-5" />
              </span>
              <div>
                <h3 className="font-bold text-navy">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">{item.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
