import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { NAV } from '../config/site'
import Logo from './Logo'
import WhatsAppLink from './WhatsAppLink'
import WhatsAppIcon from './WhatsAppIcon'

export default function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => setOpen(false), [location])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/75">
      <div className="container-x flex h-[72px] items-center justify-between gap-4">
        <Logo />

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link to={item.href} className="rounded-full px-3 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-100 hover:text-navy">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <WhatsAppLink source="header" className="btn-wa hidden !min-h-11 !px-5 !py-2.5 text-sm sm:inline-flex">
            <WhatsAppIcon className="size-4" />
            Consultar por WhatsApp
          </WhatsAppLink>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-full border border-slate-200 text-navy lg:hidden"
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="menu-movil" aria-label="Menú móvil" className="h-[calc(100dvh-72px)] overflow-y-auto border-t border-slate-200 bg-white lg:hidden">
          <ul className="container-x flex flex-col py-4">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link to={item.href} onClick={() => setOpen(false)} className="block border-b border-slate-100 py-4 text-lg font-bold text-navy">
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-6">
              <WhatsAppLink source="menu-movil" className="btn-wa w-full">
                <WhatsAppIcon />
                Consultar por WhatsApp
              </WhatsAppLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
