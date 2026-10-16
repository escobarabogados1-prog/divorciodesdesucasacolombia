/**
 * Servicios, honorarios publicados y mensajes de WhatsApp por servicio.
 * Para cambiar un precio o un texto, edita solo este archivo.
 * Los valores son HONORARIOS JURÍDICOS; los gastos notariales y demás conceptos van aparte.
 */

export type ServiceId =
  | 'notarial-sin-hijos'
  | 'mutuo-con-hijos'
  | 'con-bienes'
  | 'unilateral'
  | 'contencioso'
  | 'exterior'

export interface Service {
  id: ServiceId
  code: string
  title: string
  shortTitle: string
  /** Honorarios jurídicos publicados en COP. null = requiere valoración. */
  fee: number | null
  priceLabel: string
  priceNote: string
  description: string
  points: string[]
  ctaLabel: string
  whatsappMessage: string
  highlight?: boolean
}

export const SERVICES: Service[] = [
  {
    id: 'notarial-sin-hijos',
    code: 'A',
    title: 'Divorcio express notarial sin hijos menores ni bienes por liquidar',
    shortTitle: 'Mutuo acuerdo sin hijos menores ni bienes',
    fee: 1_200_000,
    priceLabel: '$1.200.000 COP',
    priceNote: 'Honorarios jurídicos. No incluye gastos notariales.',
    description:
      'Procedimiento de mutuo acuerdo para cónyuges que desean divorciarse y cumplen las condiciones jurídicas aplicables. Requiere acuerdo entre ambos y documentos completos.',
    points: ['Ambos cónyuges están de acuerdo', 'No hay hijos menores de edad', 'No hay bienes por liquidar'],
    ctaLabel: 'Consultar requisitos por WhatsApp',
    whatsappMessage:
      'Hola, deseo información sobre el divorcio de mutuo acuerdo sin hijos menores ni bienes por liquidar. Quisiera conocer los requisitos y los siguientes pasos.',
    highlight: true,
  },
  {
    id: 'mutuo-con-hijos',
    code: 'B',
    title: 'Divorcio de mutuo acuerdo con hijos menores y sin bienes por liquidar',
    shortTitle: 'Mutuo acuerdo con hijos menores',
    fee: 1_600_000,
    priceLabel: '$1.600.000 COP',
    priceNote: 'Honorarios jurídicos. No incluye gastos notariales ni otros gastos aplicables.',
    description:
      'Requiere definir las medidas correspondientes a los hijos menores —alimentos, custodia y visitas—, según el caso y la legislación vigente.',
    points: ['Ambos cónyuges están de acuerdo', 'Hay hijos menores de edad', 'No hay bienes por liquidar'],
    ctaLabel: 'Recibir orientación por WhatsApp',
    whatsappMessage:
      'Hola, deseo información sobre el divorcio de mutuo acuerdo con hijos menores y sin bienes por liquidar. Quisiera conocer los requisitos, los acuerdos sobre los hijos y los siguientes pasos.',
  },
  {
    id: 'con-bienes',
    code: 'C',
    title: 'Divorcio con bienes o liquidación de sociedad conyugal',
    shortTitle: 'Caso con bienes',
    fee: null,
    priceLabel: 'Cotización personalizada',
    priceNote: 'El valor depende de la situación patrimonial, avalúos, inventario, obligaciones y complejidad.',
    description:
      'Cuando existen bienes, deudas u obligaciones de la sociedad conyugal, es necesario analizar el patrimonio para definir la ruta y el alcance del trámite.',
    points: ['Inventario de activos y pasivos', 'Avalúos cuando apliquen', 'Ruta definida tras revisar el caso'],
    ctaLabel: 'Solicitar cotización por WhatsApp',
    whatsappMessage:
      'Hola, deseo información sobre un divorcio con bienes o liquidación de sociedad conyugal. Quisiera solicitar una cotización personalizada y conocer los siguientes pasos.',
  },
  {
    id: 'unilateral',
    code: 'D',
    title: 'Divorcio unilateral',
    shortTitle: 'Divorcio unilateral',
    fee: null,
    priceLabel: 'Valoración individual',
    priceNote: 'Requiere análisis del caso antes de definir honorarios.',
    description:
      'Una persona puede solicitar el divorcio por la vía legal aplicable aun cuando no existe acuerdo de ambos cónyuges, conforme a las causales, condiciones y procedimientos de la legislación colombiana vigente. La ruta puede ser judicial; no es un divorcio notarial automático.',
    points: ['Sin acuerdo del otro cónyuge', 'Análisis de causales aplicables', 'Ruta usualmente judicial'],
    ctaLabel: 'Solicitar valoración por WhatsApp',
    whatsappMessage:
      'Hola, deseo información sobre un divorcio unilateral. Mi cónyuge no está de acuerdo y quisiera conocer qué opciones legales existen y los siguientes pasos.',
  },
  {
    id: 'contencioso',
    code: 'E',
    title: 'Divorcio contencioso',
    shortTitle: 'Divorcio contencioso',
    fee: null,
    priceLabel: 'Requiere evaluación',
    priceNote: 'No se publica tarifa fija: depende de la controversia y del trámite.',
    description:
      'Existe controversia entre los cónyuges respecto del divorcio o de sus consecuencias. El asunto requiere evaluación jurídica y, cuando corresponda, trámite judicial.',
    points: ['Desacuerdo sobre el divorcio o sus efectos', 'Evaluación jurídica previa', 'Trámite judicial cuando corresponda'],
    ctaLabel: 'Consultar con un abogado',
    whatsappMessage:
      'Hola, deseo consultar con un abogado sobre un divorcio contencioso. Quisiera conocer cómo evalúan el caso y los siguientes pasos.',
  },
  {
    id: 'exterior',
    code: 'F',
    title: 'Divorcio para colombianos residentes en el exterior',
    shortTitle: 'Residente en el exterior',
    fee: null,
    priceLabel: 'Cotización por WhatsApp',
    priceNote: 'La viabilidad depende de las circunstancias y los documentos disponibles.',
    description:
      'Orientación sobre documentos, poderes, autenticaciones, apostillas o legalizaciones cuando sean exigibles, y coordinación del procedimiento que corresponda en Colombia. No todos los trámites pueden hacerse completamente en línea.',
    points: ['Poderes y apostillas cuando apliquen', 'Coordinación desde el exterior', 'Viabilidad según el caso'],
    ctaLabel: 'Consultar desde el exterior',
    whatsappMessage:
      'Hola, vivo fuera de Colombia y deseo información sobre el trámite de divorcio. Quisiera conocer qué documentos, poderes o apostillas se requieren y los siguientes pasos.',
  },
]

