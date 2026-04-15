export default {
  name: 'siteConfig',
  title: 'Configuración del Sitio',
  type: 'document',
  fields: [
    {
      name: 'siteName',
      title: 'Nombre del Sitio',
      type: 'string',
      initialValue: 'ARA Multimedia Services',
    },
    {
      name: 'slogan',
      title: 'Eslogan',
      type: 'string',
      initialValue: 'Tu evolución digital en movimiento',
    },
    {
      name: 'logo',
      title: 'Logo (Opción 1)',
      type: 'image',
      description: 'Primera opción para el logo de la empresa',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'logoImage',
      title: 'Logo (Opción 2)',
      type: 'image',
      description: 'Segunda opción para el logo de la empresa',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'email',
      title: 'Email de Contacto',
      type: 'string',
      initialValue: 'info@aranultimedias.com',
    },
    {
      name: 'phone',
      title: 'Teléfono',
      type: 'string',
      initialValue: '+1234567890',
    },
    {
      name: 'whatsapp',
      title: 'WhatsApp (número)',
      type: 'string',
      initialValue: '1234567890',
    },
    {
      name: 'socialLinks',
      title: 'Redes Sociales',
      type: 'object',
      fields: [
        { name: 'instagram', title: 'Instagram URL', type: 'url' },
        { name: 'linkedin', title: 'LinkedIn URL', type: 'url' },
        { name: 'youtube', title: 'YouTube URL', type: 'url' },
      ],
    },
  ],
}
