/** Textos de la sección de pagos. Los datos de las cuentas están en PAYMENTS (src/config/site.ts). */

export const PAYMENTS_COPY = {
  title: 'Pagar en línea',
  intro:
    'Paga solo después de que el equipo jurídico te haya confirmado el servicio, el concepto y el valor. Antes de pagar, revisa el resumen de tu pago.',
  concepts: [
    { id: 'honorarios', label: 'Honorarios jurídicos' },
    { id: 'cuota-inicial', label: 'Cuota inicial acordada' },
  ],
  amountByQuote: 'El valor indicado en la cotización escrita del equipo jurídico',
  amountInitialPending: 'El valor que te confirme por escrito el equipo jurídico',
  feesNote: 'Honorarios jurídicos. No incluye gastos notariales ni otros gastos aplicables, que se informan antes de contratar.',
  confirmLabel: 'Confirmé con el equipo jurídico el servicio, el concepto y el valor que voy a pagar.',
  checkoutNote:
    'Se abrirá el checkout oficial de Mercado Pago en una pestaña nueva. Verifica que el valor coincida con el importe indicado; si el enlace te pide ingresar el valor, ingresa exactamente ese importe.',
  methodsNote:
    'Los medios disponibles en el checkout (por ejemplo, tarjetas de crédito, tarjetas de débito o PSE) dependen de la configuración de la cuenta de Mercado Pago. Solo podrás usar los que aparezcan habilitados al momento de pagar.',
  inactive: 'El pago con Mercado Pago no está disponible en este momento. Usa las otras opciones de pago o escríbenos por WhatsApp.',
  transfersTitle: 'Otras opciones de pago',
  transfersIntro: 'Transferencia a nombre de',
  transferSteps: [
    'Confirma con el equipo jurídico el servicio, el concepto y el valor.',
    'Realiza la transferencia desde tu banco o billetera usando uno de estos datos.',
    'Envía el comprobante por WhatsApp para que verifiquemos el ingreso.',
  ],
  verificationNote:
    'Estos datos son instrucciones de pago por transferencia: no hay verificación automática. Tu pago se registra como recibido solo cuando el equipo confirma el ingreso en la cuenta.',
  securityNote: 'Nunca te pediremos claves bancarias, PIN, códigos de autenticación ni contraseñas.',
}
