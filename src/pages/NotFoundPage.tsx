import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'
import WhatsAppLink from '../components/WhatsAppLink'
import WhatsAppIcon from '../components/WhatsAppIcon'

export default function NotFoundPage() {
  usePageMeta({ title: 'Página no encontrada | ELITH LEX GROUP', description: 'La página que buscas no existe.', path: '/404', noindex: true })
  return (
    <div className="container-x grid min-h-[60vh] place-items-center py-20 text-center">
      <div className="max-w-md">
        <p className="eyebrow">Error 404</p>
        <h1 className="mt-3 text-3xl font-extrabold text-navy">No encontramos esta página</h1>
        <p className="mt-4 text-slate-600">Es posible que el enlace haya cambiado. Vuelve al inicio o escríbenos por WhatsApp.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <WhatsAppLink source="404" className="btn-wa"><WhatsAppIcon />Consultar por WhatsApp</WhatsAppLink>
          <Link to="/" className="btn-outline">Volver al inicio</Link>
        </div>
      </div>
    </div>
  )
}
