import { Link } from 'react-router-dom'
import { LEGAL_LINKS, NAV, SITE } from '../config/site'
import { analyticsConfigured, resetConsent, track } from '../lib/analytics'
import { mailtoUrl } from '../lib/whatsapp'
import Logo from './Logo'
import WhatsAppLink from './WhatsAppLink'

export default function Footer() {
  return (
    <footer className="bg-navy pb-28 text-slate-300 sm:pb-12">
      <div className="container-x grid gap-10 border-t border-white/10 pt-14 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Logo dark />
          <p className="mt-5 text-sm font-semibold text-white">
            {SITE.brand} · {SITE.tagline}
            <span className="block font-normal text-slate-400">{SITE.city}</span>
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-400">
            Bufete de abogados con {SITE.experience}. {SITE.coverage}
          </p>
          <p className="mt-5 text-sm">
            <WhatsAppLink source="footer" className="font-semibold text-white hover:text-brand">WhatsApp {SITE.whatsapp.display}</WhatsAppLink>
            <br />
            <a href={mailtoUrl()} onClick={() => track('email_click', { source: 'footer' })} className="font-semibold text-white hover:text-brand">{SITE.email}</a>
          </p>
        </div>

        <nav aria-label="Secciones">
          <p className="text-xs font-bold tracking-[0.16em] text-slate-500 uppercase">Secciones</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV.map((n) => <li key={n.href}><Link to={n.href} className="hover:text-white">{n.label}</Link></li>)}
            <li><Link to="/#duracion" className="hover:text-white">Duración del divorcio</Link></li>
            <li><Link to="/#pagos" className="hover:text-white">Pagar en línea</Link></li>
          </ul>
        </nav>

        <nav aria-label="Información legal">
          <p className="text-xs font-bold tracking-[0.16em] text-slate-500 uppercase">Legal</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {LEGAL_LINKS.map((l) => <li key={l.to}><Link to={l.to} className="hover:text-white">{l.label}</Link></li>)}
            {analyticsConfigured && (
              <li><button type="button" onClick={resetConsent} className="hover:text-white">Preferencias de cookies</button></li>
            )}
          </ul>
        </nav>
      </div>

      <div className="container-x mt-12 border-t border-white/10 pt-6 text-xs leading-relaxed text-slate-500">
        <p>
          La información de este sitio es general y no constituye asesoría jurídica ni cotización vinculante. Los honorarios publicados no incluyen gastos notariales, registrales, autenticaciones, apostillas ni otros conceptos. Los tiempos dependen de cada caso y de las autoridades competentes.
        </p>
        <p className="mt-3">© {new Date().getFullYear()} {SITE.brand} · {SITE.tagline} · {SITE.city}. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
