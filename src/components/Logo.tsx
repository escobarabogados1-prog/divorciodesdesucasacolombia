import { Link } from 'react-router-dom'

export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link to="/" className="group inline-flex items-center gap-3" aria-label="ELITH LEX GROUP, ir al inicio">
      <span aria-hidden="true" className="grid size-9 place-items-center rounded-lg bg-navy ring-1 ring-white/10">
        <span className="text-[15px] font-extrabold tracking-tight text-white">E</span>
      </span>
      <span className="leading-none">
        <span className={`block text-[15px] font-extrabold tracking-[0.14em] ${dark ? 'text-white' : 'text-navy'}`}>ELITH LEX GROUP</span>
        <span className={`mt-1 block text-[11px] font-semibold tracking-wide ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
          Divorcios Express en Colombia
        </span>
      </span>
    </Link>
  )
}
