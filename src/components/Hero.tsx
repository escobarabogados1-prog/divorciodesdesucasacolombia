import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Clock, Globe2, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { HERO } from '../content/home'
import { SITE } from '../config/site'
import { formatCOP, SERVICES } from '../content/services'
import WhatsAppLink from './WhatsAppLink'
import WhatsAppIcon from './WhatsAppIcon'

const minFee = Math.min(...SERVICES.flatMap((s) => (s.fee ? [s.fee] : [])))
const routeSteps = ['Consulta inicial', 'Revisión jurídica', 'Documentos y poderes', 'Notaría o autoridad competente']

export default function Hero() {
  const reduce = useReducedMotion()
  const fade = (delay = 0) =>
    reduce ? {} : { initial: { opacity: 0, y: 14 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay, ease: 'easeOut' as const } }

  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative overflow-hidden bg-navy text-white">
      <div aria-hidden="true" className="grid-bg absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_70%)]" />
      <div aria-hidden="true" className="absolute -right-32 -top-32 size-[480px] rounded-full bg-brand/15 blur-3xl" />

      <div className="container-x relative grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-28">
        <div>
          <motion.p {...fade()} className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1.5 text-xs font-bold tracking-[0.14em] text-gold-light uppercase">
            <span className="size-1.5 rounded-full bg-gold-light" aria-hidden="true" />
            {SITE.brand} · {SITE.experience}
          </motion.p>
          <motion.h1 {...fade(0.05)} id="hero-title" className="mt-6 text-[2.1rem] leading-[1.1] font-extrabold tracking-tight text-balance sm:text-5xl lg:text-[3.4rem]">
            {HERO.title} <span className="text-brand">{HERO.titleAccent}</span>
          </motion.h1>
          <motion.p {...fade(0.1)} className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
            {HERO.subtitle}
          </motion.p>

          <motion.div {...fade(0.15)} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <WhatsAppLink source="hero" className="btn-wa text-base">
              <WhatsAppIcon />
              {HERO.primaryCta}
            </WhatsAppLink>
            <Link to="/#servicios" className="btn-ghost-dark text-base">
              {HERO.secondaryCta}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </motion.div>

          <motion.p {...fade(0.2)} className="mt-6 flex max-w-xl items-start gap-2 text-sm text-slate-400">
            <Clock className="mt-0.5 size-4 shrink-0 text-gold-light" aria-hidden="true" />
            {HERO.timingNote}
          </motion.p>
        </div>

        <motion.aside {...fade(0.15)} aria-label="Resumen del acompañamiento" className="relative">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur sm:p-8">
            <p className="text-xs font-bold tracking-[0.16em] text-slate-400 uppercase">Tu ruta de divorcio</p>
            <ol className="mt-5 space-y-4">
              {routeSteps.map((step, i) => (
                <li key={step} className="flex items-center gap-4">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-brand/15 text-sm font-extrabold text-brand ring-1 ring-brand/30">{i + 1}</span>
                  <span className="font-semibold text-slate-100">{step}</span>
                </li>
              ))}
            </ol>
            <div className="mt-7 grid gap-3 border-t border-white/10 pt-6 text-sm text-slate-300">
              <p className="flex items-center gap-2.5"><CheckCircle2 className="size-4 text-brand" aria-hidden="true" />Honorarios publicados desde {formatCOP(minFee)}</p>
              <p className="flex items-center gap-2.5"><Globe2 className="size-4 text-brand" aria-hidden="true" />Consultas desde Colombia y el exterior</p>
              <p className="flex items-center gap-2.5"><ShieldCheck className="size-4 text-brand" aria-hidden="true" />Atención confidencial y directa</p>
            </div>
          </div>
          <p className="mt-3 text-center text-xs text-slate-500">Honorarios jurídicos. Gastos notariales y otros conceptos aparte.</p>
        </motion.aside>
      </div>
    </section>
  )
}
