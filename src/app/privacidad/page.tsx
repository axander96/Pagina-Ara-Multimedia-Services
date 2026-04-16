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
              <p>En ARA Multimedia Services, valoramos y respetamos su privacidad. Esta Política de Privacidad describe cómo recopilamos, utilizamos, almacenamos y protegemos su información personal cuando utiliza nuestros servicios o visita nuestro sitio web. Esta política cumple con la Ley 32-07 de Protección de Datos Personales de la República Dominicana y el Reglamento General de Protección de Datos (GDPR) para usuarios de la Unión Europea.</p>
              <p className="mt-4">Al utilizar nuestros servicios, usted consiente las prácticas descritas en esta política. Si no está de acuerdo, por favor no utilice nuestros servicios.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#003D99] mb-4">2. Responsable del Tratamiento de Datos</h2>
              <p><strong>Responsable:</strong> ARA Multimedia Services<br />
              <strong>Dirección:</strong> Monseñor Nouel, República Dominicana<br />
              <strong>Email:</strong> Info@aramultimedias.com<br />
              <strong>Teléfono:</strong> +1 849 565-0087</p>
              <p className="mt-4">Para ejercer sus derechos de protección de datos, contáctenos a través de los medios indicados.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#003D99] mb-4">3. Información que Recopilamos</h2>
              <p><strong>3.1 Información proporcionada por usted:</strong></p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Nombre completo y datos de identificación</li>
                <li>Dirección de correo electrónico</li>
                <li>Número de teléfono</li>
                <li>Información de su empresa o negocio (nombre, RNC/Cédula, dirección)</li>
                <li>Requisitos y detalles del proyecto</li>
                <li>Información de facturación y métodos de pago</li>
                <li>Comunicaciones y correspondencia</li>
              </ul>
              
              <p className="mt-4"><strong>3.2 Información recopilada automáticamente:</strong></p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Dirección IP y ubicación geográfica aproximada</li>
                <li>Tipo de navegador, sistema operativo y dispositivo</li>
                <li>Páginas visitadas, tiempo de permanencia y navegación</li>
                <li>Referencias y enlaces de salida</li>
                <li>Datos de uso de aplicaciones y servicios</li>
                <li>Cookies y tecnologías similares (ver sección 6)</li>
              </ul>

              <p className="mt-4"><strong>3.3 Información de terceros:</strong></p>
              <p>Podemos recibir información de redes sociales (cuando enlaza su cuenta), servicios de pago, y plataformas de analítica.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#003D99] mb-4">4. Finalidad del Tratamiento de Datos</h2>
              <p>Utilizamos su información personal para las siguientes finalidades:</p>
              
              <p className="mt-4"><strong>4.1 Ejecución del contrato:</strong></p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Gestionar y ejecutar proyectos contratados</li>
                <li>Comunicarnos sobre el progreso y entregas</li>
                <li>Procesar pagos y facturación</li>
                <li>Prestar soporte técnico y garantía</li>
              </ul>

              <p className="mt-4"><strong>4.2 Interés legítimo:</strong></p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Mejorar nuestros servicios y experiencia de usuario</li>
                <li>Análisis estadísticos y de mercado</li>
                <li>Prevención de fraudes y seguridad</li>
                <li>Defensa ante reclamaciones judiciales</li>
              </ul>

              <p className="mt-4"><strong>4.3 Consentimiento (con derecho a revocar):</strong></p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Envío de newsletters y comunicaciones comerciales</li>
                <li>Publicidad personalizada</li>
                <li>Encuestas de satisfacción</li>
                <li>Inclusión en casos de estudio y portafolio</li>
              </ul>

              <p className="mt-4"><strong>4.4 Obligación legal:</strong></p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Cumplir con requerimientos fiscales y contables</li>
                <li>Atender requerimientos de autoridades competentes</li>
                <li>Conservar registros según la legislación vigente</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#003D99] mb-4">5. Base Legal para el Tratamiento</h2>
              <p>El tratamiento de sus datos personales se fundamenta en:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li><strong>Ejecución de contrato:</strong> Para proporcionar los servicios contratados</li>
                <li><strong>Interés legítimo:</strong> Mejora de servicios y seguridad</li>
                <li><strong>Consentimiento:</strong> Para comunicaciones comerciales</li>
                <li><strong>Obligación legal:</strong> Cumplimiento normativo fiscal y legal</li>
                <li><strong>Ley 32-07 de Protección de Datos Personales</strong> de la República Dominicana</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#003D99] mb-4">6. Cookies y Tecnologías de Rastreo</h2>
              <p>Utilizamos cookies y tecnologías similares para mejorar su experiencia. Las cookies que utilizamos incluyen:</p>
              
              <p className="mt-4"><strong>6.1 Cookies necesarias:</strong></p>
              <p>Esenciales para el funcionamiento del sitio. No se pueden desactivar.</p>

              <p className="mt-4"><strong>6.2 Cookies de preferencias:</strong></p>
              <p>Permiten recordar sus preferencias (idioma, configuración).</p>

              <p className="mt-4"><strong>6.3 Cookies analíticas:</strong></p>
              <p>Nos ayudan a entender cómo interactúan los usuarios con el sitio (Google Analytics, Vercel Analytics).</p>

              <p className="mt-4"><strong>6.4 Cookies de marketing:</strong></p>
              <p>Utilizadas para mostrar publicidad relevante (con su consentimiento).</p>

              <p className="mt-4">Puede configurar su navegador para rechazar cookies, aunque esto puede afectar la funcionalidad del sitio.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#003D99] mb-4">7. Compartir Información con Terceros</h2>
              <p>No vendemos ni alquilamos su información personal. Podemos compartir información con:</p>
              
              <p className="mt-4"><strong>7.1 Proveedores de servicios:</strong></p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Hosting y servicios en la nube (Vercel, AWS)</li>
                <li>Procesamiento de pagos (bancos, plataformas de pago)</li>
                <li>Herramientas de análisis (Google Analytics)</li>
                <li>Servicios de email marketing (si aplica)</li>
              </ul>
              <p className="mt-2">Estos proveedores solo acceden a los datos necesarios para prestar sus servicios y están obligados a mantener la confidencialidad.</p>

              <p className="mt-4"><strong>7.2 Autoridades competentes:</strong></p>
              <p>Cuando sea requerido por ley, orden judicial o para proteger nuestros derechos legales.</p>

              <p className="mt-4"><strong>7.3 Socios de negocio:</strong></p>
              <p>Solo con su consentimiento explícito previo.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#003D99] mb-4">8. Transferencias Internacionales</h2>
              <p>Sus datos pueden ser transferidos y procesados en servidores ubicados fuera de la República Dominicana, específicamente en Estados Unidos (servicios de hosting y nube). Garantizamos que cualquier transferencia internacional:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Se realiza solo a países con nivel adecuado de protección</li>
                <li>O mediante cláusulas contractuales tipo aprobadas</li>
                <li>O con su consentimiento explícito</li>
              </ul>
              <p className="mt-4">Nuestros proveedores internacionales cumplen con estándares de seguridad reconocidos internacionalmente.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#003D99] mb-4">9. Seguridad de la Información</h2>
              <p>Implementamos medidas de seguridad técnicas y organizativas para proteger su información:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Encriptación SSL/TLS en todas las transmisiones de datos</li>
                <li>Acceso restringido a información personal (solo personal autorizado)</li>
                <li>Monitoreo regular de sistemas de seguridad</li>
                <li>Copias de seguridad periódicas y encriptadas</li>
                <li>Protocolos de seguridad en nuestras instalaciones</li>
                <li>Formación periódica del personal en protección de datos</li>
              </ul>
              <p className="mt-4">Sin embargo, ningún método de transmisión por Internet es 100% seguro. No podemos garantizar seguridad absoluta, pero nos comprometemos a notificarle cualquier violación de seguridad que pueda afectar sus datos.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#003D99] mb-4">10. Sus Derechos como Titular de Datos</h2>
              <p>De conformidad con la Ley 32-07 de Protección de Datos Personales de la República Dominicana, usted tiene los siguientes derechos:</p>
              
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li><strong>Derecho de acceso:</strong> Conocer qué datos personales tenemos sobre usted</li>
                <li><strong>Derecho de rectificación:</strong> Corregir datos inexactos o incompletos</li>
                <li><strong>Derecho de cancelación:</strong> Solicitar la eliminación de sus datos cuando ya no sean necesarios</li>
                <li><strong>Derecho de oposición:</strong> Oponerse al tratamiento de sus datos para fines específicos</li>
                <li><strong>Derecho a la portabilidad:</strong> Recibir sus datos en formato estructurado y transferirlos a otro responsable</li>
                <li><strong>Derecho de revocación:</strong> Retirar el consentimiento otorgado en cualquier momento</li>
                <li><strong>Derecho a no ser objeto de decisiones automatizadas:</strong> No ser sujeto a decisiones basadas únicamente en tratamiento automatizado</li>
              </ul>
              <p className="mt-4">Para ejercer estos derechos, envíe una solicitud a Info@aramultimedias.com con copia de su documento de identidad. Responderemos en un plazo máximo de 15 días hábiles.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#003D99] mb-4">11. Retención de Datos</h2>
              <p>Conservamos su información personal durante el tiempo necesario para cumplir con los fines descritos en esta política:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li><strong>Datos de clientes activos:</strong> Durante la relación contractual y hasta 5 años después</li>
                <li><strong>Datos de facturación:</strong> 10 años (obligación legal fiscal)</li>
                <li><strong>Datos de prospectos:</strong> 2 años desde el último contacto</li>
                <li><strong>Datos de comunicaciones:</strong> 3 años</li>
                <li><strong>Logs de servidor:</strong> 1 año</li>
              </ul>
              <p className="mt-4">Transcurrido el plazo de retención, los datos se eliminan de forma segura o se anonimizan.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#003D99] mb-4">12. Protección de Datos de Menores</h2>
              <p>Nuestros servicios no están dirigidos a menores de 18 años. No recopilamos intencionalmente información de menores. Si usted es padre/madre o tutor y cree que su hijo nos ha proporcionado información personal, contáctenos inmediatamente para eliminar dicha información.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#003D99] mb-4">13. Cambios a esta Política</h2>
              <p>Podemos actualizar esta política periódicamente para reflejar cambios en nuestras prácticas o en la legislación aplicable. Los cambios serán publicados en esta página con la fecha de actualización revisada. Para cambios significativos, notificaremos a los usuarios registrados por correo electrónico.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#003D99] mb-4">14. Marco Legal Aplicable</h2>
              <p>Esta política de privacidad cumple con la legislación vigente en la República Dominicana:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li><strong>Ley 32-07:</strong> Protección de Datos Personales (Ley No. 172-13)</li>
                <li><strong>Ley 42-08:</strong> Comercio Electrónico, Documentos y Firmas Digitales</li>
                <li><strong>Ley 65-00:</strong> Derechos de Autor</li>
                <li><strong>Constitución de la República Dominicana:</strong> Artículo 44 (Protección de la privacidad)</li>
                <li><strong>Reglamento General de Protección de Datos (GDPR):</strong> Para usuarios de la UE</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#003D99] mb-4">15. Contacto y Reclamos</h2>
              <p>Si tiene preguntas sobre esta Política de Privacidad o desea ejercer sus derechos, contáctenos:</p>
              <p className="mt-2">
                <strong>ARA Multimedia Services</strong><br />
                Monseñor Nouel, República Dominicana<br />
                Email: Info@aramultimedias.com<br />
                Teléfono: +1 849 565-0087
              </p>
              <p className="mt-4">Si considera que sus derechos han sido vulnerados, puede presentar una reclamación ante la Dirección Nacional de Protección de Datos Personales del Ministerio de Administración Pública de la República Dominicana.</p>
            </section>

            <p className="text-sm text-gray-500 mt-8">Última actualización: 16 de abril de 2026</p>
          </div>
        </div>
      </div>
    </main>
  )
}
