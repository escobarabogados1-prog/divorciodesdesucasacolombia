import { Cpu, HeartHandshake, Lock, Scale, Sparkles, UserRound } from 'lucide-react'
import { ABOUT, TEAM } from '../content/home'

const icons = [Scale, Sparkles, Lock, HeartHandshake, Cpu]

export default function AboutUs() {
  return (
    <section id="quienes-somos" aria-labelledby="about-title" className="bg-white py-20 sm:py-24">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="eyebrow">Quiénes somos</p>
            <h2 id="about-title" className="section-title">{ABOUT.title}</h2>
          </div>
          <p className="text-lg leading-relaxed text-slate-600">{ABOUT.body}</p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {ABOUT.values.map((v, i) => {
            const Icon = icons[i]
            return (
              <li key={v.title} className="rounded-2xl border border-slate-200 bg-canvas p-5">
                <Icon className="size-6 text-brand-dark" aria-hidden="true" />
                <h3 className="mt-4 font-bold text-navy">{v.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">{v.detail}</p>
              </li>
            )
          })}
        </ul>

        {/* Equipo: se llena desde TEAM en src/content/home.ts con información verificada. */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-navy">Nuestro equipo</h3>
          {TEAM.length > 0 ? (
            <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {TEAM.map((m) => (
                <li key={m.name} className="rounded-2xl border border-slate-200 p-5">
                  <p className="font-bold text-navy">{m.name}</p>
                  <p className="text-sm text-slate-600">{m.role}</p>
                  {m.credential && <p className="mt-2 text-xs text-slate-500">{m.credential}</p>}
                  {m.bio && <p className="mt-3 text-sm text-slate-600">{m.bio}</p>}
                </li>
              ))}
            </ul>
          ) : (
            <div className="mt-5 flex items-center gap-4 rounded-2xl border border-dashed border-slate-300 p-6 text-slate-600">
              <UserRound className="size-8 shrink-0 text-slate-400" aria-hidden="true" />
              <p className="text-sm">La información profesional del equipo de abogados se publicará próximamente. Puedes solicitarla directamente por nuestros canales de contacto.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
