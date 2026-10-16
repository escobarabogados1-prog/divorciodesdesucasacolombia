# ELITH LEX GROUP · Divorcios Express en Colombia

Landing page de captación para servicios de divorcio en Colombia, pensada para campañas de Google Ads y Meta Ads: rápida, mobile-first, con precios transparentes y contacto directo por WhatsApp.

## Qué incluye

- **Página principal** con Header, Hero, tipos de divorcio y precios (6 servicios), calculadora orientativa, requisitos, cómo funciona, quiénes somos, preguntas frecuentes y contacto.
- **WhatsApp** con mensajes predefinidos distintos para cada servicio, la calculadora y el formulario corto. Botón flotante en móvil y escritorio. Nunca se envía nada sin la acción del usuario.
- **Formulario corto** (nombre, medio de contacto preferido, tipo de trámite): no guarda datos; abre WhatsApp o el correo con el mensaje para que el usuario lo revise y envíe.
- **Páginas legales**: política de tratamiento de datos (Ley 1581 de 2012), aviso de privacidad, términos y condiciones, honorarios y gastos, identificación del prestador.
- **SEO**: título y descripción por página, canonical, Open Graph/Twitter, datos estructurados `LegalService`, `sitemap.xml`, `robots.txt`, favicon y 404 real.
- **Medición preparada** (GA4, Google Ads, Meta Pixel) que solo se activa con identificadores válidos **y** consentimiento del usuario.
- **Mercado Pago preparado** como integración pendiente (sin simular pagos).

## Tecnologías

React 19 · Vite 7 · TypeScript · Tailwind CSS 4 · Lucide Icons · Framer Motion (animación ligera del Hero) · React Router (páginas legales) · Plus Jakarta Sans autoalojada (sin llamadas a Google Fonts).

## Instalación y uso

Requisitos: Node.js 20 o superior.

```bash
npm install          # instalar dependencias
cp .env.example .env.local   # opcional: configurar variables
npm run dev          # servidor de desarrollo en http://localhost:5173
npm run build        # compilar para producción en /dist
npm run preview      # previsualizar la compilación
```

## Dónde editar el contenido

| Qué | Archivo |
| --- | --- |
| Marca, WhatsApp, email, menú, datos del prestador | `src/config/site.ts` |
| Servicios, precios, mensajes de WhatsApp, calculadora | `src/content/services.ts` |
| Hero, requisitos, proceso, quiénes somos, equipo, FAQ | `src/content/home.ts` |
| Páginas legales | `src/content/legal.ts` |
| Colores y tipografía | `src/index.css` (`@theme`) |

Los datos institucionales que faltan aparecen como **[Pendiente de confirmar]** y se resaltan en las páginas legales.

## Variables de entorno

Ver `.env.example`. Todas las variables `VITE_*` son **públicas** (quedan en el navegador): nunca pongas allí tokens privados.

| Variable | Uso |
| --- | --- |
| `VITE_SITE_URL` | Dominio definitivo para canonical y Open Graph |
| `VITE_GA4_ID` | Google Analytics 4 (`G-…`) |
| `VITE_GOOGLE_ADS_ID` / `VITE_GOOGLE_ADS_WHATSAPP_LABEL` | Google Ads y etiqueta de conversión del clic en WhatsApp |
| `VITE_META_PIXEL_ID` | Meta Pixel (solo dígitos) |
| `VITE_MERCADOPAGO_PAYMENT_LINK` / `VITE_PAYMENTS_ENABLED` | Enlace de pago real y activación explícita |

### Eventos de medición

`whatsapp_click`, `email_click`, `form_start`, `calculator_complete` y `payment_confirmed`. Un clic **no** es un contacto real ni una venta: configúralos en GA4/Ads como micro-conversiones. `payment_confirmed` solo debe dispararse tras una confirmación verificada del servidor (ver Mercado Pago).

## Mercado Pago

- **Fase 1 (actual):** si el responsable genera un enlace de pago real en el panel de Mercado Pago (`mpago.la` o `mercadopago.com.co`), se configura en `VITE_MERCADOPAGO_PAYMENT_LINK` y se activa con `VITE_PAYMENTS_ENABLED=true`. Sin eso, el sitio muestra “disponible próximamente”.
- **Fase 2 (futura):** para preferencias de pago dinámicas o confirmar pagos, se necesita una Netlify Function (`netlify/functions/`) que use `MERCADOPAGO_ACCESS_TOKEN` (variable **sin** prefijo `VITE_`, solo en el servidor) y un webhook que verifique la firma de la notificación antes de disparar `payment_confirmed`.
- No habilitar cobros hasta verificar credenciales, moneda (COP), descripción, valor y flujo de confirmación.

## Despliegue en Netlify

La configuración ya está en `netlify.toml` (comando `npm run build`, carpeta `dist`, reescrituras de las páginas legales, 404 real y cabeceras de seguridad).

1. Sube el código a un repositorio de GitHub.
2. En Netlify: **Add new project → Import an existing project → GitHub** y elige el repositorio.
3. Confirma `npm run build` y `dist` (se leen de `netlify.toml`).
4. Agrega las variables de entorno necesarias en **Project configuration → Environment variables**.
5. Despliega y verifica la URL publicada antes de enlazarla en campañas.

## Pendientes antes de lanzar campañas

**Información institucional y jurídica**
- [ ] Completar razón social, NIT, domicilio, representante legal y fecha de vigencia en `src/config/site.ts` (`PROVIDER`).
- [ ] Revisión jurídica de las páginas legales, FAQ y textos de servicios.
- [ ] Confirmar el canal seguro para recibir documentos.
- [ ] Agregar la información profesional verificada del equipo en `TEAM` (`src/content/home.ts`).

**Publicación y SEO**
- [ ] Conectar dominio propio y actualizar `VITE_SITE_URL`, `index.html`, `robots.txt` y `sitemap.xml` con ese dominio.
- [ ] Registrar el sitio en Google Search Console y enviar el sitemap.

**Medición y pagos**
- [ ] Obtener IDs reales de GA4, Google Ads y Meta Pixel; revisar requisitos de privacidad antes de activarlos.
- [ ] Configurar conversiones en Google Ads y Meta sobre los eventos documentados.
- [ ] Generar y validar el enlace de Mercado Pago; para cobros dinámicos, implementar la función serverless.

**GitHub / Cline**
- [ ] Crear el repositorio y proteger la rama `main`.
- [ ] Para trabajar con Cline u otro agente, indicarle que lea `AGENTS.md` primero.
