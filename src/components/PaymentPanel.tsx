import { CreditCard, ExternalLink } from 'lucide-react'
import { PAYMENT } from '../lib/payments'

/**
 * Mercado Pago. Mientras no exista un enlace real verificado y los cobros no estén
 * activados, se muestra como integración pendiente: no se simulan pagos.
 */
export default function PaymentPanel() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <div className="flex items-center gap-3">
        <CreditCard className="size-5 text-brand-dark" aria-hidden="true" />
        <h3 className="font-bold text-navy">Pago de honorarios</h3>
      </div>
      {PAYMENT.active && PAYMENT.link ? (
        <>
          <p className="mt-3 text-sm text-slate-600">
            Realiza el pago solo después de que el equipo jurídico haya confirmado tu caso y el valor de los honorarios.
          </p>
          <a href={PAYMENT.link} target="_blank" rel="noopener noreferrer" className="btn-outline mt-4 text-sm">
            Pagar con Mercado Pago
            <ExternalLink className="size-4" aria-hidden="true" />
          </a>
        </>
      ) : (
        <p className="mt-3 text-sm text-slate-600">
          El pago en línea con Mercado Pago estará disponible próximamente. Por ahora, el equipo te indicará el medio de pago autorizado una vez confirmado tu caso.
        </p>
      )}
    </div>
  )
}
