# AGENTS.md

Landing page de captación para ELITH LEX GROUP (divorcios en Colombia). Sitio estático React + Vite, desplegado en Netlify. Todo el contenido está en español (es-CO).

## Arquitectura

- `src/config/site.ts` — marca, contacto, navegación, datos del prestador (`PROVIDER`) y el marcador `PENDING`.
- `src/content/` — **toda** la copia del sitio: `services.ts` (servicios, honorarios, mensajes de WhatsApp, opciones de la calculadora), `home.ts` (secciones de la página principal, FAQ, equipo), `legal.ts` (páginas legales).
- `src/components/` — un componente por sección (Header, Hero, ServicesGrid, DivorceCalculator, Requirements, ProcessSteps, AboutUs, FAQ, Contact, Footer, WhatsAppButton) más piezas compartidas (WhatsAppLink, PaymentPanel, ConsentBanner).
- `src/lib/` — `whatsapp.ts` (enlaces wa.me/mailto), `analytics.ts` (GA4/Ads/Meta con consentimiento), `payments.ts` (Mercado Pago, pendiente).
- `src/pages/` — HomePage, LegalPage (una ruta por slug de `legal.ts`), NotFoundPage.
- `src/hooks/usePageMeta.ts` — título/descripción/canonical/OG por página.
- `public/` — favicon, og-image.png (1200×630), robots.txt, sitemap.xml, 404.html.

## Convenciones

- Los textos, precios y datos de contacto van en `src/config` o `src/content`, nunca en el JSX.
- Todo enlace a WhatsApp usa `<WhatsAppLink source="...">`, que registra `whatsapp_click`.
- Tailwind 4: los colores de marca están en `@theme` de `src/index.css` (`navy`, `brand`, `brand-dark`, `gold`, `canvas`). Las clases propias (`btn-wa`, `btn-outline`, `eyebrow`, `section-title`, `container-x`) son `@utility`.
- Texto sobre `bg-brand` (#10B981) va en `text-navy` por contraste.

## Decisiones no obvias / reglas del negocio

- **No inventar** datos institucionales, testimonios, estadísticas, fotos, tarjetas profesionales ni valores oficiales. Si falta un dato, usar `PENDING`.
- Solo se publican honorarios para los servicios A ($1.200.000) y B ($1.600.000). El resto requiere valoración. Siempre distinguir honorarios de gastos notariales y demás.
- No garantizar plazos ni que cualquier notaría de Bogotá acepte un caso.
- Sin carga de documentos ni almacenamiento de datos: el formulario corto solo abre WhatsApp/correo.
- La medición no carga scripts sin IDs válidos y consentimiento. `payment_confirmed` solo tras confirmación del servidor.
- Mercado Pago: solo enlace público validado por dominio + `VITE_PAYMENTS_ENABLED=true`. Cobros dinámicos requieren una Netlify Function con `MERCADOPAGO_ACCESS_TOKEN` (nunca `VITE_`).
- Rutas SPA: las páginas legales se reescriben a `index.html` en `netlify.toml`; cualquier otra ruta devuelve `public/404.html` con estado 404. **Al agregar una ruta nueva, añade su redirect, su entrada en `App.tsx` y en `sitemap.xml`.**

Los pendientes institucionales y de integración están en la sección “Pendientes” de README.md.