export const getService = (id: ServiceId) => SERVICES.find((s) => s.id === id)!

export const formatCOP = (value: number) =>
  new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(value)

/** Opciones de la calculadora orientativa. */
export const CALCULATOR_OPTIONS: { id: string; label: string; detail: string; serviceId: ServiceId }[] = [
  { id: 'a', label: 'Mutuo acuerdo sin hijos menores ni bienes', detail: 'Ambos están de acuerdo, sin hijos menores y sin bienes por liquidar.', serviceId: 'notarial-sin-hijos' },
  { id: 'b', label: 'Mutuo acuerdo con hijos menores', detail: 'Ambos están de acuerdo, hay hijos menores y no hay bienes por liquidar.', serviceId: 'mutuo-con-hijos' },
  { id: 'c', label: 'Caso con bienes', detail: 'Existen bienes, deudas u obligaciones por liquidar.', serviceId: 'con-bienes' },
  { id: 'd', label: 'Divorcio unilateral o contencioso', detail: 'No hay acuerdo o existe controversia sobre el divorcio o sus efectos.', serviceId: 'unilateral' },
  { id: 'e', label: 'Residente en el exterior', detail: 'Uno o ambos cónyuges viven fuera de Colombia.', serviceId: 'exterior' },
]

export const FEES_DISCLAIMER =
  'Los valores publicados corresponden únicamente a honorarios jurídicos. Los gastos notariales, registrales, autenticaciones, apostillas, traducciones, envíos y demás conceptos se informan y pagan por separado, según el caso y las tarifas vigentes de cada entidad.'
