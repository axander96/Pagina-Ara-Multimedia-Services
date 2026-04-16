import Link from 'next/link'

export const metadata = {
  title: 'Términos de Uso | ARA Multimedia Services',
  description: 'Términos y condiciones de uso de los servicios de ARA Multimedia Services',
}

export default function TerminosPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-20">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-[#0066FF] hover:underline mb-8 inline-block">
            ← Volver al inicio
          </Link>
          
          <h1 className="text-4xl font-black text-[#003D99] mb-8">Términos de Uso</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-[#003D99] mb-4">1. Aceptación de los Términos</h2>
              <p>Al acceder y utilizar los servicios de ARA Multimedia Services, usted acepta estar sujeto a estos Términos de Uso. Si no está de acuerdo con alguna parte de estos términos, no podrá utilizar nuestros servicios. Estos términos constituyen un acuerdo legalmente vinculante entre usted y ARA Multimedia Services, conforme a las leyes de la Monseñor Nouel, República Dominicana.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#003D99] mb-4">2. Descripción de Servicios</h2>
              <p>ARA Multimedia Services proporciona servicios de desarrollo web, aplicaciones móviles, marketing digital, diseño gráfico y consultoría tecnológica. Nos reservamos el derecho de modificar, suspender o discontinuar cualquier aspecto de los servicios en cualquier momento. Los servicios se prestan bajo las disposiciones de la Ley 42-08 de Comercio Electrónico, Documentos y Firmas Digitales de la República Dominicana.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#003D99] mb-4">3. Propiedad Intelectual</h2>
              <p>Todo el contenido presente en este sitio web, incluyendo pero no limitado a textos, gráficos, logotipos, iconos, imágenes, clips de audio, descargas digitales y software, es propiedad de ARA Multimedia Services o de sus proveedores de contenido y está protegido por las leyes de propiedad intelectual de la República Dominicana, específicamente la Ley 20-00 sobre Propiedad Industrial y la Ley 65-00 sobre Derechos de Autor.</p>
              <p className="mt-4">Los proyectos desarrollados para clientes: una vez completado el pago total, el cliente obtiene los derechos de uso del proyecto desarrollado. Sin embargo, ARA Multimedia Services se reserva el derecho de incluir el trabajo en su portafolio y casos de estudio, salvo acuerdo de confidencialidad explícito. Todo el código fuente desarrollado está protegido bajo los derechos de autor correspondientes.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#003D99] mb-4">4. Uso del Sitio Web</h2>
              <p>Usted se compromete a utilizar este sitio web únicamente para fines legales y de manera que no infrinja los derechos de terceros ni restrinja o inhiba el uso y disfrute de este sitio web por parte de terceros. Está prohibido:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Utilizar el sitio de manera que cause o pueda causar daños o interrupciones</li>
                <li>Acceder sin autorización a áreas restringidas del sitio</li>
                <li>Utilizar el sitio para transmitir material difamatorio, ofensivo o ilegal</li>
                <li>Intentar acceder, modificar o eliminar datos de otros usuarios</li>
                <li>Utilizar robots, spiders o cualquier medio automatizado sin consentimiento</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#003D99] mb-4">5. Proceso de Trabajo y Pagos</h2>
              <p><strong>5.1 Cotización:</strong> Todas las cotizaciones son válidas por 30 días calendario desde su emisión. Los precios están expresados en Dólares Estadounidenses (USD) y/o Pesos Dominicanos (DOP) según se especifique.</p>
              <p><strong>5.2 Anticipo:</strong> Para iniciar cualquier proyecto, se requiere un anticipo del 50% del valor total acordado. El pago se realizará mediante transferencia bancaria, depósito o cualquier método acordado entre las partes.</p>
              <p><strong>5.3 Entregas:</strong> Las fechas de entrega son estimadas y pueden variar según la complejidad del proyecto y la respuesta oportuna del cliente. ARA Multimedia Services se compromete a mantener comunicación regular sobre el progreso.</p>
              <p><strong>5.4 Revisiones:</strong> Cada proyecto incluye hasta 3 rondas de revisiones incluidas. Revisiones adicionales pueden generar cargos extra según la complejidad de los cambios solicitados.</p>
              <p><strong>5.5 Entrega Final:</strong> Una vez aprobado el proyecto final y realizado el pago completo, se entregarán todos los archivos fuente y derechos de uso al cliente.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#003D99] mb-4">6. Garantías y Soporte</h2>
              <p>ARA Multimedia Services ofrece un período de garantía de 30 días calendario después de la entrega final para corrección de errores técnicos sin costo adicional. Esta garantía cubre:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Errores de programación o bugs no detectados durante el desarrollo</li>
                <li>Problemas de compatibilidad con navegadores acordados</li>
                <li>Funcionalidades que no operen según lo especificado</li>
              </ul>
              <p className="mt-4">La garantía no cubre cambios de diseño, nuevas funcionalidades, ni modificaciones solicitadas por el cliente después de la aprobación final.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#003D99] mb-4">7. Cancelación y Reembolsos</h2>
              <p>El cliente puede cancelar el proyecto en cualquier momento. Los reembolsos se manejan de la siguiente manera:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Cancelación antes de iniciar (dentro de 48h): reembolso del 100% del anticipo.</li>
                <li>Cancelación con trabajo iniciado (menos del 25%): reembolso del 75% del anticipo.</li>
                <li>Cancelación con trabajo avanzado (25-50%): reembolso del 50% del anticipo.</li>
                <li>Cancelación con trabajo sustancial (más del 50%): no aplica reembolso.</li>
              </ul>
              <p className="mt-4">En caso de incumplimiento por parte de ARA Multimedia Services, se procederá al reembolso proporcional del trabajo no realizado.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#003D99] mb-4">8. Confidencialidad</h2>
              <p>Ambas partes se comprometen a mantener la confidencialidad de toda la información intercambiada durante el desarrollo del proyecto. ARA Multimedia Services no divulgará información del cliente a terceros sin consentimiento previo, salvo obligación legal. Esta obligación de confidencialidad permanecerá vigente por 3 años después de la finalización del contrato.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#003D99] mb-4">9. Limitación de Responsabilidad</h2>
              <p>ARA Multimedia Services no será responsable por daños indirectos, incidentales, especiales, consecuentes o punitivos, incluyendo pérdida de beneficios, datos o uso, derivados de la utilización de nuestros servicios. Nuestra responsabilidad total no excederá el monto total pagado por el cliente por los servicios en cuestión.</p>
              <p className="mt-4">No garantizamos que el sitio web o aplicación estará libre de errores o virus, ni que los resultados del uso del servicio serán precisos o confiables en un 100%.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#003D99] mb-4">10. Indemnización</h2>
              <p>Usted acepta indemnizar y mantener indemne a ARA Multimedia Services, sus empleados, directores y agentes, de cualquier reclamo, daño, pérdida o gasto (incluyendo honorarios de abogados) derivado de su uso del sitio web, violación de estos términos, o infracción de derechos de terceros.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#003D99] mb-4">11. Modificaciones</h2>
              <p>Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en el sitio web. Se recomienda revisar periódicamente esta página. El uso continuado del sitio después de cambios constituye aceptación de los nuevos términos.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#003D99] mb-4">12. Ley Aplicable y Jurisdicción</h2>
              <p>Estos términos se rigen por las leyes de la República Dominicana, incluyendo pero no limitado a:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li><strong>Ley 42-08:</strong> Comercio Electrónico, Documentos y Firmas Digitales</li>
                <li><strong>Ley 20-00:</strong> Propiedad Industrial</li>
                <li><strong>Ley 65-00:</strong> Derechos de Autor</li>
                <li><strong>Ley 32-07:</strong> Protección de Datos Personales</li>
                <li><strong>Código Civil Dominicano:</strong> Contratos y obligaciones</li>
              </ul>
              <p className="mt-4">Cualquier disputa se resolverá en los tribunales competentes de Santo Domingo, República Dominicana. Las partes acuerdan intentar resolver cualquier conflicto mediante mediación antes de recurrir a litigios judiciales.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#003D99] mb-4">13. Separabilidad</h2>
              <p>Si alguna disposición de estos términos es considerada inválida o inaplicable, dicha disposición se eliminará y las disposiciones restantes continuarán en pleno vigor y efecto.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#003D99] mb-4">14. Contacto</h2>
              <p>Para cualquier consulta sobre estos términos, contáctenos en:</p>
              <p className="mt-2">
                <strong>ARA Multimedia Services</strong><br />
                República Dominicana<br />
                Email: Info@aramultimedias.com<br />
                Teléfono: +1 849 565-0087
              </p>
            </section>

            <p className="text-sm text-gray-500 mt-8">Última actualización: 16 de abril de 2026</p>
          </div>
        </div>
      </div>
    </main>
  )
}
