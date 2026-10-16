import { Link } from 'react-router-dom'
import { ArrowLeft, FileWarning } from 'lucide-react'
import { LEGAL_PAGES } from '../content/legal'
import { LEGAL_LINKS, PENDING } from '../config/site'
import { usePageMeta } from '../hooks/usePageMeta'

/** Resalta los marcadores de datos pendientes para que el responsable los identifique. */
function WithPending({ text }: { text: string }) {
  const parts = text.split(PENDING)
  return (
    <>
      {parts.map((p, i) => (
        <span key={i}>
          {p}
          {i < parts.length - 1 && <mark className="rounded bg-amber-100 px-1 font-semibold text-amber-900">{PENDING}</mark>}
        </span>
      ))}
    </>
  )
}

export default function LegalPage({ slug }: { slug: string }) {
  const page = LEGAL_PAGES[slug]
  usePageMeta({ title: page.metaTitle, description: page.metaDescription, path: `/${slug}` })

  return (
    <div className="py-14 sm:py-20">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_260px]">
        <article className="max-w-3xl">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-navy">
            <ArrowLeft className="size-4" aria-hidden="true" /> Volver al inicio
          </Link>
          <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-balance text-navy sm:text-4xl">{page.title}</h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">{page.intro}</p>

          <p className="mt-6 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
            <FileWarning className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
            Documento en versión preliminar, sujeto a revisión jurídica. Los campos resaltados están pendientes de confirmación institucional.
          </p>

          <div className="mt-10 space-y-9">
            {page.sections.map((s) => (
              <section key={s.heading}>
                <h2 className="text-xl font-bold text-navy">{s.heading}</h2>
                {s.paragraphs?.map((p) => <p key={p} className="mt-3 leading-relaxed text-slate-700"><WithPending text={p} /></p>)}
                {s.list && (
                  <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-slate-700 marker:text-brand-dark">
                    {s.list.map((li) => <li key={li}><WithPending text={li} /></li>)}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </article>

        <aside aria-label="Otras páginas legales" className="lg:pt-16">
          <p className="text-xs font-bold tracking-[0.16em] text-slate-500 uppercase">Información legal</p>
          <ul className="mt-4 space-y-1">
            {LEGAL_LINKS.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  aria-current={l.to === `/${slug}` ? 'page' : undefined}
                  className="block rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-white aria-[current=page]:bg-white aria-[current=page]:text-navy aria-[current=page]:shadow-sm"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  )
}
