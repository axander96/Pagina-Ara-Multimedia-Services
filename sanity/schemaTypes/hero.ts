export default {
  name: 'hero',
  title: 'Sección Hero',
  type: 'document',
  fields: [
    {
      name: 'titleLine1',
      title: 'Título Línea 1',
      type: 'string',
      initialValue: 'TRANSFORMA TU',
    },
    {
      name: 'titleLine2',
      title: 'Título Línea 2',
      type: 'string',
      initialValue: 'PRESENCIA DIGITAL',
    },
    {
      name: 'subtitle',
      title: 'Subtítulo',
      type: 'text',
      initialValue: 'Creamos experiencias digitales que convierten visitantes en clientes reales. Desde tu primera web hasta tu app empresarial.',
    },
    {
      name: 'ctaPrimary',
      title: 'Texto Botón Principal',
      type: 'string',
      initialValue: 'Quiero cotizar mi proyecto',
    },
    {
      name: 'ctaSecondary',
      title: 'Texto Botón Secundario',
      type: 'string',
      initialValue: 'Ver nuestros proyectos',
    },
    {
      name: 'animatedWords',
      title: 'Palabras Animadas',
      type: 'array',
      of: [{ type: 'string' }],
      initialValue: ['Desarrollo Web', 'Social Media', 'SEO', 'Apps Móviles'],
    },
  ],
}
