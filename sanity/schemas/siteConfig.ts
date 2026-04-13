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
      name: 'logoText',
      title: 'Logo (texto)',
      type: 'string',
      initialValue: 'ARA',
      description: 'Texto que aparece como logo cuando no hay imagen',
    },
    {
      name: 'logoImage',
      title: 'Logo (imagen)',
      type: 'image',
      description: 'Imagen del logo (opcional). Si se sube, reemplazará el texto',
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
        { name: 'facebook', title: 'Facebook URL', type: 'url' },
        { name: 'instagram', title: 'Instagram URL', type: 'url' },
        { name: 'linkedin', title: 'LinkedIn URL', type: 'url' },
      ],
    },
  ],
}
