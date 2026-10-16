/** Textos de las secciones de la página principal. */

export const HERO = {
  title: 'Divorcios Express en Colombia:',
  titleAccent: 'asesoría jurídica clara, ágil y digital.',
  subtitle:
    'Te orientamos en tu trámite de divorcio, desde Colombia o desde el exterior, con acompañamiento jurídico y comunicación directa.',
  primaryCta: 'Consultar mi caso por WhatsApp',
  secondaryCta: 'Conocer requisitos y precios',
  timingNote:
    'Los tiempos no son fijos: dependen de cada caso, de la documentación disponible y de las autoridades competentes.',
}

export const REQUIREMENTS = {
  intro:
    'Esta es una guía general. La lista definitiva se confirma después de revisar tu caso: no todos los documentos aplican en todas las situaciones.',
  items: [
    { title: 'Registro civil de matrimonio', detail: 'Documento base para identificar el vínculo matrimonial.' },
    {
      title: 'Copia reciente del registro civil de matrimonio',
      detail:
        'Con la anotación marginal correspondiente cuando proceda. Como requisito operativo solicitamos una expedición no mayor a 30 días, sujeto a confirmación jurídica del caso.',
    },
    { title: 'Cédulas de ciudadanía de ambos cónyuges', detail: 'Fotocopias ampliadas al 150 %, cuando corresponda.' },
    { title: 'Registros civiles de nacimiento de los cónyuges', detail: 'Solo si son requeridos para el procedimiento.' },
    { title: 'Registros civiles de nacimiento de los hijos menores', detail: 'Cuando haya hijos menores de edad.' },
    { title: 'Información de bienes, activos y obligaciones', detail: 'Únicamente si existen bienes o deudas de la sociedad conyugal.' },
    {
      title: 'Poder y acuerdo de divorcio',
      detail:
        'Preparados por el equipo jurídico cuando el caso lo permita, para su revisión y formalización según las exigencias legales aplicables.',
    },
  ],
  documentsChannel:
    'Por seguridad, este sitio no recibe documentos. Los documentos se solicitan únicamente por el canal que el equipo jurídico confirme como adecuado y seguro para tu caso.',
}

export const PROCESS = {
  steps: [
    { title: 'Consulta inicial por WhatsApp', detail: 'Nos cuentas de forma general qué tipo de trámite necesitas. Sin formularios largos.' },
    { title: 'Revisión jurídica', detail: 'Confirmamos la viabilidad, los requisitos aplicables y los honorarios de tu caso.' },
    { title: 'Preparación de documentos', detail: 'Preparamos y revisamos contigo los documentos y poderes, cuando corresponda.' },
    { title: 'Presentación y seguimiento', detail: 'Presentamos el trámite ante la notaría o autoridad competente y te informamos el avance.' },
  ],
  coverage:
    'Atendemos trámites que se gestionan ante notarías de Bogotá, sujetos a viabilidad legal y a las formalidades aplicables. Recibimos consultas desde distintas ciudades de Colombia y desde el exterior.',
  caveat: 'La posibilidad de formalizar un caso ante una notaría específica depende de los requisitos legales y de la propia notaría.',
}

export const ABOUT = {
  title: 'Un bufete con más de 15 años de experiencia',
  body:
    'ELITH LEX GROUP es un bufete de abogados con más de 15 años de experiencia, según su información institucional. Acompañamos procesos de divorcio con un enfoque humano: explicamos cada paso con claridad, protegemos tu información y usamos la tecnología para que el trámite sea más ágil, sin perder el acompañamiento jurídico.',
  values: [
    { title: 'Atención jurídica', detail: 'Cada caso se revisa antes de recomendar una ruta.' },
    { title: 'Claridad', detail: 'Honorarios y gastos explicados por separado, sin letra pequeña.' },
    { title: 'Confidencialidad', detail: 'Tratamos tu información con reserva profesional.' },
    { title: 'Acompañamiento', detail: 'Comunicación directa durante todo el trámite.' },
    { title: 'Tecnología responsable', detail: 'Canales digitales ágiles, sin exponer datos sensibles.' },
  ],
}

