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
              <p>Al acceder y utilizar los servicios de ARA Multimedia Services, usted acepta estar sujeto a estos Términos de Uso. Si no está de acuerdo con alguna parte de estos términos, no podrá utilizar nuestros servicios.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#003D99] mb-4">2. Descripción de Servicios</h2>
              <p>ARA Multimedia Services proporciona servicios de desarrollo web, aplicaciones móviles, marketing digital, diseño gráfico y consultoría tecnológica. Nos reservamos el derecho de modificar, suspender o discontinuar cualquier aspecto de los servicios en cualquier momento.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#003D99] mb-4">3. Propiedad Intelectual</h2>
              <p>Todo el contenido presente en este sitio web, incluyendo pero no limitado a textos, gráficos, logotipos, iconos, imágenes, clips de audio, descargas digitales y software, es propiedad de ARA Multimedia Services o de sus proveedores de contenido y está protegido por las leyes de propiedad intelectual.</p>
              <p className="mt-4">Los proyectos desarrollados para clientes: una vez completado el pago total, el cliente obtiene los derechos de uso del proyecto desarrollado. Sin embargo, ARA Multimedia Services se reserva el derecho de incluir el trabajo en su portafolio y casos de estudio, salvo acuerdo de confidencialidad explícito.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#003D99] mb-4">4. Proceso de Trabajo y Pagos</h2>
              <p><strong>4.1 Cotización:</strong> Todas las cotizaciones son válidas por 30 días calendario desde su emisión.</p>
              <p><strong>4.2 Anticipo:</strong> Para iniciar cualquier proyecto, se requiere un anticipo del 50% del valor total acordado.</p>
              <p><strong>4.3 Entregas:</strong> Las fechas de entrega son estimadas y pueden variar según la complejidad del proyecto y la respuesta oportuna del cliente.</p>
              <p><strong>4.4 Revisiones:</strong> Cada proyecto incluye hasta 3 rondas de revisiones incluidas. Revisiones adicionales pueden generar cargos extra.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#003D99] mb-4">5. Cancelación y Reembolsos</h2>
              <p>El cliente puede cancelar el proyecto en cualquier momento. Los reembolsos se manejan de la siguiente manera:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Cancelación antes de iniciar: reembolso del 100% del anticipo.</li>
                <li>Cancelación con trabajo iniciado (menos del 50%): reembolso del 25% del anticipo.</li>
                <li>Cancelación con trabajo avanzado (más del 50%): no aplica reembolso.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#003D99] mb-4">6. Limitación de Responsabilidad</h2>
              <p>ARA Multimedia Services no será responsable por daños indirectos, incidentales, especiales, consecuentes o punitivos, incluyendo pérdida de beneficios, datos o uso, derivados de la utilización de nuestros servicios.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#003D99] mb-4">7. Modificaciones</h2>
              <p>Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en el sitio web.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#003D99] mb-4">8. Ley Aplicable</h2>
              <p>Estos términos se rigen por las leyes de la República Dominicana. Cualquier disputa se resolverá en los tribunales competentes de Santo Domingo.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#003D99] mb-4">9. Contacto</h2>
              <p>Para cualquier consulta sobre estos términos, contáctenos en:</p>
              <p className="mt-2">Email: Info@aramultimedias.com<br />
              Teléfono: +1 849 565-0087</p>
            </section>

            <p className="text-sm text-gray-500 mt-8">Última actualización: 15 de abril de 2026</p>
          </div>
        </div>
      </div>
    </main>
  )
}
