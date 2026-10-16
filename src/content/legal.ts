import { PENDING, PROVIDER, SITE } from '../config/site'
import { FEES_DISCLAIMER } from './services'

/**
 * Contenido de las páginas legales. BORRADOR sujeto a revisión jurídica:
 * los campos marcados como PENDING deben completarse con información verificada.
 */

export interface LegalSection {
  heading: string
  paragraphs?: string[]
  list?: string[]
}

export interface LegalPage {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  intro: string
  sections: LegalSection[]
}

const responsable = [
  `Nombre comercial: ${PROVIDER.tradeName}`,
  `Razón social o titular: ${PROVIDER.legalName}`,
  `NIT o identificación: ${PROVIDER.taxId}`,
  `Domicilio: ${PROVIDER.address}`,
  `Ciudad: ${PROVIDER.city}`,
  `Correo electrónico: ${PROVIDER.dataProtectionEmail}`,
  `WhatsApp: ${SITE.whatsapp.display}`,
]

export const LEGAL_PAGES: Record<string, LegalPage> = {
  'politica-de-datos': {
    slug: 'politica-de-datos',
    title: 'Política de tratamiento de datos personales',
    metaTitle: 'Política de tratamiento de datos personales | ELITH LEX GROUP',
    metaDescription: 'Política de tratamiento de datos personales de ELITH LEX GROUP conforme a la Ley 1581 de 2012 y sus normas reglamentarias.',
    intro:
      'Esta política describe cómo se recolectan, usan, almacenan y protegen los datos personales de quienes contactan a ELITH LEX GROUP, en desarrollo de la Ley Estatutaria 1581 de 2012, el Decreto 1377 de 2013 (compilado en el Decreto 1074 de 2015) y demás normas aplicables.',
    sections: [
      { heading: '1. Responsable del tratamiento', list: responsable },
      {
        heading: '2. Datos que tratamos',
        paragraphs: [
          'A través de este sitio no se solicitan documentos ni detalles íntimos del conflicto familiar. Los datos que pueden tratarse son los que la persona decida compartir voluntariamente al iniciar contacto:',
        ],
        list: [
          'Datos de identificación y contacto: nombre, número de teléfono o WhatsApp y correo electrónico.',
          'Tipo de trámite de interés seleccionado en el sitio.',
          'Información necesaria para la prestación del servicio jurídico, que se solicitará por el canal que el equipo confirme como adecuado.',
          'Datos de navegación y medición, únicamente si la persona acepta las cookies de medición.',
        ],
      },
      {
        heading: '3. Datos sensibles y de niños, niñas y adolescentes',
        paragraphs: [
          'Algunos trámites de divorcio pueden requerir información considerada sensible o relativa a hijos menores de edad. Su suministro es facultativo: el titular no está obligado a autorizar su tratamiento. Cuando sea necesaria para el servicio, se tratará con autorización previa y expresa, respetando el interés superior de los niños, niñas y adolescentes y sus derechos fundamentales.',
        ],
      },
      {
        heading: '4. Finalidades',
        list: [
          'Atender consultas y solicitudes de información sobre servicios de divorcio.',
          'Evaluar la viabilidad del caso y cotizar honorarios.',
          'Prestar el servicio jurídico contratado y comunicar el avance del trámite.',
          'Cumplir obligaciones legales, contractuales, contables y tributarias.',
          'Con autorización adicional, medir el rendimiento del sitio y de campañas publicitarias.',
        ],
      },
      {
        heading: '5. Derechos del titular',
        paragraphs: ['De acuerdo con el artículo 8 de la Ley 1581 de 2012, el titular tiene derecho a:'],
        list: [
          'Conocer, actualizar y rectificar sus datos personales.',
          'Solicitar prueba de la autorización otorgada, salvo cuando la ley no la exija.',
          'Ser informado sobre el uso que se ha dado a sus datos.',
          'Presentar quejas ante la Superintendencia de Industria y Comercio por infracciones a la normativa.',
          'Revocar la autorización y/o solicitar la supresión de los datos cuando no se respeten los principios, derechos y garantías legales, y no exista un deber legal o contractual de conservarlos.',
          'Acceder en forma gratuita a sus datos personales objeto de tratamiento.',
        ],
      },
      {
        heading: '6. Consultas y reclamos',
        paragraphs: [
          `Las solicitudes pueden enviarse a ${PROVIDER.dataProtectionEmail}, indicando nombre, medio de respuesta y la descripción de la solicitud.`,
          'Las consultas se atenderán en un plazo máximo de diez (10) días hábiles, prorrogable por cinco (5) días hábiles adicionales informando el motivo. Los reclamos se atenderán en un plazo máximo de quince (15) días hábiles, prorrogable por ocho (8) días hábiles adicionales, conforme a los artículos 14 y 15 de la Ley 1581 de 2012.',
        ],
      },
      {
        heading: '7. Seguridad y confidencialidad',
        paragraphs: [
          'Se adoptan medidas técnicas, humanas y administrativas razonables para proteger los datos contra pérdida, consulta, uso o acceso no autorizado, junto con el deber de reserva profesional propio del ejercicio de la abogacía. Este sitio no permite la carga de documentos.',
        ],
      },
      {
        heading: '8. Transferencia y transmisión',
        paragraphs: [
          'Los mensajes enviados por WhatsApp o correo electrónico son procesados también por los proveedores de esos servicios, según sus propias políticas. Cuando se usen herramientas de medición aceptadas por el usuario, los datos de navegación pueden ser tratados por sus proveedores (por ejemplo, Google o Meta), que pueden estar ubicados fuera de Colombia.',
        ],
      },
      {
        heading: '9. Vigencia',
        paragraphs: [
          `Esta política rige a partir del ${PROVIDER.policyEffectiveDate}. Los datos se conservarán durante el tiempo necesario para cumplir las finalidades descritas y los deberes legales aplicables. Cualquier cambio sustancial se comunicará en este sitio.`,
        ],
      },
    ],
  },

  'aviso-de-privacidad': {
    slug: 'aviso-de-privacidad',
    title: 'Aviso de privacidad',
    metaTitle: 'Aviso de privacidad | ELITH LEX GROUP',
    metaDescription: 'Aviso de privacidad de ELITH LEX GROUP sobre el tratamiento de datos personales en su sitio web y canales de contacto.',
    intro:
      'En cumplimiento de la Ley 1581 de 2012 y sus normas reglamentarias, ELITH LEX GROUP informa a los titulares de datos personales lo siguiente:',
    sections: [
      { heading: 'Responsable', list: responsable },
      {
        heading: 'Tratamiento y finalidad',
        paragraphs: [
          'Los datos que compartas al contactarnos se usarán para atender tu consulta, evaluar tu caso, cotizar honorarios y, si contratas el servicio, prestarlo y mantenerte informado. Las cookies de medición solo se activan si las aceptas.',
        ],
      },
      {
        heading: 'Tus derechos',
        paragraphs: [
          'Puedes conocer, actualizar, rectificar y suprimir tus datos, revocar la autorización, solicitar prueba de ella, ser informado sobre su uso y presentar quejas ante la Superintendencia de Industria y Comercio. Las respuestas a preguntas sobre datos sensibles o de menores de edad son facultativas.',
        ],
      },
      {
        heading: 'Política completa',
        paragraphs: ['Puedes consultar la Política de tratamiento de datos personales en la página /politica-de-datos de este sitio.'],
      },
    ],
  },

  'terminos-y-condiciones': {
    slug: 'terminos-y-condiciones',
    title: 'Términos y condiciones de uso',
    metaTitle: 'Términos y condiciones | ELITH LEX GROUP',
    metaDescription: 'Términos y condiciones de uso del sitio de Divorcios Express en Colombia de ELITH LEX GROUP.',
    intro: 'Al usar este sitio aceptas las siguientes condiciones. Si no estás de acuerdo, te pedimos no utilizarlo.',
    sections: [
      {
        heading: '1. Carácter informativo',
        paragraphs: [
          'El contenido de este sitio es informativo y general. No constituye asesoría jurídica, concepto legal ni cotización vinculante. La relación profesional abogado-cliente solo surge cuando se acuerdan expresamente el servicio y los honorarios.',
        ],
      },
      {
        heading: '2. Calculadora orientativa',
        paragraphs: [
          'La calculadora muestra únicamente los honorarios publicados para ciertos tipos de trámite. No calcula gastos notariales ni oficiales y su resultado no es una cotización vinculante ni una asesoría definitiva.',
        ],
      },
      {
        heading: '3. Tiempos y resultados',
        paragraphs: [
          'No se garantizan plazos fijos ni resultados. Los tiempos dependen de cada caso, de la documentación y de las notarías o autoridades competentes. La posibilidad de formalizar un trámite ante una notaría específica está sujeta a los requisitos legales aplicables.',
        ],
      },
      {
        heading: '4. Honorarios y pagos',
        paragraphs: [
          FEES_DISCLAIMER,
          'Los pagos solo se realizan a través de los medios que el equipo confirme por escrito. Este sitio no procesa pagos mientras la integración no haya sido verificada.',
        ],
      },
      {
        heading: '5. Canales de contacto',
        paragraphs: [
          'El contacto por WhatsApp o correo electrónico se inicia únicamente por decisión del usuario. Te recomendamos no enviar documentos ni información sensible hasta que el equipo confirme el canal adecuado.',
        ],
      },
      {
        heading: '6. Propiedad intelectual',
        paragraphs: ['Los textos, marca y elementos gráficos de este sitio pertenecen a su titular y no pueden reproducirse sin autorización.'],
      },
      {
        heading: '7. Ley aplicable',
        paragraphs: [`Estos términos se rigen por las leyes de la República de Colombia. Última actualización: ${PENDING}.`],
      },
    ],
  },

  'honorarios-y-gastos': {
    slug: 'honorarios-y-gastos',
    title: 'Información sobre honorarios y gastos',
    metaTitle: 'Honorarios y gastos del divorcio en Colombia | ELITH LEX GROUP',
    metaDescription: 'Honorarios jurídicos publicados para divorcio de mutuo acuerdo en Colombia y explicación de gastos notariales, registrales y apostillas.',
    intro: 'Transparencia en precios: distinguimos siempre los honorarios jurídicos de los gastos de terceros.',
    sections: [
      {
        heading: 'Honorarios jurídicos publicados',
        list: [
          'Divorcio express notarial sin hijos menores ni bienes por liquidar: $1.200.000 COP, más gastos notariales.',
          'Divorcio de mutuo acuerdo con hijos menores y sin bienes por liquidar: $1.600.000 COP, más gastos notariales y otros gastos aplicables.',
          'Divorcio con bienes o liquidación de sociedad conyugal: cotización personalizada.',
          'Divorcio unilateral: valoración individual.',
          'Divorcio contencioso: requiere evaluación; no se publica tarifa fija.',
          'Colombianos residentes en el exterior: cotización según el caso.',
        ],
      },
      {
        heading: 'Gastos que no hacen parte de los honorarios',
        paragraphs: [FEES_DISCLAIMER],
        list: [
          'Derechos notariales y copias de escritura.',
          'Gastos registrales e inscripciones.',
          'Expedición de registros civiles.',
          'Autenticaciones, apostillas, legalizaciones y traducciones, cuando sean exigibles.',
          'Envíos de documentos y otros gastos que surjan según el caso.',
        ],
      },
      {
        heading: 'Importante',
        paragraphs: [
          'Este sitio no publica valores oficiales de gastos notariales: dependen de las tarifas vigentes de cada notaría y entidad. Los honorarios definitivos se confirman tras la revisión jurídica del caso.',
        ],
      },
    ],
  },

  'prestador-del-servicio': {
    slug: 'prestador-del-servicio',
    title: 'Identificación del prestador del servicio',
    metaTitle: 'Identificación del prestador | ELITH LEX GROUP',
    metaDescription: 'Datos de identificación y canales de contacto de ELITH LEX GROUP.',
    intro: 'Información del prestador de los servicios jurídicos ofrecidos en este sitio.',
    sections: [
      { heading: 'Datos del prestador', list: [...responsable, `Representante legal: ${PROVIDER.legalRepresentative}`] },
      {
        heading: 'Canales de atención',
        list: [`WhatsApp: ${SITE.whatsapp.display}`, `Correo electrónico: ${SITE.email}`, `Cobertura: ${SITE.coverage}`],
      },
    ],
  },
}