/**
 * Sección editable del equipo. Agrega aquí SOLO información profesional verificada
 * (nombre, cargo, tarjeta profesional, formación). Mientras esté vacía, se muestra un aviso neutro.
 */
export const TEAM: { name: string; role: string; credential?: string; bio?: string }[] = []

export const FAQS: { q: string; a: string }[] = [
  {
    q: '¿Cuánto cuesta un divorcio?',
    a: 'Publicamos honorarios jurídicos para dos casos: divorcio de mutuo acuerdo sin hijos menores ni bienes por liquidar ($1.200.000 COP) y de mutuo acuerdo con hijos menores sin bienes ($1.600.000 COP). A estos valores se suman los gastos notariales y otros aplicables. Los casos con bienes, unilaterales, contenciosos o desde el exterior requieren valoración individual.',
  },
  {
    q: '¿Qué diferencia hay entre honorarios y gastos notariales?',
    a: 'Los honorarios remuneran el trabajo jurídico del bufete: análisis, preparación de documentos, acompañamiento y seguimiento. Los gastos notariales son los derechos y costos que cobra la notaría según sus tarifas vigentes. También pueden existir gastos registrales, de autenticación, apostilla o envío. Cada concepto se informa por separado.',
  },
  {
    q: '¿Cuánto tarda el procedimiento?',
    a: 'No existe un plazo fijo garantizado. El tiempo depende del tipo de trámite, de que la documentación esté completa, de la disponibilidad de las partes y de los tiempos de la notaría o autoridad competente. En la revisión inicial te damos una orientación realista para tu caso.',
  },
  {
    q: '¿Qué ocurre si tenemos hijos menores?',
    a: 'Es necesario definir los acuerdos sobre los hijos menores, como alimentos, custodia y régimen de visitas, conforme a la legislación vigente. En el trámite notarial de mutuo acuerdo con hijos menores, la ley prevé la intervención del Defensor de Familia. Te orientamos para que los acuerdos queden claros y completos.',
  },
  {
    q: '¿Cómo se tramita un divorcio con bienes?',
    a: 'Cuando existen bienes u obligaciones de la sociedad conyugal, se revisa el patrimonio (inventario, avalúos, deudas) para definir si la liquidación se hace junto con el divorcio o por separado y por qué vía. Por eso estos casos se cotizan de forma personalizada.',
  },
  {
    q: '¿Qué puedo hacer si mi cónyuge no está de acuerdo?',
    a: 'Si no hay acuerdo, el divorcio puede solicitarse por la vía legal aplicable, generalmente judicial, conforme a las causales y procedimientos previstos en la legislación colombiana. Requiere analizar tu caso para definir la ruta adecuada.',
  },
  {
    q: '¿Puedo iniciar el trámite si vivo en otro país?',
    a: 'En muchos casos sí, mediante poderes y documentos que pueden requerir autenticación, apostilla o legalización. La viabilidad depende de tus circunstancias y de los documentos disponibles, y no todos los pasos pueden hacerse completamente en línea. Te orientamos sobre lo que aplica en tu país de residencia.',
  },
  {
    q: '¿Qué documentos necesito?',
    a: 'Generalmente el registro civil de matrimonio reciente, las cédulas de ambos cónyuges y, según el caso, registros civiles de nacimiento de los hijos menores e información de bienes. La lista definitiva se confirma tras revisar tu caso. Consulta la sección de requisitos para más detalle.',
  },
  {
    q: '¿Cómo se formaliza el divorcio?',
    a: 'En el divorcio notarial de mutuo acuerdo se formaliza mediante escritura pública ante notario, que luego se inscribe en el registro civil. En la vía judicial, mediante sentencia que también debe inscribirse. Te acompañamos hasta la etapa que corresponda según el servicio contratado.',
  },
]
