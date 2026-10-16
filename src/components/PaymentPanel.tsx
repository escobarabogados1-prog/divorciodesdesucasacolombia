import { CreditCard } from 'lucide-react'
import { Link } from 'react-router-dom'

/** Acceso a la sección de pagos desde el cierre de la página. */
export default function PaymentPanel() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <div className="flex items-center gap-3">
        <CreditCard className="size-5 text-brand-dark" aria-hidden="true" />
        <h3 className="font-bold text-navy">Pago de honorarios</h3>
      </div>
      <p className="mt-3 text-sm text-slate-600">
        Paga con Mercado Pago, Bre-B o Nequi/Daviplata solo después de que el equipo jurídico te confirme el servicio, el concepto y el valor.
      </p>
      <Link to="/#pagos" className="btn-outline mt-4 text-sm">
        <CreditCard className="size-4" aria-hidden="true" />
        Pagar en línea
      </Link>
    </div>
  )
}
