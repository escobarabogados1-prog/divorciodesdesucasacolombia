/** Textos de las secciones de la página principal. */

export const HERO = {
  title: 'Tu divorcio,',
  titleAccent: 'sin salir de casa.',
  subtitle:
    'Divorcios Express en Colombia con acompañamiento jurídico digital: un proceso práctico y transparente, con honorarios claros, desde Colombia o desde el exterior.',
  highlights: ['Acompañamiento jurídico digital', 'Proceso práctico y transparente', 'Honorarios claros, gastos aparte'],
  primaryCta: 'Consultar mi caso por WhatsApp',
  secondaryCta: 'Conocer requisitos y precios',
  presenceNote:
    'Algunas firmas, autenticaciones o actuaciones pueden requerir formalidades presenciales ante notaría, consulado u otra autoridad. Te indicamos cuáles aplican en tu caso.',
  timingNote:
    'Los tiempos son estimaciones: dependen de cada caso, de la documentación completa y de la notaría o autoridad competente.',
  imageAlt: 'Persona en su casa en una videollamada con el equipo jurídico, con documentos sobre la mesa',
}

/**
 * Texto aprobado sobre la preparación del poder y del acuerdo. Se usa en
 * Cómo funciona, Requisitos y Preguntas frecuentes: editar solo aquí.
 */
export const POWER_AND_AGREEMENT = {
  title: 'Preparación y envío del poder y del acuerdo de divorcio',
  paragraphs: [
    'Después de la consulta jurídica, la definición de las condiciones aplicables y el inicio del servicio mediante el pago de la cuota inicial acordada, el equipo jurídico de ELITH LEX GROUP elaborará el poder y el acuerdo de divorcio correspondientes y los enviará al cliente para su firma y formalización (autenticación en notaría).',
    'Cuando existan hijos menores, previamente se conversarán y definirán las condiciones de cuota alimentaria, custodia y visitas que deban incluirse en el acuerdo, de acuerdo con las circunstancias familiares y las exigencias legales.',
    'El cliente deberá firmar y autenticar el poder entregado por el equipo jurídico. Si se encuentra en el exterior, se le indicará si puede realizar el trámite ante el consulado colombiano o si debe otorgar el documento ante una autoridad extranjera, con apostilla o legalización y traducción oficial cuando correspondan.',
    'Una vez recibidos los documentos debidamente formalizados, el equipo jurídico continuará con las actuaciones correspondientes ante la notaría o autoridad competente.',
  ],
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
        'Los elabora y envía el equipo jurídico de ELITH LEX GROUP tras la consulta, la definición de condiciones y el pago de la cuota inicial acordada. El cliente los firma y autentica en notaría (o ante consulado o autoridad extranjera si está en el exterior).',
    },
  ],
  documentsChannel:
    'Por seguridad, este sitio no recibe documentos. Los documentos se solicitan únicamente por el canal que el equipo jurídico confirme como adecuado y seguro para tu caso.',
}

export const PROCESS = {
  steps: [
    { title: 'Consulta jurídica', detail: 'Nos cuentas por WhatsApp qué tipo de trámite necesitas y revisamos la viabilidad y los requisitos aplicables.' },
    { title: 'Condiciones y contrato', detail: 'Definimos las condiciones del servicio y recibes el contrato de prestación de servicios jurídicos.' },
    { title: 'Inicio del servicio', detail: 'El trabajo jurídico comienza con el pago de la cuota inicial acordada.' },
    { title: 'Poder y acuerdo', detail: 'El equipo jurídico elabora el poder y el acuerdo y te los envía para firma y autenticación.' },
    { title: 'Notaría y seguimiento', detail: 'Con los documentos formalizados, actuamos ante la notaría o autoridad competente y te informamos el avance.' },
  ],
  coverage:
    'Atendemos trámites que se gestionan ante notarías de Bogotá, sujetos a viabilidad legal y a las formalidades aplicables. Recibimos consultas desde distintas ciudades de Colombia y desde el exterior.',
  caveat: 'La posibilidad de formalizar un caso ante una notaría específica depende de los requisitos legales y de la propia notaría.',
}

/** Panel “Duración del divorcio”. Son estimaciones comerciales, no plazos garantizados. */
export const DURATION = {
  intro:
    'Estimaciones orientativas para el divorcio notarial de mutuo acuerdo. Se cuentan desde la radicación completa de la documentación y dependen de la gestión de la notaría y, cuando aplica, del Defensor de Familia.',
  cases: [
    {
      title: 'Mutuo acuerdo sin hijos menores ni bienes',
      estimate: 'Aprox. 15 días',
      detail:
        'Estimación aproximada para la firma de la escritura pública por parte del abogado, tras la radicación completa ante la notaría. Sujeta a la gestión notarial.',
    },
    {
      title: 'Mutuo acuerdo con hijos menores',
      estimate: '45 a 60 días',
      detail:
        'Estimación comercial sujeta a las actuaciones de la notaría y del Defensor de Familia, que debe pronunciarse sobre los acuerdos relativos a los hijos menores.',
    },
  ],
  defensor:
    'El Defensor de Familia dispone de 15 días después de la notificación para emitir su concepto. Si no lo emite dentro de ese término, la notaría procede conforme al Decreto 1069 de 2015 y deja constancia cuando corresponda.',
  caveat:
    'No garantizamos plazos: los tiempos pueden variar según la documentación, la disponibilidad de las partes, la carga de la notaría y las actuaciones de las autoridades. Los casos con bienes, unilaterales, contenciosos o desde el exterior tienen tiempos propios que se informan tras la valoración.',
}

