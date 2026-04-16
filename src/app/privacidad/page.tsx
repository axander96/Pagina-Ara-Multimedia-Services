import Link from 'next/link'

export const metadata = {
  title: 'Políticas de Privacidad | ARA Multimedia Services',
  description: 'Políticas de privacidad y protección de datos de ARA Multimedia Services',
}

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-20">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-[#0066FF] hover:underline mb-8 inline-block">
            ← Volver al inicio
          </Link>
          
          <h1 className="text-4xl font-black text-[#003D99] mb-8">Políticas de Privacidad</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-[#003D99] mb-4">1. Introducción</h2>
              <p>En ARA Multimedia Services, valoramos y respetamos su privacidad. Esta Política de Privacidad describe cómo recopilamos, utilizamos, almacenamos y protegemos su información personal cuando utiliza nuestros servicios o visita nuestro sitio web.</p>
              <p className="mt-4">Al utilizar nuestros servicios, usted consiente las prácticas descritas en esta política.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#003D99] mb-4">2. Información que Recopilamos</h2>
              <p><strong>2.1 Información proporcionada por usted:</strong></p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Nombre completo</li>
                <li>Dirección de correo electrónico</li>
                <li>Número de teléfono</li>
                <li>Información de su empresa o negocio</li>
                <li>Requisitos y detalles del proyecto</li>
                <li>Información de facturación</li>
              </ul>
              
              <p className="mt-4"><strong>2.2 Información recopilada automáticamente:</strong></p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Dirección IP</li>
                <li>Tipo de navegador y sistema operativo</li>
                <li>Páginas visitadas y tiempo de permanencia</li>
                <li>Referencias y enlaces de salida</li>
                <li>Datos de uso de la aplicación</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#003D99] mb-4">3. Uso de la Información</h2>
              <p>Utilizamos su información para:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Proporcionar y mantener nuestros servicios</li>
                <li>Procesar cotizaciones y facturas</li>
                <li>Comunicarnos sobre el progreso de proyectos</li>
                <li>Enviar actualizaciones, newsletters y promociones (con consentimiento)</li>
                <li>Mejorar nuestros servicios y experiencia del usuario</li>
                <li>Cumplir con obligaciones legales</li>
                <li>Prevenir fraudes y actividades no autorizadas</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#003D99] mb-4">4. Cookies y Tecnologías Similares</h2>
              <p>Utilizamos cookies y tecnologías similares para:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Recordar sus preferencias</li>
                <li>Analizar el tráfico del sitio</li>
                <li>Personalizar contenido</li>
                <li>Publicidad dirigida (con consentimiento)</li>
              </ul>
              <p className="mt-4">Puede configurar su navegador para rechazar cookies, aunque esto puede afectar la funcionalidad del sitio.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#003D99] mb-4">5. Compartir Información</h2>
              <p>No vendemos ni alquilamos su información personal. Podemos compartir información con:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li><strong>Proveedores de servicios:</strong> Empresas que nos ayudan a operar (hosting, procesamiento de pagos, análisis)</li>
                <li><strong>Socios de negocio:</strong> Con su consentimiento explícito</li>
                <li><strong>Obligaciones legales:</strong> Cuando sea requerido por ley o para proteger nuestros derechos</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#003D99] mb-4">6. Seguridad de Datos</h2>
              <p>Implementamos medidas de seguridad técnicas y organizativas para proteger su información:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Encriptación SSL/TLS en transmisiones de datos</li>
                <li>Acceso restringido a información personal</li>
                <li>Monitoreo regular de sistemas de seguridad</li>
                <li>Copias de seguridad periódicas</li>
              </ul>
              <p className="mt-4">Sin embargo, ningún método de transmisión por Internet es 100% seguro. No podemos garantizar seguridad absoluta.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#003D99] mb-4">7. Sus Derechos</h2>
              <p>Usted tiene derecho a:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Acceder a su información personal</li>
                <li>Corregir datos inexactos</li>
                <li>Solicitar la eliminación de sus datos</li>
                <li>Oponerse al procesamiento de sus datos</li>
                <li>Retirar su consentimiento en cualquier momento</li>
                <li>Solicitar la portabilidad de sus datos</li>
              </ul>
              <p className="mt-4">Para ejercer estos derechos, contáctenos en Info@aramultimedias.com</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#003D99] mb-4">8. Retención de Datos</h2>
              <p>Conservamos su información personal durante el tiempo necesario para cumplir con los fines descritos en esta política, a menos que se requiera o permita un período de retención más largo por ley.</p>
              <p className="mt-4">Los datos de proyectos completados se mantienen por 5 años para referencias y obligaciones fiscales.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#003D99] mb-4">9. Transferencias Internacionales</h2>
              <p>Sus datos pueden ser transferidos y procesados en servidores ubicados fuera de su país. Garantizamos que cualquier transferencia internacional cumple con las leyes de protección de datos aplicables.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#003D99] mb-4">10. Cambios a esta Política</h2>
              <p>Podemos actualizar esta política periódicamente. Los cambios serán publicados en esta página con la fecha de actualización.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#003D99] mb-4">11. Contacto</h2>
              <p>Si tiene preguntas sobre esta Política de Privacidad, contáctenos:</p>
              <p className="mt-2">
                <strong>ARA Multimedia Services</strong><br />
                República Dominicana<br />
                Email: Info@aramultimedias.com<br />
                Teléfono: +1 849 565-0087
              </p>
            </section>

            <p className="text-sm text-gray-500 mt-8">Última actualización: 15 de abril de 2026</p>
          </div>
        </div>
      </div>
    </main>
  )
}
