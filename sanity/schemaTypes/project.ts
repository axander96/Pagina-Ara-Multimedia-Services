export default {
  name: 'project',
  title: 'Proyectos',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Categoría',
      type: 'string',
      options: {
        list: [
          { title: 'E-commerce', value: 'E-commerce' },
          { title: 'App Móvil', value: 'App Móvil' },
          { title: 'Campaña Digital', value: 'Campaña Digital' },
          { title: 'Web Corporativa', value: 'Web Corporativa' },
          { title: 'Branding', value: 'Branding' },
          { title: 'Proyecto Propio', value: 'Proyecto Propio' },
        ],
      },
    },
    {
      name: 'image',
      title: 'Imagen',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'gallery',
      title: 'Galería de imágenes',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
      description: 'Imágenes adicionales que se mostrarán al abrir el proyecto.',
    },
    {
      name: 'description',
      title: 'Descripción',
      type: 'text',
      rows: 4,
      description: 'Explica el proyecto, el trabajo realizado y sus resultados.',
    },
    {
      name: 'projectUrl',
      title: 'Enlace del proyecto',
      type: 'url',
      description: 'Enlace público al sitio web o demo del proyecto. Si está vacío, no se mostrará ningún botón.',
      validation: (Rule: any) => Rule.uri({scheme: ['http', 'https']}),
    },
    {
      name: 'metric',
      title: 'Métrica / Resultado',
      type: 'string',
      description: 'Ejemplo: +150% aumento en ventas',
    },
    {
      name: 'isAraProject',
      title: 'Es Proyecto ARA (especial)',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'order',
      title: 'Orden',
      type: 'number',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'image',
    },
  },
}