/** Sección de confianza: contrato de prestación de servicios jurídicos. */
export const CONTRACT = {
  title: 'Recibirás un contrato de prestación de servicios jurídicos',
  body:
    'Antes de iniciar, formalizamos la relación profesional por escrito. Así sabes exactamente qué incluye el servicio y qué se paga por separado.',
  items: [
    { title: 'Alcance', detail: 'Qué actuaciones incluye el servicio y hasta qué etapa te acompañamos.' },
    { title: 'Honorarios', detail: 'Valor de los honorarios jurídicos y forma de pago, incluida la cuota inicial acordada.' },
    { title: 'Gastos aplicables', detail: 'Gastos notariales, registrales, autenticaciones, apostillas u otros, informados antes de contratar.' },
    { title: 'Obligaciones', detail: 'Compromisos del equipo jurídico y del cliente, incluida la entrega y formalización de documentos.' },
    { title: 'Condiciones', detail: 'Tiempos estimados, comunicación, confidencialidad y demás condiciones del servicio.' },
  ],
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
    a: 'Publicamos honorarios jurídicos para dos casos: divorcio de mutuo acuerdo sin hijos menores ni bienes por liquidar ($1.200.000 COP) y de mutuo acuerdo con hijos menores sin bienes ($1.600.000 COP). A estos valores se suman los gastos notariales y otros aplicables. Los casos con bienes, unilaterales, contenciosos o desde el exterior requieren cotización individual. Los gastos adicionales y el alcance del servicio se informan antes de contratar.',
  },
  {
    q: '¿Qué diferencia hay entre honorarios y gastos notariales?',
    a: 'Los honorarios remuneran el trabajo jurídico del bufete: análisis, preparación de documentos, acompañamiento y seguimiento. Los gastos notariales son los derechos y costos que cobra la notaría según sus tarifas vigentes. También pueden existir gastos registrales, de autenticación, apostilla o envío. Cada concepto se informa por separado.',
  },
  {
    q: '¿Cuánto tarda el procedimiento?',
    a: 'No existe un plazo garantizado. Como estimación, el divorcio de mutuo acuerdo sin hijos menores ni bienes toma aproximadamente 15 días para la firma de la escritura tras la radicación completa, sujeto a la gestión notarial; con hijos menores, entre 45 y 60 días, sujeto a las actuaciones de la notaría y del Defensor de Familia. Consulta el panel “Duración del divorcio” para más detalle.',
  },
  {
    q: '¿Qué ocurre si tenemos hijos menores?',
    a: 'Es necesario definir los acuerdos sobre los hijos menores, como alimentos, custodia y régimen de visitas, conforme a la legislación vigente. Estas condiciones se conversan y definen previamente con el equipo jurídico, que luego las incorpora en el acuerdo. En el trámite notarial con hijos menores interviene el Defensor de Familia.',
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
    q: '¿Quién prepara el poder y el acuerdo de divorcio?',
    a: POWER_AND_AGREEMENT.paragraphs.join(' '),
  },
  {
    q: '¿Cuándo me envían el poder y el acuerdo?',
    a: 'Después de la consulta, la definición de las condiciones del servicio y el inicio del trabajo jurídico con la cuota inicial acordada. Si hay hijos menores, las condiciones de alimentos, custodia y visitas que deban incorporarse al acuerdo se conversarán previamente.',
  },
  {
    q: '¿Si vivo fuera de Colombia, cómo firmo el poder y el acuerdo?',
    a: 'ELITH LEX GROUP elaborará y enviará los documentos correspondientes. Según el país donde te encuentres, podrás tener que firmarlos ante un consulado colombiano o ante una autoridad local. En este último caso, podrán exigirse apostilla o legalización y traducción oficial, según corresponda.',
  },
  {
    q: '¿Debo apostillar todos los documentos?',
    a: 'No necesariamente. La formalidad depende del tipo de documento, de la autoridad ante la cual se firma, del país de origen y de las normas aplicables. El equipo jurídico te indicará qué formalización corresponde a tu caso.',
  },
  {
    q: '¿Puedo iniciar el divorcio sin viajar a Colombia?',
    a: 'Sí, siempre que se cumplan los requisitos jurídicos y las formalidades correspondientes.',
  },
  {
    q: '¿Cómo pago los honorarios?',
    a: 'Puedes pagar en línea con Mercado Pago o por transferencia a Bre-B o Nequi/Daviplata, según las instrucciones de la sección de pagos. Paga solo después de que el equipo jurídico te confirme el servicio, el concepto y el valor. Si pagas por transferencia, envía el comprobante por WhatsApp: el pago se confirma cuando verificamos el ingreso. Nunca te pediremos claves, PIN ni códigos de verificación.',
  },
  {
    q: '¿Firmo algún contrato?',
    a: 'Sí. Recibirás un contrato de prestación de servicios jurídicos con el alcance, los honorarios, los gastos aplicables, las obligaciones de las partes y las condiciones del servicio. Los gastos adicionales y el alcance se informan antes de contratar.',
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
